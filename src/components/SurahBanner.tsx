// import { BASMALA } from "@/data/quran";
// import { toArabicDigits } from "@/lib/arabic";

// type Props = { id: number; name: string; ayahsCount: number };

// export default function SurahBanner({ id, name, ayahsCount }: Props) {
//   const showBasmala = id !== 1 && id !== 9;
//   const pat = `dm-${id}`;

//   return (
//     <div id={`surah-${id}`} className="my-4 scroll-mt-24">
//       <svg
//         viewBox="0 0 600 80"
//         className="w-full"
//         role="img"
//         aria-label={`سورة ${name}`}
//         fontFamily="var(--font-surah-name)"
//       >
//         <defs>
//           <pattern
//             id={pat}
//             width="16"
//             height="16"
//             patternUnits="userSpaceOnUse"
//           >
//             <path
//               d="M8 0 L16 8 L8 16 L0 8 Z"
//               fill="none"
//               stroke="#b8924a"
//               strokeOpacity="0.55"
//               strokeWidth="0.8"
//             />
//           </pattern>
//         </defs>

//         {/* الشريط الخارجي */}
//         <rect
//           x="2"
//           y="2"
//           width="596"
//           height="76"
//           rx="6"
//           fill="#1f5f4f"
//           stroke="#b8924a"
//           strokeWidth="2.5"
//         />
//         <rect
//           x="8"
//           y="8"
//           width="584"
//           height="64"
//           rx="3"
//           fill={`url(#${pat})`}
//           stroke="#b8924a"
//           strokeWidth="0.8"
//         />

//         {/* الكبسولة الوسطية */}
//         <path
//           d="M105 40 Q125 8 175 8 H425 Q475 8 495 40 Q475 72 425 72 H175 Q125 72 105 40 Z"
//           fill="#faf8f1"
//           stroke="#b8924a"
//           strokeWidth="2.5"
//         />
//         <path
//           d="M117 40 Q135 14 178 14 H422 Q465 14 483 40 Q465 66 422 66 H178 Q135 66 117 40 Z"
//           fill="none"
//           stroke="#1f5f4f"
//           strokeWidth="0.8"
//         />

//         {/* اسم السورة */}
//         <text
//           x="300"
//           y="52"
//           textAnchor="middle"
//           fontStyle="var(--font-surah-name)"
//           fontSize="30"
//           fill="#1f5f4f"
//         >
//           {name}
//         </text>

//         {/* دايرة اليمين: الترتيب */}
//         <circle
//           cx="548"
//           cy="40"
//           r="26"
//           fill="#faf8f1"
//           stroke="#b8924a"
//           strokeWidth="2.5"
//         />
//         <circle
//           cx="548"
//           cy="40"
//           r="21"
//           fill="none"
//           stroke="#1f5f4f"
//           strokeWidth="0.8"
//         />
//         <text x="548" y="34" textAnchor="middle" fontSize="11" fill="#1f5f4f">
//           ترتيبها
//         </text>
//         <text x="548" y="54" textAnchor="middle" fontSize="18" fill="#1f5f4f">
//           {toArabicDigits(id)}
//         </text>

