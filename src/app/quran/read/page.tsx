import type { Metadata } from "next";
import BackLink from "@/components/BackLink";
import MushafPage from "@/components/MushafPage";
import { getAllSurahs, getPages } from "@/data/quran";

export const metadata: Metadata = {
  title: "المصحف",
};

export default function ReadPage() {
  const surahs = new Map(getAllSurahs().map((s) => [s.id, s]));

  return (
    <main className="mx-auto max-w-2xl p-2">
      <BackLink href="/quran" label="العودة لقائمة السور" />
      {getPages().map((p) => (
        <MushafPage key={p.page} page={p} surahs={surahs} />
      ))}
    </main>
  );
}
