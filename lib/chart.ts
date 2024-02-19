export interface ChartBox {
  width: number;
  height: number;
  /** Horizontal inset from each edge. */
  padX: number;
  /** Vertical inset from the top and bottom edges. */
  padY: number;
}

export interface Point {
  x: number;
  y: number;
}

/** Self-reported check-in scores run from 1 (low) to 5 (high). */
export const SCORE_MIN = 1;
export const SCORE_MAX = 5;

export function chartBox(width: number, height: number): ChartBox {
  return { width, height, padX: 10, padY: 12 };
}

export function scorePoints(values: number[], box: ChartBox): Point[] {
  const innerW = box.width - box.padX * 2;
  const innerH = box.height - box.padY * 2;
  const steps = Math.max(values.length - 1, 1);
  return values.map((value, i) => ({
    x: box.padX + (i * innerW) / steps,
    y: box.height - box.padY - ((value - SCORE_MIN) * innerH) / (SCORE_MAX - SCORE_MIN),
  }));
}

export function toPolyline(points: Point[]): string {
  return points.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
}

/** Closed polygon that fills the area under a line down to the baseline. */
export function toArea(points: Point[], box: ChartBox): string {
  const baseline = box.height - box.padY;
  return `${box.padX},${baseline} ${toPolyline(points)} ${box.width - box.padX},${baseline}`;
}

/** Y positions of evenly spaced horizontal grid lines, one per score step. */
export function gridLines(box: ChartBox): number[] {
  const count = SCORE_MAX - SCORE_MIN;
  const innerH = box.height - box.padY * 2;
  return Array.from({ length: count + 1 }, (_, k) => box.height - box.padY - (k * innerH) / count);
}

/** Stroke-dash values for a circular progress ring. */
export function ringDash(value: number, total: number, radius: number) {
  const circumference = 2 * Math.PI * radius;
  const ratio = total === 0 ? 0 : Math.min(Math.max(value / total, 0), 1);
  return { circumference, offset: circumference * (1 - ratio) };
}
