import type { CSSProperties } from "react";
import type { Skill } from "@/domains/portfolio/portfolio.types";
import { cn } from "@/lib/utils/cn";

type SkillCellProps = {
  skill: Skill;
  total: number;
};

export function SkillCell({ skill, total }: SkillCellProps) {
  const className = cn("skill-cell", skill.featured && "featured", skill.span);
  const style = { "--w": `${skill.w}%` } as CSSProperties;
  const totalLabel = String(total).padStart(2, "0");

  return (
    <div className={className} style={style}>
      <div className="skill-num">
        {skill.num} / {totalLabel}
      </div>
      <div>
        <div className="skill-name">{skill.name}</div>
        <div className="skill-bar">
          <div />
        </div>
        <div className="skill-meta">
          <span>{skill.meta}</span>
          <span>{skill.w}%</span>
        </div>
      </div>
    </div>
  );
}
