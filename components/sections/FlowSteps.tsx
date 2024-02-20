import { flowSteps } from "@/lib/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FlowSteps() {
  return (
    <section className="sec sec-flow">
      <div className="wrap">
        <SectionHeading
          eyebrow="How Dewy works"
          title={
            <>
              Four small habits, <em>one calm routine</em>
            </>
          }
        />
        <ol className="flow">
          {flowSteps.map((step) => (
            <li key={step.number}>
              <span className="fn">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
