import { DollarSign, Database, Mail, Shield } from "lucide-react";
import HeroDefault from "@/components/sections/HeroDefault";
import LogoBar from "@/components/sections/LogoBar";
import FeatureGrid from "@/components/sections/FeatureGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FeatureAlternating from "@/components/sections/FeatureAlternating";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import VideoEmbed from "@/components/ui/VideoEmbed";
import GroMockup from "@/components/ui/GroMockup";
import AnimateIn from "@/components/ui/AnimateIn";
import { testimonials } from "@/lib/data/testimonials";

const PRINCIPLE_ICONS: Record<string, React.ElementType> = {
  "dollar-sign": DollarSign,
  database: Database,
  mail: Mail,
  shield: Shield,
};

const coreProducts = [
  {
    icon: "trending-up",
    title: "Revenue Optimizer (GRO)",
    description:
      "Dynamic pricing, admin alerts, and intelligent upsells that automatically maximize your revenue on every tee time.",
  },
  {
    icon: "globe",
    title: "Booking Engine",
    description:
      "A conversion-optimized booking experience with Daily Steals, Reserve with Google, and promotional tools that drive direct bookings.",
  },
  {
    icon: "mail",
    title: "Marketing Automation",
    description:
      "Targeted email campaigns powered by real golfer data. Segment by frequency, lifetime value, and behavior — then automate everything.",
  },
];

const processSteps = [
  {
    number: 1,
    title: "Drive Direct",
    description: "Attract golfers to book directly through your website",
    icon: "globe",
  },
  {
    number: 2,
    title: "Convert",
    description: "Turn browsers into bookers with a frictionless experience",
    icon: "mouse-pointer-click",
  },
  {
    number: 3,
    title: "Upsell",
    description: "Maximize revenue per round with smart add-ons",
    icon: "trending-up",
  },
  {
    number: 4,
    title: "Transact",
    description: "Process payments and keep 100% of the revenue",
    icon: "credit-card",
  },
  {
    number: 5,
    title: "Build Database",
    description: "Capture golfer data with every interaction",
    icon: "database",
  },
  {
    number: 6,
    title: "Automate Marketing",
    description: "Re-engage golfers with targeted, automated campaigns",
    icon: "mail",
  },
];

const principles = [
  {
    icon: "dollar-sign",
    title: "Keep 100% of Your Revenue",
    description:
      "No barter agreements, no revenue sharing. Every dollar from every booking goes straight to your course.",
  },
  {
    icon: "database",
    title: "Own Your Customer Data",
    description:
      "Your golfer data belongs to you, not a third-party marketplace. Build lasting relationships on your terms.",
  },
  {
    icon: "mail",
    title: "Direct Communication",
    description:
      "Reach your golfers directly through email marketing and automated campaigns — no middleman required.",
  },
  {
    icon: "shield",
    title: "Lowest Rates Guaranteed",
    description:
      "Your website should always have the best price. GolfBack ensures golfers have every reason to book direct.",
  },
];

