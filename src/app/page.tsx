import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6">
      <div className="mb-4">
        <CategoryCard title="المسبحة" href="/tasbeeh" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
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
