export function About() {
  return (
    <section id="about" data-screen-label="02 About">
      <div className="container">
        <div className="section-head reveal">
          <h2>
            About / <em>The operator</em>
          </h2>
          <p className="lede">
            A short bio for people who skip the hero. Eight years in the trenches, now pointing AI
            at the boring parts so the craft can stay sharp.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-portrait reveal">
            <div className="placeholder">[ portrait — drop in a photo ]</div>
            <div className="badge">Available for Q3</div>
          </div>

          <div className="about-text reveal">
            <p>
              I&apos;m an <em>AI Manager</em> who came up the long way — hand-coded HTML at 16, ten
              years of WordPress and Shopify, then React, then agents.
            </p>
            <p>
              These days I run <strong>Curious Team</strong> as a quiet one-person studio: design
              the system, build the thing, point the model at it, ship.
            </p>
            <p>
              The work spans serious AI tooling (RAG knowledge bases, multi-agent ops dashboards)
              and beautifully-built marketing sites. Both are craft. Both reward the same patience.
            </p>
            <dl className="about-meta">
              <div>
                <dt>Experience</dt>
                <dd>8 years · Web + 2 yrs AI tooling</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>Remote · GMT+6 (overlap with US/EU)</dd>
              </div>
              <div>
                <dt>Focus areas</dt>
                <dd>AI agents · Web apps · E-commerce</dd>
              </div>
              <div>
                <dt>Tools</dt>
                <dd>Cursor · Figma · Linear · Notion</dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>English (fluent) · Bengali (native)</dd>
              </div>
              <div>
                <dt>Working style</dt>
                <dd>Async-first · Daily updates · Fixed bids</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
