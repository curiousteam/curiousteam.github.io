import type { Skill } from "./portfolio.types";

export const SKILLS: readonly Skill[] = [
  { name: "AI Workflows", meta: "LangChain · OpenAI · Claude", w: 95, featured: true, num: "01" },
  { name: "React", meta: "Next.js · Vite · TS", w: 92, num: "02" },
  { name: "WordPress", meta: "Elementor · ACF", w: 96, num: "03" },
  { name: "Shopify", meta: "Liquid · Theme Dev", w: 88, num: "04" },
  { name: "UI / UX Design", meta: "Figma · Framer", w: 90, span: "span-4", num: "05" },
  { name: "Tailwind CSS", meta: "Headless UI", w: 94, span: "span-4", num: "06" },
  { name: "Node.js", meta: "Express · APIs", w: 85, span: "span-4", num: "07" },
  { name: "Prompt Engineering", meta: "Agents · RAG · Tools", w: 93, featured: true, num: "08" },
  { name: "PHP / Laravel", meta: "Backend logic", w: 80, num: "09" },
  { name: "SEO + Speed", meta: "Core Web Vitals", w: 87, num: "10" },
] as const;
