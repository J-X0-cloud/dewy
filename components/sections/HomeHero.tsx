import Image from "next/image";
import { heroFloats, heroTicks } from "@/lib/data/home";
import { Phone } from "@/components/phone/Phone";
import { TodayScreen } from "@/components/screens/TodayScreen";
import { ButtonLink } from "@/components/ui/Button";
import { FloatCard } from "@/components/ui/FloatCard";

export function HomeHero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="pill">
            <span className="spark">&#10022;</span> New: weather-aware morning tips
          </p>
          <h1 className="h1">
            Skincare that keeps up with <em>your skin.</em>
          </h1>
          <p className="lede">
            Dewy is an AI routine companion. Check in on how your skin feels, and get an AM and PM routine built
            from the products already on your shelf, adjusted as the weeks, seasons and your skin change.
          </p>
          <div className="cta-row">
            <ButtonLink href="#download">Get Dewy free</ButtonLink>
            <ButtonLink href="/app" variant="soft">
              Try the app preview
            </ButtonLink>
          </div>
          <ul className="ticks">
            {heroTicks.map((tick) => (
              <li key={tick}>{tick}</li>
            ))}
          </ul>
        </div>
        <div className="hero-vis">
          <div className="glow" />
          <Image className="tex tex-bubble" src="/images/texture-gel-bubbles.png" alt="" width={512} height={512} priority />
          <Image className="tex tex-cream" src="/images/texture-cream-swatch.png" alt="" width={512} height={304} priority />
          <Phone className="ph-hero">
            <TodayScreen />
          </Phone>
          {heroFloats.map((float) => (
            <FloatCard key={float.title} className={float.className} dot={float.dot} title={float.title} meta={float.meta} />
          ))}
        </div>
      </div>
    </section>
  );
}
