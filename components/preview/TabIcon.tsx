import type { PreviewScreenId } from "@/lib/data/preview";

export function TabIcon({ id }: { id: PreviewScreenId }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      {id === "today" && <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />}
      {id === "checkin" && (
        <>
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M8 12.5l2.6 2.5L16 9.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
      {id === "routine" && (
        <>
          <rect x="4" y="4" width="16" height="4" rx="2" />
          <rect x="4" y="10" width="16" height="4" rx="2" />
          <rect x="4" y="16" width="10" height="4" rx="2" />
        </>
      )}
      {id === "shelf" && (
        <>
          <rect x="5" y="3" width="5" height="18" rx="2" />
          <rect x="12" y="8" width="7" height="13" rx="2" />
        </>
      )}
      {id === "progress" && (
        <path
          d="M3 17l5-5 4 3 8-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
