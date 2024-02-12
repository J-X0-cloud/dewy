import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "ink" | "soft" | "light";

interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({ href, variant = "ink", className, children }: ButtonLinkProps) {
  return (
    <Link className={cn("btn", `btn-${variant}`, className)} href={href}>
      {children}
    </Link>
  );
}
