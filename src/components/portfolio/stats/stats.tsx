import { STATS } from "@/domains/portfolio/stats.data";

export function Stats() {
  return (
    <section style={{ padding: 0 }} data-screen-label="Stats">
      <div className="stats">
        {STATS.map((s, i) => (
          <div className="stat reveal" key={s.label} style={{ transitionDelay: `${i * 0.05}s` }}>
            <div className="num">
              {s.num}
              <span className="plus">{s.plus}</span>
            </div>
            <div className="label">{s.label}</div>
            <div className="desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
