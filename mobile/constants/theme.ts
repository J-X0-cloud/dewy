/**
 * Dewy design tokens. Mirrors the CSS custom properties on the marketing site so
 * the app and the web preview stay visually identical.
 */

export const colors = {
  bg: "#FAF5F1",
  bg2: "#F4EAE4",
  card: "#FFFFFF",
  ink: "#2E1F2B",
  ink2: "#6A5664",
  plum: "#6B3F5E",
  plum2: "#8E5A7D",
  rose: "#EFB6BC",
  peach: "#F6D2BF",
  peach2: "#E7A98F",
  lilac: "#DCD2EF",
  mint: "#CBE6E0",
  sun: "#F6E2A6",
  line: "#EADCD5",
  hairline: "#F3E9E4",
  chipTint: "#F7EEF3",
  segment: "#F1E6E1",
  tabInactive: "#B3A2AC",
  tickBorder: "#E3D2CB",
  warnBg: "#FBE3D6",
  warnInk: "#9A4A2E",
  lowBg: "#FFF1C9",
  lowInk: "#7A5A08",
  hydration: "#C9795F",
  comfort: "#9C86C9",
  gridLine: "#EFE3DE",
} as const;

export const swatches = {
  mint: "#BFE0D9",
  lilac: "#D9D0EE",
  peach: "#F3C2A6",
  rose: "#F2C5CB",
  sun: "#F6E2A6",
  plum: "#B89AC4",
} as const;

export type SwatchName = keyof typeof swatches;

export const gradients = {
  tick: ["#E7A98F", "#8E5A7D"],
  uv: ["#FBE3D6", "#F6D2BF"],
  humidity: ["#E5F2EE", "#CBE6E0"],
  zoneBackdrop: ["#F5ECF6", "#FBEFE8"],
  assistant: ["#F4EEFA", "#FBEDE6"],
  productTile: ["#FBF4F0", "#F3E8E3"],
  sliderPeach: ["#FBE3D6", "#E7A98F"],
  sliderMint: ["#E5F2EE", "#8FCABD"],
  sliderLilac: ["#EFE8F8", "#AE9AD6"],
} as const satisfies Record<string, readonly [string, string]>;

export const fonts = {
  serif: "InstrumentSerif_400Regular",
  serifItalic: "InstrumentSerif_400Regular_Italic",
  sans: "Inter_400Regular",
  sansMedium: "Inter_500Medium",
  sansSemibold: "Inter_600SemiBold",
  ui: "PlusJakartaSans_400Regular",
  uiMedium: "PlusJakartaSans_500Medium",
} as const;

export const radii = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 28,
  pill: 999,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const type = {
  kicker: { fontFamily: fonts.ui, fontSize: 13, letterSpacing: 0.4, color: colors.ink2 },
  title: { fontFamily: fonts.serif, fontSize: 34, lineHeight: 36, color: colors.ink },
  body: { fontFamily: fonts.ui, fontSize: 15, lineHeight: 20, color: colors.ink },
  bodyMedium: { fontFamily: fonts.uiMedium, fontSize: 15, lineHeight: 20, color: colors.ink },
  caption: { fontFamily: fonts.ui, fontSize: 13, lineHeight: 17, color: colors.ink2 },
  micro: { fontFamily: fonts.ui, fontSize: 11.5, lineHeight: 15, color: colors.ink2 },
} as const;

export const shadow = {
  card: {
    shadowColor: "#4A2840",
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  soft: {
    shadowColor: "#4A2840",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
} as const;
