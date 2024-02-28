import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import { colors, fonts, gradients, radii, spacing } from "@/constants/theme";
import type { WeatherReading } from "@/lib/types";

export function WeatherTiles({ readings, tip }: { readings: WeatherReading[]; tip: string }) {
  return (
    <View style={styles.grid}>
      <View style={styles.row}>
        {readings.map((r) => (
          <LinearGradient
            key={r.label}
            colors={r.tone === "uv" ? gradients.uv : gradients.humidity}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.cell}
          >
            <Text style={styles.label}>{r.label}</Text>
            <Text style={styles.value}>{r.value}</Text>
            <Text style={styles.descriptor}>{r.descriptor}</Text>
          </LinearGradient>
        ))}
      </View>
      <View style={styles.tip}>
        <Text style={styles.tipText}>{tip}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { gap: spacing.sm },
  row: { flexDirection: "row", gap: spacing.sm },
  cell: { flex: 1, borderRadius: radii.md + 2, paddingVertical: 11, paddingHorizontal: 13 },
  label: { fontFamily: fonts.ui, fontSize: 12, color: colors.ink2 },
  value: { fontFamily: fonts.uiMedium, fontSize: 26, lineHeight: 30, color: colors.ink },
  descriptor: { fontFamily: fonts.ui, fontSize: 13, color: colors.ink },
  tip: { backgroundColor: colors.card, borderRadius: radii.md, paddingVertical: 11, paddingHorizontal: 13 },
  tipText: { fontFamily: fonts.ui, fontSize: 13, lineHeight: 18, color: colors.ink2 },
});
