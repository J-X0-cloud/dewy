import type { Daypart } from "@/types/skincare";

/**
 * Deterministic layering rules that sit underneath the assistant. The language model
 * proposes and explains changes; these rules keep every routine it returns sane.
 */

export type StepKind =
  | "cleanser"
  | "toner"
  | "essence"
  | "serum"
  | "treatment"
  | "moisturizer"
  | "oil"
  | "sunscreen";

export type Active = "retinoid" | "aha" | "bha" | "vitamin-c" | "niacinamide" | "benzoyl-peroxide";

export interface ShelfItem {
  id: string;
  name: string;
  kind: StepKind;
  actives: Active[];
}

export interface PlannedStep {
  productId: string;
  name: string;
  kind: StepKind;
  days: Weekday[];
  waitSeconds?: number;
}

export interface PlannedRoutine {
  am: PlannedStep[];
  pm: PlannedStep[];
  notes: string[];
}

export type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

export const WEEK: Weekday[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/** Thinnest texture first, richest last. Sunscreen always closes the morning. */
const LAYER_ORDER: Record<StepKind, number> = {
  cleanser: 0,
  toner: 1,
  essence: 2,
  serum: 3,
  treatment: 4,
  moisturizer: 5,
  oil: 6,
  sunscreen: 7,
};

const RETINOID_NIGHTS: Weekday[] = ["Mon", "Wed", "Fri"];
const EXFOLIANT_NIGHTS: Weekday[] = ["Sat"];

const isExfoliant = (item: ShelfItem) => item.actives.some((a) => a === "aha" || a === "bha");
const has = (item: ShelfItem, active: Active) => item.actives.includes(active);

function daypartsFor(item: ShelfItem): Daypart[] {
  if (item.kind === "sunscreen" || has(item, "vitamin-c")) return ["am"];
  if (has(item, "retinoid") || isExfoliant(item) || item.kind === "oil") return ["pm"];
  return ["am", "pm"];
}

function scheduleFor(item: ShelfItem, daypart: Daypart): Weekday[] {
  if (daypart === "pm" && has(item, "retinoid")) return RETINOID_NIGHTS;
  if (daypart === "pm" && isExfoliant(item)) return EXFOLIANT_NIGHTS;
  return WEEK;
}

function waitFor(item: ShelfItem): number | undefined {
  if (has(item, "vitamin-c") || has(item, "retinoid")) return 60;
  return undefined;
}

function byLayer(a: PlannedStep, b: PlannedStep): number {
  return LAYER_ORDER[a.kind] - LAYER_ORDER[b.kind];
}

export function planRoutine(shelf: ShelfItem[]): PlannedRoutine {
  const am: PlannedStep[] = [];
  const pm: PlannedStep[] = [];
  const notes: string[] = [];

  for (const item of shelf) {
    for (const daypart of daypartsFor(item)) {
      const step: PlannedStep = {
        productId: item.id,
        name: item.name,
        kind: item.kind,
        days: scheduleFor(item, daypart),
        waitSeconds: waitFor(item),
      };
      (daypart === "am" ? am : pm).push(step);
    }
  }

  const exfoliants = shelf.filter(isExfoliant);
  if (exfoliants.length > 1) {
    notes.push("Two exfoliants found. Use one per routine and rotate the other.");
  }
  if (shelf.some((i) => has(i, "retinoid")) && exfoliants.length > 0) {
    notes.push("Retinol and exfoliating acids are on separate nights.");
  }
  if (shelf.some((i) => has(i, "retinoid")) && shelf.some((i) => has(i, "vitamin-c"))) {
    notes.push("Vitamin C moved to your morning, retinol stays in the evening.");
  }
  if (!shelf.some((i) => i.kind === "sunscreen")) {
    notes.push("No sunscreen on your shelf yet. Morning routines work best ending with SPF.");
  }

  return { am: am.sort(byLayer), pm: pm.sort(byLayer), notes };
}
