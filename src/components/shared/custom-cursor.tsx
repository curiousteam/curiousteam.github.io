"use client";

import { useCursor } from "@/hooks/use-cursor";

export function CustomCursor() {
  useCursor(true);
  return (
    <>
      <div className="cursor-dot" aria-hidden />
      <div className="cursor-ring" aria-hidden />
    </>
  );
}
