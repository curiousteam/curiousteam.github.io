import type { ReactNode } from "react";
import { Nav } from "@/components/shared/nav";
import { Footer } from "@/components/shared/footer";
import { SectionIndexRail } from "@/components/shared/section-index-rail";
import { CustomCursor } from "@/components/shared/custom-cursor";
import { RevealActivator } from "@/components/shared/reveal";
import { QueryProvider } from "@/components/shared/query-provider";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <CustomCursor />
      <Nav />
      <SectionIndexRail />
      <main>{children}</main>
      <Footer />
      <RevealActivator />
    </QueryProvider>
  );
}
