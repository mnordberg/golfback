import type { Metadata } from "next";
import HeroSplit from "@/components/sections/HeroSplit";
import FeatureGrid from "@/components/sections/FeatureGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Tee Time Guarantee Program | GolfBack",
  description:
    "Reduce no-shows without requiring deposits or prepayment. SMS reminders, one-click fee application, and full reporting — built into your GolfBack booking engine.",
};

const features = [
  {
    icon: "shield",
    title: "No Prepay Required",
    description:
      "Golfers book online as usual with no deposit. The guarantee framework applies fees only if they miss — not before they arrive.",
  },
  {
    icon: "mail",
    title: "SMS + Email Reminders",
    description:
      "Day-before and day-of nudges include tee time details, directions, policy, and a one-click cancel link. Timing is fully configurable.",
  },
  {
    icon: "zap",
    title: "One-Click Fee Application",
    description:
      "From the booking manager, mark how many players no-showed or short-showed and apply fees in seconds. No manual reconciliation.",
  },
  {
    icon: "dollar-sign",
    title: "Fair, Automatic Fees",
    description:
      "Fees apply only to the players who didn't show — never the ones who did. Groups can still split payment in the shop as normal.",
  },
  {
    icon: "bar-chart-3",
    title: "Reporting & Insights",
    description:
      "Track no-show rates, recovered revenue, cancellation timing, and marketing lift to optimize your policy over time.",
  },
  {
    icon: "target",
    title: "Total Control",
    description:
      "Configure fee amounts, grace windows, exemption rules, and cancellation policies to match your course's operations.",
  },
];

const steps = [
  {
    number: 1,
    title: "Golfer Books Online",
    description: "No deposit required. Policy is shown clearly at checkout so expectations are set upfront.",
    icon: "mouse-pointer-click",
  },
  {
    number: 2,
    title: "Reminders Go Out",
    description: "Auto SMS and email with tee time details, directions, policy, and a one-click cancel link.",
    icon: "mail",
  },
  {
    number: 3,
    title: "Mark No-Shows",
    description: "After the round, mark no-show or short-show players in one click. Fees apply to missed players only.",
    icon: "ban",
  },
  {
    number: 4,
    title: "Revenue Recovered",
    description: "Fees are logged, exported for reconciliation, and tracked in your no-show reporting dashboard.",
    icon: "dollar-sign",
  },
];

