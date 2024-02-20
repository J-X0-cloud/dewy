import { useId } from "react";
import { ringDash } from "@/lib/chart";

interface ProgressRingProps {
  value: number;
  total: number;
  size?: number;
  label?: string;
}

const RADIUS = 18;

export function ProgressRing({ value, total, size = 46, label }: ProgressRingProps) {
  const gradientId = useId();
  const { circumference, offset } = ringDash(value, total, RADIUS);
  return (
    <svg className="ring" width={size} height={size} viewBox="0 0 44 44" aria-hidden="true">
      <circle cx="22" cy="22" r={RADIUS} fill="none" stroke="#F1E3DD" strokeWidth="5" />
      <circle
        cx="22"
        cy="22"
        r={RADIUS}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={circumference.toFixed(1)}
        strokeDashoffset={offset.toFixed(1)}
        transform="rotate(-90 22 22)"
        style={{ transition: "stroke-dashoffset .4s ease" }}
      />
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1">
          <stop offset="0" stopColor="#E7A98F" />
          <stop offset="1" stopColor="#8E5A7D" />
        </linearGradient>
      </defs>
      <text x="22" y="26" textAnchor="middle" fontSize="11" fontWeight="600" fill="#3A2334">
        {label ?? `${value}/${total}`}
      </text>
    </svg>
  );
}
