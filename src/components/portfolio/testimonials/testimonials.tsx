import { TESTIMONIALS } from "@/domains/portfolio/testimonials.data";
import { TestimonialCard } from "./testimonial-card";

export function Testimonials() {
  return (
    <section id="testimonials" data-screen-label="07 Testimonials">
      <div className="container">
        <div className="section-head reveal">
          <h2>
            Words / <em>from clients</em>
          </h2>
          <p className="lede">
            Verified reviews from Fiverr and direct clients. The full set lives on my profile —
            these are the ones I&apos;m proudest of.
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
