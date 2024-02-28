import { StyleSheet, Text, View } from "react-native";
import { colors, fonts, radii, shadow, swatches } from "@/constants/theme";
import type { RoutineStep } from "@/lib/types";

export function RoutineStepRow({ step }: { step: RoutineStep }) {
  const fill = swatches[step.swatch];
  return (
    <View style={styles.row}>
      <Text style={styles.order}>{step.order}</Text>
      <View style={styles.bottle}>
        <View style={[styles.cap, { backgroundColor: fill, opacity: 0.8 }]} />
        <View style={[styles.body, { backgroundColor: fill }]} />
      </View>
      <View style={styles.text}>
        <Text style={styles.kind}>{step.kind}</Text>
        <Text style={styles.product}>{step.product}</Text>
      </View>
      {step.note ? <Text style={styles.note}>{step.note}</Text> : null}
      <View style={styles.grip} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
        {Array.from({ length: 6 }, (_, i) => (
          <View key={i} style={styles.gripDot} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
    backgroundColor: colors.card,
    borderRadius: radii.md + 2,
    paddingVertical: 10,
    paddingHorizontal: 12,
    ...shadow.soft,
  },
  order: { width: 12, fontFamily: fonts.ui, fontSize: 12, color: colors.ink2 },
  bottle: { alignItems: "center" },
  cap: { width: 10, height: 6, borderRadius: 2, marginBottom: -1 },
  body: { width: 18, height: 28, borderTopLeftRadius: 7, borderTopRightRadius: 7, borderRadius: 5 },
  text: { flex: 1 },
  kind: { fontFamily: fonts.uiMedium, fontSize: 15, color: colors.ink },
  product: { fontFamily: fonts.ui, fontSize: 13, color: colors.ink2 },
  note: { fontFamily: fonts.ui, fontSize: 12, color: colors.plum2 },
  grip: { width: 10, flexDirection: "row", flexWrap: "wrap", gap: 2 },
  gripDot: { width: 3, height: 3, borderRadius: 1.5, backgroundColor: "#CDBBC4" },
});
