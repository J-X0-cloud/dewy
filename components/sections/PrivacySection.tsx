import Image from "next/image";
import { privacyPoints } from "@/lib/data/home";
import { CheckList } from "@/components/ui/CheckList";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PrivacySection() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="privacy">
          <Image
            src="/images/bathroom-sink.png"
            alt="A bright bathroom sink with a pump bottle beside a round mirror"
            width={1200}
            height={992}
            sizes="(max-width: 900px) 100vw, 560px"
          />
          <div>
            <SectionHeading
              eyebrow="Private by design"
              title={
                <>
                  Your bathroom shelf is <em>your business</em>
                </>
              }
            />
            <p>
              Dewy never asks for photos of your face. Check-ins, notes and your shelf are encrypted, never sold and
              never used to target ads. Export or delete everything from settings in two taps.
            </p>
            <CheckList items={privacyPoints} />
          </div>
        </div>
      </div>
    </section>
  );
}
