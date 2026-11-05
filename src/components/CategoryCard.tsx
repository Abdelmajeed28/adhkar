// import Link from "next/link";

// type Props = {
//   title: string;
//   href: string;
//   subtitle?: string;
// };

// export default function CategoryCard({ title, href, subtitle }: Props) {
//   return (
//     <Link
//       href={href}
//       className="flex min-h-24 flex-col items-center justify-center rounded-2xl border border-border bg-surface p-4 text-center text-lg font-bold text-primary transition hover:bg-primary hover:text-white"
//     >
//       {title}
//       {subtitle && (
//         <span className="mt-1 text-sm font-normal opacity-70">{subtitle}</span>
//       )}
//     </Link>
//   );
// }
import Link from "next/link";

type Props = {
  title: string;
  href: string;
  subtitle?: string;
  hardNav?: boolean;
};

const cls =
  "flex min-h-24 flex-col items-center justify-center rounded-2xl border border-border bg-surface p-4 text-center text-lg font-bold text-primary transition hover:bg-primary hover:text-white";

export default function CategoryCard({
  title,
  href,
  subtitle,
  hardNav,
}: Props) {
  const content = (
    <>
      {title}
      {subtitle && (
        <span className="mt-1 text-sm font-normal opacity-70">{subtitle}</span>
      )}
    </>
  );

  if (hardNav) {
    return (
      <a href={href} className={cls}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
