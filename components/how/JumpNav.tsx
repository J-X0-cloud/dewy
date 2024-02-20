import { jumpLinks } from "@/lib/data/how-it-works";

export function JumpNav() {
  return (
    <nav className="jump" aria-label="On this page">
      {jumpLinks.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
