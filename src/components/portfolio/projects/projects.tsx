import { PROJECTS } from "@/domains/portfolio/projects.data";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <section id="projects" data-screen-label="04 Projects">
      <div className="container">
        <div className="section-head reveal">
          <h2>
            Selected work / <em>web systems</em>
          </h2>
          <p className="lede">
            A focused snapshot of the kind of work Curious Team delivers: Laravel applications,
            WordPress builds, legacy PHP fixes, payment integrations and responsive frontend work.
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
