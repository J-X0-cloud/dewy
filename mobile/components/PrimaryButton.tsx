import { Pressable, StyleSheet, Text } from "react-native";
import { colors, fonts, radii } from "@/constants/theme";

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  variant?: "solid" | "ghost";
}

export function PrimaryButton({ label, onPress, variant = "solid" }: PrimaryButtonProps) {
  const ghost = variant === "ghost";
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [styles.base, ghost ? styles.ghost : styles.solid, pressed && styles.pressed]}
    >
      <Text style={[styles.label, ghost && styles.ghostLabel]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { borderRadius: radii.pill, paddingVertical: 14, alignItems: "center" },
  solid: { backgroundColor: colors.ink },
  ghost: { backgroundColor: colors.card, borderWidth: 1, borderStyle: "dashed", borderColor: "#D8C3CF" },
  pressed: { opacity: 0.85, transform: [{ scale: 0.99 }] },
  label: { fontFamily: fonts.uiMedium, fontSize: 15, color: "#fff" },
  ghostLabel: { color: colors.plum },
});
