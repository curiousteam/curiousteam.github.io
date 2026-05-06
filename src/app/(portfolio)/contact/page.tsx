import type { Metadata } from "next";
import { Contact } from "@/components/portfolio/contact/contact";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact — Curious Team",
  description:
    "Send a brief. Email, Fiverr, LinkedIn, or GitHub — pick the channel that suits you.",
  path: "/contact",
});

export default function ContactPage() {
  return <Contact />;
}
