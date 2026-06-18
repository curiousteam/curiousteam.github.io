import type { Stat } from "./portfolio.types";

export const STATS: readonly Stat[] = [
  {
    num: "50",
    plus: "+",
    label: "Websites delivered",
    desc: "Business sites, landing pages and CMS builds",
  },
  {
    num: "10",
    plus: "+",
    label: "Software projects",
    desc: "Admin panels, custom CMS and web applications",
  },
  {
    num: "2015",
    plus: "",
    label: "Building since",
    desc: "From HTML and PHP to modern React stacks",
  },
  {
    num: "100",
    plus: "%",
    label: "Client-first process",
    desc: "Clear scope, secure code and revisions until it is right",
  },
] as const;
