import type { Testimonial } from "./portfolio.types";

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    stars: 5,
    quote:
      "Curious Team took our vague idea and turned it into a working Laravel system with roles, reports and clean handover notes.",
    name: "Project Owner",
    role: "Custom web application",
    avatar: "P",
    platform: "Direct",
  },
  {
    stars: 5,
    quote:
      "Our WordPress site finally became fast, editable and professional. Communication was clear from first audit to launch.",
    name: "Business Client",
    role: "WordPress redesign",
    avatar: "B",
    platform: "Fiverr",
  },
  {
    stars: 5,
    quote:
      "He understood the old CodeIgniter codebase quickly, fixed the critical bugs and documented what changed.",
    name: "Agency Partner",
    role: "PHP rescue work",
    avatar: "A",
    platform: "Direct",
  },
] as const;
