import type { Metadata } from "next";
import { Services } from "@/components/portfolio/services/services";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Services - Curious Team",
  description:
    "Web application development, WordPress customization, responsive website design, REST APIs, payment integrations and PHP bug fixing.",
  path: "/services",
});

export default function ServicesPage() {
  return <Services />;
}
