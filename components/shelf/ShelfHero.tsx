import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { FloatCard } from "@/components/ui/FloatCard";

export function ShelfHero() {
  return (
    <section className="page-hero shelf-hero">
      <div className="wrap split">
        <div className="split-copy">
          <p className="eyebrow">Product shelf</p>
          <h1 className="h1 h1-sm">
            Use what you have, <em>in the right order</em>
          </h1>
          <p className="lede">
            The shelf is Dewy&rsquo;s quiet superpower. Add what&rsquo;s in your bathroom and Dewy files each product
            by step, remembers when you opened it and uses it to build routines that make sense.
          </p>
          <div className="cta-row">
            <ButtonLink href="/#download">Start your shelf</ButtonLink>
            <ButtonLink href="/app" variant="soft">
              See it in the preview
            </ButtonLink>
          </div>
        </div>
        <div className="shelf-vis">
          <Image
            className="sv-main"
            src="/images/hand-with-bottle.png"
            alt="A hand holding a small unlabeled white skincare bottle"
            width={1024}
            height={847}
            priority
          />
          <Image className="sv-powder" src="/images/texture-powder.png" alt="" width={856} height={936} />
          <FloatCard className="f3" dot="d-peach" title="Added to AM routine" meta="Step 3 · Serum" />
        </div>
      </div>
    </section>
  );
}
