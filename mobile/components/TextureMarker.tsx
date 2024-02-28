import Svg, { Circle, Defs, RadialGradient, Rect, Stop } from "react-native-svg";

/** Abstract swatches that stand in for progress photos. */
export function TextureMarker({ variant, size = 40 }: { variant: 1 | 2 | 3; size?: number }) {
  const r = size * 0.35;
  return (
    <Svg width={size} height={size} viewBox="0 0 40 40">
      <Defs>
        <RadialGradient id={`tx${variant}-a`} cx="0.7" cy="0.7" r="0.7">
          <Stop offset="0" stopColor={variant === 1 ? "#EFA98C" : variant === 2 ? "#CBE6E0" : "#F2C5CB"} />
          <Stop offset="1" stopColor={variant === 1 ? "#F8D9C9" : variant === 2 ? "#DCD2EF" : "#FBE8EA"} />
        </RadialGradient>
        <RadialGradient id={`tx${variant}-b`} cx="0.3" cy="0.3" r="0.35">
          <Stop offset="0" stopColor="#fff" stopOpacity={0.95} />
          <Stop offset="1" stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
      </Defs>
      <Rect width="40" height="40" rx={r} fill={`url(#tx${variant}-a)`} />
      {variant === 3
        ? [6, 12, 18].map((rad) => (
            <Circle key={rad} cx="16" cy="16" r={rad} fill="none" stroke="#F2C5CB" strokeWidth={3} opacity={0.8} />
          ))
        : null}
      <Rect width="40" height="40" rx={r} fill={`url(#tx${variant}-b)`} />
    </Svg>
  );
}
