import type { ReactNode } from "react";
import type { FaqItem } from "@/types/content";
import { FaqList } from "@/components/ui/FaqList";

interface FaqSectionProps {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  /** Short line under the heading, usually pointing to the support inbox. */
  note: ReactNode;
  items: FaqItem[];
}

export function FaqSection({ id, eyebrow, title, note, items }: FaqSectionProps) {
  return (
    <section className="sec sec-faq" id={id}>
      <div className="wrap faq-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="h2">{title}</h2>
          <p className="muted">{note}</p>
        </div>
        <FaqList items={items} />
      </div>
    </section>
  );
}
