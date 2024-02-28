import { useMemo, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { Chip } from "@/components/Chip";
import { ProductCard } from "@/components/ProductCard";
import { Screen } from "@/components/Screen";
import { colors, fonts, radii, spacing } from "@/constants/theme";
import { profile, shelfFilters, shelfProducts } from "@/lib/data";
import type { ShelfFilter, ShelfProduct } from "@/lib/types";

function chunkPairs<T>(items: T[]): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += 2) rows.push(items.slice(i, i + 2));
  return rows;
}

export default function ShelfScreen() {
  const [filter, setFilter] = useState<ShelfFilter>("All");
  const [query, setQuery] = useState("");

  const visible = useMemo<ShelfProduct[]>(() => {
    const q = query.trim().toLowerCase();
    return shelfProducts.filter(
      (p) => (filter === "All" || p.filter === filter) && (!q || p.name.toLowerCase().includes(q)),
    );
  }, [filter, query]);

  return (
    <Screen
      kicker="Product shelf"
      title="My shelf"
      titleAccessory={<Text style={styles.count}>{profile.shelfCount}</Text>}
    >
      <View style={styles.search}>
        <Svg width={16} height={16} viewBox="0 0 20 20">
          <Circle cx="9" cy="9" r="6" fill="none" stroke={colors.ink2} strokeWidth={2} />
          <Path d="M14 14l4 4" stroke={colors.ink2} strokeWidth={2} strokeLinecap="round" />
        </Svg>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search or scan a barcode"
          placeholderTextColor={colors.ink2}
          style={styles.input}
          returnKeyType="search"
        />
      </View>

      <View style={styles.filters}>
        {shelfFilters.map((f) => (
          <Chip key={f} label={f} tone="white" selected={filter === f} onPress={() => setFilter(f)} />
        ))}
      </View>

      <View style={styles.grid}>
        {chunkPairs(visible).map((row) => (
          <View key={row.map((p) => p.id).join("-")} style={styles.row}>
            {row.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {row.length === 1 ? <View style={styles.spacer} /> : null}
          </View>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  count: {
    fontFamily: fonts.ui,
    fontSize: 13,
    backgroundColor: colors.lilac,
    borderRadius: radii.pill,
    paddingHorizontal: 9,
    paddingVertical: 2,
    overflow: "hidden",
    color: colors.ink,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.card,
    borderRadius: radii.md,
    paddingHorizontal: 14,
    paddingVertical: 11,
  },
  input: { flex: 1, fontFamily: fonts.ui, fontSize: 14, color: colors.ink, padding: 0 },
  filters: { flexDirection: "row", gap: spacing.sm - 2 },
  grid: { gap: spacing.sm + 2 },
  row: { flexDirection: "row", gap: spacing.sm + 2 },
  spacer: { flex: 1 },
});
