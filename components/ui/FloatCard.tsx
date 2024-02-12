import { cn } from "@/lib/cn";

interface FloatCardProps {
  className: string;
  dot: "d-mint" | "d-peach";
  title: string;
  meta: string;
}

export function FloatCard({ className, dot, title, meta }: FloatCardProps) {
  return (
    <div className={cn("float", className)}>
      <span className={cn("dot", dot)} />
      <div>
        <b>{title}</b>
        <small>{meta}</small>
      </div>
    </div>
  );
}
