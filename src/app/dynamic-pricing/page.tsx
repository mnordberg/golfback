import type { Metadata } from "next";
import HeroSplit from "@/components/sections/HeroSplit";
import FeatureGrid from "@/components/sections/FeatureGrid";
import FeatureAlternating from "@/components/sections/FeatureAlternating";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Dynamic Pricing | GolfBack",
  description:
    "Automatically adjust tee time rates based on weather, demand, utilization, and booking velocity. GolfBack's dynamic pricing keeps every slot optimally priced.",
};

const pricingFactors = [
  {
    icon: "zap",
    title: "Weather Forecast",
    description:
      "Rates adapt automatically based on forecasted conditions — higher on ideal days, lower to drive play when weather is marginal.",
  },
  {
    icon: "bar-chart-3",
    title: "Utilization Levels",
    description:
      "Pricing adjusts in real time based on tee sheet fullness. Maximize revenue during busy periods and fill gaps during slower ones.",
  },
  {
    icon: "calendar",
    title: "Days Out",
    description:
      "Set pricing rules based on booking lead time — early commitments, standard rates, or premium pricing for last-minute availability.",
  },
  {
    icon: "trending-up",
    title: "Real Demand",
    description:
      "The system reacts to the previous 24 hours of booking data, adjusting prices dynamically based on current demand patterns.",
  },
  {
    icon: "target",
    title: "Rate Type Control",
    description:
      "Configure separate pricing strategies for public, member, senior, twilight, and promotional rate types independently.",
  },
  {
    icon: "dollar-sign",
    title: "High-Demand Floors",
    description:
      "Set premium base rates for weekends, holidays, and peak booking periods so you never leave money on the table.",
  },
];

