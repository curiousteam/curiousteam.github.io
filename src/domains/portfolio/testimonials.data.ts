import type { Testimonial } from "./portfolio.types";

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    stars: 5,
    quote:
      "Built our entire AI ops layer in two weeks. Replaced four contractors. Genuinely the most competent person we've hired this year.",
    name: "Maya Chen",
    role: "Founder, Lattice Labs",
    avatar: "M",
    platform: "Direct",
  },
  {
    stars: 5,
    quote:
      "Took a 4-year-old WordPress mess and shipped a Shopify migration ahead of schedule. Communication was tight, code was clean.",
    name: "David O.",
    role: "Owner, Verdant Goods",
    avatar: "D",
    platform: "Fiverr",
  },
  {
    stars: 5,
    quote:
      "I sent a Figma file at 2am, woke up to a working prototype. Six revisions later it was live. This is the level we needed.",
    name: "Priya Raman",
    role: "Design Lead, Northwind",
    avatar: "P",
    platform: "Fiverr",
  },
] as const;
