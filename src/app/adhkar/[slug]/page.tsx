import { categories } from "@/data/categories";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}
export default function Page() {
  return <main>قريبًا</main>;
}
