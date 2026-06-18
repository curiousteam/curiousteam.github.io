import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Notes - Curious Team",
  description: "Field notes on web development, PHP, Laravel, WordPress, APIs and client delivery.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section data-screen-label="Blog">
      <div className="container">
        <div className="section-head">
          <h2>
            Notes / <em>coming soon</em>
          </h2>
          <p className="lede">
            Field notes on practical web development, PHP, Laravel, WordPress, APIs and shipping
            client projects with less stress. First entries land soon.
          </p>
        </div>
      </div>
    </section>
  );
}
