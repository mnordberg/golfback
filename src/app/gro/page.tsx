import type { Metadata } from "next";
import HeroSplit from "@/components/sections/HeroSplit";
import FeatureGrid from "@/components/sections/FeatureGrid";
import FeatureAlternating from "@/components/sections/FeatureAlternating";
import ComparisonSection from "@/components/sections/ComparisonSection";
import CaseStudyCarousel from "@/components/sections/CaseStudyCarousel";
import CtaBanner from "@/components/sections/CtaBanner";
import { caseStudies } from "@/lib/data/caseStudies";

export const metadata: Metadata = {
  title: "GRO — Golf Revenue Optimizer | GolfBack",
  description:
    "Maximize revenue per tee time with dynamic pricing, automated marketing, admin alerts, and intelligent upsells built for golf courses.",
};

const revenueFeatures = [
  {
    icon: "bell",
    title: "Admin Alerts",
    description:
      "Real-time notifications when booking velocity spikes or drops so you can act before revenue slips away.",
  },
  {
    icon: "trending-up",
    title: "High Demand Days",
    description:
      "Automatically detect high-demand periods and adjust pricing to capture maximum revenue per round.",
  },
  {
    icon: "dollar-sign",
    title: "Dynamic Pricing",
    description:
      "Rates adjust in real time based on utilization, weather, and demand patterns — no manual intervention required.",
  },
  {
    icon: "search",
    title: "Pricing Intelligence",
    description:
      "See how your rates compare to competitors and local market conditions with built-in benchmarking tools.",
  },
  {
    icon: "arrow-up-right",
    title: "Golfer Upsells",
    description:
      "Automatically present add-ons like carts, range balls, and GPS at checkout to increase average order value.",
  },
  {
    icon: "bar-chart-3",
    title: "Advanced Reporting",
    description:
      "Track revenue, utilization, and campaign performance in a single dashboard designed for golf operators.",
  },
];

