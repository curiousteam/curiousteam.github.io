import type { ProcessStep } from "./portfolio.types";

export const PROCESS: readonly ProcessStep[] = [
  {
    num: "01",
    title: "Listen.",
    desc: "A real conversation — what you need, who it's for, where it has to land. No templates, no fluff.",
    dur: "Day 1",
  },
  {
    num: "02",
    title: "Plan.",
    desc: "Architecture, scope, milestones and a fixed quote. You see the whole map before we start.",
    dur: "Day 2–3",
  },
  {
    num: "03",
    title: "Build.",
    desc: "Daily progress in a shared workspace. You watch the thing become real, with feedback loops baked in.",
    dur: "Week 1–2",
  },
  {
    num: "04",
    title: "Ship.",
    desc: "Launch, monitor, hand over keys. Plus 30 days of revisions because polish actually matters.",
    dur: "Week 3+",
  },
] as const;
