import type {
  CheckinTag,
  FeelScale,
  RoutineStep,
  RoutineSuggestion,
  ShelfProduct,
  TimelineEntry,
  TodaySummary,
  ZoneNote,
} from "@/types/skincare";

/** Mock data for the in-app screens shown in phone mockups across the site. */

export const today: TodaySummary = {
  dateLabel: "Thursday, September 24",
  greeting: "Good morning, Maya",
  weather: [
    { label: "UV", value: "7", descriptor: "High" },
    { label: "Humidity", value: "31%", descriptor: "Dry" },
  ],
  tip: "Dry air today. Try a second layer of essence before moisturizer.",
  routineTitle: "Morning routine",
  routineMeta: "2 of 4 steps · about 4 min",
  steps: [
    { id: "cleanse", name: "Cleanse", product: "Gentle gel cleanser", meta: "1 min", done: true },
    { id: "hydrate", name: "Hydrate", product: "Milky essence", meta: "30 s", done: true },
    { id: "serum", name: "Serum", product: "Vitamin C serum", meta: "wait 1 min", done: false },
    { id: "protect", name: "Protect", product: "Mineral SPF 50", meta: "last", done: false },
  ],
  chips: [
    { label: "Evening check-in · 9:30 PM", tone: "peach" },
    { label: "12-day streak", tone: "mint" },
  ],
};

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

export const checkinTags: CheckinTag[] = [
  { label: "Long flight", selected: true },
  { label: "Slept 6 h", selected: true },
  { label: "New cleanser", selected: false },
  { label: "Stressful day", selected: false },
];

export const amRoutine: RoutineStep[] = [
  { order: 1, kind: "Cleanse", product: "Gentle gel cleanser", note: "60 s", swatch: "mint" },
  { order: 2, kind: "Hydrate", product: "Milky essence", note: "pat in", swatch: "lilac" },
  { order: 3, kind: "Serum", product: "Vitamin C serum", note: "wait 1 min", swatch: "peach" },
  { order: 4, kind: "Moisturize", product: "Barrier cream", note: "", swatch: "rose" },
  { order: 5, kind: "Protect", product: "Mineral SPF 50", note: "reapply 2 h", swatch: "sun" },
];

export const pmRoutine: RoutineStep[] = [
  { order: 1, kind: "Cleanse", product: "Cleansing balm + gel", note: "double", swatch: "mint" },
  { order: 2, kind: "Night serum", product: "Retinol 0.3% · Mon Wed Fri", note: "pea-size", swatch: "plum" },
  { order: 3, kind: "Soothe", product: "Panthenol serum", note: "", swatch: "lilac" },
  { order: 4, kind: "Moisturize", product: "Barrier cream", note: "", swatch: "rose" },
];

export const routineSuggestion: RoutineSuggestion = {
  headline: "Dewy moved one step.",
  body: "Your exfoliating toner and retinol were both on Wednesday night, so the toner now lives on Saturday.",
};

export const shelfCount = 14;

export const shelfFilters = ["All", "Cleansers", "Serums", "SPF"] as const;

export const shelfProducts: ShelfProduct[] = [
  { id: "gel-cleanser", shape: "pump", fill: "#BFE0D9", category: "Cleanser", name: "Gentle gel cleanser", meta: "Opened Jul 3", daypart: "AM + PM" },
  { id: "vitamin-c", shape: "drop", fill: "#F3C2A6", category: "Serum", name: "Vitamin C 10%", meta: "Use by Nov 12", daypart: "AM", flag: "warn" },
  { id: "barrier-cream", shape: "jar", fill: "#F2C5CB", category: "Moisturizer", name: "Barrier cream", meta: "Opened Aug 20", daypart: "AM + PM" },
  { id: "mineral-spf", shape: "tube", fill: "#F6E2A6", category: "Sunscreen", name: "Mineral SPF 50", meta: "Running low", daypart: "AM", flag: "low" },
  { id: "retinol", shape: "drop", fill: "#B89AC4", category: "Treatment", name: "Retinol 0.3%", meta: "3 nights a week", daypart: "PM" },
  { id: "milky-essence", shape: "pump", fill: "#D9D0EE", category: "Essence", name: "Milky essence", meta: "Opened Sep 1", daypart: "AM" },
];

export const progressTimeline: TimelineEntry[] = [
  { label: "Week 12", body: "Cheeks feel plumper in the morning. Kept SPF streak all week.", texture: 1 },
  { label: "Week 8", body: "Switched to a fragrance-free moisturizer.", texture: 2 },
  { label: "Week 3", body: "Started retinol, 2 nights a week.", texture: 3 },
];

export const monthlyRecap = {
  title: "September recap is ready",
  body: "Your most consistent month yet: 27 of 30 mornings done.",
};
