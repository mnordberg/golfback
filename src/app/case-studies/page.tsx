import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import HeroMinimal from "@/components/sections/HeroMinimal";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import AnimateIn from "@/components/ui/AnimateIn";
import VideoEmbedMP4 from "@/components/ui/VideoEmbedMP4";
import { caseStudies } from "@/lib/data/caseStudies";

const videoTestimonials = [
  {
    src: "https://golfbacksolutions.com/wp-content/uploads/2025/01/bo-testimonial-1.mp4",
    name: "Bo Lehew",
    title: "General Manager",
    course: "Golf Club of Texas",
    quote:
      "The revenue immediately in month one… after a full year of data, seeing my APR per golfer go up — not five, not six, not seven — but $10 a round is insane. When you're doing 40,000 rounds, that's a lot of moolah.",
  },
  {
    src: "https://golfbacksolutions.com/wp-content/uploads/2025/01/jbilsky-testimonial-1.mp4",
    name: "J. Bilsky",
    title: "",
    course: "",
    quote:
      "You own your online booking so you're not outsourcing your tee times to third parties. You're driving all your customer data to your club — and you own your customer data, which is also extremely important.",
  },
  {
    src: "https://golfbacksolutions.com/wp-content/uploads/2025/01/a-mastrangelo-testimonial-1.mp4",
    name: "A. Mastrangelo",
    title: "",
    course: "",
    quote:
      "I would recommend GolfBack to another course owner or operator because it gives the course the ultimate control of their customer data.",
  },
  {
    src: "https://golfbacksolutions.com/wp-content/uploads/2025/01/tchateauvert-testimonial.mp4",
    name: "T. Chateauvert",
    title: "",
    course: "",
    quote:
      "I think GolfBack is as good as it gets. They thought in terms of doing the right thing for golf operators, and I respect that.",
  },
];

export const metadata: Metadata = {
  title: "Case Studies | GolfBack",
  description:
    "See how golf courses across the country are growing revenue, increasing direct bookings, and building their customer databases with GolfBack.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <HeroMinimal
        label="GolfBack Edge"
        heading="Results That Speak for Themselves"
        subtitle="Real courses, real numbers. See how GolfBack customers are taking back their revenue and growing direct bookings."
      />

      {/* Video testimonials — staggered layout */}
      <section className="bg-brand-navy py-20 md:py-28">
        <Container>
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-cyan">
              Hear It From Operators
            </p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              In Their Own Words
            </h2>
          </div>

          <div className="flex flex-col gap-0 md:-space-y-4">
            {videoTestimonials.map((t, i) => {
              const isEven = i % 2 === 0;
              return (
                <AnimateIn key={t.src} delay={0.1}>
                  <div
                    className={`flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16 ${
                      isEven ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Video */}
                    <div className="w-full max-w-xs mx-auto md:mx-0 md:w-72 md:flex-shrink-0">
                      <VideoEmbedMP4 src={t.src} title={`${t.name} testimonial`} />
                    </div>

                    {/* Quote */}
                    <div className="w-full md:flex-1">
                      <div className="relative">
                        <span
                          className="absolute -top-6 -left-2 select-none text-8xl font-serif leading-none text-brand-cyan opacity-20"
                          aria-hidden
                        >
                          &ldquo;
                        </span>
                        <blockquote className="relative text-xl font-medium italic leading-relaxed text-white md:text-2xl">
                          {t.quote}
                        </blockquote>
                        {(t.name || t.course) && (
                          <div className="mt-6 flex items-center gap-3">
                            <div className="h-px w-8 bg-brand-cyan" />
                            <div>
                              {t.name && (
                                <p className="text-sm font-semibold text-white">
                                  {t.name}
                                </p>
                              )}
                              {(t.title || t.course) && (
                                <p className="text-sm text-neutral-400">
                                  {[t.title, t.course].filter(Boolean).join(", ")}
                                </p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-cyan">
              Client Results
            </p>
            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
              Case Studies
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((cs) => (
              <Card key={cs.slug} hover>
                {cs.stats && cs.stats.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {cs.stats.map((stat) => (
                      <Badge key={stat.label} variant="cyan">
                        {stat.label}: {stat.value}
                      </Badge>
                    ))}
                  </div>
                )}

                <p className="mb-2 text-xs text-neutral-400">{cs.date}</p>

                <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                  {cs.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-neutral-500">
                  {cs.excerpt}
                </p>

                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-cyan hover:underline"
                >
                  Read Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
