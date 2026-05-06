import { TerminalBg } from "./terminal-bg";
import { HeroHeadline } from "./hero-headline";

export function Hero() {
  return (
    <section id="hero" className="hero" data-screen-label="01 Hero">
      <TerminalBg />
      <div className="hero-grid-bg" />
      <div className="hero-orb a" />
      <div className="hero-orb b" />

      <div className="container">
        <div className="hero-meta-top">
          <div>
            <span>Portfolio / 2026</span>
            <span className="v">Curious Team — V.04</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <span>Status</span>
            <span className="v">◉ Available · Q3 / 24</span>
          </div>
          <div style={{ textAlign: "right" }}>
            <span>Based</span>
            <span className="v">Remote · GMT+6</span>
          </div>
        </div>
      </div>

      <div className="container">
        <HeroHeadline />

        <div className="hero-bottom">
          <p className="hero-tag">
            <strong>Curious Team</strong> is a one-person studio designing, building and operating
            AI-powered web products — from hand-coded landings to autonomous agents.
          </p>
          <div className="hero-cta-row">
            <a href="#projects" className="btn btn-primary">
              See the work
              <svg
                className="arrow"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Start a project
            </a>
          </div>
          <div className="hero-stats-mini">
            <div>
              <span className="n">
                500
                <span style={{ color: "var(--accent-2)", fontStyle: "italic" }}>+</span>
              </span>
              <span className="l">Projects</span>
            </div>
            <div>
              <span className="n">
                8<span style={{ color: "var(--accent-2)", fontStyle: "italic" }}>yr</span>
              </span>
              <span className="l">In trade</span>
            </div>
            <div>
              <span className="n">
                4.9
                <span style={{ color: "var(--accent-2)", fontStyle: "italic" }}>★</span>
              </span>
              <span className="l">Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
