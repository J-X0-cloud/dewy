import type { Spec } from "@/types/content";

export function SpecList({ specs }: { specs: Spec[] }) {
  return (
    <dl className="specs">
      {specs.map((spec) => (
        <div key={spec.term}>
          <dt>{spec.term}</dt>
          <dd>{spec.detail}</dd>
        </div>
      ))}
    </dl>
  );
}
