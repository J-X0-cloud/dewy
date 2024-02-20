import { testimonials } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="sec sec-quotes">
      <div className="wrap">
        <SectionHeading
          eyebrow="From the beta"
          title={
            <>
              Routines that finally <em>stick</em>
            </>
          }
        />
        <div className="quotes">
          {testimonials.map((t) => (
            <figure className="quote" key={t.name}>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <span className="av">{t.initials}</span>
                <span>
                  <b>{t.name}</b>
                  <small>{t.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
