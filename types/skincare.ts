export type Daypart = "am" | "pm";

export type BottleShape = "pump" | "drop" | "tube" | "jar";

/** Soft product swatches used for bottles and routine markers. */
export type Swatch = "mint" | "lilac" | "peach" | "rose" | "sun" | "plum";

export type ProductCategory =
  | "Cleanser"
  | "Essence"
  | "Serum"
  | "Moisturizer"
  | "Sunscreen"
  | "Treatment";

export interface TodayStep {
  id: string;
  name: string;
  product: string;
  meta: string;
  done: boolean;
}

export interface WeatherReading {
  label: string;
  value: string;
  descriptor: string;
}

export interface TodaySummary {
  dateLabel: string;
  greeting: string;
  weather: [WeatherReading, WeatherReading];
  tip: string;
  routineTitle: string;
  routineMeta: string;
  steps: TodayStep[];
  chips: { label: string; tone: "peach" | "mint" }[];
}

export type FaceZone = "forehead" | "tzone" | "cheeks" | "chin";

export interface ZoneNote {
  zone: FaceZone;
  label: string;
  feeling: string;
}

export interface FeelScale {
  id: "hydration" | "oil" | "comfort";
  label: string;
  low: string;
  high: string;
  /** Position on the track, 0–100. */
  value: number;
  tone: "peach" | "mint" | "lilac";
}

export interface CheckinTag {
  label: string;
  selected: boolean;
}

export interface RoutineStep {
  order: number;
  kind: string;
  product: string;
  note: string;
  swatch: Swatch;
}

export interface RoutineSuggestion {
  headline: string;
  body: string;
}

export interface ShelfProduct {
  id: string;
  shape: BottleShape;
  fill: string;
  category: ProductCategory;
  name: string;
  meta: string;
  daypart: string;
  flag?: "warn" | "low";
}

export interface TrendPoint {
  week: number;
  hydration: number;
  comfort: number;
}

export interface TimelineEntry {
  label: string;
  body: string;
  texture: 1 | 2 | 3;
}

export interface Pairing {
  pair: string;
  verdict: string;
  why: string;
}

export interface UseByItem {
  name: string;
  window: string;
  status: string;
  /** Share of the period-after-opening window already used, 0–100. */
  used: number;
  flag?: "warn" | "low";
}

export interface LayerStep {
  name: string;
  swatch: Exclude<Swatch, "plum">;
  shape: BottleShape;
}

export interface IngredientNote {
  name: string;
  image: { src: string; alt: string; width: number; height: number };
  body: string;
}
