import type { Metadata } from "next";
import { CompareTable } from "@/components/pricing/CompareTable";
import { PlanCard } from "@/components/pricing/PlanCard";
import { DownloadBand } from "@/components/sections/DownloadBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageHero } from "@/components/sections/PageHero";
import { pricingFaq } from "@/lib/data/faq";
import { plans } from "@/lib/data/pricing";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Dewy pricing | Free, Plus and Plus Duo",
  description:
    "Dewy is free to start with daily check-ins and a basic routine. Dewy Plus adds the AI routine builder, an unlimited product shelf, reminders and full progress history.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Start free. <em>Glow at your pace.</em>
          </>
        }
        lede="Check-ins and a basic routine are free forever. Plus adds the full AI routine builder, an unlimited shelf and your complete timeline."
      />

      <section className="sec sec-plans">
        <div className="wrap plans">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      <CompareTable />

      <FaqSection
        id="faq"
        eyebrow="FAQ"
        title={
          <>
            Plans &amp; <em>billing</em>
          </>
        }
        note={
          <>
            Anything else? <a href={`mailto:${site.email}`}>{site.email}</a>
          </>
        }
        items={pricingFaq}
      />

      <DownloadBand />
    </>
  );
}