// ─── Pricing Dashboard Mockup ─────────────────────────────────────────────────
const pricingDashboardMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <span className="text-[10px] font-semibold text-neutral-600">Dynamic Pricing — Live View</span>
      <span className="flex items-center gap-1.5 text-[9px] text-brand-green">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green" />
        Auto Mode On
      </span>
    </div>
    <div className="p-4">
      <div className="mb-3 grid grid-cols-3 gap-2">
        {[
          { label: "Revenue Lift", value: "+$3,698", sub: "last 3 days" },
          { label: "Avg Rate",     value: "$68.40",  sub: "+$11 vs base" },
          { label: "Utilization",  value: "87%",     sub: "today" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-neutral-100 bg-neutral-50 p-2 text-center">
            <p className="text-[7px] uppercase tracking-wider text-neutral-500">{s.label}</p>
            <p className="text-[13px] font-bold text-neutral-800">{s.value}</p>
            <p className="text-[8px] text-brand-green">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Pricing schedule */}
      <div className="rounded-lg border border-neutral-100 bg-neutral-50 p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[9px] font-medium text-neutral-500">Saturday Schedule</span>
          <span className="text-[8px] text-neutral-400">Base → Adjusted</span>
        </div>
        {[
          { time: "7:00–9:00 AM",  tier: "Peak",     base: "$65", adjusted: "$82", change: "+26%" },
          { time: "9:00–11:00 AM", tier: "Peak",     base: "$65", adjusted: "$78", change: "+20%" },
          { time: "11 AM–1:00 PM", tier: "Mid",      base: "$52", adjusted: "$58", change: "+12%" },
          { time: "1:00–3:00 PM",  tier: "Off-Peak", base: "$42", adjusted: "$42", change: "—"    },
          { time: "3:00–5:00 PM",  tier: "Off-Peak", base: "$42", adjusted: "$38", change: "−10%" },
        ].map((row) => (
          <div key={row.time} className="flex items-center gap-2 border-b border-neutral-100 pb-1.5 last:border-0 last:pb-0">
            <span className="w-24 shrink-0 text-[9px] text-neutral-500">{row.time}</span>
            <span className={`w-14 shrink-0 rounded px-1.5 py-0.5 text-center text-[8px] font-medium ${
              row.tier === "Peak" ? "bg-brand-amber/10 text-brand-amber"
              : row.tier === "Mid" ? "bg-brand-cyan/10 text-brand-teal"
              : "bg-neutral-100 text-neutral-400"
            }`}>{row.tier}</span>
            <span className="w-8 shrink-0 text-right text-[9px] text-neutral-400 line-through">{row.base}</span>
            <span className="w-8 shrink-0 text-right text-[9px] font-semibold text-neutral-800">{row.adjusted}</span>
            <span className={`ml-auto text-[9px] font-medium ${row.change.startsWith("+") ? "text-brand-green" : "text-neutral-400"}`}>{row.change}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── Rate Type Mockup ─────────────────────────────────────────────────────────
const rateTypeMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <span className="text-[10px] font-semibold text-neutral-600">Rate Type Configuration</span>
    </div>
    <div className="p-4 space-y-2">
      {[
        { type: "Public",      strategy: "Full Dynamic",   range: "$42–$89",  active: true  },
        { type: "Member",      strategy: "Utilization",    range: "$28–$45",  active: true  },
        { type: "Senior",      strategy: "Fixed Discount", range: "$32–$52",  active: true  },
        { type: "Twilight",    strategy: "Days Out",       range: "$22–$38",  active: true  },
        { type: "Promotional", strategy: "Manual",         range: "Varies",   active: false },
      ].map((rate) => (
        <div key={rate.type} className="flex items-center gap-3 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2.5">
          <div className={`h-2 w-2 rounded-full shrink-0 ${rate.active ? "bg-brand-green" : "bg-neutral-300"}`} />
          <span className="w-20 shrink-0 text-[9px] font-semibold text-neutral-800">{rate.type}</span>
          <span className="flex-1 text-[9px] text-neutral-500">{rate.strategy}</span>
          <span className="text-[9px] font-medium text-neutral-700">{rate.range}</span>
        </div>
      ))}
    </div>
  </div>
);

// ─── Weather Algorithm Mockup ─────────────────────────────────────────────────
const weatherMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <span className="text-[10px] font-semibold text-neutral-600">Weather Pricing Algorithm</span>
    </div>
    <div className="p-4 space-y-3">
      <div>
        <p className="mb-1.5 text-[8px] uppercase tracking-wider text-neutral-500">Conditions This Week</p>
        <div className="grid grid-cols-7 gap-1">
          {[
            { day: "Mon", icon: "☀️", temp: "72°", adj: "+8%" },
            { day: "Tue", icon: "☀️", temp: "75°", adj: "+12%" },
            { day: "Wed", icon: "🌤", temp: "68°", adj: "+5%" },
            { day: "Thu", icon: "🌧", temp: "58°", adj: "−10%" },
            { day: "Fri", icon: "⛅", temp: "65°", adj: "+2%" },
            { day: "Sat", icon: "☀️", temp: "78°", adj: "+18%" },
            { day: "Sun", icon: "☀️", temp: "76°", adj: "+15%" },
          ].map((d) => (
            <div key={d.day} className="rounded-lg border border-neutral-100 bg-neutral-50 p-1.5 text-center">
              <p className="text-[8px] text-neutral-500">{d.day}</p>
              <p className="text-base leading-none">{d.icon}</p>
              <p className="text-[7px] text-neutral-600">{d.temp}</p>
              <p className={`text-[7px] font-medium ${d.adj.startsWith("+") ? "text-brand-green" : "text-red-400"}`}>{d.adj}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-1.5 text-[8px] uppercase tracking-wider text-neutral-500">Adjustment Factors</p>
        <div className="space-y-1">
          {[
            { factor: "Temperature", weight: "40%", bar: "w-[40%]" },
            { factor: "Precipitation", weight: "35%", bar: "w-[35%]" },
            { factor: "Wind Speed", weight: "25%", bar: "w-[25%]" },
          ].map((f) => (
            <div key={f.factor} className="flex items-center gap-2">
              <span className="w-24 shrink-0 text-[8px] text-neutral-600">{f.factor}</span>
              <div className="flex-1 h-1.5 rounded-full bg-neutral-100 overflow-hidden">
                <div className={`h-full rounded-full bg-brand-cyan ${f.bar}`} />
              </div>
              <span className="text-[8px] text-neutral-500">{f.weight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const pricingFeatures = [
  {
    label: "Live Pricing",
    title: "Rates That Adjust While You Sleep",
    description:
      "GRO monitors your tee sheet, local weather, and booking velocity continuously. When conditions change, pricing adjusts automatically — no manual intervention needed.",
    imageContent: pricingDashboardMockup,
    bullets: [
      "Real-time rate adjustments based on utilization",
      "Booking velocity monitoring with admin alerts",
      "Automated high-demand and low-demand responses",
      "Revenue lift tracking vs. base rates",
    ],
  },
  {
    label: "Rate Types",
    title: "Different Strategies for Every Rate",
    description:
      "Public, member, senior, twilight — each rate type can have its own pricing strategy. Configure once and let GRO optimize each segment independently.",
    imageContent: rateTypeMockup,
    bullets: [
      "Per-rate-type strategy configuration",
      "Day-part pricing for morning vs. afternoon",
      "Peak weekend and holiday base rate floors",
      "Promotional rate management",
    ],
  },
  {
    label: "Weather Intelligence",
    title: "Price Around the Forecast, Not Just the Current Conditions",
    description:
      "GRO builds your own weather algorithm based on temperature, wind, and precipitation weighting that matches your course's actual booking behavior.",
    imageContent: weatherMockup,
    bullets: [
      "7-day forecast-based pricing adjustments",
      "Custom temperature, wind, and precipitation weights",
      "Automatic demand fill on marginal weather days",
      "Premium pricing on ideal-forecast days",
    ],
  },
];

export default function DynamicPricingPage() {
  return (
    <>
      <HeroSplit
        label="Dynamic Pricing"
        heading="Smarter Pricing. More Profit. Full Control."
        subtitle="GolfBack's dynamic pricing engine adjusts your tee time rates in real time based on demand, weather, utilization, and booking velocity — so every slot is always optimally priced."
        primaryCta={{ label: "See It in Action", href: "/schedule-demo" }}
        secondaryCta={{ label: "Learn About GRO", href: "/gro" }}
      >
        {pricingDashboardMockup}
      </HeroSplit>

      <FeatureGrid
        label="Pricing Factors"
        heading="Six Variables That Drive Every Rate Decision"
        subtitle="GRO weighs real-time conditions across multiple factors to keep your pricing optimal at every hour of every day."
        features={pricingFactors}
        columns={3}
      />

      <CtaBanner
        heading="Courses see an average $3,698 in additional revenue within the first 3 days."
        subtitle="Dynamic pricing works from day one. No ramp-up period, no manual effort."
        primaryCta={{ label: "Get a Demo", href: "/schedule-demo" }}
        variant="cyan"
      />

      <FeatureAlternating features={pricingFeatures} dark />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              label="Setup"
              heading="Configure Dynamic Pricing in Under a Minute"
            />
            <div className="space-y-5 text-lg leading-relaxed text-neutral-600">
              <p>
                Most dynamic pricing tools require hours of configuration and ongoing manual oversight.
                GRO is built differently. With sensible defaults and a simple setup wizard, you can
                have dynamic pricing running on your tee sheet in under a minute.
              </p>
              <p>
                Advanced settings are available for operators who want granular control — custom
                weather algorithms, per-rate-type strategies, day-part pricing, and demand floor
                configuration. But they're optional, not required.
              </p>
              <p>
                The system does the work. You set the guardrails and watch the revenue grow.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="Ready to Stop Leaving Money on the Table?"
        subtitle="Join 125+ courses already using GolfBack's dynamic pricing to maximize every tee time."
        primaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
        secondaryCta={{ label: "View Case Studies", href: "/case-studies" }}
        variant="dark"
      />
    </>
  );
}
