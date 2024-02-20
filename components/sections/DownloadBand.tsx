import { StoreButtons } from "@/components/layout/StoreButtons";
import { Phone } from "@/components/phone/Phone";
import { RoutineScreen } from "@/components/screens/RoutineScreen";

export function DownloadBand() {
  return (
    <section className="sec" id="download">
      <div className="wrap">
        <div className="dl">
          <div className="dl-copy">
            <p className="eyebrow">Free to start</p>
            <h2 className="h2">
              Your skin, on a <em>kinder</em> schedule.
            </h2>
            <p>
              Download Dewy, log your first check-in and have a routine built from your own shelf in about three
              minutes.
            </p>
            <StoreButtons />
          </div>
          <div className="dl-phone">
            <Phone className="ph-sm">
              <RoutineScreen />
            </Phone>
          </div>
        </div>
      </div>
    </section>
  );
}
