import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  course: string;
};

export default function TestimonialSection({
  label,
  heading,
  testimonials,
  carousel = false,
}: {
  label?: string;
  heading?: string;
  testimonials: Testimonial[];
  carousel?: boolean;
}) {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        {heading && (
          <SectionHeading label={label} heading={heading} />
        )}
        {carousel ? (
          <TestimonialCarousel testimonials={testimonials} />
        ) : (
          <div className={testimonials.length > 1 ? "grid gap-8 md:grid-cols-2" : "mx-auto max-w-3xl"}>
            {testimonials.map((t, i) => (
              <div key={i} className="text-center">
                <span className="mb-4 block font-serif text-6xl leading-none text-brand-cyan/20">
                  &ldquo;
                </span>
                <blockquote className="mb-6 text-xl leading-relaxed text-neutral-700 italic md:text-2xl">
                  {t.quote}
                </blockquote>
                <div>
                  <p className="font-semibold text-neutral-900">{t.name}</p>
                  <p className="text-sm text-neutral-500">
                    {t.title}, {t.course}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
