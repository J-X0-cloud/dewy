import Svg, { Circle, Path, Rect } from "react-native-svg";

export type TabIconName = "today" | "checkin" | "routine" | "shelf" | "progress";

export function TabIcon({ name, color, size = 24 }: { name: TabIconName; color: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      {name === "today" && <Path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />}
      {name === "checkin" && (
        <>
          <Circle cx="12" cy="12" r="9" fill="none" stroke={color} strokeWidth={2} />
          <Path d="M8 12.5l2.6 2.5L16 9.5" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" />
        </>
      )}
      {name === "routine" && (
        <>
          <Rect x="4" y="4" width="16" height="4" rx="2" />
          <Rect x="4" y="10" width="16" height="4" rx="2" />
          <Rect x="4" y="16" width="10" height="4" rx="2" />
        </>
      )}
      {name === "shelf" && (
        <>
          <Rect x="5" y="3" width="5" height="18" rx="2" />
          <Rect x="12" y="8" width="7" height="13" rx="2" />
        </>
      )}
      {name === "progress" && (
        <Path
          d="M3 17l5-5 4 3 8-8"
          fill="none"
          stroke={color}
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </Svg>
  );
}
