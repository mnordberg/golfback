import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import TextSpinner from "@/components/ui/TextSpinner";

export default function HeroDefault({
  label,
  headingPrefix,
  spinnerWords,
  subtitle,
  primaryCta,
  secondaryCta,
  children,
}: {
  label: string;
  headingPrefix: string;
  spinnerWords: string[];
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="noise-overlay relative min-h-[85vh] bg-brand-navy hero-gradient">
      <Container className="relative z-10 flex min-h-[85vh] items-center py-24 md:py-32 lg:py-40">
        <div className="grid w-full items-center gap-8 xl:grid-cols-[1fr_minmax(0,560px)] xl:gap-12">
          {/* Text content — centered when dashboard is hidden, left-aligned when shown */}
          <div className="text-center xl:text-left">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              {label}
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {headingPrefix}
              <br />
              <TextSpinner words={spinnerWords} />
            </h1>
            <p className="mx-auto mb-8 max-w-lg text-lg text-neutral-300 md:text-xl xl:mx-0">
              {subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 xl:justify-start">
              <Button variant="primary" size="lg" href={primaryCta.href} arrow>
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button
                  variant="secondary"
                  size="lg"
                  href={secondaryCta.href}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>
          {children && <div className="hidden xl:block">{children}</div>}
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/30 to-transparent" />
    </section>
  );
}
