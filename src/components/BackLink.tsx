import Link from "next/link";
type Props = {
  href?: string;
  label?: string;
};

export default function BackLink({
  href = "/",
  label = "العودة للرئيسية",
}: Props) {
  return (
    <Link
      href={href}
      className="mb-4 inline-flex items-center gap-2 text-primary hover:text-primary-dark"
    >
      <span aria-hidden="true">→</span>
      {label}
    </Link>
  );
}
