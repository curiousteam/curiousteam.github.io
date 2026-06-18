import type { Skill } from "./portfolio.types";

export const SKILLS: readonly Skill[] = [
  { name: "PHP / Laravel", meta: "Apps - APIs - Auth", w: 95, featured: true, num: "01" },
  { name: "WordPress", meta: "Elementor - Astra - CMS", w: 96, num: "02" },
  { name: "CodeIgniter", meta: "HMVC - REST - Legacy", w: 90, num: "03" },
  { name: "MySQL", meta: "Schema - Queries - Reports", w: 88, num: "04" },
  { name: "Frontend UI", meta: "HTML - CSS - Bootstrap", w: 94, span: "span-4", num: "05" },
  { name: "React / Next.js", meta: "TypeScript - Static sites", w: 86, span: "span-4", num: "06" },
  { name: "JavaScript", meta: "jQuery - Ajax - Vue", w: 89, span: "span-4", num: "07" },
  { name: "REST APIs", meta: "Integrations - Payments", w: 92, featured: true, num: "08" },
  { name: "Tailwind CSS", meta: "Responsive systems", w: 87, num: "09" },
  { name: "SEO + Speed", meta: "Clean URLs - Core Web Vitals", w: 85, num: "10" },
] as const;
