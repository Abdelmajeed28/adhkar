import type { Metadata } from "next";
import BackLink from "@/components/BackLink";
import SurahList from "@/components/SurahList";
import { getAllSurahs } from "@/data/quran";

export const metadata: Metadata = {
  title: "القرآن الكريم",
};

export default function QuranPage() {
  return (
    <main className="mx-auto max-w-3xl p-4">
      <BackLink />
      <h1 className="mb-4 text-2xl font-bold text-primary">القرآن الكريم</h1>
      <SurahList surahs={getAllSurahs()} />
    </main>
  );
}
