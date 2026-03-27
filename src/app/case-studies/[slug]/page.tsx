import type { Metadata } from "next";
import { notFound } from "next/navigation";

import HeroMinimal from "@/components/sections/HeroMinimal";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CaseStudyCarousel from "@/components/sections/CaseStudyCarousel";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import StatCard from "@/components/ui/StatCard";
import { caseStudies } from "@/lib/data/caseStudies";
import { testimonials } from "@/lib/data/testimonials";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: "Case Study Not Found | GolfBack" };

  return {
    title: `${cs.title} | GolfBack Case Study`,
    description: cs.excerpt,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const relatedStudies = caseStudies
    .filter((c) => c.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <HeroMinimal label="Case Study" heading={cs.title} subtitle={cs.excerpt} />

      {/* Stats */}
      {cs.stats && cs.stats.length > 0 && (
        <section className="bg-brand-dark py-16 md:py-20">
          <Container>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cs.stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  dark
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Content */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          {cs.body ? (
            <div
              className="prose prose-neutral prose-headings:font-bold prose-h2:text-2xl prose-table:text-sm mx-auto max-w-3xl"
              dangerouslySetInnerHTML={{ __html: cs.body }}
            />
          ) : (
            <div className="prose prose-neutral mx-auto max-w-3xl">
              <p>
                {cs.content ||
                  `${cs.title} partnered with GolfBack to transform their direct booking strategy and revenue management. The results demonstrate the impact of owning your tee sheet, your customer data, and your revenue.`}
              </p>
            </div>
          )}

          {cs.quote && (
            <figure className="mx-auto mt-16 max-w-3xl border-l-4 border-brand-cyan pl-6">
              <blockquote className="text-xl font-medium italic leading-relaxed text-neutral-700">
                &ldquo;{cs.quote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-neutral-500">
                — {cs.quote.author}
                {cs.quote.role && `, ${cs.quote.role}`}
              </figcaption>
            </figure>
          )}
        </Container>
      </section>

      {/* Testimonial */}
      <TestimonialSection
        label="What Our Clients Say"
        heading="From the Course"
        testimonials={[testimonials[0]]}
      />

      {/* Related Case Studies */}
      <CaseStudyCarousel
        label="More Results"
        heading="More Success Stories"
        caseStudies={relatedStudies}
        dark
      />

      {/* CTA */}
      <CtaBanner
        heading="Ready to See Results Like These?"
        subtitle="Join 125+ golf courses already growing their revenue with GolfBack."
        primaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
        secondaryCta={{ label: "Back to Case Studies", href: "/case-studies" }}
        variant="cyan"
      />
    </>
  );
}
