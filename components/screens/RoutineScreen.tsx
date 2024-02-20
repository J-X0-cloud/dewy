"use client";

import { useState } from "react";
import { amRoutine, pmRoutine, routineSuggestion } from "@/lib/data/app-screens";
import type { Daypart, RoutineStep } from "@/types/skincare";
import { StatusBar } from "@/components/phone/StatusBar";

function RoutineRow({ step }: { step: RoutineStep }) {
  return (
    <li>
      <span className="rn">{step.order}</span>
      <span className={`bot c-${step.swatch}`} />
      <div>
        <b>{step.kind}</b>
        <span>{step.product}</span>
      </div>
      <em>{step.note}</em>
      <i className="grip" aria-hidden="true" />
    </li>
  );
}

export function RoutineScreen() {
  const [daypart, setDaypart] = useState<Daypart>("am");
  const steps = daypart === "am" ? amRoutine : pmRoutine;

  return (
    <div className="scr scr-routine">
      <StatusBar />
      <p className="s-kicker">Routine builder</p>
      <h3 className="s-title">Your routine</h3>
      <div className="seg" role="group" aria-label="Routine time of day">
        <button type="button" aria-pressed={daypart === "am"} onClick={() => setDaypart("am")}>
          AM
        </button>
        <button type="button" aria-pressed={daypart === "pm"} onClick={() => setDaypart("pm")}>
          PM
        </button>
      </div>
      <ul className="rlist">
        {steps.map((step) => (
          <RoutineRow key={`${daypart}-${step.order}`} step={step} />
        ))}
      </ul>
      <div className="ai-note">
        <span className="spark">&#10022;</span>
        <p>
          <b>{routineSuggestion.headline}</b> {routineSuggestion.body}
        </p>
      </div>
      <a className="s-btn ghost" href="#">
        + Add a step
      </a>
    </div>
  );
}
