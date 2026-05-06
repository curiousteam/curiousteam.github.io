import type { Metadata } from "next";
import { Services } from "@/components/portfolio/services/services";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Services — Curious Team",
  description:
    "Productized offers with fixed scope and fixed prices: AI agents, full-stack, WordPress, Shopify, landing pages, rescue work.",
  path: "/services",
});

export default function ServicesPage() {
  return <Services />;
}
