import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AssistantNote } from "@/components/AssistantNote";
import { PrimaryButton } from "@/components/PrimaryButton";
import { RoutineStepRow } from "@/components/RoutineStepRow";
import { Screen } from "@/components/Screen";
import { SegmentedControl } from "@/components/SegmentedControl";
import { spacing } from "@/constants/theme";
import { amRoutine, pmRoutine, routineSuggestion } from "@/lib/data";
import type { Daypart } from "@/lib/types";

const DAYPARTS: { value: Daypart; label: string }[] = [
  { value: "am", label: "AM" },
  { value: "pm", label: "PM" },
];

export default function RoutineScreen() {
  const [daypart, setDaypart] = useState<Daypart>("am");
  const steps = daypart === "am" ? amRoutine : pmRoutine;

  return (
    <Screen kicker="Routine builder" title="Your routine">
      <SegmentedControl options={DAYPARTS} value={daypart} onChange={setDaypart} />
      <View style={styles.list}>
        {steps.map((step) => (
          <RoutineStepRow key={step.id} step={step} />
        ))}
      </View>
      <AssistantNote headline={routineSuggestion.headline} body={routineSuggestion.body} />
      <PrimaryButton label="+ Add a step" variant="ghost" onPress={() => undefined} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: { gap: spacing.sm },
});
