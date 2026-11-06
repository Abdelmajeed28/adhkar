import BackLink from "@/components/BackLink";
import CategoryCard from "@/components/CategoryCard";
import { duaaCategories } from "@/data/categories";

export const metadata = { title: "الأدعية" };

export default function DuaaPage() {
  return (
    <main className="p-6 max-w-6xl mx-auto">
      <BackLink />
      <h1 className="mb-4 text-center text-2xl font-bold text-primary">
        الأدعية
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {duaaCategories.map((category) => (
          <CategoryCard
            key={category.slug}
            title={category.title}
            href={`/adhkar/${category.slug}`}
          />
        ))}
      </div>
    </main>
  );
}
