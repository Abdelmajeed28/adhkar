import type { Category } from "./types";
import { morning } from "./adhkar/morning";

export const categories: Category[] = [morning];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
