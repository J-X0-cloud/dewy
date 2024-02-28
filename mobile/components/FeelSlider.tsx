import { LinearGradient } from "expo-linear-gradient";
import { useRef, useState } from "react";
import { PanResponder, StyleSheet, Text, View, type LayoutChangeEvent } from "react-native";
import { colors, fonts, gradients } from "@/constants/theme";
import type { FeelScale } from "@/lib/types";

const TRACK: Record<FeelScale["tone"], readonly [string, string]> = {
  peach: gradients.sliderPeach,
  mint: gradients.sliderMint,
  lilac: gradients.sliderLilac,
};

const THUMB = 22;

interface FeelSliderProps {
  scale: FeelScale;
  value: number;
  onChange: (value: number) => void;
}

const clamp = (n: number) => Math.round(Math.min(100, Math.max(0, n)));

export function FeelSlider({ scale, value, onChange }: FeelSliderProps) {
  const [width, setWidth] = useState(0);
  const widthRef = useRef(0);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const responder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e) => {
        if (widthRef.current) onChangeRef.current(clamp((e.nativeEvent.locationX / widthRef.current) * 100));
      },
      onPanResponderMove: (e) => {
        if (widthRef.current) onChangeRef.current(clamp((e.nativeEvent.locationX / widthRef.current) * 100));
      },
    }),
  ).current;

  function onLayout(e: LayoutChangeEvent) {
    widthRef.current = e.nativeEvent.layout.width;
    setWidth(e.nativeEvent.layout.width);
  }

  return (
    <View style={styles.wrap}>
      <View style={styles.top}>
        <Text style={styles.label}>{scale.label}</Text>
        <Text style={styles.range}>
          {scale.low} ↔ {scale.high}
        </Text>
      </View>
      <View
        style={styles.hit}
        onLayout={onLayout}
        accessible
        accessibilityRole="adjustable"
        accessibilityLabel={scale.label}
        accessibilityValue={{ min: 0, max: 100, now: value }}
        accessibilityActions={[{ name: "increment" }, { name: "decrement" }]}
        onAccessibilityAction={(e) => onChange(clamp(value + (e.nativeEvent.actionName === "increment" ? 10 : -10)))}
        {...responder.panHandlers}
      >
        <LinearGradient colors={TRACK[scale.tone]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.track} />
        <View style={[styles.thumb, { left: (width * value) / 100 - THUMB / 2 }]} pointerEvents="none" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 6 },
  top: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
  label: { fontFamily: fonts.uiMedium, fontSize: 14, color: colors.ink },
  range: { fontFamily: fonts.ui, fontSize: 12, color: colors.ink2 },
  hit: { height: 26, justifyContent: "center" },
  track: { height: 9, borderRadius: 9 },
  thumb: {
    position: "absolute",
    width: THUMB,
    height: THUMB,
    borderRadius: THUMB / 2,
    backgroundColor: "#fff",
    shadowColor: "#4A2840",
    shadowOpacity: 0.35,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
});
