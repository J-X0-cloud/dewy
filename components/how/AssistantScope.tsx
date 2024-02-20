import { assistantWill, assistantWont } from "@/lib/data/how-it-works";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AssistantScope() {
  return (
    <section className="sec" id="ai">
      <div className="wrap">
        <SectionHeading
          centered
          eyebrow="What the AI does"
          title={
            <>
              Helpful, honest <em>and in its lane</em>
            </>
          }
        />
        <div className="dodont">
          <div className="dd dd-do">
            <h3>Dewy&rsquo;s assistant will</h3>
            <ul>
              {assistantWill.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="dd dd-dont">
            <h3>Dewy&rsquo;s assistant won&rsquo;t</h3>
            <ul>
              {assistantWont.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
