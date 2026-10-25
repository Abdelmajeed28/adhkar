import SurahBanner from "./SurahBanner";
import type { PageAyah, PageData } from "@/data/quran";
import { toArabicDigits } from "@/lib/arabic";

type Item = { id: number; name: string; ayahs_count: number };
type Block =
  | { type: "banner"; surahId: number }
  | { type: "text"; ayahs: PageAyah[] };

type Props = { page: PageData; surahs: Map<number, Item> };

export default function MushafPage({ page, surahs }: Props) {
  const blocks: Block[] = [];
  for (const a of page.ayahs) {
    if (a.number === 1) blocks.push({ type: "banner", surahId: a.surahId });
    const last = blocks[blocks.length - 1];
    if (last && last.type === "text") last.ayahs.push(a);
    else blocks.push({ type: "text", ayahs: [a] });
  }

  return (
    <section className="mushaf-page mx-auto mb-6 rounded-lg border-4 border-double border-accent bg-surface p-2 shadow-sm">
      <div className="rounded border border-primary/40 px-4 py-3">
        <div className="mb-2 text-sm text-muted">
          الجزء {toArabicDigits(page.juz)}
        </div>

        {blocks.map((b, i) => {
          if (b.type === "banner") {
            const s = surahs.get(b.surahId)!;
            return (
              <SurahBanner
                key={`b${i}`}
                id={s.id}
                name={s.name}
                ayahsCount={s.ayahs_count}
              />
            );
          }
          return (
            <p
              key={`t${i}`}
              className="mushaf-text font-mushaf text-2xl leading-[2.3] sm:text-3xl"
            >
              {b.ayahs.map((a) => (
                <span key={`${a.surahId}-${a.number}`}>
                  {a.text}{" "}
                  <span className="text-4xl text-accent">
                    {toArabicDigits(a.number)}
                  </span>{" "}
                </span>
              ))}
            </p>
          );
        })}

        <div className="mt-3 text-center">
          <span className="inline-block rounded-full border border-accent px-3 py-0.5 text-sm text-primary">
            {toArabicDigits(page.page)}
          </span>
        </div>
      </div>
    </section>
  );
}
