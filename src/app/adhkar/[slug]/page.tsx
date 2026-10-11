import { notFound } from "next/navigation";
import DhikrItem from "@/components/DhikrItem";
import { categories, getCategory } from "@/data/categories";

type Props = {
  params: Promise<{ slug: string }>;
};
export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}
export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) notFound();

  return (
    <main className="mx-auto max-w-3xl p-4">
      <h1 className="mb-4 text-2xl font-bold text-primary">{category.title}</h1>

      <div className="space-y-4">
        {category.adhkar.map((dhikr) => (
          <DhikrItem key={dhikr.id} dhikr={dhikr} />
        ))}
      </div>
    </main>
  );
}
