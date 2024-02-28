import { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "@/components/Card";
import { Chip } from "@/components/Chip";
import { ProgressRing } from "@/components/ProgressRing";
import { Screen } from "@/components/Screen";
import { StepRow } from "@/components/StepRow";
import { WeatherTiles } from "@/components/WeatherTiles";
import { colors, fonts, spacing } from "@/constants/theme";
import { morningSteps, profile, weather, weatherTip } from "@/lib/data";
import { dayLabel, greetingFor, routineMeta } from "@/lib/format";

const ROUTINE_MINUTES = 4;

export default function TodayScreen() {
  const now = useMemo(() => new Date(), []);
  const [done, setDone] = useState<Set<string>>(
    () => new Set(morningSteps.filter((s) => s.done).map((s) => s.id)),
  );

  function toggle(id: string) {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <Screen kicker={dayLabel(now)} title={greetingFor(now, profile.firstName)}>
      <WeatherTiles readings={weather} tip={weatherTip} />

      <Card>
        <View style={styles.head}>
          <ProgressRing value={done.size} total={morningSteps.length} />
          <View>
            <Text style={styles.routineTitle}>Morning routine</Text>
            <Text style={styles.routineMeta}>{routineMeta(done.size, morningSteps.length, ROUTINE_MINUTES)}</Text>
          </View>
        </View>
        {morningSteps.map((step, i) => (
          <StepRow key={step.id} step={step} done={done.has(step.id)} onToggle={toggle} first={i === 0} />
        ))}
      </Card>

      <View style={styles.chips}>
        <Chip label={`Evening check-in · ${profile.eveningCheckinTime}`} tone="peach" />
        <Chip label={`${profile.streakDays}-day streak`} tone="mint" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  head: { flexDirection: "row", alignItems: "center", gap: spacing.md, marginBottom: spacing.xs },
  routineTitle: { fontFamily: fonts.uiMedium, fontSize: 17, color: colors.ink },
  routineMeta: { fontFamily: fonts.ui, fontSize: 13, color: colors.ink2 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm },
});
