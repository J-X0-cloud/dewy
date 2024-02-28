import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";
import { colors, fonts, gradients, radii } from "@/constants/theme";

export function AssistantNote({ headline, body }: { headline: string; body: string }) {
  return (
    <LinearGradient colors={gradients.assistant} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.note}>
      <Text style={styles.spark}>✦</Text>
      <Text style={styles.body}>
        <Text style={styles.headline}>{headline}</Text> {body}
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  note: { flexDirection: "row", gap: 10, borderRadius: radii.md + 2, padding: 14 },
  spark: { color: colors.hydration, fontSize: 15 },
  body: { flex: 1, fontFamily: fonts.ui, fontSize: 13, lineHeight: 18, color: colors.ink2 },
  headline: { fontFamily: fonts.uiMedium, color: colors.ink },
});
