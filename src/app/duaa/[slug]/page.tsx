import { notFound } from "next/navigation";
import type { Metadata } from "next";
import DhikrItem from "@/components/DhikrItem";
import BackLink from "@/components/BackLink";
import { duaaCategories } from "@/data/categories";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return duaaCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = duaaCategories.find((c) => c.slug === slug);

  return {
    title: category?.title,
  };
}

export default async function DuaaCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = duaaCategories.find((c) => c.slug === slug);

  if (!category) notFound();

  return (
    <main className="mx-auto max-w-3xl p-4">
      <BackLink href="/duaa" label="العودة للأدعية" />
      <h1 className="mb-4 text-2xl font-bold text-primary">{category.title}</h1>

      <div className="space-y-4">
        {category.adhkar.map((dhikr) => (
          <DhikrItem key={dhikr.id} dhikr={dhikr} title={category.title} />
        ))}
      </div>
    </main>
  );
}
