"use client";

import { useEffect } from "react";

/** Drives the dot+ring custom cursor. Selector list mirrors the design's interactive surfaces. */
export function useCursor(enabled: boolean): void {
  useEffect(() => {
    if (!enabled) return;
    const dot = document.querySelector<HTMLElement>(".cursor-dot");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    if (!dot || !ring) return;

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
    };

    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const enter = () => ring.classList.add("hovering");
    const leave = () => ring.classList.remove("hovering");
    const interactiveSelector = "a, button, .project-card, .service-row, .skill-cell, .testimonial";
    const interactives = document.querySelectorAll<HTMLElement>(interactiveSelector);

    document.addEventListener("mousemove", move);
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", move);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [enabled]);
}
