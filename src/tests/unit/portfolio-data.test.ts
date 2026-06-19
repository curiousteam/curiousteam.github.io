import { describe, expect, it } from "vitest";
import { NAV_LINKS, SECTION_IDS } from "@/domains/portfolio/nav.data";
import { SKILLS } from "@/domains/portfolio/skills.data";
import { PROJECTS } from "@/domains/portfolio/projects.data";
import { SERVICES } from "@/domains/portfolio/services.data";
import { TESTIMONIALS } from "@/domains/portfolio/testimonials.data";

describe("portfolio data integrity", () => {
  it("nav links every entry has a unique numeric label", () => {
    const nums = NAV_LINKS.map((l) => l.num);
    expect(new Set(nums).size).toBe(nums.length);
  });

  it("section ids match nav anchor targets", () => {
    const navTargets = NAV_LINKS.map((l) => l.href.slice(1));
    for (const target of navTargets) {
      expect(SECTION_IDS).toContain(target);
    }
  });

  it("skills proficiency stays inside 0-100", () => {
    for (const skill of SKILLS) {
      expect(skill.w).toBeGreaterThanOrEqual(0);
      expect(skill.w).toBeLessThanOrEqual(100);
    }
  });

  it("project sizes are within the bento vocabulary", () => {
    const allowed = new Set(["large", "med", "small"]);
    for (const project of PROJECTS) {
      expect(allowed.has(project.size)).toBe(true);
    }
  });

  it("each service has at least one deliverable", () => {
    for (const service of SERVICES) {
      expect(service.deliv.length).toBeGreaterThan(0);
    }
  });

  it("client testimonials point to a verifiable source", () => {
    expect(TESTIMONIALS.length).toBeGreaterThanOrEqual(20);

    for (const testimonial of TESTIMONIALS) {
      expect(testimonial.stars).toBe(5);
      expect(testimonial.sourceUrl).toBe("https://www.fiverr.com/curiousteam");
    }
  });
});
