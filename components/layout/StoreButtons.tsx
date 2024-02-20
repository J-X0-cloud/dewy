import { storeLinks } from "@/lib/data/site";
import { cn } from "@/lib/cn";

function PhoneGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 2h8a2.5 2.5 0 0 1 2.5 2.5v15A2.5 2.5 0 0 1 16 22H8a2.5 2.5 0 0 1-2.5-2.5v-15A2.5 2.5 0 0 1 8 2zm-.5 3v13h9V5h-9zm4.5 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
      />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M5.5 3.4v17.2a1 1 0 0 0 1.5.86l14-8.6a1 1 0 0 0 0-1.72L7 2.54a1 1 0 0 0-1.5.86z" />
    </svg>
  );
}

export function StoreButtons({ light = false }: { light?: boolean }) {
  return (
    <div className={cn("stores", light && "stores-light")}>
      <a className="store" href={storeLinks.ios}>
        <PhoneGlyph />
        <span>
          <small>Download for</small>iPhone
        </span>
      </a>
      <a className="store" href={storeLinks.android}>
        <PlayGlyph />
        <span>
          <small>Get it for</small>Android
        </span>
      </a>
    </div>
  );
}
