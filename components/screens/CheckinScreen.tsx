import { cn } from "@/lib/cn";
import { checkinTags, feelScales, zoneNotes } from "@/lib/data/app-screens";
import { FaceZoneMap } from "@/components/phone/FaceZoneMap";
import { StatusBar } from "@/components/phone/StatusBar";

export function CheckinScreen() {
  return (
    <div className="scr scr-check">
      <StatusBar />
      <p className="s-kicker">Evening check-in</p>
      <h3 className="s-title">How does your skin feel?</h3>
      <div className="zone-wrap">
        <FaceZoneMap />
        {zoneNotes.map((note, i) => (
          <span key={note.zone} className={`ztag z${i + 1}`}>
            {note.label} · {note.feeling}
          </span>
        ))}
      </div>
      {feelScales.map((scale) => (
        <div className="sl" key={scale.id}>
          <div className="sl-top">
            <b>{scale.label}</b>
            <span>
              {scale.low} &harr; {scale.high}
            </span>
          </div>
          <div className={`sl-track t-${scale.tone}`}>
            <i style={{ left: `${scale.value}%` }} />
          </div>
        </div>
      ))}
      <div className="tags">
        {checkinTags.map((tag) => (
          <span key={tag.label} className={cn(tag.selected && "on")}>
            {tag.label}
          </span>
        ))}
      </div>
      <a className="s-btn" href="#">
        Save check-in
      </a>
    </div>
  );
}
