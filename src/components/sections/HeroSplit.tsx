import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function HeroSplit({
  label,
  heading,
  subtitle,
  primaryCta,
  secondaryCta,
  imagePlaceholder,
  children,
}: {
  label: string;
  heading: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imagePlaceholder?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="noise-overlay relative min-h-[70vh] bg-brand-navy hero-gradient">
      <Container className="relative z-10 flex min-h-[70vh] items-center py-20 md:py-28">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              {label}
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {heading}
            </h1>
            <p className="mb-8 max-w-lg text-lg text-neutral-300 md:text-xl">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
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

          {/* Mockup / image area */}
          <div className="hidden lg:block">
            {children ? (
              <div className="relative">
                {children}
                <div className="absolute -inset-2 -z-10 rounded-2xl bg-brand-cyan/5 blur-2xl" />
              </div>
            ) : (
              <div className="relative rotate-1">
                <div className="overflow-hidden rounded-2xl border border-brand-mid bg-gradient-to-br from-brand-mid to-brand-dark shadow-2xl">
                  <div className="flex aspect-[4/3] items-center justify-center p-8">
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-cyan/10">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="text-brand-cyan"
                        >
                          <rect x="2" y="3" width="20" height="14" rx="2" />
                          <path d="M8 21h8M12 17v4" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-neutral-400">
                        {imagePlaceholder || "Product Screenshot"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-1 -z-10 rounded-2xl bg-brand-cyan/5 blur-xl" />
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/30 to-transparent" />
    </section>
  );
}
