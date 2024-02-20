import { monthlyRecap, progressTimeline } from "@/lib/data/app-screens";
import { skinTrend, trendMonths } from "@/lib/data/trends";
import { StatusBar } from "@/components/phone/StatusBar";
import { TrendChart } from "@/components/phone/TrendChart";
import { TrendLegend } from "@/components/phone/TrendLegend";
import { TextureMarker } from "@/components/ui/TextureMarker";

export function ProgressScreen() {
  return (
    <div className="scr scr-prog">
      <StatusBar />
      <p className="s-kicker">Progress</p>
      <h3 className="s-title">12 weeks of check-ins</h3>
      <div className="card-s">
        <TrendLegend note="self-reported" />
        <TrendChart data={skinTrend} />
        <div className="axis">
          {trendMonths.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>
      </div>
      <ol className="tl">
        {progressTimeline.map((entry) => (
          <li key={entry.label}>
            <TextureMarker variant={entry.texture} />
            <div>
              <b>{entry.label}</b>
              <span>{entry.body}</span>
            </div>
          </li>
        ))}
      </ol>
      <div className="recap">
        <b>{monthlyRecap.title}</b>
        <span>{monthlyRecap.body}</span>
      </div>
    </div>
  );
}
