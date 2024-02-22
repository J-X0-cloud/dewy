import type { Metadata } from "next";
import Link from "next/link";
import { AssistantScope } from "@/components/how/AssistantScope";
import { JumpNav } from "@/components/how/JumpNav";
import { DownloadBand } from "@/components/sections/DownloadBand";
import { FeatureSplit } from "@/components/sections/FeatureSplit";
import { PageHero } from "@/components/sections/PageHero";
import { CheckinScreen, ProgressScreen, RoutineScreen, ShelfScreen } from "@/components/screens";
import { SpecList } from "@/components/ui/SpecList";
import { checkinSpecs, routineSpecs } from "@/lib/data/how-it-works";

export const metadata: Metadata = {
  title: "How Dewy works | Check-ins, routines, shelf, progress",
  description:
    "See how Dewy works: ten-second skin check-ins, an AI routine builder for AM and PM, a product shelf with use-by reminders and a twelve-week progress timeline.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title={
          <>
            A routine that <em>listens</em> before it suggests
          </>
        }
        lede="Dewy runs on a simple loop: you tell it how your skin feels, it tunes your routine around what you own, and the timeline shows how things change. Here's each part up close."
      >
        <JumpNav />
      </PageHero>

      <FeatureSplit
        id="checkin"
        eyebrow="Step 1 · Check in"
        title={
          <>
            Ten seconds, <em>four zones</em>
          </>
        }
        tone="lilac"
        screen={<CheckinScreen />}
      >
        <p>
          Each check-in starts with an illustrated zone map. Tap the forehead, T-zone, cheeks or chin to note how that
          area feels, then slide three simple scales: hydration, oil and comfort.
        </p>
        <p>
          Tags capture the context that usually explains a rough week: a long flight, short sleep, a new product, a
          stressful stretch. You pick the time of day; Dewy sends one gentle nudge and nothing more.
        </p>
        <SpecList specs={checkinSpecs} />
      </FeatureSplit>

      <FeatureSplit
        id="routine"
        eyebrow="Step 2 · Build the routine"
        title={
          <>
            AM and PM, <em>tuned weekly</em>
          </>
        }
        tone="peach"
        screen={<RoutineScreen />}
        reverse
        tinted
      >
        <p>
          Dewy&rsquo;s assistant arranges your products into a morning and an evening routine, thinnest texture to
          richest, with sunscreen always last in the morning. Strong actives get their own nights, and wait times
          appear where they help.
        </p>
        <p>
          When you add a product or your check-ins shift, the assistant proposes a change and says why, in a sentence.
          Accept it, tweak it or ignore it; your routine stays yours.
        </p>
        <SpecList specs={routineSpecs} />
      </FeatureSplit>

      <FeatureSplit
        id="shelf"
        eyebrow="Step 3 · Keep the shelf"
        title={
          <>
            What you own, <em>where it goes</em>
          </>
        }
        tone="mint"
        screen={<ShelfScreen />}
      >
        <p>
          Add products by barcode or search. Dewy notes the type, the routine step it belongs to and the date you
          opened it, then reminds you before it&rsquo;s past its best or when a daily staple is running low.
        </p>
        <Link className="link" href="/shelf">
          Everything the shelf can do &rarr;
        </Link>
      </FeatureSplit>

      <FeatureSplit
        id="progress"
        eyebrow="Step 4 · Watch the trend"
        title={
          <>
            Twelve weeks <em>at a glance</em>
          </>
        }
        tone="rose"
        screen={<ProgressScreen />}
        reverse
        tinted
      >
        <p>
          Check-ins roll up into a simple timeline of how your skin has felt, with every routine change pinned where
          it happened. Textured markers stand in for photos, so the view stays calm and private.
        </p>
        <p>
          At the end of each month Dewy writes a short recap: your streaks, the zones that changed and the notes that
          came up most.
        </p>
      </FeatureSplit>

      <AssistantScope />
      <DownloadBand />
    </>
  );
}
