import Svg, { G, Path, Rect } from "react-native-svg";
import type { BottleShape } from "@/lib/types";

function Silhouette({ shape }: { shape: BottleShape }) {
  switch (shape) {
    case "pump":
      return (
        <>
          <Rect x="18" y="4" width="8" height="8" rx="2" />
          <Rect x="11" y="10" width="22" height="6" rx="2" />
          <Rect x="8" y="16" width="28" height="42" rx="9" />
        </>
      );
    case "drop":
      return (
        <>
          <Rect x="17" y="2" width="10" height="12" rx="5" />
          <Rect x="14" y="13" width="16" height="7" rx="2" />
          <Rect x="10" y="20" width="24" height="38" rx="7" />
        </>
      );
    case "tube":
      return (
        <>
          <Rect x="15" y="50" width="14" height="8" rx="2" />
          <Path d="M9 6h26l-3 44H12z" />
        </>
      );
    case "jar":
      return (
        <>
          <Rect x="7" y="22" width="30" height="8" rx="3" />
          <Rect x="5" y="29" width="34" height="27" rx="9" />
        </>
      );
  }
}

export function Bottle({ shape, fill, height = 56 }: { shape: BottleShape; fill: string; height?: number }) {
  return (
    <Svg height={height} width={(height * 44) / 60} viewBox="0 0 44 60">
      <G fill={fill}>
        <Silhouette shape={shape} />
      </G>
      <Rect x="14" y="34" width="16" height="10" rx="2" fill="#fff" opacity={0.55} />
    </Svg>
  );
}
