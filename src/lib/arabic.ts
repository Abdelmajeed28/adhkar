const DIGITS = "٠١٢٣٤٥٦٧٨٩";

export function toArabicDigits(n: number) {
  return String(n).replace(/\d/g, (d) => DIGITS[Number(d)]);
}

// تبسيط النص للبحث: بيشيل التشكيل ويوحّد أشكال الألف والتاء المربوطة والياء
export function normalizeArabic(s: string) {
  return s
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي");
}
