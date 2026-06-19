import type { Testimonial } from "./portfolio.types";

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    stars: 5,
    quote: "Very good communication skill, know his matter and go extra mile.",
    name: "jules9292",
    role: "France / Full Stack Web Applications",
    avatar: "J",
    platform: "Fiverr",
    sourceUrl: "https://www.fiverr.com/curiousteam",
  },
  {
    stars: 5,
    quote: "Very nice to work with",
    name: "achillescomfort",
    role: "United States / Help & Consultation",
    avatar: "A",
    platform: "Fiverr",
    sourceUrl: "https://www.fiverr.com/curiousteam",
  },
  {
    stars: 5,
    quote: "If something was unclear, he asked me.",
    name: "fivarthur",
    role: "Switzerland / Yii1 framework fixes",
    avatar: "F",
    platform: "Fiverr",
    sourceUrl: "https://www.fiverr.com/curiousteam",
  },
  {
    stars: 5,
    quote: "Excellent seller",
    name: "vivek033",
    role: "India / Full Stack Web Applications",
    avatar: "V",
    platform: "Fiverr",
    sourceUrl: "https://www.fiverr.com/curiousteam",
  },
] as const;
