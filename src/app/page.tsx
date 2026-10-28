import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6 max-w-6xl mx-auto ">
      <div className="p-1 mb-3 mt-1 max-w-6xl mx-auto text-center bg-[#ddd9d0] rounded rounded-2">
        <h1 className="text-2xl text-primary m-3 font-mushaf font-bold ">
          أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
        </h1>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <CategoryCard title="المسبحة" href="/tasbeeh" />
        <CategoryCard title="القرآن الكريم" href="/quran" />
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
