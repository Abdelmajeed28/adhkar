const VERSION = "__VERSION__";
const PRECACHE = "precache-" + VERSION;
const RUNTIME = "runtime-v1";
const URLS = __URLS__;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(PRECACHE).then(async (cache) => {
      const results = await Promise.allSettled(
        URLS.map(async (u) => {
          const res = await fetch(u, { cache: "reload" });
          if (!res.ok) throw new Error(u + " -> " + res.status);
          await cache.put(u, res);
        }),
      );
      const failed = results.filter((r) => r.status === "rejected");
      if (failed.length) {
        console.warn(
          "SW: ملفات فشل تحميلها",
          failed.map((f) => f.reason.message),
        );
      }
      // الصفحة الرئيسية لازم تتحفظ، وإلا التثبيت يفشل
      if (!(await cache.match("/")))
        throw new Error("الصفحة الرئيسية لم تُحفظ");
    }),
  );
});
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== PRECACHE && k !== RUNTIME)
            .map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(handle(req));
});

async function handle(req) {
  const url = new URL(req.url);
  let cached = await caches.match(req, { ignoreSearch: true });
  if (
    !cached &&
    req.mode === "navigate" &&
    !url.pathname.endsWith("/") &&
    !url.pathname.includes(".")
  ) {
    cached = await caches.match(url.pathname + "/");
  }
  // من الكاش فورًا، ونحدّث في الخلفية لو الصفحة مش من الملفات الأساسية
  if (cached) {
    refresh(req);
    return cached;
  }

  try {
    const res = await fetch(req);
    if (res.ok) {
      const cache = await caches.open(RUNTIME);
      cache.put(req, res.clone());
    }
    return res;
  } catch {
    if (req.mode === "navigate") {
      return new Response(
        '<!doctype html><html lang="ar" dir="rtl"><meta charset="utf-8">' +
          '<meta name="viewport" content="width=device-width,initial-scale=1">' +
          '<body style="font-family:sans-serif;text-align:center;padding:3rem;background:#f3f0e6;color:#24302b">' +
          "<h2>لا يوجد اتصال</h2><p>هذه الصفحة لم تُحفظ بعد. افتحها مرة وأنت متصل بالإنترنت.</p>" +
          '<a href="/" style="color:#1f5f4f">العودة للرئيسية</a></body></html>',
        { headers: { "Content-Type": "text/html; charset=utf-8" } },
      );
    }
    return Response.error();
  }
}

function refresh(req) {
  fetch(req)
    .then(async (res) => {
      if (!res.ok) return;
      const inPrecache = await caches
        .open(PRECACHE)
        .then((c) => c.match(req, { ignoreSearch: true }));
      if (inPrecache) return; // الملفات الأساسية بتتحدث مع كل نسخة جديدة
      const cache = await caches.open(RUNTIME);
      cache.put(req, res);
    })
    .catch(() => {});
}
