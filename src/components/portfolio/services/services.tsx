import { SERVICES } from "@/domains/portfolio/services.data";
import { ServiceRow } from "./service-row";

export function Services() {
  return (
    <section id="services" data-screen-label="05 Services" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <div className="section-head reveal">
          <h2>
            Services / <em>what I build</em>
          </h2>
          <p className="lede">
            Practical web development services with clear scope, clean handover and support after
            launch. Available for direct projects and Fiverr work.
          </p>
        </div>

        <div className="services-list reveal">
          {SERVICES.map((service) => (
            <ServiceRow key={service.num} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
