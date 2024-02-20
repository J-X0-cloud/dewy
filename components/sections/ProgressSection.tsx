import { progressStats } from "@/lib/data/home";
import { skinTrend, trendPins } from "@/lib/data/trends";
import { TrendChart } from "@/components/phone/TrendChart";
import { TrendLegend } from "@/components/phone/TrendLegend";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextureMarker } from "@/components/ui/TextureMarker";

export function ProgressSection() {
  return (
    <section className="sec sec-prog">
      <div className="wrap prog-grid">
        <div className="prog-copy">
          <SectionHeading
            eyebrow="Progress timeline"
            title={
              <>
                See the <em>pattern</em>, not just the day
              </>
            }
          />
          <p>
            Your check-ins roll up into a twelve-week view of how your skin feels, with the routine changes you made
            pinned right on the timeline. Monthly recaps highlight streaks and what shifted.
          </p>
          <div className="stat-row">
            {progressStats.map((stat) => (
              <div key={stat.label}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="prog-card">
          <div className="pc-head">
            <b>How your skin has felt</b>
            <span>Jul &ndash; Sep</span>
          </div>
          <TrendLegend note="self-reported, 1–5" />
          <TrendChart data={skinTrend} width={520} height={200} className="chart chart-lg" />
          <div className="pins">
            {trendPins.map((pin) => (
              <span key={pin.label}>
                <TextureMarker variant={pin.texture} />
                {pin.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
