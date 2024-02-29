# Dewy

AI skincare routines for iOS and Android: ten-second check-ins, AM/PM routines built from your own shelf, and a calm progress timeline.

**Live demo:** https://www.freelancerportfoliohub.com/jameslee/projects/dewy/index.html

![Preview](docs/preview.webp)

## Overview

This repository holds the Dewy marketing site and the Dewy mobile app.

- **Web** (repo root) is a Next.js App Router site: the home page walks through the whole loop, followed by
  How it works, Product shelf, Pricing and an interactive App preview where visitors tab or swipe between five
  working app screens.
- **Mobile** (`mobile/`) is an Expo Router app with the same five screens: Today, Check-in, Routine, Shelf and
  Progress.

Both share one design language (porcelain, peach, lilac and plum with an Instrument Serif display face) and the same
routine data model, so the phone mockups on the site are the app's real screens rendered in React.

## Features

- **Skin check-ins** on an illustrated face-zone map with hydration, oil and comfort scales and lifestyle tags. No camera.
- **AM / PM routine builder** that layers thinnest to richest, spaces out strong actives and explains each change.
- **Product shelf** with opening dates, use-by windows, running-low alerts and plain-language ingredient notes.
- **Progress timeline**: twelve weeks of self-reported trends with routine changes pinned in place.
- **Interactive app preview** with tab, tab-bar, dot, swipe and arrow-key navigation.
- **Routine API** (`POST /api/routine`) that applies the layering and pairing rules to a list of shelf products.

## Tech stack

| Layer   | Tools                                                                           |
| ------- | ------------------------------------------------------------------------------- |
| Web     | Next.js 15 (App Router), React 19, TypeScript (strict), hand-rolled SVG charts  |
| API     | Next.js route handlers, zod validation                                          |
| Mobile  | Expo SDK 54, Expo Router, React Native, react-native-svg, expo-linear-gradient  |
| Tooling | ESLint (flat config), Prettier, pnpm                                            |

## Getting started

```bash
pnpm install
pnpm dev            # http://localhost:3000
```

Mobile app:

```bash
cd mobile
pnpm install
pnpm start          # then press i for iOS Simulator or a for Android
```

### Environment variables

Copy `.env.example` to `.env.local`. Both are optional before launch.

| Variable                     | Purpose                                  |
| ---------------------------- | ---------------------------------------- |
| `NEXT_PUBLIC_APP_STORE_URL`  | App Store listing for the iPhone button  |
| `NEXT_PUBLIC_PLAY_STORE_URL` | Google Play listing for the Android button |

## Project structure

```
.
├── app/                 # routes: /, /how-it-works, /shelf, /pricing, /app, /api/routine
├── components/
│   ├── layout/          # Header, Footer, Brand, StoreButtons
│   ├── phone/           # Phone frame, status bar, ring, zone map, bottles, trend chart
│   ├── screens/         # Today, Check-in, Routine, Shelf, Progress (web renderings)
│   ├── preview/         # PhonePreview (client) and tab icons
│   ├── sections/        # page sections shared across routes
│   ├── shelf/ pricing/ how/
│   └── ui/              # Button, SectionHeading, CheckList, FaqList…
├── lib/
│   ├── data/            # typed site copy and app mock data
│   ├── chart.ts         # SVG scales for trend charts and rings
│   └── routine-engine.ts
├── types/               # shared domain types
├── public/              # fonts, images, favicon
└── mobile/
    ├── app/             # Expo Router: _layout + (tabs)
    ├── components/      # native UI components
    ├── constants/       # theme tokens
    └── lib/             # types, seed data, chart math, formatters
```

## Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `pnpm dev`       | Start the Next.js dev server         |
| `pnpm build`     | Production build                     |
| `pnpm start`     | Serve the production build           |
| `pnpm lint`      | Lint with ESLint                     |
| `pnpm typecheck` | Type-check with `tsc --noEmit`       |
| `pnpm format`    | Format with Prettier                 |

In `mobile/`: `pnpm start`, `pnpm ios`, `pnpm android`, `pnpm lint`, `pnpm typecheck`.
