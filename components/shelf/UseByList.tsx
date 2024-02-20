import { cn } from "@/lib/cn";
import { useByItems, useByPoints } from "@/lib/data/shelf";
import { CheckList } from "@/components/ui/CheckList";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function UseByList() {
  return (
    <section className="sec sec-tint">
      <div className="wrap split">
        <div className="split-copy">
          <SectionHeading
            eyebrow="Use-by reminders"
            title={
              <>
                Know what&rsquo;s <em>past its best</em>
              </>
            }
          />
          <p>
            Most products carry a period-after-opening window. Dewy starts the clock the day you mark a product opened
            and lets you know a couple of weeks before it&rsquo;s up, plus a heads-up when a daily staple is running
            low.
          </p>
          <CheckList items={useByPoints} />
        </div>
        <div className="pao-list">
          {useByItems.map((item) => (
            <div className={cn("pao", item.flag)} key={item.name}>
              <div className="pao-top">
                <b>{item.name}</b>
                <span>{item.window} after opening</span>
              </div>
              <div
                className="bar"
                role="progressbar"
                aria-label={`${item.name} window used`}
                aria-valuenow={item.used}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <i style={{ width: `${item.used}%` }} />
              </div>
              <small>{item.status}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