// ─── Campaign Builder Mockup ──────────────────────────────────────────────────
const campaignBuilderMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-neutral-600">Campaign Builder</span>
        <span className="rounded bg-brand-green/15 px-2 py-0.5 text-[9px] font-medium text-brand-green">Draft</span>
      </div>
    </div>
    <div className="p-4">
      <div className="mb-3 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2">
        <p className="mb-0.5 text-[8px] uppercase tracking-wider text-neutral-500">Campaign Name</p>
        <p className="text-[10px] font-semibold text-neutral-800">Lapsed Golfer Win-Back — Spring</p>
      </div>
      <div className="mb-3">
        <p className="mb-1.5 text-[8px] uppercase tracking-wider text-neutral-500">Trigger</p>
        <div className="flex items-center gap-2 rounded-lg border border-brand-cyan/20 bg-brand-cyan/8 px-3 py-2">
          <div className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
          <span className="text-[9px] text-neutral-600">No visit in <span className="font-semibold text-neutral-800">60 days</span></span>
        </div>
      </div>
      <p className="mb-1.5 text-[8px] uppercase tracking-wider text-neutral-500">Email Sequence</p>
      <div className="space-y-1.5">
        {[
          { step: "1", label: "We miss you — here's 10% off",   delay: "Day 0"  },
          { step: "2", label: "Last chance: your offer expires", delay: "Day 5"  },
          { step: "3", label: "Book before the season ends",    delay: "Day 12" },
        ].map((email) => (
          <div key={email.step} className="flex items-center gap-2.5 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan/20 text-[8px] font-bold text-brand-cyan">{email.step}</div>
            <span className="flex-1 text-[9px] text-neutral-600">{email.label}</span>
            <span className="text-[8px] text-neutral-500">{email.delay}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          { label: "Audience", value: "1,240" },
          { label: "Open Rate", value: "34%" },
          { label: "Bookings", value: "87" },
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

// ─── Segmentation Dashboard Mockup ───────────────────────────────────────────
const segmentationMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-neutral-600">Audience Segmentation</span>
        <span className="text-[9px] text-neutral-400">5,814 contacts</span>
      </div>
    </div>
    <div className="p-4">
      <div className="space-y-1.5">
        {[
          { name: "High-Value Regulars",  count: "312",   barClass: "w-[54%]" },
          { name: "Lapsed (60–120 days)", count: "891",   barClass: "w-[35%]" },
          { name: "One-Time Players",     count: "1,403", barClass: "w-[22%]" },
          { name: "Weekend Warriors",     count: "743",   barClass: "w-[42%]" },
          { name: "Twilight / Budget",    count: "528",   barClass: "w-[18%]" },
        ].map((seg) => (
          <div key={seg.name} className="rounded-lg border border-neutral-100 bg-neutral-50 p-2.5">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[9px] font-semibold text-neutral-800">{seg.name}</span>
              <span className="text-[8px] text-neutral-500">{seg.count}</span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-200">
              <div className={`h-full rounded-full bg-brand-cyan ${seg.barClass}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center rounded-lg border border-dashed border-neutral-200 px-3 py-2">
        <span className="text-[9px] text-neutral-500">+ Build Custom Segment</span>
      </div>
    </div>
  </div>
);

// ─── Analytics Dashboard Mockup ──────────────────────────────────────────────
const analyticsMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-neutral-600">Campaign Analytics</span>
        <span className="rounded bg-brand-cyan/15 px-2 py-0.5 text-[9px] font-medium text-brand-teal">Last 30 days</span>
      </div>
    </div>
    <div className="p-4">
      <div className="mb-3 grid grid-cols-4 gap-1.5">
        {[
          { label: "Revenue",     value: "$8,420", delta: "+18%",  up: true  },
          { label: "Bookings",    value: "214",    delta: "+22%",  up: true  },
          { label: "Open Rate",   value: "31%",    delta: "+4pt",  up: true  },
          { label: "Unsub Rate",  value: "0.3%",   delta: "−0.1%", up: false },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-lg border border-neutral-100 bg-neutral-50 p-2 text-center">
            <p className="text-[7px] uppercase tracking-wider text-neutral-500">{kpi.label}</p>
            <p className="text-[11px] font-bold text-neutral-800">{kpi.value}</p>
            <p className={`text-[8px] font-medium ${kpi.up ? "text-brand-green" : "text-neutral-500"}`}>{kpi.delta}</p>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          { name: "Win-Back Spring",   sent: "1,240", opens: "34%", bookings: "87", rev: "$4,350" },
          { name: "Birthday Offer",    sent: "83",    opens: "58%", bookings: "41", rev: "$2,100" },
          { name: "Low Demand Fill",   sent: "3,100", opens: "22%", bookings: "86", rev: "$1,970" },
        ].map((c) => (
          <div key={c.name} className="grid grid-cols-5 items-center gap-1 rounded-lg border border-neutral-100 bg-neutral-50 px-2.5 py-2">
            <span className="col-span-2 truncate text-[9px] font-medium text-neutral-800">{c.name}</span>
            <span className="text-center text-[8px] text-neutral-500">{c.opens}</span>
            <span className="text-center text-[8px] text-neutral-500">{c.bookings} bk</span>
            <span className="text-right text-[9px] font-semibold text-brand-green">{c.rev}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── Send Time Optimization Mockup ───────────────────────────────────────────
const sendTimeMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <span className="text-[10px] font-semibold text-neutral-600">Smart Send Scheduling</span>
    </div>
    <div className="p-4">
      <p className="mb-2 text-[8px] uppercase tracking-wider text-neutral-500">Engagement Heatmap — Open Rate by Day & Hour</p>
      <div className="mb-3">
        <div className="mb-1 grid grid-cols-8 gap-0.5">
          <div className="text-[7px] text-neutral-600" />
          {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
            <div key={d} className="text-center text-[7px] text-neutral-500">{d}</div>
          ))}
        </div>
        {[
          { hour: "7am",  cells: ["low","low","low","low","mid","high","high"] },
          { hour: "9am",  cells: ["mid","mid","mid","mid","mid","high","high"] },
          { hour: "12pm", cells: ["low","mid","mid","low","mid","mid","mid"]  },
          { hour: "5pm",  cells: ["mid","mid","high","high","mid","mid","low"] },
          { hour: "8pm",  cells: ["low","low","low","low","mid","low","low"]  },
        ].map((row) => (
          <div key={row.hour} className="mb-0.5 grid grid-cols-8 gap-0.5">
            <div className="flex items-center text-[7px] text-neutral-500">{row.hour}</div>
            {row.cells.map((v, i) => (
              <div key={i} className={`h-4 rounded-sm ${
                v === "high" ? "bg-brand-cyan" :
                v === "mid"  ? "bg-brand-cyan/40" :
                               "bg-neutral-100"
              }`} />
            ))}
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          { contact: "J. Mercer",  best: "Thu 5 PM", rate: "44% open" },
          { contact: "R. Tillman", best: "Sat 7 AM", rate: "42% open" },
          { contact: "M. Okafor",  best: "Fri 5 PM", rate: "40% open" },
        ].map((r) => (
          <div key={r.contact} className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-1.5">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan/20 text-[8px] font-semibold text-brand-cyan">
              {r.contact[0]}
            </div>
            <span className="flex-1 text-[9px] text-neutral-600">{r.contact}</span>
            <span className="text-[8px] font-medium text-neutral-800">{r.best}</span>
            <span className="text-[8px] text-brand-green">{r.rate}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const marketingAutomation = [
  {
    label: "Automated Campaigns",
    title: "Set It and Forget It Marketing",
    description:
      "Build email sequences triggered by golfer behavior — first visit, lapsed play, birthday, and more. Campaigns run 24/7 without staff involvement.",
    imageContent: campaignBuilderMockup,
    bullets: [
      "Behavior-triggered email sequences",
      "Pre-built templates for common scenarios",
      "A/B testing on subject lines and send times",
      "Automatic suppression of recent bookers",
    ],
  },
  {
    label: "Audience Segmentation",
    title: "Target the Right Golfers at the Right Time",
    description:
      "Segment your database by frequency, lifetime value, rate sensitivity, and recency to send offers that convert.",
    imageContent: segmentationMockup,
    bullets: [
      "Lifetime value scoring",
      "Frequency-based cohorts",
      "POS rate and revenue segments",
      "Custom segment builder",
    ],
  },
  {
    label: "Performance Analytics",
    title: "Measure Every Dollar of Marketing ROI",
    description:
      "Track opens, clicks, bookings, and revenue attributed to each campaign so you know exactly what works.",
    imageContent: analyticsMockup,
    bullets: [
      "Revenue attribution per campaign",
      "Open and click rate tracking",
      "Booking conversion metrics",
      "Month-over-month trend analysis",
    ],
  },
  {
    label: "Smart Scheduling",
    title: "Send Offers When Golfers Are Listening",
    description:
      "GRO analyzes engagement patterns and automatically optimizes send times for each contact in your database.",
    imageContent: sendTimeMockup,
    bullets: [
      "Per-contact send time optimization",
      "Weather-aware campaign scheduling",
      "Day-of-week performance insights",
      "Quiet hours and frequency caps",
    ],
  },
];

const contactFeatures = [
  {
    icon: "users",
    title: "Contact Database",
    description:
      "A unified golfer profile with every booking, email interaction, and POS transaction in one place.",
  },
  {
    icon: "database",
    title: "POS Data Sync",
    description:
      "Automatically pull transactional data from your point-of-sale system to enrich contact profiles.",
  },
  {
    icon: "target",
    title: "Lead Scoring",
    description:
      "Identify your most valuable prospects based on engagement, visit frequency, and spending patterns.",
  },
  {
    icon: "mail",
    title: "Email Capture",
    description:
      "Capture golfer emails at every touchpoint — online bookings, website forms, and check-in kiosks.",
  },
];

const comparisonRows = [
  { feature: "Dynamic pricing engine", golfback: true, competitor: false },
  { feature: "Automated email marketing", golfback: true, competitor: false },
  { feature: "Real-time admin alerts", golfback: true, competitor: false },
  { feature: "Golfer upsell prompts at checkout", golfback: true, competitor: false },
  { feature: "Revenue attribution reporting", golfback: true, competitor: false },
  { feature: "POS data integration", golfback: true, competitor: true },
  { feature: "Basic tee sheet management", golfback: true, competitor: true },
  { feature: "No revenue sharing on bookings", golfback: true, competitor: false },
];

export default function GroPage() {
  return (
    <>
      <HeroSplit
        label="Golf Revenue Optimized"
        heading="Optimize Revenue. Automate Marketing. GRO with GolfBack."
        subtitle="The fastest revenue generation platform built exclusively for golf courses. GRO combines dynamic pricing, automated marketing, and real-time analytics to maximize every tee time."
        primaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
        secondaryCta={{ label: "See Case Studies", href: "/case-studies" }}
      >
        {/* GRO Dashboard mockup */}
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl">
          {/* Title bar */}
          <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-[10px] font-medium text-neutral-400">GRO — Dynamic Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green" />
              <span className="text-[10px] text-brand-green">Optimizing</span>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="hidden w-36 shrink-0 border-r border-neutral-100 bg-neutral-50/50 p-3 xl:block">
              <div className="mb-4">
                <span className="text-[9px] font-semibold uppercase tracking-wider text-neutral-400">Navigation</span>
              </div>
              {[
                { label: "Dashboard", active: false },
                { label: "Tee Sheet", active: false },
                { label: "Pricing", active: true },
                { label: "Marketing", active: false },
                { label: "Contacts", active: false },
                { label: "Reports", active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`mb-0.5 rounded px-2 py-1.5 text-[10px] ${
                    item.active
                      ? "bg-brand-cyan/10 font-medium text-brand-teal"
                      : "text-neutral-400"
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-4">
              {/* Header row */}
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-neutral-400">Saturday, March 28</p>
                  <p className="text-sm font-semibold text-neutral-800">Dynamic Pricing</p>
                </div>
                <span className="rounded bg-brand-cyan/15 px-2 py-0.5 text-[9px] font-medium text-brand-teal">Auto Mode On</span>
              </div>

              {/* Alert banner */}
              <div className="mb-3 flex items-start gap-2.5 rounded-lg border border-brand-amber/20 bg-brand-amber/8 px-3 py-2">
                <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-brand-amber" />
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-brand-amber">Admin Alert — High Demand</p>
                  <p className="text-[10px] text-neutral-600">Demand up 42% — <span className="font-medium text-neutral-800">9 tee times still at base rate.</span> Adjusting now.</p>
                </div>
              </div>

              {/* Pricing schedule */}
              <div className="mb-3 rounded-lg border border-neutral-100 bg-neutral-50 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[9px] font-medium text-neutral-500">Saturday Pricing Schedule</span>
                  <span className="text-[8px] text-neutral-400">Base → Adjusted</span>
                </div>
                <div className="space-y-1.5">
                  {[
                    { time: "7:00–9:00 AM",   tier: "Peak",     base: "$65", adjusted: "$82", change: "+26%" },
                    { time: "9:00–11:00 AM",  tier: "Peak",     base: "$65", adjusted: "$78", change: "+20%" },
                    { time: "11 AM–1:00 PM",  tier: "Mid",      base: "$52", adjusted: "$58", change: "+12%" },
                    { time: "1:00–3:00 PM",   tier: "Off-Peak", base: "$42", adjusted: "$42", change: "—"    },
                    { time: "3:00–5:00 PM",   tier: "Off-Peak", base: "$42", adjusted: "$38", change: "−10%" },
                  ].map((row) => (
                    <div key={row.time} className="flex items-center gap-2 border-b border-neutral-100 pb-1.5 last:border-0 last:pb-0">
                      <span className="w-24 shrink-0 text-[9px] text-neutral-500">{row.time}</span>
                      <span className={`w-14 shrink-0 rounded px-1.5 py-0.5 text-center text-[8px] font-medium ${
                        row.tier === "Peak"
                          ? "bg-brand-amber/10 text-brand-amber"
                          : row.tier === "Mid"
                          ? "bg-brand-cyan/10 text-brand-teal"
                          : "bg-neutral-100 text-neutral-400"
                      }`}>{row.tier}</span>
                      <span className="w-8 shrink-0 text-right text-[9px] text-neutral-400 line-through">{row.base}</span>
                      <span className="w-8 shrink-0 text-right text-[9px] font-semibold text-neutral-800">{row.adjusted}</span>
                      <span className={`ml-auto text-[9px] font-medium ${
                        row.change.startsWith("+") ? "text-brand-green" : "text-neutral-400"
                      }`}>{row.change}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom KPI row */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Revenue Lift",  value: "+$1,840", delta: "vs base rates" },
                  { label: "Avg Rate",      value: "$61.40",  delta: "+$9 vs base"  },
                  { label: "Open Slots",    value: "31 left", delta: "of 144 today"  },
                ].map((s) => (
                  <div key={s.label} className="rounded-lg border border-neutral-100 bg-neutral-50 p-2.5">
                    <p className="whitespace-nowrap text-[8px] uppercase tracking-wider text-neutral-400">{s.label}</p>
                    <p className="whitespace-nowrap font-[family-name:var(--font-display)] text-sm font-bold text-neutral-800">{s.value}</p>
                    <p className="whitespace-nowrap text-[9px] font-medium text-brand-green">{s.delta}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </HeroSplit>

      <FeatureGrid
        label="Revenue Optimization"
        heading="Six Tools That Pay for Themselves"
        subtitle="Every feature in GRO is designed to increase your revenue per round without adding staff hours."
        features={revenueFeatures}
        columns={3}
      />

      <CtaBanner
        heading="Courses using GRO see an average 28% increase in revenue per round."
        subtitle="See how dynamic pricing and automated marketing work together."
        primaryCta={{ label: "Get a Demo", href: "/schedule-demo" }}
        variant="cyan"
      />

      <FeatureAlternating features={marketingAutomation} dark />

      <FeatureGrid
        label="Contact & Lead Management"
        heading="Build a Database That Drives Revenue"
        subtitle="Every golfer interaction feeds your database, powering smarter marketing and better business decisions."
        features={contactFeatures}
        columns={2}
      />

      <ComparisonSection
        label="GRO vs. Your POS System"
        heading="Your POS Manages Tee Times. GRO Grows Revenue."
        golfbackLabel="GRO"
        competitorLabel="POS Only"
        rows={comparisonRows}
      />

      <CaseStudyCarousel
        label="Success Stories"
        heading="Real Results from Real Courses"
        caseStudies={caseStudies.slice(0, 3)}
      />

      <CtaBanner
        heading="Ready to GRO Your Revenue?"
        subtitle="Join 125+ courses already maximizing every tee time with GolfBack."
        primaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
        variant="dark"
      />
    </>
  );
}
