import { cn } from "@/lib/cn";
import type { Plan } from "@/types/content";
import { ButtonLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className={cn("plan", plan.highlighted && "plan-hi")}>
      {plan.badge ? <span className="badge">{plan.badge}</span> : null}
      <h2>{plan.name}</h2>
      <p className="price">
        <b>{plan.price}</b>
        <span>{plan.period}</span>
      </p>
      <p className="muted">{plan.note}</p>
      <CheckList items={plan.features} />
      <ButtonLink href="/#download" variant={plan.highlighted ? "light" : "soft"}>
        {plan.cta}
      </ButtonLink>
    </div>
  );
}
