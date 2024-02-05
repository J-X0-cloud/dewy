import { DownloadBand } from "@/components/sections/DownloadBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeatureSplit } from "@/components/sections/FeatureSplit";
import { FlowSteps } from "@/components/sections/FlowSteps";
import { HomeHero } from "@/components/sections/HomeHero";
import { PrivacySection } from "@/components/sections/PrivacySection";
import { ProgressSection } from "@/components/sections/ProgressSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CheckinScreen, RoutineScreen, ShelfScreen } from "@/components/screens";
import { CheckList } from "@/components/ui/CheckList";
import { homeFaq } from "@/lib/data/faq";
import { site } from "@/lib/data/site";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FlowSteps />

      <FeatureSplit
        eyebrow="Skin check-ins"
        title={
          <>
            Log how it <em>feels</em>, not how it looks
          </>
        }
        tone="lilac"
        screen={<CheckinScreen />}
      >
        <p>
          Check-ins use an illustrated zone map instead of a camera. Slide hydration, oil and comfort, tap a zone, add
          a tag, done. Over time those small notes become the most honest record of your skin you&rsquo;ve ever kept.
        </p>
        <CheckList
          items={[
            "Forehead, T-zone, cheeks and chin, each logged separately",
            "Lifestyle tags: sleep, travel, stress, new products",
            "Gentle reminders at the time you choose",
          ]}
        />
        <Link className="link" href="/how-it-works#checkin">
          More on check-ins &rarr;
        </Link>
      </FeatureSplit>

      <FeatureSplit
        eyebrow="AI routine builder"
        title={
          <>
            Morning and night, <em>in the right order</em>
          </>
        }
        tone="peach"
        screen={<RoutineScreen />}
        reverse
        tinted
      >
        <p>
          Tell Dewy what you own and what you care about. The assistant layers your steps thinnest to richest, keeps
          strong actives on separate nights, adds wait times and shuffles things when you add something new.
        </p>
        <CheckList
          items={[
            "Separate AM and PM routines with drag-to-reorder",
            "Flags active pairings that are usually better split up",
            "Every suggestion explains itself in plain English",
          ]}
        />
        <Link className="link" href="/how-it-works#routine">
          See the routine builder &rarr;
        </Link>
      </FeatureSplit>

      <FeatureSplit
        eyebrow="Product shelf"
        title={
          <>
            Everything you own, <em>finally organized</em>
          </>
        }
        tone="mint"
        screen={<ShelfScreen />}
      >
        <p>
          Scan a barcode or search to add a product. Dewy files it by step, tracks when you opened it and nudges you
          before it&rsquo;s past its best, so you use what you have before buying more.
        </p>
        <CheckList
          items={[
            "Opening dates and use-by reminders",
            "Running-low alerts for daily staples like SPF",
            "Ingredient notes in everyday language",
          ]}
        />
        <Link className="link" href="/shelf">
          Explore the shelf &rarr;
        </Link>
      </FeatureSplit>

      <ProgressSection />
      <PrivacySection />
      <Testimonials />

      <FaqSection
        eyebrow="Questions"
        title={
          <>
            Good to <em>know</em>
          </>
        }
        note={
          <>
            Still curious? Write to <a href={`mailto:${site.email}`}>{site.email}</a>.
          </>
        }
        items={homeFaq}
      />

      <DownloadBand />
    </>
  );
}
