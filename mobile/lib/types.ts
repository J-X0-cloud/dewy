import type { SwatchName } from "@/constants/theme";

export type Daypart = "am" | "pm";

export type BottleShape = "pump" | "drop" | "tube" | "jar";

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
  tone: "uv" | "humidity";
}

export type FaceZone = "forehead" | "tzone" | "cheeks" | "chin";

export interface ZoneNote {
  zone: FaceZone;
  label: string;
  feeling: string;
}

export type ScaleId = "hydration" | "oil" | "comfort";

export interface FeelScale {
  id: ScaleId;
  label: string;
  low: string;
  high: string;
  /** Default thumb position, 0–100. */
  value: number;
  tone: "peach" | "mint" | "lilac";
}

export interface Checkin {
  zones: ZoneNote[];
  scales: Record<ScaleId, number>;
  tags: string[];
  loggedAt: string;
}

export interface RoutineStep {
  id: string;
  order: number;
  kind: string;
  product: string;
  note: string;
  swatch: SwatchName;
}

export interface ShelfProduct {
  id: string;
  shape: BottleShape;
  fill: string;
  category: "Cleanser" | "Essence" | "Serum" | "Moisturizer" | "Sunscreen" | "Treatment";
  filter: ShelfFilter;
  name: string;
  meta: string;
  daypart: string;
  flag?: "warn" | "low";
}

export type ShelfFilter = "All" | "Cleansers" | "Serums" | "SPF";

export interface TrendPoint {
  week: number;
  hydration: number;
  comfort: number;
}

export interface TimelineEntry {
  id: string;
  label: string;
  body: string;
  texture: 1 | 2 | 3;
}
