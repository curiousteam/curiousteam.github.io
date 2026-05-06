import { PROJECTS } from "@/domains/portfolio/projects.data";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <section id="projects" data-screen-label="04 Projects">
      <div className="container">
        <div className="section-head reveal">
          <h2>
            Selected work / <em>2024 — 26</em>
          </h2>
          <p className="lede">
            Six projects that show the range — AI tooling, e-commerce, brand sites. Click any card
            for the full case study.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.num} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
