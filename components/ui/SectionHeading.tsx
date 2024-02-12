import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  /** Heading content; wrap the accent phrase in `<em>` for the gradient italic. */
  title: ReactNode;
  centered?: boolean;
  as?: "h1" | "h2";
  size?: "default" | "small";
}

export function SectionHeading({ eyebrow, title, centered = false, as = "h2", size = "default" }: SectionHeadingProps) {
  const Tag = as;
  const headingClass = as === "h1" ? cn("h1", size === "small" && "h1-sm") : "h2";
  return (
    <>
      {eyebrow ? <p className={cn("eyebrow", centered && "center")}>{eyebrow}</p> : null}
      <Tag className={cn(headingClass, centered && "center")}>{title}</Tag>
    </>
  );
}
