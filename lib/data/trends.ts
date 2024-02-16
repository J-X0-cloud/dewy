import type { TrendPoint } from "@/types/skincare";

/** Twelve weeks of self-reported check-in averages on a 1–5 scale (Jul – Sep). */
export const skinTrend: TrendPoint[] = [
  { week: 1, hydration: 2.1, comfort: 2.8 },
  { week: 2, hydration: 2.3, comfort: 2.6 },
  { week: 3, hydration: 2.2, comfort: 3.0 },
  { week: 4, hydration: 2.6, comfort: 3.1 },
  { week: 5, hydration: 2.9, comfort: 2.9 },
  { week: 6, hydration: 2.8, comfort: 3.3 },
  { week: 7, hydration: 3.2, comfort: 3.5 },
  { week: 8, hydration: 3.4, comfort: 3.4 },
  { week: 9, hydration: 3.3, comfort: 3.8 },
  { week: 10, hydration: 3.7, comfort: 3.7 },
  { week: 11, hydration: 3.9, comfort: 4.0 },
  { week: 12, hydration: 4.1, comfort: 4.2 },
];

export const trendMonths = ["Jul", "Aug", "Sep"] as const;

export const trendPins = [
  { texture: 3, label: "Wk 3 · started retinol" },
  { texture: 2, label: "Wk 8 · fragrance-free moisturizer" },
  { texture: 1, label: "Wk 12 · SPF streak" },
] as const;
