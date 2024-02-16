import type { CompareRow, Plan } from "@/types/content";

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    note: "Everything you need to build the habit.",
    features: [
      "Daily skin check-ins",
      "One AM and one PM routine",
      "Shelf for up to 12 products",
      "Four-week progress view",
    ],
    cta: "Download free",
  },
  {
    id: "plus",
    name: "Dewy Plus",
    price: "$44.99",
    period: "per year",
    note: "or $6.99 a month · 7-day free trial",
    features: [
      "Everything in Free",
      "AI routine builder with weekly tune-ups",
      "Unlimited shelf, use-by and running-low alerts",
      "Weather-aware morning tips",
      "Full timeline and monthly recaps",
      "Export your data anytime",
    ],
    cta: "Start 7-day trial",
    highlighted: true,
    badge: "Most popular",
  },
  {
    id: "duo",
    name: "Plus Duo",
    price: "$59.99",
    period: "per year",
    note: "Two people, two private shelves.",
    features: [
      "Everything in Plus, for two",
      "Separate check-ins and routines",
      "Shared restock list, if you want one",
    ],
    cta: "Get Duo",
  },
];

export const compareRows: CompareRow[] = [
  { feature: "Skin check-ins", free: true, plus: true },
  { feature: "AM + PM routines", free: "1 each", plus: "Unlimited" },
  { feature: "AI routine suggestions", free: "Basic order", plus: "Weekly tune-ups" },
  { feature: "Product shelf", free: "12 products", plus: "Unlimited" },
  { feature: "Use-by reminders", free: false, plus: true },
  { feature: "Weather-aware tips", free: false, plus: true },
  { feature: "Progress timeline", free: "4 weeks", plus: "Full history" },
  { feature: "Monthly recap", free: false, plus: true },
  { feature: "Sync across devices", free: true, plus: true },
];
