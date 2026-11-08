"use client";

import { useMemo } from "react";
import { toArabicDigits } from "@/lib/arabic";
import { useLocalStorage } from "@/lib/useLocalStorage";

type Mark = { surah: number; name: string; page: number; ayah?: number };

function parse(raw: string | null): Mark | null {
  if (!raw) return null;
  try {
    const v = JSON.parse(raw);
    if (
      typeof v.surah === "number" &&
      typeof v.page === "number" &&
      typeof v.name === "string"
    ) {
      return {
        surah: v.surah,
        name: v.name,
        page: v.page,
        ayah: typeof v.ayah === "number" ? v.ayah : undefined,
      };
    }
  } catch {}
  return null;
}

export default function ContinueReading() {
  const [lastRaw] = useLocalStorage("quran:last");
  const [markRaw] = useLocalStorage("quran:bookmark");

  const mark = useMemo(() => parse(markRaw), [markRaw]);
  const last = useMemo(() => parse(lastRaw), [lastRaw]);
  const item = mark ?? last;

  if (!item) return null;

  const href =
    item.ayah !== undefined
      ? `/quran/${item.surah}/#ayah-${item.surah}-${item.ayah}`
      : `/quran/${item.surah}/#page-${item.page}`;

  return (
    <a
      href={href}
      className="mb-4 flex items-center justify-between gap-2 rounded-2xl border border-accent bg-surface p-4 text-primary transition hover:bg-primary hover:text-white"
    >
      <span className="font-bold">متابعة القراءة</span>
      <span className="text-sm opacity-80">
        سورة {item.name} · صفحة {toArabicDigits(item.page)}
        {item.ayah !== undefined && <> · آية {toArabicDigits(item.ayah)}</>}
      </span>
    </a>
  );
}
