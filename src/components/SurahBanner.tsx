// import { BASMALA } from "@/data/quran";
// import { toArabicDigits } from "@/lib/arabic";

// type Props = { id: number; name: string; ayahsCount: number };

// export default function SurahBanner({ id, name, ayahsCount }: Props) {
//   const showBasmala = id !== 1 && id !== 9;

//   return (
//     <div id={`surah-${id}`} className="my-4 scroll-mt-20">
//       <div className="rounded-lg border-2 border-accent bg-primary p-1.5">
//         <div className="flex items-center justify-between rounded-full border border-accent bg-surface px-4 py-1.5">
//           <span className="text-xs text-muted">
//             ترتيبها {toArabicDigits(id)}
//           </span>
//           <h2 className="font-mushaf text-2xl text-primary">سورة {name}</h2>
//           <span className="text-xs text-muted">
//             آياتها {toArabicDigits(ayahsCount)}
//           </span>
//         </div>
//       </div>

//       {showBasmala && (
//         <p className="mt-3 text-center font-mushaf text-2xl">{BASMALA}</p>
//       )}
//     </div>
//   );
// }
import { BASMALA } from "@/data/quran";
import { toArabicDigits } from "@/lib/arabic";

type Props = { id: number; name: string; ayahsCount: number };

export default function SurahBanner({ id, name, ayahsCount }: Props) {
  const showBasmala = id !== 1 && id !== 9;
  const pat = `dm-${id}`;

  return (
    <div id={`surah-${id}`} className="my-4 scroll-mt-24">
      <svg
        viewBox="0 0 600 80"
        className="w-full"
        role="img"
        aria-label={`سورة ${name}`}
        fontFamily="var(--font-mushaf)"
      >
        <defs>
          <pattern
            id={pat}
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M8 0 L16 8 L8 16 L0 8 Z"
              fill="none"
              stroke="#b8924a"
              strokeOpacity="0.55"
              strokeWidth="0.8"
            />
          </pattern>
        </defs>

        {/* الشريط الخارجي */}
        <rect
          x="2"
          y="2"
          width="596"
          height="76"
          rx="6"
          fill="#1f5f4f"
          stroke="#b8924a"
          strokeWidth="2.5"
        />
        <rect
          x="8"
          y="8"
          width="584"
          height="64"
          rx="3"
          fill={`url(#${pat})`}
          stroke="#b8924a"
          strokeWidth="0.8"
        />

        {/* الكبسولة الوسطية */}
        <path
          d="M105 40 Q125 8 175 8 H425 Q475 8 495 40 Q475 72 425 72 H175 Q125 72 105 40 Z"
          fill="#faf8f1"
          stroke="#b8924a"
          strokeWidth="2.5"
        />
        <path
          d="M117 40 Q135 14 178 14 H422 Q465 14 483 40 Q465 66 422 66 H178 Q135 66 117 40 Z"
          fill="none"
          stroke="#1f5f4f"
          strokeWidth="0.8"
        />

        {/* اسم السورة */}
        <text x="300" y="52" textAnchor="middle" fontSize="30" fill="#1f5f4f">
          سورة {name}
        </text>

        {/* دايرة اليمين: الترتيب */}
        <circle
          cx="548"
          cy="40"
          r="26"
          fill="#faf8f1"
          stroke="#b8924a"
          strokeWidth="2.5"
        />
        <circle
          cx="548"
          cy="40"
          r="21"
          fill="none"
          stroke="#1f5f4f"
          strokeWidth="0.8"
        />
        <text x="548" y="34" textAnchor="middle" fontSize="11" fill="#1f5f4f">
          ترتيبها
        </text>
        <text x="548" y="54" textAnchor="middle" fontSize="18" fill="#1f5f4f">
          {toArabicDigits(id)}
        </text>

        {/* دايرة الشمال: عدد الآيات */}
        <circle
          cx="52"
          cy="40"
          r="26"
          fill="#faf8f1"
          stroke="#b8924a"
          strokeWidth="2.5"
        />
        <circle
          cx="52"
          cy="40"
          r="21"
          fill="none"
          stroke="#1f5f4f"
          strokeWidth="0.8"
        />
        <text x="52" y="34" textAnchor="middle" fontSize="11" fill="#1f5f4f">
          آياتها
        </text>
        <text x="52" y="54" textAnchor="middle" fontSize="18" fill="#1f5f4f">
          {toArabicDigits(ayahsCount)}
        </text>
      </svg>

      {showBasmala && (
        <p className="mt-3 text-center font-mushaf text-2xl">{BASMALA}</p>
      )}
    </div>
  );
}
