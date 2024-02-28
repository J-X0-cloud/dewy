import type {
  FeelScale,
  RoutineStep,
  ShelfFilter,
  ShelfProduct,
  TimelineEntry,
  TodayStep,
  TrendPoint,
  WeatherReading,
  ZoneNote,
} from "./types";

/** Seed data for a signed-in demo profile. Replaced by the sync API in production builds. */

export const profile = {
  firstName: "Maya",
  streakDays: 12,
  eveningCheckinTime: "9:30 PM",
  shelfCount: 14,
};

export const weather: WeatherReading[] = [
  { label: "UV", value: "7", descriptor: "High", tone: "uv" },
  { label: "Humidity", value: "31%", descriptor: "Dry", tone: "humidity" },
];

export const weatherTip = "Dry air today. Try a second layer of essence before moisturizer.";

export const morningSteps: TodayStep[] = [
  { id: "cleanse", name: "Cleanse", product: "Gentle gel cleanser", meta: "1 min", done: true },
  { id: "hydrate", name: "Hydrate", product: "Milky essence", meta: "30 s", done: true },
  { id: "serum", name: "Serum", product: "Vitamin C serum", meta: "wait 1 min", done: false },
  { id: "protect", name: "Protect", product: "Mineral SPF 50", meta: "last", done: false },
];

export const zoneNotes: ZoneNote[] = [
  { zone: "forehead", label: "Forehead", feeling: "calm" },
  { zone: "tzone", label: "T-zone", feeling: "a bit shiny" },
  { zone: "cheeks", label: "Cheeks", feeling: "tight" },
  { zone: "chin", label: "Chin", feeling: "a few bumps" },
];

export const feelScales: FeelScale[] = [
  { id: "hydration", label: "Hydration", low: "tight", high: "plump", value: 34, tone: "peach" },
  { id: "oil", label: "Oil", low: "matte", high: "shiny", value: 58, tone: "mint" },
  { id: "comfort", label: "Comfort", low: "reactive", high: "calm", value: 72, tone: "lilac" },
];

export const checkinTags = ["Long flight", "Slept 6 h", "New cleanser", "Stressful day"];
export const defaultSelectedTags = ["Long flight", "Slept 6 h"];

export const amRoutine: RoutineStep[] = [
  { id: "am-1", order: 1, kind: "Cleanse", product: "Gentle gel cleanser", note: "60 s", swatch: "mint" },
  { id: "am-2", order: 2, kind: "Hydrate", product: "Milky essence", note: "pat in", swatch: "lilac" },
  { id: "am-3", order: 3, kind: "Serum", product: "Vitamin C serum", note: "wait 1 min", swatch: "peach" },
  { id: "am-4", order: 4, kind: "Moisturize", product: "Barrier cream", note: "", swatch: "rose" },
  { id: "am-5", order: 5, kind: "Protect", product: "Mineral SPF 50", note: "reapply 2 h", swatch: "sun" },
];

export const pmRoutine: RoutineStep[] = [
  { id: "pm-1", order: 1, kind: "Cleanse", product: "Cleansing balm + gel", note: "double", swatch: "mint" },
  { id: "pm-2", order: 2, kind: "Night serum", product: "Retinol 0.3% · Mon Wed Fri", note: "pea-size", swatch: "plum" },
  { id: "pm-3", order: 3, kind: "Soothe", product: "Panthenol serum", note: "", swatch: "lilac" },
  { id: "pm-4", order: 4, kind: "Moisturize", product: "Barrier cream", note: "", swatch: "rose" },
];

export const routineSuggestion = {
  headline: "Dewy moved one step.",
  body: "Your exfoliating toner and retinol were both on Wednesday night, so the toner now lives on Saturday.",
};

export const shelfFilters: ShelfFilter[] = ["All", "Cleansers", "Serums", "SPF"];

export const shelfProducts: ShelfProduct[] = [
  { id: "gel-cleanser", shape: "pump", fill: "#BFE0D9", category: "Cleanser", filter: "Cleansers", name: "Gentle gel cleanser", meta: "Opened Jul 3", daypart: "AM + PM" },
  { id: "vitamin-c", shape: "drop", fill: "#F3C2A6", category: "Serum", filter: "Serums", name: "Vitamin C 10%", meta: "Use by Nov 12", daypart: "AM", flag: "warn" },
  { id: "barrier-cream", shape: "jar", fill: "#F2C5CB", category: "Moisturizer", filter: "All", name: "Barrier cream", meta: "Opened Aug 20", daypart: "AM + PM" },
  { id: "mineral-spf", shape: "tube", fill: "#F6E2A6", category: "Sunscreen", filter: "SPF", name: "Mineral SPF 50", meta: "Running low", daypart: "AM", flag: "low" },
  { id: "retinol", shape: "drop", fill: "#B89AC4", category: "Treatment", filter: "Serums", name: "Retinol 0.3%", meta: "3 nights a week", daypart: "PM" },
  { id: "milky-essence", shape: "pump", fill: "#D9D0EE", category: "Essence", filter: "All", name: "Milky essence", meta: "Opened Sep 1", daypart: "AM" },
];

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

export const trendMonths = ["Jul", "Aug", "Sep"];

export const timeline: TimelineEntry[] = [
  { id: "wk12", label: "Week 12", body: "Cheeks feel plumper in the morning. Kept SPF streak all week.", texture: 1 },
  { id: "wk8", label: "Week 8", body: "Switched to a fragrance-free moisturizer.", texture: 2 },
  { id: "wk3", label: "Week 3", body: "Started retinol, 2 nights a week.", texture: 3 },
];

export const monthlyRecap = {
  title: "September recap is ready",
  body: "Your most consistent month yet: 27 of 30 mornings done.",
};
