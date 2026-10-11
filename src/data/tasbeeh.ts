export type Tasbeeh = {
  id: string;
  text: string;
};

export const tasbeehList: Tasbeeh[] = [
  { id: "subhanallah", text: "سُبْحَانَ اللَّهِ" },
  { id: "alhamdulillah", text: "الْحَمْدُ لِلَّهِ" },
  { id: "allahuakbar", text: "اللَّهُ أَكْبَرُ" },
  { id: "la-ilaha-illallah", text: "لَا إِلَهَ إِلَّا اللَّهُ" },
  { id: "istighfar", text: "أَسْتَغْفِرُ اللَّهَ" },
  {
    id: "salat-nabi",
    text: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
  },
];
