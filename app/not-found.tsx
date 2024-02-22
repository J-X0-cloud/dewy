import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="wrap narrow center">
        <p className="eyebrow">404</p>
        <h1 className="h1 h1-sm">
          This page has <em>evaporated</em>
        </h1>
        <p className="lede">The link may be old, or the page moved. Your routine is right where you left it.</p>
        <div className="cta-row" style={{ justifyContent: "center" }}>
          <ButtonLink href="/">Back to home</ButtonLink>
        </div>
      </div>
    </section>
  );
}
