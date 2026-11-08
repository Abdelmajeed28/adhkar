import CategoryCard from "@/components/CategoryCard";
import ContinueReading from "@/components/ContinueReading";

export default function Home() {
  return (
    <main className="p-6 max-w-6xl mx-auto ">
      <div className="p-1 mb-3 mt-1 max-w-6xl mx-auto text-center bg-[#ddd9d0] rounded rounded-2">
        <h1 className="text-2xl text-primary m-3 font-mushaf font-bold ">
          أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
        </h1>
      </div>
      <ContinueReading />
      <div className="mb-4 grid grid-cols-2 gap-4">
        <CategoryCard title="القرآن الكريم" href="/quran" />
        <CategoryCard title="المسبحة" href="/tasbeeh" />
        <CategoryCard title="الأذكار" href="/adhkar" />
        <CategoryCard title="الأدعية" href="/duaa" />
      </div>
    </main>
  );
}
