// "use client";

// import { useState } from "react";

// type Props = {
//   initial: number;
// };

// export default function Counter({ initial }: Props) {
//   const [remaining, setRemaining] = useState(initial);
//   const done = remaining === 0;

//   function handleClick() {
//     if (done) return;
//     setRemaining(remaining - 1);
//   }

//   return (
//     <button
//       onClick={handleClick}
//       disabled={done}
//       className="w-full cursor-pointer rounded-xl bg-primary py-3 text-lg font-bold text-white transition hover:bg-primary-dark disabled:bg-border disabled:text-muted"
//     >
//       {done ? "تمت القراءة ✓" : remaining}
//     </button>
//   );
// }
"use client";

import { usePathname } from "next/navigation";
import { useHydrated, useLocalStorage } from "@/lib/useLocalStorage";

type Props = {
  id: string | number;
  initial: number;
};

function today() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

export default function Counter({ id, initial }: Props) {
  const pathname = usePathname();
  const [raw, setRaw] = useLocalStorage(`counter:${pathname}:${id}`);
  const hydrated = useHydrated();

  let remaining = initial;
  if (raw) {
    try {
      const v = JSON.parse(raw);
      if (v.date === today() && typeof v.remaining === "number") {
        remaining = Math.min(v.remaining, initial);
      }
    } catch {}
  }

  const done = remaining === 0;

  function handleClick() {
    if (done) return;
    setRaw(JSON.stringify({ remaining: remaining - 1, date: today() }));
  }

  return (
    <button
      onClick={handleClick}
      disabled={done}
      className="w-full cursor-pointer rounded-xl bg-primary py-3 text-lg font-bold text-white transition hover:bg-primary-dark disabled:bg-border disabled:text-muted"
    >
      {done ? "تمت القراءة ✓" : remaining}
    </button>
  );
}
