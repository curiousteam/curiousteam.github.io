export function About() {
  return (
    <section id="about" data-screen-label="02 About">
      <div className="container">
        <div className="section-head reveal">
          <h2>
            About / <em>The developer</em>
          </h2>
          <p className="lede">
            A full-stack web developer from Bangladesh, building practical websites and software
            since 2015 with a focus on clean delivery and long-term support.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-portrait reveal">
            <div className="placeholder">[ portrait - drop in a photo ]</div>
            <div className="badge">Available for projects</div>
          </div>

          <div className="about-text reveal">
            <p>
              I&apos;m a <em>full-stack web developer</em> with deep hands-on experience across
              HTML, CSS, Bootstrap, Tailwind, JavaScript, jQuery, Ajax, PHP, MySQL, Laravel,
              CodeIgniter and WordPress.
            </p>
            <p>
              Through <strong>Curious Team</strong>, I help founders, agencies and business owners
              turn ideas into reliable websites, custom CMS platforms, admin systems, APIs and
              payment-enabled web applications.
            </p>
            <p>
              The work is simple to explain: responsive design, secure code, search-friendly URLs,
              easy installation, clear communication and support after launch.
            </p>
            <dl className="about-meta">
              <div>
                <dt>Experience</dt>
                <dd>Since 2015 - web design and development</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>Bangladesh - remote worldwide</dd>
              </div>
              <div>
                <dt>Focus areas</dt>
                <dd>Web apps - CMS - WordPress - APIs</dd>
              </div>
              <div>
                <dt>Tools</dt>
                <dd>Laravel - CodeIgniter - React - WordPress</dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>English - Bengali</dd>
              </div>
              <div>
                <dt>Working style</dt>
                <dd>Clear scope - steady updates - revisions</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
