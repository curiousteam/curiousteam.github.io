import type { NavLink } from "./portfolio.types";

export const NAV_LINKS: readonly NavLink[] = [
  { num: "01", label: "Index", href: "#hero" },
  { num: "02", label: "About", href: "#about" },
  { num: "03", label: "Skills", href: "#skills" },
  { num: "04", label: "Work", href: "#projects" },
  { num: "05", label: "Services", href: "#services" },
  { num: "06", label: "Process", href: "#process" },
  { num: "07", label: "Contact", href: "#contact" },
] as const;

export const SECTION_IDS = [
  "hero",
  "about",
  "skills",
  "projects",
  "services",
  "process",
  "testimonials",
  "contact",
] as const;
