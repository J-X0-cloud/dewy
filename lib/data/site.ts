import type { NavLink } from "@/types/content";

export const site = {
  name: "Dewy",
  url: "https://dewy.com",
  email: "hello@dewy.com",
  themeColor: "#FAF5F1",
  description:
    "Dewy is an AI skincare routine app: quick skin check-ins, AM and PM routines built from your own shelf, product tracking and a progress timeline. No selfies required.",
  tagline:
    "A calm, AI-assisted skincare routine app. Check in, build your AM and PM routine, keep your shelf in order and watch how your skin feels over time.",
  disclaimer:
    "Dewy is a routine and journaling app, not a medical device, and it doesn't diagnose or treat skin conditions. For any skin concern, talk to a licensed professional.",
  copyright: "© 2026 Dewy. Made in Los Angeles.",
} as const;

export const mainNav: NavLink[] = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/shelf", label: "Product shelf" },
  { href: "/pricing", label: "Pricing" },
  { href: "/app", label: "App preview" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Product",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/shelf", label: "Product shelf" },
      { href: "/pricing", label: "Pricing" },
      { href: "/app", label: "App preview" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/how-it-works#checkin", label: "Skin check-ins" },
      { href: "/how-it-works#routine", label: "Routine builder" },
      { href: "/how-it-works#progress", label: "Progress timeline" },
      { href: "/pricing#faq", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "mailto:hello@dewy.com", label: "hello@dewy.com" },
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
      { href: "mailto:hello@dewy.com?subject=Press", label: "Press kit" },
    ],
  },
];

/** Store listings go live with the public launch; until then both buttons stay on-page. */
export const storeLinks = {
  ios: process.env.NEXT_PUBLIC_APP_STORE_URL || "#",
  android: process.env.NEXT_PUBLIC_PLAY_STORE_URL || "#",
} as const;
