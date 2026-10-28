import raw from "./quran.json";

export type Ayah = {
  number: number;
  page: number;
  juz: number;
  text: string[];
};

export type Surah = {
  id: number;
  name: string;
  ayahs_count: number;
  ayahs: Ayah[];
};

const surahs = raw as unknown as Surah[];

export function getAllSurahs() {
  return surahs.map(({ id, name, ayahs_count }) => ({ id, name, ayahs_count }));
}

export function getSurah(id: number) {
  return surahs.find((s) => s.id === id);
}

// البسملة بتتاخد من الفاتحة (آية 1) بدل ما نكتبها بإيدينا
export const BASMALA = surahs[0].ayahs[0].text.join(" ");

export type PageAyah = { surahId: number; number: number; text: string };
export type PageData = { page: number; juz: number; ayahs: PageAyah[] };

const pages: PageData[] = (() => {
  const map = new Map<number, PageData>();
  for (const s of surahs) {
    for (const a of s.ayahs) {
      let p = map.get(a.page);
      if (!p) {
        p = { page: a.page, juz: a.juz, ayahs: [] };
        map.set(a.page, p);
      }
      p.ayahs.push({ surahId: s.id, number: a.number, text: a.text.join(" ") });
    }
  }
  return [...map.values()].sort((x, y) => x.page - y.page);
})();

export function getPages() {
  return pages;
}

export function getSurahPages(id: number): PageData[] {
  const s = getSurah(id);
  if (!s) return [];
  const map = new Map<number, PageData>();
  for (const a of s.ayahs) {
    let p = map.get(a.page);
    if (!p) {
      p = { page: a.page, juz: a.juz, ayahs: [] };
      map.set(a.page, p);
    }
    p.ayahs.push({ surahId: s.id, number: a.number, text: a.text.join(" ") });
  }
  return [...map.values()];
}
