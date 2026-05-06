import type { Testimonial } from "@/domains/portfolio/portfolio.types";

type TestimonialCardProps = {
  testimonial: Testimonial;
  index: number;
};

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <article className="testimonial reveal" style={{ transitionDelay: `${index * 0.06}s` }}>
      <div className="platform">{testimonial.platform}</div>
      <div className="stars" aria-label={`${testimonial.stars} out of 5 stars`}>
        {Array.from({ length: testimonial.stars }).map((_, j) => (
          <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="quote">{testimonial.quote}</p>
      <div className="author">
        <div className="avatar">{testimonial.avatar}</div>
        <div>
          <div className="name">{testimonial.name}</div>
          <div className="role">{testimonial.role}</div>
        </div>
      </div>
    </article>
  );
}
