import type { Metadata } from "next";
import { Contact } from "@/components/portfolio/contact/contact";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact - Curious Team",
  description:
    "Send a brief for a website, WordPress build, Laravel application, API integration or PHP bug fix.",
  path: "/contact",
});

export default function ContactPage() {
  return <Contact />;
}
