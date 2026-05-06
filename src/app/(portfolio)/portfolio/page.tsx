import type { Metadata } from "next";
import { Projects } from "@/components/portfolio/projects/projects";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Selected Work — Curious Team",
  description: "AI tooling, e-commerce, brand sites. Six projects that show the range.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return <Projects />;
}
