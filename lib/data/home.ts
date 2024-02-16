import type { FlowStep, Stat } from "@/types/content";

export const flowSteps: FlowStep[] = [
  {
    number: "01",
    title: "Check in",
    body: "Tap how each zone feels: tight, shiny, calm, bumpy. Add tags like a long flight or a new cleanser. Ten seconds, no camera.",
  },
  {
    number: "02",
    title: "Build your routine",
    body: "Dewy's assistant orders your AM and PM steps, spaces out strong actives and sets wait times, using products you already own.",
  },
  {
    number: "03",
    title: "Keep your shelf",
    body: "Scan or search what you have. Dewy tracks opening dates, use-by windows and which step each product belongs to.",
  },
  {
    number: "04",
    title: "Watch the trend",
    body: "Weekly check-ins turn into a gentle timeline, so you can see what changed, and what you changed, over months.",
  },
];

export const heroTicks = ["No selfies required", "No sponsored products", "iPhone & Android"];

export const heroFloats = [
  { className: "f1", dot: "d-mint", title: "PM routine ready", meta: "4 steps · retinol night" },
  { className: "f2", dot: "d-peach", title: "Hydration trending up", meta: "last 4 check-ins" },
] as const;

export const progressStats: Stat[] = [
  { value: "10 s", label: "average check-in" },
  { value: "AM + PM", label: "routines that adapt" },
  { value: "0", label: "photos required" },
];

export const privacyPoints = [
  "No camera, no face data",
  "No sponsored or affiliate recommendations",
  "One-tap export and delete",
];
