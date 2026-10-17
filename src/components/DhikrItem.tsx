import type { Dhikr } from "@/data/types";
import Counter from "./Counter";

type Props = {
  dhikr: Dhikr;
};

export default function DhikrItem({ dhikr }: Props) {
  return (
    <article className="rounded-xl border border-border bg-surface p-4">
      <p className="font-quran text-2xl leading-loose text-justify">
        {dhikr.text}
      </p>

      {dhikr.note && <p className="mt-2 text-sm text-muted">{dhikr.note}</p>}
      {dhikr.count !== undefined && (
        <div className="mt-4">
          <Counter initial={dhikr.count} />
        </div>
      )}

      {dhikr.source && (
        <details className="mt-3 text-sm text-muted">
          <summary className="cursor-pointer select-none">المصدر</summary>
          <p className="mt-2">{dhikr.source}</p>
        </details>
      )}
    </article>
  );
}
