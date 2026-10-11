"use client";

import { useState } from "react";

type Props = {
  initial: number;
};

export default function Counter({ initial }: Props) {
  const [remaining, setRemaining] = useState(initial);
  const done = remaining === 0;

  function handleClick() {
    if (done) return;
    setRemaining(remaining - 1);
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
