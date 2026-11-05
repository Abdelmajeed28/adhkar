"use client";

import { useEffect, useState } from "react";
import { toArabicDigits } from "@/lib/arabic";

type Last = { surah: number; name: string; page: number };

export default function ContinueReading() {
  const [last, setLast] = useState<Last | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("quran:last");
      if (!raw) return;
      const v = JSON.parse(raw);
      if (
        typeof v.surah === "number" &&
        typeof v.page === "number" &&
        typeof v.name === "string"
      ) {
        setLast(v);
      }
    } catch {}
  }, []);

  if (!last) return null;

  return (
    <a
      href={`/quran/${last.surah}/#page-${last.page}`}
      className="mb-4 flex items-center justify-between rounded-2xl border border-accent bg-surface p-4 text-primary transition hover:bg-primary hover:text-white"
    >
      <span className="font-bold">متابعة القراءة</span>
      <span className="text-sm opacity-80">
        سورة {last.name} · صفحة {toArabicDigits(last.page)}
      </span>
    </a>
  );
}
