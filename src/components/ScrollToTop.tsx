"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={goTop}
      aria-label="الصعود لأعلى الصفحة"
      className={`fixed bottom-10 inset-e-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-accent/60 bg-primary/50 text-white backdrop-blur-sm transition-opacity duration-300 hover:bg-primary/80 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 15l6-6 6 6" />
      </svg>
    </button>
  );
}
