import { describe, expect, it } from "vitest";
import { buildMetadata } from "@/lib/seo/metadata";

describe("buildMetadata", () => {
  it("produces canonical and OpenGraph URLs from path", () => {
    const meta = buildMetadata({
      title: "Test",
      description: "desc",
      path: "/about",
    });
    expect(meta.alternates?.canonical).toContain("/about");
    expect(meta.openGraph?.url).toContain("/about");
  });

  it("falls back to default OG image", () => {
    const meta = buildMetadata({ title: "T", description: "d", path: "/" });
    const images = meta.openGraph?.images;
    expect(Array.isArray(images) ? images.length : 0).toBeGreaterThan(0);
  });

  it("respects a custom OG image override", () => {
    const meta = buildMetadata({ title: "T", description: "d", path: "/", image: "/custom.png" });
    const images = meta.openGraph?.images;
    expect(Array.isArray(images) ? images[0] : null).toMatchObject({ url: "/custom.png" });
  });
});
