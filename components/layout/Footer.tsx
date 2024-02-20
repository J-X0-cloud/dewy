import Link from "next/link";
import { footerColumns, site } from "@/lib/data/site";
import { Brand } from "./Brand";
import { StoreButtons } from "./StoreButtons";

export function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <Brand light />
          <p>{site.tagline}</p>
          <StoreButtons light />
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h4>{column.title}</h4>
            {column.links.map((link) =>
              link.href.startsWith("mailto:") || link.href === "#" ? (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ),
            )}
          </div>
        ))}
      </div>
      <div className="wrap foot-base">
        <p>{site.disclaimer}</p>
        <p>{site.copyright}</p>
      </div>
    </footer>
  );
}
