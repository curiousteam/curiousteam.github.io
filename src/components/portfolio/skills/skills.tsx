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
            A working stack — not a dump of every framework I&apos;ve touched. These are the tools
            I&apos;d pick if you handed me a brief tomorrow.
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
