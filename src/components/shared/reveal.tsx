"use client";

import { useReveal } from "@/hooks/use-reveal";

/** Mount-once activator: scans for `.reveal` / `.skill-cell` after hydration and toggles `.in-view`. */
export function RevealActivator() {
  useReveal();
  return null;
}
