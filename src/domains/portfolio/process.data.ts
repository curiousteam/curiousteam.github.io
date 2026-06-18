import type { ProcessStep } from "./portfolio.types";

export const PROCESS: readonly ProcessStep[] = [
  {
    num: "01",
    title: "Understand.",
    desc: "We clarify the business goal, users, must-have features and the fastest path to a useful launch.",
    dur: "Day 1",
  },
  {
    num: "02",
    title: "Plan.",
    desc: "You get the scope, milestones, stack choice and fixed quote before any serious build work starts.",
    dur: "Day 2-3",
  },
  {
    num: "03",
    title: "Build.",
    desc: "Design, code, integrations and QA move together with regular updates, test links and practical feedback.",
    dur: "Week 1-2",
  },
  {
    num: "04",
    title: "Launch.",
    desc: "I deploy, secure, document and hand over the work, then stay close for revisions and support.",
    dur: "Week 3+",
  },
] as const;
