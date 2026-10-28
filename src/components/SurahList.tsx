"use client";

import { useState } from "react";
import CategoryCard from "./CategoryCard";
import { normalizeArabic, toArabicDigits } from "@/lib/arabic";

type Item = { id: number; name: string; ayahs_count: number };

export default function SurahList({ surahs }: { surahs: Item[] }) {
  const [query, setQuery] = useState("");

  const q = normalizeArabic(query.trim());
  const filtered = q
    ? surahs.filter(
        (s) => normalizeArabic(s.name).includes(q) || String(s.id) === q,
      )
    : surahs;

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="ابحث باسم السورة أو رقمها"
        className="mb-4 w-full rounded-xl border border-border bg-surface px-4 py-3 outline-none focus:border-primary"
      />

      {filtered.length === 0 ? (
        <p className="py-8 text-center text-muted">لا توجد نتائج</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {filtered.map((s) => (
            <CategoryCard
              key={s.id}
              title={`${toArabicDigits(s.id)}. ${s.name}`}
              subtitle={`${toArabicDigits(s.ayahs_count)} آية`}
              href={`/quran/${s.id}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