const groPreview = [
  {
    label: "Revenue Optimization",
    title: "Smarter Pricing, Higher Revenue",
    description:
      "GRO analyzes demand patterns, weather forecasts, and historical data to automatically adjust your pricing. Set it once and let the algorithm work — our courses see an average 28% increase in revenue per round.",
    imageContent: <GroMockup />,
    bullets: [
      "Utilization-based dynamic pricing",
      "High-demand day detection and pricing",
      "Weather-adjusted rate optimization",
      "Real-time admin alerts and notifications",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroDefault
        label="Golf's Top Revenue Optimization Platform"
        headingPrefix="Take Back Your"
        spinnerWords={["Revenue", "Customers", "Brand", "Data", "Time", "Golf"]}
        subtitle="GolfBack helps courses grow revenue by maximizing direct tee time bookings, automating marketing, and reducing reliance on third-party marketplaces."
        primaryCta={{ label: "See It In Action", href: "/schedule-demo" }}
        secondaryCta={{ label: "Why GolfBack?", href: "/why-choose-us" }}
      >
        {/* Decorative dashboard mockup */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl">
            {/* Title bar */}
            <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-[10px] font-medium text-neutral-400">GolfBack GRO</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green" />
                <span className="text-[10px] text-brand-green">Live</span>
              </div>
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="hidden w-36 shrink-0 border-r border-neutral-100 bg-neutral-50/50 p-3 xl:block">
                <div className="mb-4">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-neutral-400">Navigation</span>
                </div>
                {[
                  { label: "Dashboard", active: true },
                  { label: "Tee Sheet", active: false },
                  { label: "Pricing", active: false },
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
                    <p className="text-[10px] text-neutral-400">Thursday, March 26</p>
                    <p className="text-sm font-semibold text-neutral-800">Revenue Dashboard</p>
                  </div>
                  <div className="flex gap-1.5">
                    {["Today", "Week", "Month"].map((period, i) => (
                      <span
                        key={period}
                        className={`rounded px-2 py-0.5 text-[9px] font-medium ${
                          i === 0
                            ? "bg-brand-cyan/15 text-brand-teal"
                            : "text-neutral-400"
                        }`}
                      >
                        {period}
                      </span>
                    ))}
                  </div>
                </div>

                {/* KPI cards */}
                <div className="mb-3 grid grid-cols-4 gap-2">
                  {[
                    { label: "Revenue", value: "$4,285", delta: "+12.3%" },
                    { label: "Direct", value: "89%", delta: "+8.1%" },
                    { label: "Rounds", value: "142", delta: "+15.4%" },
                    { label: "Avg Rate", value: "$52", delta: "+$4" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg border border-neutral-100 bg-neutral-50 p-2.5">
                      <p className="whitespace-nowrap text-[8px] uppercase tracking-wider text-neutral-400">{stat.label}</p>
                      <p className="whitespace-nowrap font-[family-name:var(--font-display)] text-base font-bold text-neutral-800">{stat.value}</p>
                      <p className="whitespace-nowrap text-[9px] font-medium text-brand-green">{stat.delta}</p>
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="mb-3 rounded-lg border border-neutral-100 bg-neutral-50 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[9px] font-medium text-neutral-500">Revenue by Hour</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-[8px] text-neutral-400">
                        <span className="inline-block h-1.5 w-3 rounded-full bg-brand-cyan" /> Direct
                      </span>
                      <span className="flex items-center gap-1 text-[8px] text-neutral-400">
                        <span className="inline-block h-1.5 w-3 rounded-full bg-brand-amber/60" /> 3rd Party
                      </span>
                    </div>
                  </div>
                  {/* Stacked bar chart */}
                  <div className="flex items-end gap-[3px]">
                    {[
                      [20, 8], [35, 12], [55, 15], [70, 10], [85, 8], [75, 6],
                      [60, 12], [50, 15], [65, 10], [45, 8], [30, 5], [15, 3],
                    ].map(([direct, thirdParty], i) => (
                      <div key={i} className="flex flex-1 flex-col items-stretch gap-[1px]">
                        <div
                          className="rounded-t bg-brand-cyan/70"
                          style={{ height: `${direct}px` }}
                        />
                        <div
                          className="bg-brand-amber/35"
                          style={{ height: `${thirdParty}px` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-1 flex justify-between text-[7px] text-neutral-400">
                    <span>6am</span><span>8am</span><span>10am</span><span>12pm</span><span>2pm</span><span>5pm</span>
                  </div>
                </div>

                {/* Bottom row: mini table + occupancy */}
                <div className="grid grid-cols-2 gap-2">
                  {/* Upcoming tee times */}
                  <div className="rounded-lg border border-neutral-100 bg-neutral-50 p-2.5">
                    <p className="mb-2 text-[9px] font-medium text-neutral-500">Upcoming Tee Times</p>
                    {[
                      { time: "10:30 AM", players: "4/4", rate: "$58", type: "Direct" },
                      { time: "10:38 AM", players: "3/4", rate: "$52", type: "Direct" },
                      { time: "10:46 AM", players: "2/4", rate: "$45", type: "Steal" },
                      { time: "10:54 AM", players: "4/4", rate: "$58", type: "Direct" },
                    ].map((tee) => (
                      <div key={tee.time} className="flex items-center justify-between border-b border-neutral-100 py-1 last:border-0">
                        <span className="text-[9px] font-medium text-neutral-700">{tee.time}</span>
                        <span className="text-[8px] text-neutral-400">{tee.players}</span>
                        <span className="text-[9px] font-semibold text-neutral-800">{tee.rate}</span>
                        <span className={`rounded px-1 py-0.5 text-[7px] font-medium ${
                          tee.type === "Steal"
                            ? "bg-brand-amber/10 text-brand-amber"
                            : "bg-brand-cyan/10 text-brand-teal"
                        }`}>{tee.type}</span>
                      </div>
                    ))}
                  </div>

                  {/* Utilization gauge */}
                  <div className="rounded-lg border border-neutral-100 bg-neutral-50 p-2.5">
                    <p className="mb-2 text-[9px] font-medium text-neutral-500">Today&apos;s Utilization</p>
                    <div className="flex flex-col items-center justify-center py-2">
                      <div className="relative h-16 w-16">
                        <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                          <circle cx="18" cy="18" r="15.5" fill="none" stroke="currentColor" strokeWidth="3" className="text-neutral-200" />
                          <circle cx="18" cy="18" r="15.5" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="78 97" strokeLinecap="round" className="text-brand-cyan" />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-display)] text-sm font-bold text-neutral-800">
                          78%
                        </span>
                      </div>
                      <p className="mt-1.5 text-[8px] text-neutral-400">113 / 144 slots filled</p>
                    </div>
                    <div className="mt-1 grid grid-cols-2 gap-1.5 text-center">
                      <div className="rounded bg-neutral-100 px-1.5 py-1">
                        <p className="text-[8px] text-neutral-400">Peak</p>
                        <p className="text-[10px] font-semibold text-brand-green">94%</p>
                      </div>
                      <div className="rounded bg-neutral-100 px-1.5 py-1">
                        <p className="text-[8px] text-neutral-400">Off-Peak</p>
                        <p className="text-[10px] font-semibold text-brand-amber">61%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -inset-2 -z-10 rounded-2xl bg-brand-cyan/5 blur-2xl" />
        </div>
      </HeroDefault>

      {/* Logo Bar */}
      <LogoBar />

      {/* Core Products */}
      <FeatureGrid
        label="Our Platform"
        heading="Everything Your Course Needs"
        subtitle="A complete suite of tools designed specifically for golf courses — from booking to marketing to revenue optimization."
        features={coreProducts}
        columns={3}
      />

      {/* Process Steps */}
      <ProcessSteps
        label="How It Works"
        heading="The GolfBack Flywheel"
        subtitle="A self-reinforcing cycle that grows your direct bookings, builds your database, and compounds your revenue over time."
        steps={processSteps}
      />

      {/* GolfBack Explained Video */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <Container>
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              Our Story
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
              GolfBack Explained
            </h2>
          </div>
          <VideoEmbed videoId="gPUQUCgoNbc" title="GolfBack Explained - With Graeme McDowell" />
        </Container>
      </section>

      {/* Core Principles */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              Our Philosophy
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
              The GolfBack Principles
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {principles.map((p, i) => (
              <AnimateIn key={p.title} delay={i * 0.1}>
              <Card hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-cyan/10">
                  {(() => {
                    const Icon = PRINCIPLE_ICONS[p.icon];
                    return Icon ? <Icon size={24} className="text-brand-cyan" /> : null;
                  })()}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {p.description}
                </p>
              </Card>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* GRO Preview */}
      <FeatureAlternating features={groPreview} dark />

      {/* Testimonial */}
      <TestimonialSection
        label="What Our Clients Say"
        heading="Results That Speak for Themselves"
        testimonials={[testimonials[0]]}
      />

      {/* CTA */}
      <CtaBanner
        heading="Ready to Take Back Control?"
        subtitle="Join 125+ golf courses already growing their revenue with GolfBack."
        primaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
        secondaryCta={{ label: "See Case Studies", href: "/case-studies" }}
        variant="cyan"
      />
    </>
  );
}
