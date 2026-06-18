import type { Service } from "./portfolio.types";

export const SERVICES: readonly Service[] = [
  {
    num: "S/01",
    title: "Custom web application development",
    desc: "Secure Laravel, CodeIgniter or PHP systems with roles, dashboards, APIs and clean database design.",
    deliv: ["Scope", "Backend", "Frontend", "Deploy"],
    from: 800,
  },
  {
    num: "S/02",
    title: "WordPress setup and customization",
    desc: "Fast business sites, Elementor Pro pages, Astra-based builds, plugin setup and client-friendly editing.",
    deliv: ["Theme", "Pages", "Plugins", "Training"],
    from: 250,
  },
  {
    num: "S/03",
    title: "Website design and frontend builds",
    desc: "Responsive HTML, Bootstrap, Tailwind, React and Next.js interfaces that feel polished on every screen.",
    deliv: ["Wireframe", "UI", "Code", "QA"],
    from: 350,
  },
  {
    num: "S/04",
    title: "API and payment gateway integration",
    desc: "RESTful APIs, PayPal or payment gateways, Ajax flows and third-party services wired with care.",
    deliv: ["API", "Gateway", "Testing", "Docs"],
    from: 400,
  },
  {
    num: "S/05",
    title: "Landing page and SEO sprint",
    desc: "One focused page with sharp copy, responsive sections, search-friendly structure and quick launch support.",
    deliv: ["Copy", "Design", "Code", "SEO"],
    from: 180,
  },
  {
    num: "S/06",
    title: "Bug fixing and rescue work",
    desc: "PHP, Laravel, CodeIgniter or WordPress problems diagnosed quickly, fixed cleanly and documented.",
    deliv: ["Audit", "Fixes", "Report"],
    from: 80,
  },
] as const;
