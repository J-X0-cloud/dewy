import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, fonts, gradients, radii } from "@/constants/theme";
import type { TodayStep } from "@/lib/types";

interface StepRowProps {
  step: TodayStep;
  done: boolean;
  onToggle: (id: string) => void;
  first?: boolean;
}

export function StepRow({ step, done, onToggle, first = false }: StepRowProps) {
  function handlePress() {
    void Haptics.selectionAsync();
    onToggle(step.id);
  }

  return (
    <Pressable
      onPress={handlePress}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: done }}
      accessibilityLabel={`Mark ${step.name} done`}
      style={[styles.row, !first && styles.divider]}
    >
      {done ? (
        <LinearGradient colors={gradients.tick} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.tick}>
          <View style={styles.checkmark} />
        </LinearGradient>
      ) : (
        <View style={[styles.tick, styles.tickEmpty]} />
      )}
      <View style={styles.body}>
        <Text style={styles.name}>{step.name}</Text>
        <Text style={styles.product}>{step.product}</Text>
      </View>
      <Text style={styles.meta}>{step.meta}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 12, paddingVertical: 10 },
  divider: { borderTopWidth: 1, borderTopColor: colors.hairline },
  tick: { width: 26, height: 26, borderRadius: 13, alignItems: "center", justifyContent: "center" },
  tickEmpty: { borderWidth: 2, borderColor: colors.tickBorder, backgroundColor: colors.card },
  checkmark: {
    width: 7,
    height: 12,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#fff",
    transform: [{ rotate: "45deg" }],
    marginTop: -3,
  },
  body: { flex: 1 },
  name: { fontFamily: fonts.uiMedium, fontSize: 15, color: colors.ink },
  product: { fontFamily: fonts.ui, fontSize: 13, color: colors.ink2 },
  meta: {
    fontFamily: fonts.ui,
    fontSize: 12,
    color: colors.plum2,
    backgroundColor: colors.chipTint,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.pill,
    overflow: "hidden",
  },
});