//         {/* دايرة الشمال: عدد الآيات */}
//         <circle
//           cx="52"
//           cy="40"
//           r="26"
//           fill="#faf8f1"
//           stroke="#b8924a"
//           strokeWidth="2.5"
//         />
//         <circle
//           cx="52"
//           cy="40"
//           r="21"
//           fill="none"
//           stroke="#1f5f4f"
//           strokeWidth="0.8"
//         />
//         <text x="52" y="34" textAnchor="middle" fontSize="11" fill="#1f5f4f">
//           آياتها
//         </text>
//         <text x="52" y="54" textAnchor="middle" fontSize="18" fill="#1f5f4f">
//           {toArabicDigits(ayahsCount)}
//         </text>
//       </svg>

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
  const pat = `islamic-ornament-${id}`;

  return (
    <div id={`surah-${id}`} className="scroll-mt-24">
      <svg
        viewBox="0 0 600 90"
        className="w-full drop-shadow-sm"
        role="img"
        aria-label={`سورة ${name}`}
      >
        <defs>
          {/* زخرفة إسلامية أرابيسك دقيقة تناسب روح المصحف */}
          <pattern
            id={pat}
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M12 0 C14 6 18 10 24 12 C18 14 14 18 12 24 C10 18 6 14 0 12 C6 10 10 6 12 0 Z"
              fill="none"
              stroke="#d4af37"
              strokeWidth="0.8"
              strokeOpacity="0.6"
            />
            <circle cx="12" cy="12" r="2" fill="#d4af37" fillOpacity="0.4" />
          </pattern>

          {/* تدرج لوني ذهبي فخم */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e6ca65" />
            <stop offset="50%" stopColor="#c5a059" />
            <stop offset="100%" stopColor="#997a36" />
          </linearGradient>
        </defs>

        {/* الخلفية الخارجية بلون أخضر غامق ملكي */}
        <rect
          x="2"
          y="5"
          width="596"
          height="80"
          rx="8"
          fill="#113f36"
          stroke="url(#goldGradient)"
          strokeWidth="2"
        />

        {/* طبقة الزخرفة الداخلية */}
        <rect
          x="8"
          y="11"
          width="584"
          height="68"
          rx="4"
          fill={`url(#${pat})`}
          stroke="url(#goldGradient)"
          strokeWidth="0.8"
        />

        {/* الإطار المزخرف العلوي والسفلي (خطوط طراز المصحف) */}
        <line
          x1="20"
          y1="11"
          x2="580"
          y2="11"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />
        <line
          x1="20"
          y1="79"
          x2="580"
          y2="79"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />

        {/* الكبسولة الوسطية لاسم السورة (شكل منحني تراثي) */}
        <path
          d="M110 45 Q125 12 175 12 H425 Q475 12 490 45 Q475 78 425 78 H175 Q125 78 110 45 Z"
          fill="#faf8f1"
          stroke="url(#goldGradient)"
          strokeWidth="2.5"
        />

        {/* إطار رفيع داخل الكبسولة */}
        <path
          d="M118 45 Q133 18 178 18 H422 Q467 18 482 45 Q467 72 422 72 H178 Q133 72 118 45 Z"
          fill="none"
          stroke="#113f36"
          strokeWidth="0.8"
        />

        {/* اسم السورة */}
        <text
          x="300"
          y="60"
          textAnchor="middle"
          style={{
            fontFamily: "var(--font-surah-name, 'Amiri', serif)",
          }}
          fontSize="45"
          fontWeight="bold"
          fill="#113f36"
        >
          {name}
        </text>

        {/* دايرة اليمين: الترتيب (زخرفة تراثية) */}
        <g transform="translate(545, 45)">
          <circle
            r="24"
            fill="#faf8f1"
            stroke="url(#goldGradient)"
            strokeWidth="2"
          />
          <circle r="20" fill="none" stroke="#113f36" strokeWidth="0.6" />
          <text
            x="0"
            y="-5"
            textAnchor="middle"
            fontSize="10"
            fill="#113f36"
            fontWeight="600"
          >
            ترتيبها
          </text>
          <text
            x="0"
            y="13"
            textAnchor="middle"
            fontSize="16"
            fill="#113f36"
            fontWeight="bold"
          >
            {toArabicDigits(id)}
          </text>
        </g>

        {/* دايرة الشمال: عدد الآيات */}
        <g transform="translate(55, 45)">
          <circle
            r="24"
            fill="#faf8f1"
            stroke="url(#goldGradient)"
            strokeWidth="2"
          />
          <circle r="20" fill="none" stroke="#113f36" strokeWidth="0.6" />
          <text
            x="0"
            y="-5"
            textAnchor="middle"
            fontSize="10"
            fill="#113f36"
            fontWeight="600"
          >
            آياتها
          </text>
          <text
            x="0"
            y="13"
            textAnchor="middle"
            fontSize="16"
            fill="#113f36"
            fontWeight="bold"
          >
            {toArabicDigits(ayahsCount)}
          </text>
        </g>
      </svg>

      {showBasmala && (
        <p className="mt-4 text-center font-mushaf text-2xl text-amber-900/90 font-bold">
          {BASMALA}
        </p>
      )}
    </div>
  );
}
