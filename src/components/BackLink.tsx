import Link from "next/link";

export default function BackLink() {
  return (
    <Link
      href="/"
      className="mb-4 inline-flex items-center gap-2 text-primary hover:text-primary-dark"
    >
      <span aria-hidden="true">→</span>
      العودة للرئيسية
    </Link>
  );
}
