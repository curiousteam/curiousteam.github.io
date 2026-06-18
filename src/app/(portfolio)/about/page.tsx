import type { Metadata } from "next";
import { About } from "@/components/portfolio/about/about";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About - Curious Team",
  description:
    "Full-stack web developer from Bangladesh, building websites, CMS platforms and web applications since 2015.",
  path: "/about",
});

export default function AboutPage() {
  return <About />;
}
