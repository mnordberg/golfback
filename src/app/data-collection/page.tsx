import type { Metadata } from "next";
import HeroSplit from "@/components/sections/HeroSplit";
import FeatureGrid from "@/components/sections/FeatureGrid";
import FeatureAlternating from "@/components/sections/FeatureAlternating";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Golf Data Collection | GolfBack",
  description:
    "Collect and unify golfer data from online bookings, POS systems, and website interactions to build comprehensive contact profiles that power smarter marketing.",
};

const dataSources = [
  {
    icon: "globe",
    title: "Online Bookings",
    description:
      "Every direct booking captures name, email, phone, and booking preferences — building your database automatically.",
  },
  {
    icon: "database",
    title: "POS Integration",
    description:
      "Nightly syncs pull round history, rate codes, and F&B spending from your point-of-sale system into each golfer profile.",
  },
  {
    icon: "layers",
    title: "Website Forms",
    description:
      "Contact forms, newsletter signups, and event registrations on your website feed directly into your golfer database.",
  },
];

const customerInsights = [
  {
    icon: "target",
    title: "Interests & Preferences",
    description:
      "Track which promotions, events, and tee time slots each golfer engages with to personalize future outreach.",
  },
  {
    icon: "search",
    title: "Traffic Origins",
    description:
      "Know whether a golfer found you through Google, social media, email, or a referral — and attribute revenue to each channel.",
  },
  {
    icon: "mouse-pointer-click",
    title: "Behavior Tracking",
    description:
      "Monitor browsing patterns, booking frequency, and email engagement to score contacts and trigger automations.",
  },
  {
    icon: "settings",
    title: "Communication Preferences",
    description:
      "Respect opt-in and opt-out preferences automatically, keeping your database compliant and your deliverability high.",
  },
];

