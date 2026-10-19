import raw from "./quran.json";

export type Ayah = {
  number: number;
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
