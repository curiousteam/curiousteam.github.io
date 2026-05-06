import type { Stat } from "./portfolio.types";

export const STATS: readonly Stat[] = [
  {
    num: "500",
    plus: "+",
    label: "Projects shipped",
    desc: "Across web, AI workflows & e-commerce",
  },
  {
    num: "8",
    plus: "yrs",
    label: "In the industry",
    desc: "From hand-coded HTML to autonomous agents",
  },
  { num: "4.9", plus: "★", label: "Avg. rating", desc: "Verified across Fiverr & client reviews" },
  {
    num: "60",
    plus: "+",
    label: "Happy clients",
    desc: "Founders, agencies, solo operators worldwide",
  },
] as const;
