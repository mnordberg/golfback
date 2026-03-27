import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

type CaseStudy = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  stats?: { label: string; value: string }[];
};

export default function CaseStudyCarousel({
  label,
  heading,
  caseStudies,
  dark = false,
}: {
  label?: string;
  heading?: string;
  caseStudies: CaseStudy[];
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-brand-navy py-20 md:py-28" : "bg-neutral-50 py-20 md:py-28"}>
      <Container>
        {heading && (
          <SectionHeading
            label={label}
            heading={heading}
            dark={dark}
          />
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <Card
              key={cs.slug}
              variant={dark ? "dark" : "light"}
              hover
              as="article"
            >
              {cs.stats && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {cs.stats.map((s) => (
                    <Badge key={s.label} variant="cyan">
                      {s.value} {s.label}
                    </Badge>
                  ))}
                </div>
              )}
              <time
                className={
                  dark ? "text-xs text-neutral-400" : "text-xs text-neutral-400"
                }
              >
                {cs.date}
              </time>
              <h3
                className={`mt-2 mb-3 text-lg font-semibold ${
                  dark ? "text-white" : "text-neutral-900"
                }`}
              >
                {cs.title}
              </h3>
              <p
                className={`mb-4 text-sm leading-relaxed ${
                  dark ? "text-neutral-300" : "text-neutral-500"
                }`}
              >
                {cs.excerpt}
              </p>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand-cyan transition-colors hover:text-brand-glow"
              >
                Read Case Study
                <ArrowRight size={14} />
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
