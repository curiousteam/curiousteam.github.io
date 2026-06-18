import type { Metadata } from "next";
import { Projects } from "@/components/portfolio/projects/projects";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Selected Work - Curious Team",
  description:
    "Laravel applications, WordPress builds, CodeIgniter rescue work, payment integrations and responsive frontend projects.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return <Projects />;
}
