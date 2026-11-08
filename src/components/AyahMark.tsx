"use client";

import { useLocalStorage } from "@/lib/useLocalStorage";
import { toArabicDigits } from "@/lib/arabic";

type Props = {
  surahId: number;
  surahName: string;
  ayah: number;
  page: number;
};

export default function AyahMark({ surahId, surahName, ayah, page }: Props) {
  const [raw, setRaw] = useLocalStorage("quran:bookmark");

  let marked = false;
  if (raw) {
    try {
      const v = JSON.parse(raw);
      marked = v.surah === surahId && v.ayah === ayah;
    } catch {}
  }

  function toggle() {
    setRaw(
      marked
        ? ""
        : JSON.stringify({ surah: surahId, name: surahName, ayah, page }),
    );
  }

  return (
    <button
      type="button"
      id={`ayah-${surahId}-${ayah}`}
      onClick={toggle}
      aria-pressed={marked}
      aria-label={
        marked
          ? `إزالة العلامة من الآية ${ayah}`
          : `وضع علامة عند الآية ${ayah}`
      }
      className={`cursor-pointer rounded-full px-1 text-4xl mx-0.5 text-accent outline-none transition ${
        // marked ? "bg-primary/25 ring-2 ring-primary" : ""
        marked ? "text-3xl text-primary ring-2" : ""
      }`}
    >
      {toArabicDigits(ayah)}
    </button>
  );
}
