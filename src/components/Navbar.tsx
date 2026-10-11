import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-3xl items-center px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          أذكار
        </Link>
      </div>
    </header>
  );
}
