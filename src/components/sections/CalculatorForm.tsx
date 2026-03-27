"use client";

import Container from "@/components/ui/Container";
import StatCard from "@/components/ui/StatCard";
import clsx from "clsx";

const inputClasses =
  "w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan";

function FormStep({
  step,
  title,
  description,
  children,
}: {
  step: number;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative rounded-xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-cyan font-[family-name:var(--font-display)] text-sm font-bold text-brand-navy">
          {step}
        </div>
        <h3 className="text-lg font-bold text-neutral-900">{title}</h3>
      </div>
      <p className="mb-6 text-sm text-neutral-500">{description}</p>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function LabeledInput({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-neutral-600">
        {label}
      </label>
      <input
        type="text"
        defaultValue={defaultValue}
        className={inputClasses}
        readOnly
      />
    </div>
  );
}

export default function CalculatorForm() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl space-y-6">
          <FormStep
            step={1}
            title="Opportunity Cost"
            description="Calculate the revenue you lose by giving away tee times to third-party barter agreements."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <LabeledInput label="Barter Rounds per Year" defaultValue="500" />
              <LabeledInput label="Average Green Fee" defaultValue="$45" />
              <LabeledInput label="Trade Rate (%)" defaultValue="50%" />
              <LabeledInput label="Opportunity Cost" defaultValue="$11,250" />
            </div>
          </FormStep>

          <FormStep
            step={2}
            title="Revenue at Risk"
            description="Estimate the revenue you'd lose if you left your third-party agreement."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <LabeledInput label="3rd Party Rounds per Year" defaultValue="2,400" />
              <LabeledInput label="Avg Revenue per Round" defaultValue="$38" />
              <LabeledInput label="Estimated Recapture Rate" defaultValue="65%" />
              <LabeledInput label="Revenue at Risk" defaultValue="$31,920" />
            </div>
          </FormStep>

          <FormStep
            step={3}
            title="Total Barter Cost"
            description="Your combined annual cost of maintaining barter agreements."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <LabeledInput label="Software/Platform Fees" defaultValue="$6,000" />
              <LabeledInput label="Total Barter Cost" defaultValue="$49,170" />
            </div>
          </FormStep>

          <FormStep
            step={4}
            title="Potential Annual Savings"
            description="What you could save by switching to GolfBack's direct booking model."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <LabeledInput label="GolfBack Annual Cost" defaultValue="$9,600" />
              <LabeledInput label="Estimated Savings" defaultValue="$39,570" />
            </div>
          </FormStep>

          {/* Results */}
          <div className={clsx(
            "rounded-2xl border border-brand-mid bg-brand-navy p-8 md:p-10"
          )}>
            <h3 className="mb-8 text-center text-lg font-bold text-white">
              Your Estimated Results
            </h3>
            <div className="grid gap-8 sm:grid-cols-3">
              <StatCard
                value="$49,170"
                label="Current Barter Cost"
                dark
              />
              <StatCard
                value="$39,570"
                label="Potential Annual Savings"
                delta="+80%"
                dark
              />
              <StatCard
                value="$9,600"
                label="GolfBack Annual Cost"
                dark
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
