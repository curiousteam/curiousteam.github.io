const MARQUEE_ITEMS = [
  "Full-Stack Developer",
  "Web Designer",
  "Laravel Developer",
  "WordPress Specialist",
  "CodeIgniter Expert",
  "API Integrator",
  "React Builder",
] as const;

function MarqueeRow() {
  return (
    <span>
      {MARQUEE_ITEMS.map((label, i) => (
        <span
          key={`${label}-${i}`}
          style={{ display: "inline-flex", alignItems: "center", gap: 80 }}
        >
          <span style={{ fontStyle: "italic" }}>{label}</span>
          <span className="dot" />
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        <MarqueeRow />
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </div>
  );
}
