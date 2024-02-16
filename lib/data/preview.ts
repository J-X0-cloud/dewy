export type PreviewScreenId = "today" | "checkin" | "routine" | "shelf" | "progress";

export interface PreviewScreen {
  id: PreviewScreenId;
  tab: string;
  heading: string;
  description: string;
}

export const previewScreens: PreviewScreen[] = [
  {
    id: "today",
    tab: "Today",
    heading: "Morning at a glance",
    description:
      "The home screen opens on today's routine, local UV and humidity, and a single tip. Tap a step to tick it off; the ring fills as you go.",
  },
  {
    id: "checkin",
    tab: "Check-in",
    heading: "Ten-second check-in",
    description:
      "An illustrated zone map, three sliders and a few tags. No camera and no face photos, just how your skin feels today.",
  },
  {
    id: "routine",
    tab: "Routine",
    heading: "AM / PM routine builder",
    description:
      "Flip between morning and evening. The assistant orders steps, spaces out actives and explains every change it makes.",
  },
  {
    id: "shelf",
    tab: "Shelf",
    heading: "Your product shelf",
    description:
      "Everything you own, filed by step, with opening dates, use-by reminders and running-low alerts.",
  },
  {
    id: "progress",
    tab: "Progress",
    heading: "Twelve-week timeline",
    description:
      "Self-reported hydration and comfort over time, with the routine changes you made pinned along the way.",
  },
];

export const previewPrinciples = [
  {
    title: "Built as real UI",
    body: "Every screen here is live HTML and CSS drawn in Dewy's design system, not a flat screenshot, so copy and data stay in sync with the app.",
  },
  {
    title: "Works without JavaScript",
    body: "Screen switching and the AM / PM toggle run on plain HTML controls. A few lines of script add swipe and arrow-key support.",
  },
  {
    title: "Privacy first",
    body: "Check-ins use an illustrated zone map and textured markers instead of face photos, on every screen.",
  },
];
