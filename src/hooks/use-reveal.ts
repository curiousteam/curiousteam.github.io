"use client";

import { useEffect } from "react";

/** Adds `.in-view` to elements with `.reveal` or `.skill-cell` once they enter the viewport. */
export function useReveal(): void {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .skill-cell");
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
