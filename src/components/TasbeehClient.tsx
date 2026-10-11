"use client";

import { useState } from "react";
import { tasbeehList } from "@/data/tasbeeh";

export default function TasbeehClient() {
  const [selectedId, setSelectedId] = useState(tasbeehList[0].id);
  const [counts, setCounts] = useState<Record<string, number>>({});

  const selected =
    tasbeehList.find((t) => t.id === selectedId) ?? tasbeehList[0];
  const count = counts[selectedId] ?? 0;

  function increment() {
    setCounts((prev) => ({
      ...prev,
      [selectedId]: (prev[selectedId] ?? 0) + 1,
    }));
  }

  function reset() {
    setCounts((prev) => ({ ...prev, [selectedId]: 0 }));
  }

  return (
    <div>
      {/* قايمة الأذكار */}
      <div className="flex flex-wrap gap-2">
        {tasbeehList.map((item) => {
          const active = item.id === selectedId;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-surface text-primary hover:border-primary"
              }`}
            >
              {item.text}
            </button>
          );
        })}
      </div>

      {/* الفريم */}
      <section className="mt-6 flex flex-col items-center rounded-3xl border border-border bg-surface px-4 py-8 shadow-sm">
        <p className="font-quran text-3xl leading-loose text-center">
          {selected.text}
        </p>

        <button
          onClick={increment}
          aria-label="زيادة العداد"
          className="mt-6 flex h-44 w-44 touch-manipulation select-none items-center justify-center rounded-full bg-primary text-6xl font-bold tabular-nums text-white shadow-lg transition hover:bg-primary-dark active:scale-95"
        >
          {count}
        </button>

        <button
          onClick={reset}
          className="mt-6 rounded-full border border-border px-6 py-2 text-sm text-muted transition hover:border-primary hover:text-primary"
        >
          تصفير
        </button>
      </section>
    </div>
  );
}
