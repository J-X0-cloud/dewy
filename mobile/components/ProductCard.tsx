import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import { colors, fonts, gradients, radii } from "@/constants/theme";
import type { ShelfProduct } from "@/lib/types";
import { Bottle } from "./Bottle";

const FLAG = {
  warn: { label: "Use soon", bg: colors.warnBg, ink: colors.warnInk },
  low: { label: "Low", bg: colors.lowBg, ink: colors.lowInk },
} as const;

export function ProductCard({ product }: { product: ShelfProduct }) {
  const flag = product.flag ? FLAG[product.flag] : null;
  return (
    <View style={styles.card} accessible accessibilityLabel={`${product.name}, ${product.meta}`}>
      {flag ? (
        <Text style={[styles.flag, { backgroundColor: flag.bg, color: flag.ink }]}>{flag.label}</Text>
      ) : null}
      <LinearGradient colors={gradients.productTile} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.tile}>
        <Bottle shape={product.shape} fill={product.fill} />
      </LinearGradient>
      <Text style={styles.category}>{product.category.toUpperCase()}</Text>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.meta}>{product.meta}</Text>
      <Text style={styles.daypart}>{product.daypart}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, backgroundColor: colors.card, borderRadius: radii.md + 2, padding: 10, paddingBottom: 12 },
  flag: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 1,
    fontFamily: fonts.ui,
    fontSize: 10.5,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: radii.pill,
    overflow: "hidden",
  },
  tile: { height: 74, borderRadius: radii.sm + 2, alignItems: "center", justifyContent: "center", marginBottom: 8 },
  category: { fontFamily: fonts.ui, fontSize: 10.5, letterSpacing: 0.7, color: colors.ink2 },
  name: { fontFamily: fonts.uiMedium, fontSize: 14, lineHeight: 17, color: colors.ink },
  meta: { fontFamily: fonts.ui, fontSize: 12, color: colors.ink2 },
  daypart: {
    alignSelf: "flex-start",
    marginTop: 6,
    fontFamily: fonts.ui,
    fontSize: 11,
    color: colors.plum,
    backgroundColor: colors.chipTint,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radii.pill,
    overflow: "hidden",
  },
});
