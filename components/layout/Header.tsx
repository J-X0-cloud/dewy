"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { mainNav } from "@/lib/data/site";
import { Brand } from "./Brand";

function NavLinks({ pathname }: { pathname: string }) {
  return (
    <>
      {mainNav.map((link) => (
        <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
          {link.label}
        </Link>
      ))}
    </>
  );
}

export function Header() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (menuRef.current) menuRef.current.open = false;
  }, [pathname]);

  return (
    <header className="site-head">
      <div className="wrap head-row">
        <Brand />
        <nav className="nav" aria-label="Main">
          <NavLinks pathname={pathname} />
        </nav>
        <Link className="btn btn-ink head-cta" href="/#download">
          Get the app
        </Link>
        <details className="mnav" ref={menuRef}>
          <summary aria-label="Open menu">
            <span />
            <span />
            <span />
          </summary>
          <div className="mnav-panel">
            <NavLinks pathname={pathname} />
            <Link className="btn btn-ink" href="/#download">
              Get the app
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
