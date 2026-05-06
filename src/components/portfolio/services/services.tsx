import { SERVICES } from "@/domains/portfolio/services.data";
import { ServiceRow } from "./service-row";

export function Services() {
  return (
    <section id="services" data-screen-label="05 Services" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <div className="section-head reveal">
          <h2>
            Services / <em>what I sell</em>
          </h2>
          <p className="lede">
            Productized offers with fixed scope and fixed prices. Most also live as Fiverr gigs —
            direct DMs get priority and 10% off.
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
