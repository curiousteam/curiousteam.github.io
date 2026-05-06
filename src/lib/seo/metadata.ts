import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://curiousteam.github.io";
const SITE_NAME = "Curious Team";
const DEFAULT_OG_IMAGE = "/og-default.png";

export type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function buildMetadata({ title, description, path, image }: BuildMetadataInput): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    icons: {
      icon: [{ url: "/logo.png" }],
      shortcut: "/logo.png",
      apple: "/logo.png",
    },
    robots: { index: true, follow: true },
  };
}
