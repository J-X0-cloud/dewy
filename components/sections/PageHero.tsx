import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  className?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, lede, className, children }: PageHeroProps) {
  return (
    <section className={cn("page-hero", className)}>
      <div className="wrap narrow center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h1 h1-sm">{title}</h1>
        <p className="lede">{lede}</p>
        {children}
      </div>
    </section>
  );
}
