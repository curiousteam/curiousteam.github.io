import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Notes — Curious Team",
  description: "Field notes on AI tooling, web craft, and shipping production agents.",
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
            Field notes on AI tooling, web craft, and shipping production agents. First entries land
            Q3 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
