import type { ReactNode } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, fonts, spacing, type } from "@/constants/theme";

interface ScreenProps {
  kicker: string;
  title: string;
  /** Optional element rendered inline after the title, e.g. a count pill. */
  titleAccessory?: ReactNode;
  children: ReactNode;
}

export function Screen({ kicker, title, titleAccessory, children }: ScreenProps) {
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.kicker}>{kicker}</Text>
        <View style={styles.titleRow}>
          <Text style={styles.title} accessibilityRole="header">
            {title}
          </Text>
          {titleAccessory}
        </View>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  content: { paddingHorizontal: spacing.xl - 4, paddingBottom: spacing.xxl, gap: spacing.md },
  kicker: { ...type.kicker, marginTop: spacing.md },
  titleRow: { flexDirection: "row", alignItems: "center", gap: spacing.sm, marginTop: -spacing.sm },
  title: { fontFamily: fonts.serif, fontSize: 34, lineHeight: 38, color: colors.ink, letterSpacing: -0.3 },
});
