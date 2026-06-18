import { SKILLS } from "@/domains/portfolio/skills.data";
import { SkillCell } from "./skill-cell";

export function Skills() {
  return (
    <section id="skills" data-screen-label="03 Skills">
      <div className="container">
        <div className="section-head reveal">
          <h2>
            Skills / <em>the toolkit</em>
          </h2>
          <p className="lede">
            The stack I use to ship real client work: dependable PHP backends, editable CMS builds,
            responsive interfaces, APIs, payments and modern JavaScript where it fits.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <SkillCell key={skill.num} skill={skill} total={SKILLS.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
