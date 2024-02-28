import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "@/constants/theme";
import type { TimelineEntry } from "@/lib/types";
import { TextureMarker } from "./TextureMarker";

export function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <View style={styles.row}>
      <TextureMarker variant={entry.texture} />
      <View style={styles.text}>
        <Text style={styles.label}>{entry.label}</Text>
        <Text style={styles.body}>{entry.body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 12, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#F0E4DF" },
  text: { flex: 1 },
  label: { fontFamily: fonts.uiMedium, fontSize: 15, color: colors.ink },
  body: { fontFamily: fonts.ui, fontSize: 13, lineHeight: 18, color: colors.ink2 },
});
