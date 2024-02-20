import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Phone } from "@/components/phone/Phone";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FeatureSplitProps {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  /** The app screen rendered inside the phone mockup. */
  screen: ReactNode;
  tone: "lilac" | "peach" | "mint" | "rose";
  reverse?: boolean;
  tinted?: boolean;
  children: ReactNode;
}

export function FeatureSplit({ id, eyebrow, title, screen, tone, reverse, tinted, children }: FeatureSplitProps) {
  return (
    <section className={cn("sec", tinted && "sec-tint")} id={id}>
      <div className={cn("wrap split", reverse && "rev")}>
        <div className={`split-vis vis-${tone}`}>
          <Phone>{screen}</Phone>
        </div>
        <div className="split-copy">
          <SectionHeading eyebrow={eyebrow} title={title} />
          {children}
        </div>
      </div>
    </section>
  );
}
