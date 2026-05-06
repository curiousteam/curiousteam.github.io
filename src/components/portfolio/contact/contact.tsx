import { ContactChannels } from "./contact-channels";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contact" className="contact" data-screen-label="08 Contact">
      <div className="container">
        <div
          className="hero-orb a"
          style={{ position: "absolute", top: "-200px", right: "-200px", opacity: 0.2 }}
          aria-hidden
        />

        <h2 className="contact-headline reveal">
          Let&apos;s build
          <br />
          something <em>weird</em>
          <span className="cursor" />
        </h2>

        <div className="contact-grid">
          <ContactChannels />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
