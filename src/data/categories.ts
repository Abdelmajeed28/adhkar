import type { Category } from "./types";
import { morning } from "./adhkar/morning";
import { evening } from "./adhkar/evening";
import { after_prayer } from "./adhkar/adhkar-after-prayer";
import { leaving_house } from "./adhkar/leaving-house";
import { entering_house } from "./adhkar/entering-house";
import { wudu } from "./adhkar/wudu";
import { sleeping } from "./adhkar/sleeping";
import { afterSleeping } from "./adhkar/afterSleeping";
import { enterBathroom } from "./duaa/enterBathroom";
import { outBathroom } from "./duaa/outBathroom";

export const categories: Category[] = [
  morning,
  evening,
  after_prayer,
  leaving_house,
  entering_house,
  wudu,
  sleeping,
  afterSleeping,
  enterBathroom,
  outBathroom,
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
