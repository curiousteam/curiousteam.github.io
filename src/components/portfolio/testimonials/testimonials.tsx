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
            Real Fiverr buyer feedback from a 5.0 rated profile with 79 public reviews.
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
          <span>79 reviews</span>
        </a>

        <div className="testimonials">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
