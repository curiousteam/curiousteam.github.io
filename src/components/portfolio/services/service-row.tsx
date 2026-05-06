import type { Service } from "@/domains/portfolio/portfolio.types";

export function ServiceRow({ service }: { service: Service }) {
  return (
    <div className="service-row">
      <span className="num">{service.num}</span>
      <span className="title">{service.title}</span>
      <span className="desc">{service.desc}</span>
      <span className="deliverables">
        {service.deliv.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </span>
      <span className="price">
        <span className="from">From</span>${service.from}
      </span>
    </div>
  );
}
