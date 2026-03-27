import { Check, X } from "lucide-react";
import Container from "@/components/ui/Container";

type Row = {
  feature: string;
  golfback: boolean;
  competitor: boolean;
};

export default function ComparisonSection({
  label,
  heading,
  golfbackLabel = "GolfBack",
  competitorLabel = "POS Built-in",
  rows,
}: {
  label?: string;
  heading: string;
  golfbackLabel?: string;
  competitorLabel?: string;
  rows: Row[];
}) {
  return (
    <section className="bg-brand-navy py-20 md:py-28">
      <Container>
        <div className="mb-12 text-center md:mb-16">
          {label && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              {label}
            </p>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {heading}
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          {/* Column headers */}
          <div className="mb-3 grid grid-cols-[1fr_auto_auto] items-center gap-4 px-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Feature</span>
            <span className="w-24 text-center text-xs font-semibold uppercase tracking-wider text-brand-cyan">{golfbackLabel}</span>
            <span className="w-24 text-center text-xs font-semibold uppercase tracking-wider text-neutral-500">{competitorLabel}</span>
          </div>

          <div className="space-y-2">
            {rows.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <span className="text-sm font-medium text-neutral-200">{row.feature}</span>
                <div className="flex w-24 justify-center">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-green/20">
                    <Check size={14} className="text-brand-green" />
                  </div>
                </div>
                <div className="flex w-24 justify-center">
                  {row.competitor ? (
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                      <Check size={14} className="text-neutral-400" />
                    </div>
                  ) : (
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/10">
                      <X size={14} className="text-red-400/70" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
