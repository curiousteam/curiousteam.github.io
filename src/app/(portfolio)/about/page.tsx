import type { Metadata } from "next";
import { About } from "@/components/portfolio/about/about";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About — Curious Team",
  description: "Eight years in the trenches, now an AI Manager running a one-person studio.",
  path: "/about",
});

export default function AboutPage() {
  return <About />;
}
