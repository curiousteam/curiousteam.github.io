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
            Clients usually come for a website, a fix or an integration. They stay for clear
            communication, secure code and dependable support.
          </p>
        </div>

        <div className="testimonials">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
