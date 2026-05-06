import { PROCESS } from "@/domains/portfolio/process.data";

export function Process() {
  return (
    <section id="process" data-screen-label="06 Process">
      <div className="container">
        <div className="section-head reveal">
          <h2>
            How I work / <em>the loop</em>
          </h2>
          <p className="lede">
            Four steps. Same every time — for a $80 bug fix or a $20k AI build. The thing that
            changes is the depth, not the order.
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
