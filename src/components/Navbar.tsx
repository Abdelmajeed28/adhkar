import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b-2 border-accent bg-surface sticky top-0 z-50 shadow-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-primary">
          أذكاري
        </Link>
        <Link href="/" className="text-xl font-bold text-primary">
          الصفحة الرئيسية
        </Link>
      </div>
    </header>
  );
}
