import Container from "@/components/ui/Container";

export default function HeroMinimal({
  label,
  heading,
  subtitle,
  tall,
}: {
  label: string;
  heading: string;
  subtitle?: string;
  tall?: boolean;
}) {
  const minH = tall ? "min-h-[55vh]" : "min-h-[40vh]";
  return (
    <section className={`noise-overlay relative ${minH} bg-brand-navy hero-gradient`}>
      <Container className={`relative z-10 flex ${minH} items-center py-24 pb-36 md:py-32 md:pb-44`}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
            {label}
          </p>
          <h1 className="mb-4 whitespace-pre-line text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {heading}
          </h1>
          {subtitle && (
            <p className="mx-auto max-w-xl text-lg text-neutral-300">
              {subtitle}
            </p>
          )}
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/30 to-transparent" />
    </section>
  );
}
