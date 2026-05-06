"use client";

import Image from "next/image";
import { useScrollNav } from "@/hooks/use-scroll-nav";
import { NAV_LINKS } from "@/domains/portfolio/nav.data";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const { scrolled } = useScrollNav();
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#hero" className="nav-brand">
        <Image src="/logo.png" alt="Curious Team" width={64} height={32} priority />
        <span>
          <span className="pulse" aria-hidden />
          Curious Team / AI Manager
        </span>
      </a>
      <div className="nav-links">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            <span className="num">{link.num}</span>
            {link.label}
          </a>
        ))}
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <ThemeToggle />
        <a href="#contact" className="nav-cta">
          Hire me
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
