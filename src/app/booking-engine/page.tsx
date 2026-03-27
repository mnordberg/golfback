import type { Metadata } from "next";
import HeroSplit from "@/components/sections/HeroSplit";
import FeatureGrid from "@/components/sections/FeatureGrid";
import FeatureAlternating from "@/components/sections/FeatureAlternating";
import ComparisonSection from "@/components/sections/ComparisonSection";
import CaseStudyCarousel from "@/components/sections/CaseStudyCarousel";
import CtaBanner from "@/components/sections/CtaBanner";
import { caseStudies } from "@/lib/data/caseStudies";

export const metadata: Metadata = {
  title: "Booking Engine | GolfBack",
  description:
    "A conversion-optimized tee time booking engine with dynamic pricing, Daily Steals, Reserve with Google, and promotional tools that drive direct bookings.",
};

const keyBenefits = [
  {
    icon: "globe",
    title: "Direct Booking Culture",
    description:
      "Drive golfers to book on your website instead of third-party marketplaces. Keep 100% of every transaction.",
  },
  {
    icon: "search",
    title: "Reserve with Google",
    description:
      "Let golfers book tee times directly from Google Search and Maps without ever leaving the search results page.",
  },
  {
    icon: "target",
    title: "Promotional Offers",
    description:
      "Create time-limited promotions tied to specific days, groups, or weather conditions to fill open inventory.",
  },
  {
    icon: "dollar-sign",
    title: "Strike Through Pricing",
    description:
      "Show golfers the original rate alongside the discounted price to reinforce the value of booking direct.",
  },
  {
    icon: "calendar",
    title: "Easy Online Cancellation",
    description:
      "Golfers can cancel and rebook online, reducing no-shows and freeing up staff from phone-based changes.",
  },
  {
    icon: "zap",
    title: "Daily Steals",
    description:
      "Automatically publish steep, time-limited discounts on low-demand inventory to attract price-sensitive golfers.",
  },
];

// ─── Booking Engine Hero Mockup ───────────────────────────────────────────────
const bookingHeroMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl">
    {/* Title bar */}
    <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-[10px] font-medium text-neutral-400">golfback.com/book</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
        <span className="text-[10px] text-brand-green">Secure</span>
      </div>
    </div>

    {/* Booking UI */}
    <div className="p-4">
      {/* Date selector row */}
      <div className="mb-3 flex items-center gap-2">
        <div className="flex flex-1 gap-1">
          {["Mon 24", "Tue 25", "Wed 26", "Thu 27", "Fri 28"].map((d, i) => (
            <div
              key={d}
              className={`flex-1 rounded py-1.5 text-center text-[9px] font-medium ${
                i === 2
                  ? "bg-brand-cyan text-white"
                  : "bg-neutral-100 text-neutral-500"
              }`}
            >
              {d}
            </div>
          ))}
        </div>
      </div>

      {/* Player / holes row */}
      <div className="mb-3 flex gap-2">
        <div className="flex flex-1 items-center justify-between rounded-lg border border-neutral-200 px-2.5 py-1.5">
          <span className="text-[9px] text-neutral-400">Players</span>
          <span className="text-[10px] font-semibold text-neutral-800">2</span>
        </div>
        <div className="flex flex-1 items-center justify-between rounded-lg border border-neutral-200 px-2.5 py-1.5">
          <span className="text-[9px] text-neutral-400">Holes</span>
          <span className="text-[10px] font-semibold text-neutral-800">18</span>
        </div>
      </div>

      {/* Tee time slots */}
      <div className="space-y-1.5">
        {[
          { time: "8:00 AM", avail: "4 spots", rate: "$65", original: null,   tag: null },
          { time: "8:08 AM", avail: "2 spots", rate: "$58", original: "$65",  tag: "Deal" },
          { time: "8:16 AM", avail: "4 spots", rate: "$65", original: null,   tag: null },
          { time: "8:24 AM", avail: "1 spot",  rate: "$52", original: "$65",  tag: "Daily Steal" },
          { time: "8:32 AM", avail: "3 spots", rate: "$65", original: null,   tag: null },
        ].map((slot) => (
          <div
            key={slot.time}
            className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2"
          >
            <span className="w-14 shrink-0 text-[10px] font-semibold text-neutral-800">{slot.time}</span>
            <span className="flex-1 text-[9px] text-neutral-400">{slot.avail}</span>
            {slot.tag && (
              <span className={`rounded px-1.5 py-0.5 text-[8px] font-semibold ${
                slot.tag === "Daily Steal"
                  ? "bg-brand-amber/15 text-brand-amber"
                  : "bg-brand-cyan/10 text-brand-teal"
              }`}>{slot.tag}</span>
            )}
            <div className="text-right">
              {slot.original && (
                <span className="mr-1 text-[9px] text-neutral-400 line-through">{slot.original}</span>
              )}
              <span className="text-[10px] font-bold text-neutral-800">{slot.rate}</span>
            </div>
            <div className="rounded bg-brand-cyan px-2 py-0.5 text-[8px] font-semibold text-white">Book</div>
          </div>
        ))}
      </div>

      {/* Reserve with Google badge */}
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2">
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[7px] font-bold text-white">G</div>
        <span className="text-[9px] text-neutral-500">Also available via <span className="font-medium text-neutral-700">Reserve with Google</span></span>
      </div>
    </div>
  </div>
);

