import { Pressable, StyleSheet, Text } from "react-native";
import { colors, fonts, radii } from "@/constants/theme";

interface ChipProps {
  label: string;
  selected?: boolean;
  tone?: "outline" | "peach" | "mint" | "white";
  onPress?: () => void;
}

const TONE_BG = { outline: colors.card, peach: "#FBE3D6", mint: "#DDF0EB", white: colors.card } as const;

export function Chip({ label, selected = false, tone = "outline", onPress }: ChipProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      accessibilityRole={onPress ? "button" : "text"}
      accessibilityState={onPress ? { selected } : undefined}
      style={[
        styles.chip,
        { backgroundColor: TONE_BG[tone] },
        tone === "outline" && styles.outline,
        selected && styles.selected,
      ]}
    >
      <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: { borderRadius: radii.pill, paddingVertical: 7, paddingHorizontal: 12 },
  outline: { borderWidth: 1, borderColor: colors.line },
  selected: { backgroundColor: colors.ink, borderColor: colors.ink },
  label: { fontFamily: fonts.ui, fontSize: 13, color: colors.ink },
  selectedLabel: { color: "#fff" },
});
