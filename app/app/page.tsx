import type { Metadata } from "next";
import { PhonePreview } from "@/components/preview/PhonePreview";
import { DownloadBand } from "@/components/sections/DownloadBand";
import { PageHero } from "@/components/sections/PageHero";
import { previewPrinciples } from "@/lib/data/preview";

export const metadata: Metadata = {
  title: "Dewy app preview | Try the screens",
  description:
    "An interactive preview of the Dewy skincare routine app: today view, skin check-in, AM and PM routine builder, product shelf and progress timeline.",
};

export default function AppPreviewPage() {
  return (
    <>
      <PageHero
        className="app-hero"
        eyebrow="Interactive preview"
        title={
          <>
            Take Dewy for a <em>spin</em>
          </>
        }
        lede="Five real screens from the app. Tap the tabs, use the tab bar inside the phone, swipe on mobile or press the arrow keys."
      />

      <section className="sec demo-sec">
        <div className="wrap">
          <PhonePreview />
        </div>
      </section>

      <section className="sec sec-tint">
        <div className="wrap">
          <div className="mini-grid">
            {previewPrinciples.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DownloadBand />
    </>
  );
}
