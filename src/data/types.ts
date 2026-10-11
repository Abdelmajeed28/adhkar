export type Dhikr = {
  id: string;
  text: string;
  count: number;
  source?: string;
  note?: string;
};

export type Category = {
  slug: string;
  title: string;
  adhkar: Dhikr[];
};
