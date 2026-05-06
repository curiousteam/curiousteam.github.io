import type { Service } from "./portfolio.types";

export const SERVICES: readonly Service[] = [
  {
    num: "S/01",
    title: "AI agent & workflow design",
    desc: "Custom GPT/Claude agents, RAG pipelines, automation flows that replace manual ops.",
    deliv: ["Discovery", "Architecture", "Build", "Handoff"],
    from: 350,
  },
  {
    num: "S/02",
    title: "Full-stack web development",
    desc: "Modern React/Next.js apps with APIs, auth, payments and a clean admin layer.",
    deliv: ["Spec", "Frontend", "Backend", "Deploy"],
    from: 800,
  },
  {
    num: "S/03",
    title: "WordPress & Elementor sites",
    desc: "Editor-friendly business sites that load fast and rank. Shipped in days, not weeks.",
    deliv: ["Theme", "Pages", "SEO", "Training"],
    from: 250,
  },
  {
    num: "S/04",
    title: "Shopify storefront builds",
    desc: "Conversion-tuned themes with custom sections, GSAP polish and Klaviyo wired in.",
    deliv: ["Theme", "Sections", "CRO", "Email"],
    from: 400,
  },
  {
    num: "S/05",
    title: "Landing page sprints",
    desc: "One high-converting page in ~5 days — copy, design, build, A/B test.",
    deliv: ["Copy", "Design", "Code", "Tests"],
    from: 180,
  },
  {
    num: "S/06",
    title: "Bug fixing & rescue work",
    desc: "You inherited a mess. I clean it up — fast diagnosis, surgical fixes, documentation.",
    deliv: ["Audit", "Fixes", "Docs"],
    from: 80,
  },
] as const;
