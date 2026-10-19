import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackLink from "@/components/BackLink";
import { BASMALA, getAllSurahs, getSurah } from "@/data/quran";
import { toArabicDigits } from "@/lib/arabic";

type Props = {
  params: Promise<{ surah: string }>;
};

export function generateStaticParams() {
  return getAllSurahs().map((s) => ({ surah: String(s.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { surah } = await params;
  const data = getSurah(Number(surah));
  return { title: data ? `سورة ${data.name}` : undefined };
}

export default async function SurahPage({ params }: Props) {
  const { surah } = await params;
  const data = getSurah(Number(surah));

  if (!data) notFound();

  // الفاتحة بسملتها آية أصلية في الداتا، والتوبة من غير بسملة
  const showBasmala = data.id !== 1 && data.id !== 9;

  return (
    <main className="mx-auto max-w-3xl p-4">
      <BackLink href="/quran" label="العودة لقائمة السور" />

      <section className="rounded-3xl border border-border bg-surface px-5 py-8 shadow-sm">
        <h1 className="text-center font-mushaf text-4xl font-bold text-primary">
          سورة {data.name}
        </h1>

        {showBasmala && (
          <p className="mt-6 text-center font-mushaf text-3xl leading-loose">
            {BASMALA}
          </p>
        )}

        <p className="mt-6 text-justify font-mushaf text-3xl leading-[2.4]">
          {data.ayahs.map((a) => (
            <span key={a.number}>
              {a.text.join(" ")}{" "}
              <span className="text-4xl text-accent">
                {toArabicDigits(a.number)}
              </span>{" "}
            </span>
          ))}
        </p>
      </section>
    </main>
  );
}
