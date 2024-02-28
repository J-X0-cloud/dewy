import Svg, { Circle, Defs, LinearGradient, Stop, Text as SvgText } from "react-native-svg";
import { colors, gradients } from "@/constants/theme";
import { ringDash } from "@/lib/chart";

const RADIUS = 18;

export function ProgressRing({ value, total, size = 52 }: { value: number; total: number; size?: number }) {
  const { circumference, offset } = ringDash(value, total, RADIUS);
  return (
    <Svg width={size} height={size} viewBox="0 0 44 44" accessibilityLabel={`${value} of ${total} steps done`}>
      <Defs>
        <LinearGradient id="ring" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor={gradients.tick[0]} />
          <Stop offset="1" stopColor={gradients.tick[1]} />
        </LinearGradient>
      </Defs>
      <Circle cx="22" cy="22" r={RADIUS} fill="none" stroke="#F1E3DD" strokeWidth={5} />
      <Circle
        cx="22"
        cy="22"
        r={RADIUS}
        fill="none"
        stroke="url(#ring)"
        strokeWidth={5}
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        rotation={-90}
        origin="22, 22"
      />
      <SvgText x="22" y="26" textAnchor="middle" fontSize={11} fontWeight="600" fill={colors.ink}>
        {`${value}/${total}`}
      </SvgText>
    </Svg>
  );
}
