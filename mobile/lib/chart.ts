export interface Point {
  x: number;
  y: number;
}

export interface ChartBox {
  width: number;
  height: number;
  padX: number;
  padY: number;
}

const SCORE_MIN = 1;
const SCORE_MAX = 5;

export function makeBox(width: number, height: number): ChartBox {
  return { width, height, padX: 10, padY: 12 };
}

/** Maps 1–5 check-in scores onto chart coordinates. */
export function scorePoints(values: number[], box: ChartBox): Point[] {
  const innerW = box.width - box.padX * 2;
  const innerH = box.height - box.padY * 2;
  const steps = Math.max(values.length - 1, 1);
  return values.map((v, i) => ({
    x: box.padX + (i * innerW) / steps,
    y: box.height - box.padY - ((v - SCORE_MIN) * innerH) / (SCORE_MAX - SCORE_MIN),
  }));
}

export function polyline(points: Point[]): string {
  return points.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
}

export function areaUnder(points: Point[], box: ChartBox): string {
  const base = box.height - box.padY;
  return `${box.padX},${base} ${polyline(points)} ${box.width - box.padX},${base}`;
}

export function gridYs(box: ChartBox): number[] {
  const steps = SCORE_MAX - SCORE_MIN;
  const innerH = box.height - box.padY * 2;
  return Array.from({ length: steps + 1 }, (_, k) => box.height - box.padY - (k * innerH) / steps);
}

export function ringDash(value: number, total: number, radius: number) {
  const circumference = 2 * Math.PI * radius;
  const ratio = total === 0 ? 0 : Math.min(Math.max(value / total, 0), 1);
  return { circumference, offset: circumference * (1 - ratio) };
}
