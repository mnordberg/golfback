import clsx from "clsx";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CtaBanner({
  heading,
  subtitle,
  primaryCta,
  secondaryCta,
  variant = "cyan",
}: {
  heading: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "cyan" | "dark";
}) {
  return (
    <section
      className={clsx(
        "py-16 md:py-20",
        variant === "cyan" ? "bg-brand-cyan" : "bg-brand-navy"
      )}
    >
      <Container className="text-center">
        <h2
          className={clsx(
            "mb-4 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl",
            variant === "cyan" ? "text-brand-navy" : "text-white"
          )}
        >
          {heading}
        </h2>
        {subtitle && (
          <p
            className={clsx(
              "mx-auto mb-8 max-w-xl text-lg",
              variant === "cyan" ? "text-brand-navy/70" : "text-neutral-300"
            )}
          >
            {subtitle}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {variant === "cyan" ? (
            <Button
              variant="primary"
              size="lg"
              href={primaryCta.href}
              arrow
              className="bg-brand-navy text-white hover:bg-neutral-800 hover:shadow-none"
            >
              {primaryCta.label}
            </Button>
          ) : (
            <Button variant="primary" size="lg" href={primaryCta.href} arrow>
              {primaryCta.label}
            </Button>
          )}
          {secondaryCta && (
            <Button
              variant={variant === "cyan" ? "ghost" : "secondary"}
              size="lg"
              href={secondaryCta.href}
              className={variant === "cyan" ? "text-brand-navy hover:text-brand-navy/80" : ""}
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
