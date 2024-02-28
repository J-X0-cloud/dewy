import * as Haptics from "expo-haptics";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Chip } from "@/components/Chip";
import { FeelSlider } from "@/components/FeelSlider";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Screen } from "@/components/Screen";
import { ZoneMap } from "@/components/ZoneMap";
import { spacing } from "@/constants/theme";
import { checkinTags, defaultSelectedTags, feelScales, zoneNotes } from "@/lib/data";
import type { Checkin, FaceZone, ScaleId } from "@/lib/types";

export default function CheckinScreen() {
  const [activeZone, setActiveZone] = useState<FaceZone | null>(null);
  const [scales, setScales] = useState<Record<ScaleId, number>>(
    () => Object.fromEntries(feelScales.map((s) => [s.id, s.value])) as Record<ScaleId, number>,
  );
  const [tags, setTags] = useState<string[]>(defaultSelectedTags);

  function toggleTag(tag: string) {
    setTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  }

  function save() {
    const checkin: Checkin = { zones: zoneNotes, scales, tags, loggedAt: new Date().toISOString() };
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Alert.alert("Check-in saved", `${checkin.tags.length} tags logged. See you tomorrow evening.`);
  }

  return (
    <Screen kicker="Evening check-in" title="How does your skin feel?">
      <ZoneMap
        notes={zoneNotes}
        activeZone={activeZone}
        onSelectZone={(zone) => setActiveZone((z) => (z === zone ? null : zone))}
      />

      <View style={styles.sliders}>
        {feelScales.map((scale) => (
          <FeelSlider
            key={scale.id}
            scale={scale}
            value={scales[scale.id]}
            onChange={(value) => setScales((prev) => ({ ...prev, [scale.id]: value }))}
          />
        ))}
      </View>

      <View style={styles.tags}>
        {checkinTags.map((tag) => (
          <Chip key={tag} label={tag} selected={tags.includes(tag)} onPress={() => toggleTag(tag)} />
        ))}
      </View>

      <PrimaryButton label="Save check-in" onPress={save} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  sliders: { gap: spacing.md },
  tags: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm },
});
