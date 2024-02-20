import { useId } from "react";
import { chartBox, gridLines, scorePoints, toArea, toPolyline } from "@/lib/chart";
import type { TrendPoint } from "@/types/skincare";

interface TrendChartProps {
  data: TrendPoint[];
  width?: number;
  height?: number;
  className?: string;
}

export function TrendChart({ data, width = 260, height = 110, className = "chart" }: TrendChartProps) {
  const areaId = useId();
  const box = chartBox(width, height);
  const hydration = scorePoints(
    data.map((d) => d.hydration),
    box,
  );
  const comfort = scorePoints(
    data.map((d) => d.comfort),
    box,
  );
  const last = hydration[hydration.length - 1];

  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Twelve-week line chart: self-reported hydration and comfort both trend upward"
    >
      <defs>
        <linearGradient id={areaId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E7A98F" stopOpacity=".45" />
          <stop offset="1" stopColor="#E7A98F" stopOpacity="0" />
        </linearGradient>
      </defs>
      {gridLines(box).map((y) => (
        <line key={y} x1={box.padX} x2={width - box.padX} y1={y} y2={y} stroke="#EFE3DE" strokeWidth="1" />
      ))}
      <polygon points={toArea(hydration, box)} fill={`url(#${areaId})`} />
      <polyline
        points={toPolyline(comfort)}
        fill="none"
        stroke="#9C86C9"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="4 4"
      />
      <polyline
        points={toPolyline(hydration)}
        fill="none"
        stroke="#C9795F"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {last ? <circle cx={last.x} cy={last.y} r="4.5" fill="#fff" stroke="#C9795F" strokeWidth="2.4" /> : null}
    </svg>
  );
}
