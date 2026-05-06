"use client";

import { useScrollNav } from "@/hooks/use-scroll-nav";
import { NAV_LINKS } from "@/domains/portfolio/nav.data";

export function SectionIndexRail() {
  const { active } = useScrollNav();
  return (
    <nav className="section-index" aria-label="Section index">
      {NAV_LINKS.map((link) => {
        const id = link.href.slice(1);
        return (
          <a key={link.href} href={link.href} className={active === id ? "active" : undefined}>
            {link.num} {link.label}
          </a>
        );
      })}
    </nav>
  );
}
