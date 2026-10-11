import Link from "next/link";

type Props = {
  title: string;
  href: string;
};

export default function CategoryCard({ title, href }: Props) {
  return (
    <Link
      href={href}
      className="flex min-h-24 items-center justify-center rounded-2xl border border-border bg-surface p-4 text-center text-lg font-bold text-primary transition hover:bg-primary hover:text-white"
    >
      {title}
    </Link>
  );
}
