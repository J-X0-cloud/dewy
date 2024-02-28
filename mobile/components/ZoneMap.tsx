import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, type ViewStyle } from "react-native";
import Svg, { Circle, Defs, Ellipse, G, Path, RadialGradient, Stop } from "react-native-svg";
import { colors, fonts, gradients, radii, shadow } from "@/constants/theme";
import type { FaceZone, ZoneNote } from "@/lib/types";

/** Tag placement around the illustration, matching the web mockup. */
const TAG_POSITION: Record<FaceZone, ViewStyle> = {
  forehead: { left: 10, top: 16 },
  tzone: { right: 10, top: 76 },
  cheeks: { left: 10, top: 130 },
  chin: { right: 10, bottom: 20 },
};

/** Soft glow per zone. Blur is approximated with layered, low-opacity ellipses. */
const ZONE_GLOW: { zone: FaceZone; cx: number; cy: number; rx: number; ry: number; fill: string; opacity: number }[] = [
  { zone: "forehead", cx: 100, cy: 46, rx: 40, ry: 16, fill: "#CDB9E6", opacity: 0.8 },
  { zone: "tzone", cx: 100, cy: 112, rx: 11, ry: 34, fill: "#A9D8CF", opacity: 0.85 },
  { zone: "cheeks", cx: 60, cy: 128, rx: 20, ry: 16, fill: "#EFA7AE", opacity: 0.7 },
  { zone: "cheeks", cx: 140, cy: 128, rx: 20, ry: 16, fill: "#EFA7AE", opacity: 0.45 },
  { zone: "chin", cx: 100, cy: 178, rx: 22, ry: 11, fill: "#F0B793", opacity: 0.85 },
];

const PINS: [number, number][] = [
  [100, 46],
  [100, 116],
  [60, 128],
  [100, 178],
];

interface ZoneMapProps {
  notes: ZoneNote[];
  activeZone: FaceZone | null;
  onSelectZone: (zone: FaceZone) => void;
}

export function ZoneMap({ notes, activeZone, onSelectZone }: ZoneMapProps) {
  return (
    <LinearGradient colors={gradients.zoneBackdrop} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.wrap}>
      <Svg
        width={200}
        height={230}
        viewBox="0 0 200 230"
        accessibilityLabel="Illustrated face-zone map with forehead, T-zone, cheeks and chin"
      >
        <Defs>
          <RadialGradient id="skin" cx="0.5" cy="0.42" r="0.6">
            <Stop offset="0" stopColor="#FCE9DF" />
            <Stop offset="1" stopColor="#F2D2C3" />
          </RadialGradient>
        </Defs>
        <Path d="M78 196 Q76 222 60 230 H140 Q124 222 122 196" fill="#F2D2C3" />
        <Ellipse cx="100" cy="104" rx="70" ry="92" fill="url(#skin)" />
        {ZONE_GLOW.map((g, i) => (
          <G key={i} opacity={activeZone && activeZone !== g.zone ? g.opacity * 0.45 : g.opacity}>
            <Ellipse cx={g.cx} cy={g.cy} rx={g.rx + 6} ry={g.ry + 6} fill={g.fill} opacity={0.35} />
            <Ellipse cx={g.cx} cy={g.cy} rx={g.rx} ry={g.ry} fill={g.fill} opacity={0.75} />
          </G>
        ))}
        <Path
          d="M66 92 q10 -6 20 0 M114 92 q10 -6 20 0"
          stroke="#C99A8B"
          strokeWidth={2.2}
          fill="none"
          strokeLinecap="round"
        />
        <Path d="M88 150 q12 7 24 0" stroke="#C99A8B" strokeWidth={2.2} fill="none" strokeLinecap="round" />
        <G fill="#fff" stroke={colors.plum} strokeWidth={2}>
          {PINS.map(([cx, cy]) => (
            <Circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={4.5} />
          ))}
        </G>
      </Svg>
      {notes.map((note) => (
        <Pressable
          key={note.zone}
          onPress={() => onSelectZone(note.zone)}
          accessibilityRole="button"
          accessibilityState={{ selected: activeZone === note.zone }}
          style={[styles.tag, TAG_POSITION[note.zone], activeZone === note.zone && styles.tagActive]}
        >
          <Text style={[styles.tagText, activeZone === note.zone && styles.tagTextActive]}>
            {note.label} · {note.feeling}
          </Text>
        </Pressable>
      ))}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 236,
    borderRadius: radii.lg + 4,
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  tag: {
    position: "absolute",
    backgroundColor: colors.card,
    borderRadius: radii.pill,
    paddingVertical: 4,
    paddingHorizontal: 10,
    ...shadow.soft,
  },
  tagActive: { backgroundColor: colors.ink },
  tagText: { fontFamily: fonts.ui, fontSize: 12, color: colors.ink },
  tagTextActive: { color: "#fff" },
});
