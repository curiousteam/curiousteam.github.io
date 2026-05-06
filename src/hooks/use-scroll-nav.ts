"use client";

import { useEffect, useState } from "react";
import { SECTION_IDS } from "@/domains/portfolio/nav.data";

export type ScrollNavState = {
  scrolled: boolean;
  active: string;
};

export function useScrollNav(): ScrollNavState {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(SECTION_IDS[0]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return { scrolled, active };
}
