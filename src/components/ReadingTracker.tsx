"use client";

import { useEffect } from "react";

type Props = { surahId: number; surahName: string };

export default function ReadingTracker({ surahId, surahName }: Props) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-mushaf-page]");
    if (els.length === 0) return;

    // لو الرابط فيه #page-N: انزل للصفحة وصحّح المكان بعد ما الصفحات ترسم
    const hash = window.location.hash;
    const target = /^#page-\d+$/.test(hash)
      ? document.querySelector<HTMLElement>(hash)
      : null;

    if (target) {
      const go = () => target.scrollIntoView({ block: "start" });
      go();
      requestAnimationFrame(go);
      setTimeout(go, 300);
    }

    // ما نحفظش أي موضع قبل ما النزول يستقر
    let ready = !target;
    const readyTimer = target
      ? setTimeout(() => {
          ready = true;
        }, 900)
      : undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!ready) return;
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const page = Number((e.target as HTMLElement).dataset.mushafPage);
          try {
            localStorage.setItem(
              "quran:last",
              JSON.stringify({ surah: surahId, name: surahName, page }),
            );
          } catch {}
        }
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      if (readyTimer) clearTimeout(readyTimer);
    };
  }, [surahId, surahName]);

  return null;
}
