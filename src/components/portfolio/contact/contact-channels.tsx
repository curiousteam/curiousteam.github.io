type Channel = {
  label: string;
  value: string;
  href: string;
};

const CHANNELS: readonly Channel[] = [
  { label: "Email", value: "hello@curiousteam.dev", href: "mailto:hello@curiousteam.dev" },
  { label: "Fiverr", value: "/curiousteam", href: "https://www.fiverr.com/curiousteam" },
  { label: "LinkedIn", value: "in/curiousteam", href: "https://www.linkedin.com/in/curiousteam/" },
  { label: "GitHub", value: "@curiousteam", href: "https://github.com/curiousteam" },
] as const;

export function ContactChannels() {
  return (
    <div className="contact-channels reveal">
      {CHANNELS.map((c) => (
        <a
          key={c.label}
          href={c.href}
          className="contact-channel"
          target={c.href.startsWith("http") ? "_blank" : undefined}
          rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          <div className="left">
            <span className="label">{c.label}</span>
            <span className="value">{c.value}</span>
          </div>
          <span className="arrow">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </a>
      ))}
    </div>
  );
}
