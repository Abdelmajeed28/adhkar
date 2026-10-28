import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BackLink from "@/components/BackLink";
import MushafPage from "@/components/MushafPage";
import { getAllSurahs, getSurah, getSurahPages } from "@/data/quran";

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
  const id = Number(surah);
  const data = getSurah(id);

  if (!data) notFound();

  const all = getAllSurahs();
  const prev = all.find((s) => s.id === id - 1);
  const next = all.find((s) => s.id === id + 1);
  const surahs = new Map([[data.id, data]]);

  return (
    <main className="mx-auto max-w-2xl p-2">
      <BackLink href="/quran" label="العودة لقائمة السور" />

      {getSurahPages(id).map((p) => (
        <MushafPage key={p.page} page={p} surahs={surahs} />
      ))}

      <nav className="mb-6 flex justify-between gap-2 text-primary">
        {next ? (
          <Link href={`/quran/${next.id}`} className="hover:text-primary-dark">
            ← سورة {next.name}
          </Link>
        ) : (
          <span />
        )}
        {prev ? (
          <Link href={`/quran/${prev.id}`} className="hover:text-primary-dark">
            سورة {prev.name} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}
