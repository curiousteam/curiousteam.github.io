import { TESTIMONIALS } from "@/domains/portfolio/testimonials.data";
import { TestimonialCard } from "./testimonial-card";

export function Testimonials() {
  return (
    <section id="testimonials" data-screen-label="07 Testimonials">
      <div className="container">
        <div className="section-head reveal">
          <h2>
            Proof / <em>client outcomes</em>
          </h2>
          <p className="lede">
            Real Fiverr review text extracted from the profile screenshot, arranged as a client
            proof wall.
          </p>
        </div>

        <a
          className="review-proof reveal"
          href="https://www.fiverr.com/curiousteam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Fiverr</span>
          <strong>5.0 / 5</strong>
          <span>20 shown from 79</span>
        </a>

        <div className="testimonials">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${testimonial.role}`}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
