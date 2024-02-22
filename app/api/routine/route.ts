import { NextResponse } from "next/server";
import { z } from "zod";
import { planRoutine } from "@/lib/routine-engine";

const stepKind = z.enum(["cleanser", "toner", "essence", "serum", "treatment", "moisturizer", "oil", "sunscreen"]);
const active = z.enum(["retinoid", "aha", "bha", "vitamin-c", "niacinamide", "benzoyl-peroxide"]);

const requestSchema = z.object({
  shelf: z
    .array(
      z.object({
        id: z.string().min(1).max(64),
        name: z.string().min(1).max(120),
        kind: stepKind,
        actives: z.array(active).max(6).default([]),
      }),
    )
    .min(1)
    .max(60),
});

/**
 * POST /api/routine
 * Builds a sample AM/PM routine from a list of shelf products. Powers the
 * "Start your shelf" flow on the web and mirrors the in-app layering rules.
 */
export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_request", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const routine = planRoutine(parsed.data.shelf);
  return NextResponse.json(routine, {
    headers: { "Cache-Control": "no-store" },
  });
}
