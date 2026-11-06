// "use client";

// import { useState } from "react";
// import { tasbeehList } from "@/data/tasbeeh";

// export default function TasbeehClient() {
//   const [selectedId, setSelectedId] = useState(tasbeehList[0].id);
//   const [counts, setCounts] = useState<Record<string, number>>({});

//   const selected =
//     tasbeehList.find((t) => t.id === selectedId) ?? tasbeehList[0];
//   const count = counts[selectedId] ?? 0;
"use client";

import { useMemo } from "react";
import { tasbeehList } from "@/data/tasbeeh";
import { useHydrated, useLocalStorage } from "@/lib/useLocalStorage";

export default function TasbeehClient() {
  const [raw, setRaw] = useLocalStorage("tasbeeh:state");
  const hydrated = useHydrated();

  const stored = useMemo(() => {
    try {
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }, [raw]);

  const counts: Record<string, number> =
    stored.counts && typeof stored.counts === "object" ? stored.counts : {};
  const selectedId = tasbeehList.some((t) => t.id === stored.selectedId)
    ? stored.selectedId
    : tasbeehList[0].id;

  const selected =
    tasbeehList.find((t) => t.id === selectedId) ?? tasbeehList[0];
  const count = counts[selectedId] ?? 0;

  function save(next: {
    selectedId: typeof selectedId;
    counts: Record<string, number>;
  }) {
    setRaw(JSON.stringify(next));
  }

  function increment() {
    save({ selectedId, counts: { ...counts, [selectedId]: count + 1 } });
  }

  function reset() {
    save({ selectedId, counts: { ...counts, [selectedId]: 0 } });
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
              onClick={() => save({ selectedId: item.id, counts })}
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
          {hydrated ? count : ""}
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
