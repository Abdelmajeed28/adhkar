"use client";

import { useState } from "react";

type Props = { text: string };

export default function ShareButton({ text }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    try {
      if (navigator.share) {
        await navigator.share({ text });
        return;
      }
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  return (
    <button
      onClick={handleShare}
      className="mt-3 rounded-full border cursor-pointer border-border px-4 py-1.5 text-sm text-muted transition hover:bg-primary hover:text-surface"
    >
      {copied ? "تم النسخ ✓" : "مشاركة"}
    </button>
  );
}
