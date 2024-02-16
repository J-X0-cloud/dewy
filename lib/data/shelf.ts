import type { IngredientNote, LayerStep, Pairing, UseByItem } from "@/types/skincare";

export const layeringOrder: LayerStep[] = [
  { name: "Cleanser", swatch: "mint", shape: "pump" },
  { name: "Essence / toner", swatch: "lilac", shape: "pump" },
  { name: "Serum", swatch: "peach", shape: "drop" },
  { name: "Moisturizer", swatch: "rose", shape: "jar" },
  { name: "SPF (AM)", swatch: "sun", shape: "tube" },
];

export const pairings: Pairing[] = [
  {
    pair: "Retinol + exfoliating acids",
    verdict: "Alternate nights",
    why: "Both can feel strong. Dewy keeps them on different evenings by default.",
  },
  {
    pair: "Vitamin C + sunscreen",
    verdict: "Great AM pair",
    why: "A classic morning combination. Dewy puts vitamin C before moisturizer and SPF last.",
  },
  {
    pair: "Retinol + vitamin C",
    verdict: "Split AM / PM",
    why: "Vitamin C moves to your morning, retinol stays in the evening.",
  },
  {
    pair: "Niacinamide + most steps",
    verdict: "Easy to pair",
    why: "Usually plays well with others, so Dewy slots it wherever it fits your routine.",
  },
  {
    pair: "Two exfoliants in one routine",
    verdict: "Pick one",
    why: "Dewy suggests using one per routine and rotating the other.",
  },
];

export const useByItems: UseByItem[] = [
  { name: "Vitamin C serum", window: "6 months", status: "Opened Jun 12", used: 82, flag: "warn" },
  { name: "Mineral SPF 50", window: "12 months", status: "Almost empty", used: 90, flag: "low" },
  { name: "Barrier cream", window: "12 months", status: "Opened Aug 20", used: 12 },
  { name: "Gentle gel cleanser", window: "12 months", status: "Opened Jul 3", used: 22 },
];

export const useByPoints = [
  "Opening dates logged with one tap",
  "Reminders two weeks ahead",
  "Running-low alerts for sunscreen and cleansers",
];

export const ingredientNotes: IngredientNote[] = [
  {
    name: "Niacinamide",
    image: { src: "/images/molecule-niacinamide.png", alt: "Line drawing of the niacinamide molecule", width: 253, height: 199 },
    body: "A form of vitamin B3 found in many serums and moisturizers. Dewy treats it as easy to pair and slots it into either routine.",
  },
  {
    name: "Retinol",
    image: { src: "/images/molecule-retinol.png", alt: "Line drawing of the retinol molecule", width: 512, height: 144 },
    body: "A vitamin A derivative used in evening routines. Dewy schedules it a few nights a week to start and keeps exfoliating acids on other nights.",
  },
  {
    name: "Hyaluronic acid",
    image: { src: "/images/texture-gel-bubbles.png", alt: "Clear gel bubbles", width: 512, height: 512 },
    body: "A humectant that shows up in essences and serums. Dewy places it on damp skin, before your moisturizer.",
  },
];
