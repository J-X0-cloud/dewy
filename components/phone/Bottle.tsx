import type { BottleShape } from "@/types/skincare";

function Silhouette({ shape }: { shape: BottleShape }) {
  switch (shape) {
    case "pump":
      return (
        <>
          <rect x="18" y="4" width="8" height="8" rx="2" />
          <rect x="11" y="10" width="22" height="6" rx="2" />
          <rect x="8" y="16" width="28" height="42" rx="9" />
        </>
      );
    case "drop":
      return (
        <>
          <rect x="17" y="2" width="10" height="12" rx="5" />
          <rect x="14" y="13" width="16" height="7" rx="2" />
          <rect x="10" y="20" width="24" height="38" rx="7" />
        </>
      );
    case "tube":
      return (
        <>
          <rect x="15" y="50" width="14" height="8" rx="2" />
          <path d="M9 6h26l-3 44H12z" />
        </>
      );
    case "jar":
      return (
        <>
          <rect x="7" y="22" width="30" height="8" rx="3" />
          <rect x="5" y="29" width="34" height="27" rx="9" />
        </>
      );
  }
}

interface BottleProps {
  shape: BottleShape;
  fill: string;
  className?: "bt" | "bt-lg";
}

/** Unbranded product illustration; the pale panel stands in for a label. */
export function Bottle({ shape, fill, className = "bt" }: BottleProps) {
  return (
    <svg className={className} viewBox="0 0 44 60" aria-hidden="true">
      <g fill={fill}>
        <Silhouette shape={shape} />
      </g>
      <rect x="14" y="34" width="16" height="10" rx="2" fill="#fff" opacity=".55" />
    </svg>
  );
}
