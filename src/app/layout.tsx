import type { Metadata, Viewport } from "next";
import { Cairo, Amiri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import ScrollToTop from "@/components/ScrollToTop";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-ui",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-quran",
  display: "swap",
});
const mushaf = localFont({
  src: "../fonts/Uthmanic.woff",
  variable: "--font-mushaf",
  display: "swap",
});
const surahName = localFont({
  src: "../fonts/SurahNames.woff",
  variable: "--font-surah-name",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "أذكار",
    template: "%s | أذكار",
  },
  description: "موقع أذكار المسلم",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    title: "أذكار",
  },
};
export const viewport: Viewport = {
  themeColor: "#1f5f4f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${cairo.variable} ${amiri.variable} ${mushaf.variable} ${surahName.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <ScrollToTop />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
