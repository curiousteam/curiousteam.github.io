import { PROCESS } from "@/domains/portfolio/process.data";

export function Process() {
  return (
    <section id="process" data-screen-label="06 Process">
      <div className="container">
        <div className="section-head reveal">
          <h2>
            How I work / <em>the delivery loop</em>
          </h2>
          <p className="lede">
            A simple process for both small fixes and complete builds: understand the goal, plan the
            path, build carefully, then launch with support.
          </p>
        </div>

        <div className="process-grid reveal">
          {PROCESS.map((step) => (
            <div key={step.num} className="process-step">
              <div className="num">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
              <div className="duration">{step.dur}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
