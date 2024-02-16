import type { Spec } from "@/types/content";

export const jumpLinks = [
  { href: "#checkin", label: "Check-ins" },
  { href: "#routine", label: "Routine builder" },
  { href: "#shelf", label: "Shelf" },
  { href: "#progress", label: "Progress" },
  { href: "#ai", label: "What the AI does" },
];

export const checkinSpecs: Spec[] = [
  { term: "Scales", detail: "Hydration, oil, comfort" },
  { term: "Zones", detail: "Forehead, T-zone, cheeks, chin" },
  { term: "Camera", detail: "Never required" },
];

export const routineSpecs: Spec[] = [
  { term: "Reorder", detail: "Drag and drop any step" },
  { term: "Schedules", detail: "Nightly, alternate or custom days" },
  { term: "Changes", detail: "Always explained, always optional" },
];

export const assistantWill = [
  "Order your steps and set sensible wait times",
  "Space out strong actives across the week",
  "Adjust morning tips for UV and humidity where you are",
  "Spot patterns in your own check-in notes",
  "Explain every suggestion in one plain sentence",
];

export const assistantWont = [
  "Diagnose, treat or name skin conditions",
  "Recommend prescription products",
  "Push brands, sponsors or affiliate links",
  "Ask for photos of your face",
  "Replace a visit to a licensed professional",
];
