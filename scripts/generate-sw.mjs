import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, relative, sep } from "node:path";

const OUT = "out";

// ملفات مش هنحفظها مقدمًا
const skip = (url) =>
  url === "/sw.js" || (url.startsWith("/quran/") && url !== "/quran/"); // صفحات السور بتتحفظ عند الفتح

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const urls = walk(OUT)
  .map((f) => "/" + relative(OUT, f).split(sep).join("/"))
  .map((u) =>
    u.endsWith("/index.html") ? u.slice(0, -"index.html".length) : u,
  )
  .filter((u) => !skip(u))
  .sort();

const version = createHash("sha1")
  .update(urls.join("\n"))
  .digest("hex")
  .slice(0, 10);

// نحسب الهاش على محتوى الملفات كمان عشان أي تعديل في النص يغيّر النسخة
const contentHash = createHash("sha1");
for (const u of urls) {
  const file = u.endsWith("/") ? join(OUT, u, "index.html") : join(OUT, u);
  contentHash.update(readFileSync(file));
}
const finalVersion = contentHash.update(version).digest("hex").slice(0, 10);

const sw = readFileSync(join(OUT, "sw.js"), "utf8")
  .replace("__VERSION__", finalVersion)
  .replace("__URLS__", JSON.stringify(urls));

writeFileSync(join(OUT, "sw.js"), sw);
console.log(`sw.js: ${urls.length} ملف، نسخة ${finalVersion}`);
