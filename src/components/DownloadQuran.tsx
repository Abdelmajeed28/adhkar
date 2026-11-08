"use client";

import { useState } from "react";
import { useHydrated, useLocalStorage } from "@/lib/useLocalStorage";

const TOTAL = 114;
const BATCH = 4;

export default function DownloadQuran() {
  const [saved, setSaved] = useLocalStorage("quran:offline");
  const hydrated = useHydrated();
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  async function start() {
    if (busy) return;
    if (!navigator.serviceWorker?.controller) {
      setMessage(
        "التحميل بيشتغل على النسخة المنشورة بس، بعد ما الموقع يتثبّت.",
      );
      return;
    }
    setBusy(true);
    setProgress(0);
    setMessage("");
    let failed = 0;

    for (let i = 1; i <= TOTAL; i += BATCH) {
      const ids = Array.from(
        { length: Math.min(BATCH, TOTAL - i + 1) },
        (_, k) => i + k,
      );
      const results = await Promise.allSettled(
        ids.map(async (n) => {
          const res = await fetch(`/quran/${n}/`);
          if (!res.ok) throw new Error(String(n));
          await res.arrayBuffer();
        }),
      );
      failed += results.filter((r) => r.status === "rejected").length;
      setProgress(Math.min(i + BATCH - 1, TOTAL));
    }

    setBusy(false);
    if (failed === 0) {
      setSaved("1");
    } else {
      setMessage(`فشل تحميل ${failed} سورة. اتأكد من النت واضغط تاني.`);
    }
  }

  if (!hydrated) return null;

  if (saved === "1") {
    return (
      <div className="mb-4 rounded-2xl border border-accent bg-surface p-4 text-center text-sm text-primary">
        تم تحميل المصحف كاملًا ✓ تقدر تقرأ بدون إنترنت.
        <button
          onClick={() => setSaved("0")}
          className="mr-2 text-xs text-muted underline"
        >
          إعادة التحميل
        </button>
      </div>
    );
  }

  return (
    <div className="mb-4 rounded-2xl border border-border bg-surface p-4 text-center">
      <p className="mb-3 text-sm text-muted">
        لتحميل القرآن الكريم كاملًا للاستخدام بدون إنترنت، اضغط هنا.
      </p>
      <button
        onClick={start}
        disabled={busy}
        className="rounded-full bg-primary px-6 py-2 text-sm font-bold text-white transition hover:bg-primary-dark disabled:opacity-60"
      >
        {busy ? `جاري التحميل ${progress} / ${TOTAL}` : "تحميل المصحف"}
      </button>
      {busy && (
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-border">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${(progress / TOTAL) * 100}%` }}
          />
        </div>
      )}
      {message && <p className="mt-3 text-sm text-muted">{message}</p>}
    </div>
  );
}
