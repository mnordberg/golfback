import type { Metadata } from "next";
import HeroSplit from "@/components/sections/HeroSplit";
import FeatureGrid from "@/components/sections/FeatureGrid";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Daily Steals | GolfBack",
  description:
    "Fill slow tee times with targeted promotional offers that drive urgency without training golfers to expect discounts. GolfBack's Daily Steals keeps inventory moving.",
};

const stealsFeatures = [
  {
    icon: "zap",
    title: "Instant Visibility",
    description:
      "Daily Steals surface directly in your booking engine where golfers are already browsing. No separate marketplace needed.",
  },
  {
    icon: "target",
    title: "Time-Limited Offers",
    description:
      "Set expiration windows that create urgency without permanently discounting your rates or devaluing your tee sheet.",
  },
  {
    icon: "dollar-sign",
    title: "You Set the Price",
    description:
      "Every promotional rate is defined by you. GolfBack surfaces the offer — you control the discount depth and slot selection.",
  },
  {
    icon: "trending-up",
    title: "Fill the Gaps",
    description:
      "Target specific tee times that would otherwise go unsold. A filled slot at a reduced rate beats an empty one every time.",
  },
  {
    icon: "send",
    title: "Direct Bookings Only",
    description:
      "Steals drive golfers to book through your website, not an aggregator. Every transaction stays in your system and your database.",
  },
  {
    icon: "bell",
    title: "Golfer Notifications",
    description:
      "Golfers who opt in receive alerts when new steals are available, driving repeat visits and fast fill-rates.",
  },
];

// ─── Daily Steals Mockup ──────────────────────────────────────────────────────
const stealsMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <span className="text-[10px] font-semibold text-neutral-600">Daily Steals</span>
      <span className="rounded bg-brand-amber/20 px-2 py-0.5 text-[9px] font-semibold text-brand-amber">3 Live Now</span>
    </div>
    <div className="p-4 space-y-2.5">
      {[
        { time: "Today, 1:30 PM", slots: "4 spots",  original: "$65", steal: "$38", pct: "42% off", expires: "2h 14m", hot: true  },
        { time: "Today, 3:00 PM", slots: "2 spots",  original: "$58", steal: "$32", pct: "45% off", expires: "4h 02m", hot: true  },
        { time: "Today, 4:15 PM", slots: "6 spots",  original: "$42", steal: "$25", pct: "40% off", expires: "5h 30m", hot: false },
      ].map((deal) => (
        <div key={deal.time} className={`rounded-xl border p-3 ${deal.hot ? "border-brand-amber/30 bg-brand-amber/5" : "border-neutral-100 bg-neutral-50"}`}>
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-[10px] font-bold text-neutral-800">{deal.time}</p>
              <p className="text-[8px] text-neutral-500">{deal.slots} available</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] text-neutral-400 line-through">{deal.original}</p>
              <p className="text-[14px] font-bold text-brand-green">{deal.steal}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="rounded bg-brand-green/15 px-1.5 py-0.5 text-[8px] font-semibold text-brand-green">{deal.pct}</span>
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-amber" />
              <span className="text-[8px] text-neutral-500">Expires in {deal.expires}</span>
            </div>
            <span className="rounded bg-brand-cyan px-2 py-0.5 text-[8px] font-semibold text-white">Book Now</span>
          </div>
        </div>
      ))}
    </div>
    <div className="border-t border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <p className="text-center text-[8px] text-neutral-500">Deals book directly through your website — no third-party fees</p>
    </div>
  </div>
);

export default function DailyStealsPage() {
  return (
    <>
      <HeroSplit
        label="Daily Steals"
        heading="Turn Slow Tee Times Into Revenue."
        subtitle="Daily Steals lets you surface time-limited promotional offers directly in your booking engine — filling gaps on your tee sheet without resorting to marketplaces or training golfers to wait for discounts."
        primaryCta={{ label: "See It in Action", href: "/contact" }}
        secondaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
      >
        {stealsMockup}
      </HeroSplit>

      <FeatureGrid
        label="How Daily Steals Works"
        heading="Promotional Pricing That Works for You, Not Against You"
        subtitle="The difference between a strategic discount and a race to the bottom is control. Daily Steals gives you both the tool and the guardrails."
        features={stealsFeatures}
        columns={3}
      />

      <section className="bg-brand-navy py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              label="The Right Way to Discount"
              heading="Not All Promotions Are Created Equal"
              dark
            />
            <div className="space-y-5 text-lg leading-relaxed text-neutral-300">
              <p>
                The problem with third-party marketplaces isn't just the fees — it's what they do to
                golfer behavior. When golfers learn to shop for deals on aggregators, they stop booking
                direct. They stop valuing your rate. They become someone else's customer.
              </p>
              <p>
                Daily Steals is different because it keeps the transaction on your property. Golfers
                see the deal, book through your website, and their data flows into your database. The
                offer is time-limited, which means urgency is real — not manufactured by an algorithm
                that doesn't care about your margins.
              </p>
              <p>
                And because you set every rate, every time window, and every slot, you never lose
                control of your pricing strategy. Steals are a tool, not a dependency.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="A Filled Slot at a Lower Rate Beats an Empty One Every Time."
        subtitle="Daily Steals is part of the GolfBack platform. Get it alongside dynamic pricing, booking, and marketing automation."
        primaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
        secondaryCta={{ label: "Explore GRO", href: "/gro" }}
        variant="dark"
      />
    </>
  );
}
