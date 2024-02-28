import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, fonts, radii, shadow } from "@/constants/theme";

interface SegmentedControlProps<T extends string> {
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}

export function SegmentedControl<T extends string>({ options, value, onChange }: SegmentedControlProps<T>) {
  return (
    <View style={styles.track} accessibilityRole="tablist">
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <Pressable
            key={option.value}
            onPress={() => onChange(option.value)}
            accessibilityRole="tab"
            accessibilityState={{ selected }}
            style={[styles.segment, selected && styles.selected]}
          >
            <Text style={[styles.label, selected && styles.selectedLabel]}>{option.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  track: { flexDirection: "row", backgroundColor: colors.segment, borderRadius: radii.pill, padding: 4 },
  segment: { flex: 1, alignItems: "center", paddingVertical: 9, borderRadius: radii.pill },
  selected: { backgroundColor: colors.card, ...shadow.soft },
  label: { fontFamily: fonts.uiMedium, fontSize: 14, color: colors.ink2 },
  selectedLabel: { color: colors.ink },
});
