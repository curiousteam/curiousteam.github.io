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
            <span className="v">Curious Team - V.04</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <span>Status</span>
            <span className="v">Available - Projects open</span>
          </div>
          <div style={{ textAlign: "right" }}>
            <span>Based</span>
            <span className="v">Bangladesh - GMT+6</span>
          </div>
        </div>
      </div>

      <div className="container">
        <HeroHeadline />

        <div className="hero-bottom">
          <p className="hero-tag">
            <strong>Curious Team</strong> builds responsive websites, custom CMS, web applications
            and integrations with the care of a senior full-stack developer.
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
                50
                <span style={{ color: "var(--accent-2)", fontStyle: "italic" }}>+</span>
              </span>
              <span className="l">Websites</span>
            </div>
            <div>
              <span className="n">
                10<span style={{ color: "var(--accent-2)", fontStyle: "italic" }}>+</span>
              </span>
              <span className="l">Software</span>
            </div>
            <div>
              <span className="n">
                2015
                <span style={{ color: "var(--accent-2)", fontStyle: "italic" }}>+</span>
              </span>
              <span className="l">Since</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
