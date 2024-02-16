export interface NavLink {
  href: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  initials: string;
  name: string;
  role: string;
  quote: string;
}

export interface FlowStep {
  number: string;
  title: string;
  body: string;
}

export interface Spec {
  term: string;
  detail: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Plan {
  id: "free" | "plus" | "duo";
  name: string;
  price: string;
  period: string;
  note: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

/** `true` renders a check mark, `false` an em dash, a string is shown verbatim. */
export type CompareValue = string | boolean;

export interface CompareRow {
  feature: string;
  free: CompareValue;
  plus: CompareValue;
}
