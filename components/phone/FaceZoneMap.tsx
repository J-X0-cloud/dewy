import { useId } from "react";

/** Illustrated face-zone map used on check-ins in place of a camera. */
export function FaceZoneMap() {
  const uid = useId();
  const skin = `${uid}-skin`;
  const blur = `${uid}-blur`;
  return (
    <svg
      className="zones"
      viewBox="0 0 200 230"
      role="img"
      aria-label="Illustrated face-zone map with forehead, T-zone, cheeks and chin"
    >
      <defs>
        <radialGradient id={skin} cx=".5" cy=".42" r=".6">
          <stop offset="0" stopColor="#FCE9DF" />
          <stop offset="1" stopColor="#F2D2C3" />
        </radialGradient>
        <filter id={blur} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>
      <path d="M78 196 Q76 222 60 230 H140 Q124 222 122 196" fill="#F2D2C3" />
      <ellipse cx="100" cy="104" rx="70" ry="92" fill={`url(#${skin})`} />
      <g filter={`url(#${blur})`}>
        <ellipse cx="100" cy="46" rx="40" ry="16" fill="#CDB9E6" opacity=".8" />
        <ellipse cx="100" cy="112" rx="11" ry="34" fill="#A9D8CF" opacity=".85" />
        <ellipse cx="60" cy="128" rx="20" ry="16" fill="#EFA7AE" opacity=".7" />
        <ellipse cx="140" cy="128" rx="20" ry="16" fill="#EFA7AE" opacity=".45" />
        <ellipse cx="100" cy="178" rx="22" ry="11" fill="#F0B793" opacity=".85" />
      </g>
      <path
        d="M66 92 q10 -6 20 0 M114 92 q10 -6 20 0"
        stroke="#C99A8B"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M88 150 q12 7 24 0" stroke="#C99A8B" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <g fill="#fff" stroke="#6B3F5E" strokeWidth="2">
        <circle cx="100" cy="46" r="4.5" />
        <circle cx="100" cy="116" r="4.5" />
        <circle cx="60" cy="128" r="4.5" />
        <circle cx="100" cy="178" r="4.5" />
      </g>
    </svg>
  );
}