// ─── Guarantee Mockup ─────────────────────────────────────────────────────────
const guaranteeMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <span className="text-[10px] font-semibold text-neutral-600">Tee Time Guarantee</span>
      <span className="rounded bg-brand-green/15 px-2 py-0.5 text-[9px] font-medium text-brand-green">Active</span>
    </div>
    <div className="p-4 space-y-3">
      {/* Booking confirmation */}
      <div className="rounded-xl border border-brand-green/20 bg-brand-green/5 p-3">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green">
            <span className="text-white text-[10px] font-bold">✓</span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-neutral-800">Booking Confirmed</p>
            <p className="text-[8px] text-neutral-500">Saturday, April 5 · 8:24 AM · 4 Players</p>
          </div>
        </div>
        <div className="rounded-lg border border-brand-green/20 bg-white px-3 py-2">
          <p className="text-[9px] font-semibold text-brand-green">No Deposit Required</p>
          <p className="text-[8px] text-neutral-500 mt-0.5">A fee applies to players who miss without cancelling.</p>
        </div>
      </div>

      {/* Reminder timeline */}
      <div>
        <p className="mb-1.5 text-[8px] uppercase tracking-wider text-neutral-500">Automated Reminders</p>
        <div className="space-y-1.5">
          {[
            { label: "Booking confirmation + policy",  time: "Immediately", sent: true  },
            { label: "Day-before SMS + cancel link",    time: "Fri 8:24 AM", sent: true  },
            { label: "Day-of SMS with directions",      time: "Sat 6:24 AM", sent: false },
          ].map((r) => (
            <div key={r.label} className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-2.5 py-1.5">
              <div className={`h-2 w-2 shrink-0 rounded-full ${r.sent ? "bg-brand-green" : "bg-neutral-200"}`} />
              <span className="flex-1 text-[9px] text-neutral-700">{r.label}</span>
              <span className="text-[8px] text-neutral-400">{r.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* No-show manager */}
      <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-3">
        <p className="mb-2 text-[8px] uppercase tracking-wider text-neutral-500">Post-Round: Mark No-Shows</p>
        <div className="space-y-1.5">
          {[
            { name: "J. Mercer",  showed: true  },
            { name: "T. Sullivan", showed: true  },
            { name: "R. Tillman", showed: false },
            { name: "M. Okafor",  showed: false },
          ].map((p) => (
            <div key={p.name} className="flex items-center justify-between rounded border border-neutral-100 bg-white px-2.5 py-1.5">
              <span className="text-[9px] text-neutral-700">{p.name}</span>
              <span className={`rounded px-1.5 py-0.5 text-[8px] font-medium ${
                p.showed ? "bg-brand-green/10 text-brand-green" : "bg-red-50 text-red-500"
              }`}>{p.showed ? "Showed" : "No-Show — Fee Applied"}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-neutral-100 bg-neutral-50 p-2 text-center">
          <p className="text-[7px] uppercase tracking-wider text-neutral-500">No-Show Rate</p>
          <p className="text-[15px] font-bold text-brand-green">2.1%</p>
          <p className="text-[7px] text-neutral-500">vs 8.4% industry avg</p>
        </div>
        <div className="rounded-lg border border-neutral-100 bg-neutral-50 p-2 text-center">
          <p className="text-[7px] uppercase tracking-wider text-neutral-500">Recovered</p>
          <p className="text-[15px] font-bold text-neutral-800">$14,200</p>
          <p className="text-[7px] text-neutral-500">last 90 days</p>
        </div>
      </div>
    </div>
  </div>
);

const faqs = [
  {
    q: "Does this require golfers to prepay?",
    a: "No. GolfBack's no-show protection works without deposits. Golfers pay in the shop as usual. Fees are only charged if they miss or short-show.",
  },
  {
    q: "Can we customize the fee amounts and policies?",
    a: "Yes. Set fee amounts, grace periods, cancellation windows, and exemptions to match your course's policies.",
  },
  {
    q: "What do the reminders look like?",
    a: "Automated SMS and email reminders include tee time details, directions, the no-show policy, and a one-click cancel link. Timing is configurable.",
  },
  {
    q: "Does GolfBack integrate with our existing system?",
    a: "GolfBack integrates with leading POS systems. We'll confirm your setup during a demo and outline the best-practice policy for your operation.",
  },
  {
    q: "How does reporting work?",
    a: "You'll have clear logs of who was charged and when. Exports simplify reconciliation and reporting for your team.",
  },
];

export default function TeeTimeGuaranteePage() {
  return (
    <>
      <HeroSplit
        label="Tee Time Guarantee Program"
        heading="No-Shows, Solved. No Deposits Needed."
        subtitle="Smart SMS reminders and one-click fee application keep your tee sheet full and your starters happy — without requiring prepayment or creating friction at booking."
        primaryCta={{ label: "See It in Action", href: "/contact" }}
        secondaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
      >
        {guaranteeMockup}
      </HeroSplit>

      <FeatureGrid
        label="Features Built for Operators"
        heading="Every Tool You Need to Protect Your Tee Sheet"
        subtitle="From automated reminders to one-click fee application, the Guarantee Program handles the entire no-show workflow."
        features={features}
        columns={3}
      />

      <ProcessSteps
        label="How It Works"
        heading="Four Steps from Booking to Recovery"
        steps={steps}
      />

      <section className="bg-brand-navy py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              label="Why It Works"
              heading="Friction-Free for Golfers. Revenue-Protective for You."
              dark
            />
            <div className="space-y-5 text-lg leading-relaxed text-neutral-300">
              <p>
                The problem with deposit-based no-show protection is that it creates friction before
                the golfer has even arrived. Courses that require prepayment see lower booking
                conversion — and lose business to competitors who don't ask for it.
              </p>
              <p>
                The Tee Time Guarantee Program takes a different approach. Golfers book online as
                usual, with no deposit required. The policy is disclosed clearly at checkout. Automated
                reminders — with a one-click cancel link — handle the majority of no-shows before they
                happen.
              </p>
              <p>
                For the golfers who do miss without cancelling, fees are applied in one click from the
                booking manager. Only the missed players are charged. The ones who showed up pay
                normally in the shop.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              label="FAQ"
              heading="Frequently Asked Questions"
            />
            <div className="mt-10 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-neutral-100 bg-neutral-50 p-6">
                  <p className="mb-2 font-semibold text-neutral-900">{faq.q}</p>
                  <p className="text-neutral-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="Stop Absorbing the Cost of No-Shows."
        subtitle="The Tee Time Guarantee Program is built into the GolfBack booking engine. No separate setup, no third-party platform."
        primaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
        secondaryCta={{ label: "See the Booking Engine", href: "/booking-engine" }}
        variant="dark"
      />
    </>
  );
}
