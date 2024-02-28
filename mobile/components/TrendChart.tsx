import { useState } from "react";
import { StyleSheet, Text, View, type LayoutChangeEvent } from "react-native";
import Svg, { Circle, Defs, Line, LinearGradient, Polygon, Polyline, Stop } from "react-native-svg";
import { colors, fonts } from "@/constants/theme";
import { areaUnder, gridYs, makeBox, polyline, scorePoints } from "@/lib/chart";
import type { TrendPoint } from "@/lib/types";

interface TrendChartProps {
  data: TrendPoint[];
  months: string[];
  height?: number;
}

export function TrendChart({ data, months, height = 130 }: TrendChartProps) {
  const [width, setWidth] = useState(0);
  const onLayout = (e: LayoutChangeEvent) => setWidth(e.nativeEvent.layout.width);

  const box = makeBox(width || 1, height);
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
    <View>
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.swatch, { backgroundColor: colors.hydration }]} />
          <Text style={styles.legendText}>Hydration</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.swatch, styles.dashed]} />
          <Text style={styles.legendText}>Comfort</Text>
        </View>
        <Text style={[styles.legendText, styles.note]}>self-reported</Text>
      </View>
      <View onLayout={onLayout} accessibilityLabel="Twelve-week line chart: self-reported hydration and comfort both trend upward">
        {width > 0 ? (
          <Svg width={width} height={height}>
            <Defs>
              <LinearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0" stopColor="#E7A98F" stopOpacity={0.45} />
                <Stop offset="1" stopColor="#E7A98F" stopOpacity={0} />
              </LinearGradient>
            </Defs>
            {gridYs(box).map((y) => (
              <Line key={y} x1={box.padX} x2={width - box.padX} y1={y} y2={y} stroke={colors.gridLine} strokeWidth={1} />
            ))}
            <Polygon points={areaUnder(hydration, box)} fill="url(#area)" />
            <Polyline
              points={polyline(comfort)}
              fill="none"
              stroke={colors.comfort}
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="4 4"
            />
            <Polyline
              points={polyline(hydration)}
              fill="none"
              stroke={colors.hydration}
              strokeWidth={2.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {last ? <Circle cx={last.x} cy={last.y} r={4.5} fill="#fff" stroke={colors.hydration} strokeWidth={2.4} /> : null}
          </Svg>
        ) : (
          <View style={{ height }} />
        )}
      </View>
      <View style={styles.axis}>
        {months.map((m) => (
          <Text key={m} style={styles.legendText}>
            {m}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  legend: { flexDirection: "row", alignItems: "center", gap: 14, marginBottom: 6 },
  legendItem: { flexDirection: "row", alignItems: "center", gap: 6 },
  swatch: { width: 16, height: 3, borderRadius: 2 },
  dashed: { borderTopWidth: 3, borderColor: colors.comfort, borderStyle: "dashed", height: 0 },
  legendText: { fontFamily: fonts.ui, fontSize: 12, color: colors.ink2 },
  note: { marginLeft: "auto", fontSize: 11 },
  axis: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 8 },
});
