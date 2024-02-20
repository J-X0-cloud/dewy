import Link from "next/link";
import { useId } from "react";
import { cn } from "@/lib/cn";

export function DropMark({ className = "drop" }: { className?: string }) {
  const gradientId = useId();
  return (
    <svg className={className} viewBox="0 0 32 40" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F3C9B8" />
          <stop offset=".55" stopColor="#C98BA6" />
          <stop offset="1" stopColor="#6B3F5E" />
        </linearGradient>
      </defs>
      <path
        d="M16 1.5C11 9.8 3 17.6 3 25.4 3 33 8.8 38.5 16 38.5S29 33 29 25.4C29 17.6 21 9.8 16 1.5z"
        fill={`url(#${gradientId})`}
      />
      <ellipse cx="10.6" cy="25" rx="2.6" ry="5.2" transform="rotate(18 10.6 25)" fill="#fff" opacity=".75" />
    </svg>
  );
}

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link className={cn("brand", light && "brand-light")} href="/" aria-label="Dewy home">
      <DropMark />
      <span>dewy</span>
    </Link>
  );
}
