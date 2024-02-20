"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode, type TouchEvent } from "react";
import { cn } from "@/lib/cn";
import { previewScreens, type PreviewScreenId } from "@/lib/data/preview";
import {
  CheckinScreen,
  ProgressScreen,
  RoutineScreen,
  ShelfScreen,
  TodayScreen,
} from "@/components/screens";
import { TabIcon } from "./TabIcon";

const SCREENS: Record<PreviewScreenId, ReactNode> = {
  today: <TodayScreen interactive />,
  checkin: <CheckinScreen />,
  routine: <RoutineScreen />,
  shelf: <ShelfScreen />,
  progress: <ProgressScreen />,
};

const SWIPE_THRESHOLD = 40;

export function PhonePreview() {
  const [index, setIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const count = previewScreens.length;

  const go = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target;
      if (target instanceof HTMLTextAreaElement) return;
      if (target instanceof HTMLInputElement && target.type !== "checkbox" && target.type !== "radio") return;
      if (event.key === "ArrowRight") {
        go(index + 1);
        event.preventDefault();
      } else if (event.key === "ArrowLeft") {
        go(index - 1);
        event.preventDefault();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [go, index]);

  function onTouchStart(event: TouchEvent) {
    const touch = event.touches[0];
    if (touch) touchStart.current = { x: touch.clientX, y: touch.clientY };
  }

  function onTouchEnd(event: TouchEvent) {
    const start = touchStart.current;
    const touch = event.changedTouches[0];
    touchStart.current = null;
    if (!start || !touch) return;
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) go(index + (dx < 0 ? 1 : -1));
  }

  const active = previewScreens[index] ?? previewScreens[0]!;

  return (
    <div className="demo" id="demo">
      <div className="demo-grid">
        <div className="dtabs" role="tablist" aria-label="Choose a screen">
          {previewScreens.map((screen, i) => (
            <button
              key={screen.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={cn("dtab", `dt-${screen.id}`, i === index && "is-active")}
              onClick={() => go(i)}
            >
              <span className="dt-n">0{i + 1}</span>
              <span>
                <b>{screen.tab}</b>
                <small>{screen.heading}</small>
              </span>
            </button>
          ))}
        </div>

        <div className="demo-phone">
          <div className="phone ph-demo">
            <div className="phone-in">
              <div className="island" />
              <div className="viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                <div className="track" style={{ transform: `translateX(-${index * 100}%)` }}>
                  {previewScreens.map((screen, i) => (
                    <div
                      key={screen.id}
                      className="slide"
                      role="tabpanel"
                      aria-label={`${screen.tab} screen`}
                      aria-hidden={i !== index}
                      inert={i !== index}
                    >
                      {SCREENS[screen.id]}
                    </div>
                  ))}
                </div>
              </div>
              <nav className="tabbar" aria-label="App tabs">
                {previewScreens.map((screen, i) => (
                  <button
                    key={screen.id}
                    type="button"
                    className={cn("tb", i === index && "is-active")}
                    aria-current={i === index ? "page" : undefined}
                    onClick={() => go(i)}
                  >
                    <TabIcon id={screen.id} />
                    <span>{screen.tab}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
          <div className="dots">
            {previewScreens.map((screen, i) => (
              <button
                key={screen.id}
                type="button"
                className={cn("dot-n", i === index && "is-active")}
                aria-label={`Show ${screen.tab}`}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </div>

        <div className="notes" aria-live="polite">
          <div className="note">
            <p className="eyebrow">
              Screen 0{index + 1} of 0{count}
            </p>
            <h2 className="h2">{active.heading}</h2>
            <p>{active.description}</p>
          </div>
          <p className="demo-foot">Try it: tick off a morning step on Today, or flip AM / PM on Routine.</p>
        </div>
      </div>
    </div>
  );
}
