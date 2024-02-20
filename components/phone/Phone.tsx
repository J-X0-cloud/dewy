import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PhoneProps {
  children: ReactNode;
  /** Size / placement modifier: `ph-hero`, `ph-sm` or `ph-demo`. */
  className?: string;
}

export function Phone({ children, className }: PhoneProps) {
  return (
    <div className={cn("phone", className)}>
      <div className="phone-in">
        <div className="island" />
        {children}
      </div>
    </div>
  );
}