// ─── Utilization Pricing Chart Mockup ────────────────────────────────────────
const utilizationMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-neutral-600">Utilization Pricing — Friday</span>
        <span className="rounded bg-brand-cyan/15 px-2 py-0.5 text-[9px] font-medium text-brand-teal">Live</span>
      </div>
    </div>
    <div className="p-4">
      {/* Chart bars */}
      <div className="mb-3">
        <div className="mb-1.5 flex h-16 items-end gap-1">
          {[
            { heightClass: "h-[11px]", rate: "$42" },
            { heightClass: "h-[20px]", rate: "$46" },
            { heightClass: "h-[31px]", rate: "$52" },
            { heightClass: "h-[40px]", rate: "$58" },
            { heightClass: "h-[49px]", rate: "$65" },
            { heightClass: "h-[53px]", rate: "$72" },
            { heightClass: "h-[44px]", rate: "$61" },
            { heightClass: "h-[28px]", rate: "$52" },
            { heightClass: "h-[17px]", rate: "$46" },
          ].map((bar, i) => (
            <div key={i} className="flex flex-1 flex-col items-center justify-end gap-0.5">
              <span className="text-[7px] font-medium text-brand-cyan">{bar.rate}</span>
              <div className={`w-full rounded-sm bg-brand-cyan/70 ${bar.heightClass}`} />
            </div>
          ))}
        </div>
        <div className="flex gap-1">
          {["6a","7a","8a","9a","10a","11a","12p","1p","2p"].map((t) => (
            <div key={t} className="flex-1 text-center text-[7px] text-neutral-500">{t}</div>
          ))}
        </div>
      </div>
      {/* Thresholds */}
      <div className="space-y-1.5">
        {[
          { label: "Floor price", value: "$42", pct: "< 30% fill" },
          { label: "Base price",  value: "$52", pct: "30–60% fill" },
          { label: "Peak price",  value: "$65", pct: "60–85% fill" },
          { label: "Surge price", value: "$72", pct: "> 85% fill" },
        ].map((row) => (
          <div key={row.label} className="flex items-center gap-2 rounded border border-neutral-100 bg-neutral-50 px-2.5 py-1.5">
            <span className="flex-1 text-[9px] text-neutral-400">{row.label}</span>
            <span className="text-[9px] text-neutral-500">{row.pct}</span>
            <span className="w-8 text-right text-[9px] font-semibold text-neutral-800">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── Expiration Pricing Timeline Mockup ──────────────────────────────────────
const expirationMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <span className="text-[10px] font-semibold text-neutral-600">Inventory Expiration — Tee Time 10:24 AM</span>
    </div>
    <div className="p-4">
      {/* Timeline */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-3 h-0.5 w-full bg-neutral-200" />
        <div className="relative flex justify-between">
          {[
            { label: "72 hrs out", price: "$65", status: "past" },
            { label: "48 hrs out", price: "$58", status: "past" },
            { label: "24 hrs out", price: "$52", status: "current" },
            { label: "6 hrs out",  price: "$44", status: "future" },
            { label: "Daily Steal",price: "$35", status: "future" },
          ].map((step) => (
            <div key={step.label} className="flex flex-col items-center gap-1.5">
              <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${
                step.status === "current"
                  ? "border-brand-cyan bg-brand-cyan"
                  : step.status === "past"
                  ? "border-brand-teal bg-brand-teal/30"
                  : "border-neutral-300 bg-neutral-100"
              }`}>
                {step.status === "past" && <span className="text-[7px] text-brand-teal">✓</span>}
                {step.status === "current" && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
              </div>
              <span className={`text-[8px] font-bold ${
                step.status === "current" ? "text-brand-cyan" : step.status === "past" ? "text-neutral-500 line-through" : "text-neutral-400"
              }`}>{step.price}</span>
              <span className="text-[7px] text-neutral-500">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Current status card */}
      <div className="rounded-lg border border-brand-amber/20 bg-brand-amber/8 p-3">
        <p className="mb-0.5 text-[9px] font-semibold uppercase tracking-wider text-brand-amber">Now Active — 24 hr Step-Down</p>
        <p className="text-[10px] text-neutral-600">Rate dropped to <span className="font-semibold text-neutral-800">$52</span> — 3 spots remaining. Triggers Daily Steal in 18 hrs if unsold.</p>
      </div>
      {/* Stats row */}
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          { label: "Min Price",  value: "$35" },
          { label: "Steps Left", value: "2"   },
          { label: "Unsold",     value: "3"   },
        ].map((s) => (
          <div key={s.label} className="rounded border border-neutral-100 bg-neutral-50 p-2 text-center">
            <p className="text-[8px] text-neutral-500">{s.label}</p>
            <p className="text-xs font-bold text-neutral-800">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── Weather Dashboard Mockup ─────────────────────────────────────────────────
const weatherMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-neutral-600">Weather-Based Pricing</span>
        <span className="rounded bg-brand-amber/15 px-2 py-0.5 text-[9px] font-medium text-brand-amber">2 Alerts</span>
      </div>
    </div>
    <div className="p-4">
      {/* 5-day forecast */}
      <div className="mb-3 grid grid-cols-5 gap-1.5">
        {[
          { day: "Wed", icon: "☀️",  high: 74, rain: "5%",  status: "normal" },
          { day: "Thu", icon: "⛅",  high: 68, rain: "20%", status: "normal" },
          { day: "Fri", icon: "🌧️", high: 58, rain: "80%", status: "alert"  },
          { day: "Sat", icon: "⛈️", high: 55, rain: "90%", status: "alert"  },
          { day: "Sun", icon: "☀️",  high: 72, rain: "10%", status: "normal" },
        ].map((day) => (
          <div key={day.day} className={`rounded-lg border p-1.5 text-center ${
            day.status === "alert"
              ? "border-brand-amber/30 bg-brand-amber/8"
              : "border-neutral-100 bg-neutral-50"
          }`}>
            <p className="text-[8px] font-medium text-neutral-400">{day.day}</p>
            <p className="my-0.5 text-base leading-none">{day.icon}</p>
            <p className="text-[9px] font-semibold text-neutral-800">{day.high}°</p>
            <p className={`text-[7px] ${day.status === "alert" ? "text-brand-amber" : "text-neutral-500"}`}>{day.rain}</p>
          </div>
        ))}
      </div>
      {/* Adjustment cards */}
      <div className="space-y-1.5">
        {[
          { day: "Friday", trigger: "Rain > 70%", action: "Reduce rates 15%", newRate: "$55 → $47" },
          { day: "Saturday", trigger: "Rain > 80%", action: "Trigger Daily Steals", newRate: "$55 → $38" },
        ].map((alert) => (
          <div key={alert.day} className="flex items-center gap-2 rounded-lg border border-brand-amber/20 bg-brand-amber/8 px-3 py-2">
            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-amber" />
            <div className="flex-1">
              <p className="text-[9px] font-semibold text-neutral-800">{alert.day} — {alert.trigger}</p>
              <p className="text-[8px] text-neutral-400">{alert.action}</p>
            </div>
            <span className="whitespace-nowrap text-[9px] font-medium text-brand-amber">{alert.newRate}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── Strategy Builder Mockup ──────────────────────────────────────────────────
const strategyMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-neutral-600">Strategy Builder</span>
        <span className="rounded bg-brand-green/15 px-2 py-0.5 text-[9px] font-medium text-brand-green">3 Active</span>
      </div>
    </div>
    <div className="p-4">
      {/* Strategy list */}
      <div className="space-y-2">
        {[
          { name: "Peak Season Weekends",  days: "Sat–Sun, Apr–Oct", status: "Active",   color: "text-brand-green",  dot: "bg-brand-green"  },
          { name: "Holiday Rate Lock",     days: "Memorial, July 4, Labor Day", status: "Active",   color: "text-brand-green",  dot: "bg-brand-green"  },
          { name: "Twilight Special",      days: "Daily after 3 PM", status: "Active",   color: "text-brand-green",  dot: "bg-brand-green"  },
          { name: "Tournament Blackout",   days: "Jul 12–14",        status: "Scheduled", color: "text-brand-cyan",   dot: "bg-brand-cyan"   },
          { name: "Winter Flat Rate",      days: "Nov–Mar",          status: "Inactive",  color: "text-neutral-500",  dot: "bg-neutral-600"  },
        ].map((s) => (
          <div key={s.name} className="flex items-center gap-2.5 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2">
            <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${s.dot}`} />
            <div className="flex-1 min-w-0">
              <p className="truncate text-[9px] font-semibold text-neutral-800">{s.name}</p>
              <p className="text-[8px] text-neutral-500">{s.days}</p>
            </div>
            <span className={`shrink-0 text-[8px] font-medium ${s.color}`}>{s.status}</span>
          </div>
        ))}
      </div>
      {/* Add button */}
      <div className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-dashed border-neutral-200 px-3 py-2">
        <span className="text-[9px] text-neutral-500">+ Add Strategy</span>
      </div>
    </div>
  </div>
);

const dynamicPricingFeatures = [
  {
    label: "Utilization Pricing",
    title: "Rates That Respond to Demand",
    description:
      "Prices automatically increase as tee times fill and decrease when utilization is low, ensuring you capture maximum revenue at peak times and fill gaps during slow periods.",
    imageContent: utilizationMockup,
    bullets: [
      "Automatic rate adjustments based on fill percentage",
      "Configurable floor and ceiling prices",
      "Day-of-week and time-of-day modifiers",
      "Real-time price updates on your booking page",
    ],
  },
  {
    label: "Inventory Expiration",
    title: "Turn Unsold Tee Times into Revenue",
    description:
      "As tee times approach without being booked, pricing steps down automatically to drive last-minute sales rather than leaving inventory empty.",
    imageContent: expirationMockup,
    bullets: [
      "Configurable step-down intervals",
      "Minimum price thresholds",
      "Automatic Daily Steals integration",
      "Email triggers for expiring inventory",
    ],
  },
  {
    label: "Weather-Based Pricing",
    title: "Adjust Rates Before the Forecast Hits",
    description:
      "GolfBack monitors weather forecasts and adjusts rates when conditions are expected to impact demand, keeping bookings flowing even on marginal days.",
    imageContent: weatherMockup,
    bullets: [
      "7-day forecast integration",
      "Temperature and precipitation triggers",
      "Automatic price adjustments for poor forecasts",
      "Override controls for manual adjustments",
    ],
  },
  {
    label: "Strategy Application",
    title: "Your Rules, Applied Automatically",
    description:
      "Define pricing strategies once — by season, day type, or special event — and let the engine apply them consistently across your entire tee sheet.",
    imageContent: strategyMockup,
    bullets: [
      "Seasonal strategy templates",
      "Holiday and event overrides",
      "Multi-course portfolio pricing",
      "Performance benchmarks per strategy",
    ],
  },
];

const comparisonRows = [
  { feature: "Reserve with Google integration", golfback: true, competitor: false },
  { feature: "Dynamic pricing engine", golfback: true, competitor: false },
  { feature: "Daily Steals promotion tool", golfback: true, competitor: false },
  { feature: "Strike through pricing display", golfback: true, competitor: false },
  { feature: "Weather-based rate adjustments", golfback: true, competitor: false },
  { feature: "Online cancellation and rebooking", golfback: true, competitor: true },
  { feature: "Basic online tee time booking", golfback: true, competitor: true },
  { feature: "No revenue sharing per booking", golfback: true, competitor: false },
];

export default function BookingEnginePage() {
  return (
    <>
      <HeroSplit
        label="Online Tee Time Booking"
        heading="The Future of Online Booking Starts at Your Website."
        subtitle="A booking engine built to convert browsers into bookers. Dynamic pricing, promotional tools, and Reserve with Google — all designed to keep golfers booking direct."
        primaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
        secondaryCta={{ label: "See How It Works", href: "/case-studies" }}
      >
        {bookingHeroMockup}
      </HeroSplit>

      <FeatureGrid
        label="Key Benefits"
        heading="Everything You Need to Drive Direct Bookings"
        subtitle="Built from the ground up for golf courses that want to own their booking experience and their revenue."
        features={keyBenefits}
        columns={3}
      />

      <FeatureAlternating features={dynamicPricingFeatures} dark />

      <ComparisonSection
        label="GolfBack vs. POS Built-in"
        heading="A Booking Engine That Actually Converts"
        golfbackLabel="GolfBack"
        competitorLabel="POS Booking"
        rows={comparisonRows}
      />

      <CaseStudyCarousel
        label="Success Stories"
        heading="Courses That Made the Switch"
        caseStudies={caseStudies.slice(0, 3)}
        dark
      />

      <CtaBanner
        heading="Stop Losing Bookings to Third Parties"
        subtitle="See how a purpose-built booking engine converts more golfers at higher rates."
        primaryCta={{ label: "Get a Demo", href: "/schedule-demo" }}
        secondaryCta={{ label: "View Case Studies", href: "/case-studies" }}
        variant="cyan"
      />
    </>
  );
}
