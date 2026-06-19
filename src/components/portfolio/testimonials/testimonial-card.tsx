import type { Testimonial } from "@/domains/portfolio/portfolio.types";

type TestimonialCardProps = {
  testimonial: Testimonial;
  index: number;
};

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const isFeatured = testimonial.featured;
  const platform = testimonial.sourceUrl ? (
    <a href={testimonial.sourceUrl} target="_blank" rel="noopener noreferrer">
      {testimonial.platform}
    </a>
  ) : (
    testimonial.platform
  );

  return (
    <article
      className={`testimonial reveal${isFeatured ? " testimonial-featured" : ""}`}
      style={{ transitionDelay: `${Math.min(index, 12) * 0.045}s` }}
    >
      <div className="testimonial-topline">
        <div className="stars" aria-label={`${testimonial.stars} out of 5 stars`}>
          {Array.from({ length: testimonial.stars }).map((_, j) => (
            <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
          <span>{testimonial.stars}.0</span>
        </div>
        <div className="platform">{platform}</div>
      </div>
      <p className="quote">{testimonial.quote}</p>
      <div className="author">
        <div className="avatar">{testimonial.avatar}</div>
        <div>
          <div className="name">{testimonial.name}</div>
          <div className="role">
            {testimonial.country} / {testimonial.date}
          </div>
        </div>
      </div>
      <div className="testimonial-service">{testimonial.role}</div>
    </article>
  );
}