// ─── Data Collection Hero Mockup ──────────────────────────────────────────────
const dataHeroMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl">
    <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-[10px] font-medium text-neutral-400">GolfBack — Contact Database</span>
      </div>
      <span className="rounded bg-brand-cyan/15 px-2 py-0.5 text-[9px] font-medium text-brand-teal">5,814 contacts</span>
    </div>
    <div className="p-4">
      {/* Source summary */}
      <div className="mb-3 grid grid-cols-3 gap-2">
        {[
          { label: "Online Bookings", value: "3,102", icon: "🌐" },
          { label: "POS Sync",        value: "2,408", icon: "🔄" },
          { label: "Web Forms",       value: "304",   icon: "📋" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-neutral-100 bg-neutral-50 p-2.5 text-center">
            <p className="text-base leading-none">{s.icon}</p>
            <p className="mt-1 text-[11px] font-bold text-neutral-800">{s.value}</p>
            <p className="text-[8px] text-neutral-400">{s.label}</p>
          </div>
        ))}
      </div>
      {/* Contact rows */}
      <div className="space-y-1.5">
        {[
          { name: "James Mercer",   last: "Mar 22", visits: 14, ltv: "$1,840", score: 92 },
          { name: "Rosa Tillman",   last: "Mar 20", visits: 8,  ltv: "$940",   score: 74 },
          { name: "Calvin Okafor",  last: "Feb 14", visits: 3,  ltv: "$310",   score: 38 },
          { name: "Sandra Wu",      last: "Jan 6",  visits: 1,  ltv: "$85",    score: 12 },
        ].map((c) => (
          <div key={c.name} className="flex items-center gap-2.5 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-cyan/15 text-[9px] font-bold text-brand-teal">
              {c.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-semibold text-neutral-800">{c.name}</p>
              <p className="text-[8px] text-neutral-400">Last visit {c.last} · {c.visits} rounds</p>
            </div>
            <span className="text-[9px] font-semibold text-neutral-700">{c.ltv}</span>
            <div className={`flex h-5 w-5 items-center justify-center rounded-full text-[8px] font-bold ${
              c.score >= 80 ? "bg-brand-green/15 text-brand-green" :
              c.score >= 50 ? "bg-brand-amber/15 text-brand-amber" :
                              "bg-neutral-200 text-neutral-500"
            }`}>
              {c.score}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── Booking History Timeline Mockup ─────────────────────────────────────────
const bookingHistoryMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-neutral-600">Booking History — James Mercer</span>
        <span className="text-[9px] text-neutral-400">14 rounds</span>
      </div>
    </div>
    <div className="p-4">
      <div className="space-y-2">
        {[
          { date: "Mar 22, 2026", time: "8:08 AM", rate: "Weekend Peak",  price: "$72", addons: "Cart + GPS" },
          { date: "Mar 15, 2026", time: "9:24 AM", rate: "Weekend Peak",  price: "$65", addons: "Cart"       },
          { date: "Mar 8, 2026",  time: "7:40 AM", rate: "Weekend Early", price: "$58", addons: "Cart + GPS" },
          { date: "Feb 22, 2026", time: "1:16 PM", rate: "Twilight",      price: "$38", addons: "Walk"       },
          { date: "Feb 8, 2026",  time: "8:00 AM", rate: "Weekend Peak",  price: "$72", addons: "Cart"       },
        ].map((row, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <div className="flex flex-col items-center">
              <div className="h-2 w-2 rounded-full bg-brand-cyan mt-1" />
              {i < 4 && <div className="mt-1 w-px flex-1 bg-neutral-200 h-6" />}
            </div>
            <div className="flex-1 min-w-0 rounded-lg border border-neutral-100 bg-neutral-50 px-2.5 py-1.5">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-semibold text-neutral-800">{row.date} · {row.time}</p>
                <span className="text-[9px] font-bold text-neutral-800">{row.price}</span>
              </div>
              <div className="mt-0.5 flex items-center gap-2">
                <span className="text-[8px] text-neutral-400">{row.rate}</span>
                <span className="text-[7px] text-neutral-600">·</span>
                <span className="text-[8px] text-neutral-500">{row.addons}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          { label: "Rounds YTD", value: "8"     },
          { label: "Avg Rate",   value: "$61"    },
          { label: "No-Shows",   value: "0"      },
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

// ─── Spending Profile Dashboard Mockup ───────────────────────────────────────
const spendingMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-neutral-600">Spending Profile — James Mercer</span>
        <span className="rounded bg-brand-green/15 px-2 py-0.5 text-[9px] font-medium text-brand-green">High Value</span>
      </div>
    </div>
    <div className="p-4">
      {/* LTV headline */}
      <div className="mb-3 rounded-lg border border-neutral-100 bg-neutral-50 p-3 text-center">
        <p className="text-[8px] uppercase tracking-wider text-neutral-500">Lifetime Value</p>
        <p className="text-2xl font-bold text-neutral-800">$1,840</p>
        <p className="text-[9px] text-brand-green">+$340 vs. last year</p>
      </div>
      {/* Revenue breakdown */}
      <p className="mb-1.5 text-[8px] uppercase tracking-wider text-neutral-500">Revenue by Category</p>
      <div className="space-y-1.5 mb-3">
        {[
          { label: "Green Fees",   amount: "$1,248", barClass: "w-[68%]",  color: "bg-brand-cyan"  },
          { label: "Cart Rental",  amount: "$360",   barClass: "w-[20%]",  color: "bg-brand-teal"  },
          { label: "Pro Shop",     amount: "$152",   barClass: "w-[8%]",   color: "bg-brand-amber" },
          { label: "F&B",          amount: "$80",    barClass: "w-[4%]",   color: "bg-brand-green" },
        ].map((row) => (
          <div key={row.label} className="flex items-center gap-2">
            <span className="w-20 shrink-0 text-[8px] text-neutral-400">{row.label}</span>
            <div className="flex-1 h-1.5 rounded-full bg-neutral-200 overflow-hidden">
              <div className={`h-full rounded-full ${row.color} ${row.barClass}`} />
            </div>
            <span className="w-12 text-right text-[9px] font-semibold text-neutral-800">{row.amount}</span>
          </div>
        ))}
      </div>
      {/* Trend */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Avg / Visit", value: "$131" },
          { label: "Visits",      value: "14"   },
          { label: "Rank",        value: "Top 5%" },
        ].map((s) => (
          <div key={s.label} className="rounded border border-neutral-100 bg-neutral-50 p-2 text-center">
            <p className="text-[8px] text-neutral-500">{s.label}</p>
            <p className="text-[11px] font-bold text-neutral-800">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── Engagement Timeline Mockup ───────────────────────────────────────────────
const engagementMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-neutral-600">Engagement History — James Mercer</span>
        <span className="text-[9px] text-neutral-400">Last 60 days</span>
      </div>
    </div>
    <div className="p-4">
      <div className="space-y-2">
        {[
          { type: "📧", label: "Email opened",       detail: "Win-Back Spring campaign",      date: "Mar 23", color: "text-brand-cyan"  },
          { type: "🔗", label: "Link clicked",        detail: "View tee times — booked",       date: "Mar 23", color: "text-brand-green" },
          { type: "🌐", label: "Website visit",       detail: "Browsed tee sheet (4 pages)",   date: "Mar 21", color: "text-neutral-400" },
          { type: "📧", label: "Email opened",       detail: "March Newsletter",               date: "Mar 18", color: "text-brand-cyan"  },
          { type: "📋", label: "Survey submitted",   detail: "Post-round: 5 stars",            date: "Mar 15", color: "text-brand-amber" },
          { type: "📧", label: "Email — no open",    detail: "Low Demand Fill offer",          date: "Mar 10", color: "text-neutral-600" },
        ].map((e, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <span className="text-sm leading-none mt-0.5">{e.type}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className={`text-[9px] font-semibold ${e.color}`}>{e.label}</p>
                <span className="text-[8px] text-neutral-500">{e.date}</span>
              </div>
              <p className="text-[8px] text-neutral-500">{e.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-brand-cyan/20 bg-brand-cyan/8 px-3 py-2">
        <div className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
        <p className="text-[9px] text-neutral-600">Engagement score: <span className="font-semibold text-neutral-800">92 / 100</span> — highly engaged</p>
      </div>
    </div>
  </div>
);

const contactProfiles = [
  {
    label: "Booking History",
    title: "Every Round, Every Rate, Every Add-On",
    description:
      "See a complete timeline of when each golfer played, what rate they booked, and which add-ons they purchased.",
    imageContent: bookingHistoryMockup,
    bullets: [
      "Date, time, and rate code for every round",
      "Add-on and upsell purchase history",
      "Cancellation and no-show tracking",
      "Year-over-year visit comparison",
    ],
  },
  {
    label: "Spending Profile",
    title: "Understand the Full Value of Every Golfer",
    description:
      "Combine green fee revenue, F&B spend, pro shop purchases, and event fees into a single lifetime value metric.",
    imageContent: spendingMockup,
    bullets: [
      "Lifetime revenue calculation",
      "Revenue breakdown by category",
      "Average spend per visit trending",
      "High-value golfer identification",
    ],
  },
  {
    label: "Engagement History",
    title: "Track Every Touchpoint in One Place",
    description:
      "Email opens, link clicks, website visits, and form submissions are all logged on the contact profile for full visibility.",
    imageContent: engagementMockup,
    bullets: [
      "Email open and click history",
      "Website page view tracking",
      "Form submission log",
      "Campaign response timeline",
    ],
  },
];

export default function DataCollectionPage() {
  return (
    <>
      <HeroSplit
        label="Golf Data Collection"
        heading="Accelerated Golf Data for Smarter Decisions."
        subtitle="Every booking, transaction, and website visit adds to a unified golfer profile. GolfBack collects and organizes your data so you can market with precision and grow with confidence."
        primaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
        secondaryCta={{ label: "Learn About Marketing", href: "/marketing-solutions" }}
      >
        {dataHeroMockup}
      </HeroSplit>

      <FeatureGrid
        label="Data Sources"
        heading="Three Channels, One Database"
        subtitle="GolfBack captures golfer data from every interaction — online, in-person, and on your website."
        features={dataSources}
        columns={3}
      />

      <FeatureGrid
        label="Customer Insights"
        heading="Know Your Golfers Better Than They Know Themselves"
        subtitle="Turn raw data into actionable insights that drive targeted marketing and better course decisions."
        features={customerInsights}
        columns={2}
        dark
      />

      <FeatureAlternating features={contactProfiles} />

      <CtaBanner
        heading="Your Data Is Your Competitive Advantage"
        subtitle="Start building comprehensive golfer profiles that power every marketing decision."
        primaryCta={{ label: "Get a Demo", href: "/schedule-demo" }}
        secondaryCta={{ label: "Explore Marketing Tools", href: "/marketing-solutions" }}
        variant="cyan"
      />
    </>
  );
}
