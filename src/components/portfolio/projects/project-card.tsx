import type { CSSProperties } from "react";
import type { Project } from "@/domains/portfolio/portfolio.types";
import { cn } from "@/lib/utils/cn";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const style = {
    "--p-c1": project.c1,
    "--p-c2": project.c2,
    transitionDelay: `${index * 0.04}s`,
  } as CSSProperties;

  return (
    <article className={cn("project-card", project.size, "reveal")} style={style}>
      <div className="thumb" />
      <div className="thumb-grain" />
      <div className="thumb-pattern">{project.glyph}</div>

      <div className="meta-top">
        <span className="num">{project.num}</span>
        <span>
          {project.tag} · {project.year}
        </span>
      </div>

      <div className="body">
        <h3>{project.title}</h3>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="arrow-circle">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M7 17L17 7M9 7h8v8" />
        </svg>
      </div>
    </article>
  );
}
