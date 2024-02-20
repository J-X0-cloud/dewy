"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { today } from "@/lib/data/app-screens";
import type { TodayStep } from "@/types/skincare";
import { ProgressRing } from "@/components/phone/ProgressRing";
import { StatusBar } from "@/components/phone/StatusBar";

interface TodayScreenProps {
  /** When true, routine steps can be ticked off and the ring follows along. */
  interactive?: boolean;
}

function StepRow({
  step,
  done,
  interactive,
  onToggle,
}: {
  step: TodayStep;
  done: boolean;
  interactive: boolean;
  onToggle: () => void;
}) {
  const inputId = `today-step-${step.id}`;
  return (
    <li className="step">
      {interactive ? (
        <>
          <input type="checkbox" id={inputId} checked={done} onChange={onToggle} />
          <label htmlFor={inputId} className="tick" aria-label={`Mark ${step.name} done`} />
        </>
      ) : (
        <span className={cn("tick", done && "on")} />
      )}
      <div>
        <b>{step.name}</b>
        <span>{step.product}</span>
      </div>
      <em>{step.meta}</em>
    </li>
  );
}

export function TodayScreen({ interactive = false }: TodayScreenProps) {
  const [done, setDone] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(today.steps.map((s) => [s.id, s.done])),
  );
  const completed = today.steps.filter((s) => done[s.id]).length;

  const toggle = (id: string) => setDone((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="scr scr-today">
      <StatusBar />
      <p className="s-kicker">{today.dateLabel}</p>
      <h3 className="s-title">{today.greeting}</h3>
      <div className="wx">
        {today.weather.map((reading) => (
          <div className="wx-cell" key={reading.label}>
            <small>{reading.label}</small>
            <b>{reading.value}</b>
            <span>{reading.descriptor}</span>
          </div>
        ))}
        <div className="wx-tip">{today.tip}</div>
      </div>
      <div className="card-s routine-s">
        <div className="rs-head">
          <ProgressRing value={interactive ? completed : 2} total={today.steps.length} />
          <div>
            <b>{today.routineTitle}</b>
            <span>{today.routineMeta}</span>
          </div>
        </div>
        <ul className="steps">
          {today.steps.map((step) => (
            <StepRow
              key={step.id}
              step={step}
              done={Boolean(done[step.id])}
              interactive={interactive}
              onToggle={() => toggle(step.id)}
            />
          ))}
        </ul>
      </div>
      <div className="chips-row">
        {today.chips.map((chip) => (
          <span key={chip.label} className={cn("chip-s", chip.tone)}>
            {chip.label}
          </span>
        ))}
      </div>
    </div>
  );
}
