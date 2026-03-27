import type { Metadata } from "next";
import HeroSplit from "@/components/sections/HeroSplit";
import FeatureGrid from "@/components/sections/FeatureGrid";
import FeatureAlternating from "@/components/sections/FeatureAlternating";
import ComparisonSection from "@/components/sections/ComparisonSection";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Marketing Solutions | GolfBack",
  description:
    "Automated email marketing for golf courses. Segment golfers by behavior, frequency, and lifetime value — then automate targeted campaigns that drive bookings.",
};

const automationFeatures = [
  {
    icon: "zap",
    title: "Dynamic Automations",
    description:
      "Trigger campaigns based on real golfer behavior — lapsed visits, booking anniversaries, and spending milestones.",
  },
  {
    icon: "mouse-pointer-click",
    title: "One Click Automations",
    description:
      "Launch proven campaign templates with a single click. Pre-built workflows for welcome series, win-backs, and seasonal pushes.",
  },
  {
    icon: "database",
    title: "Multiple Data Points",
    description:
      "Leverage POS transactions, booking history, email engagement, and website activity to personalize every message.",
  },
  {
    icon: "clock",
    title: "Configure in Minutes",
    description:
      "No marketing degree required. Set up automated campaigns in minutes with a guided workflow builder.",
  },
];

const segmentTypes = [
  {
    icon: "users",
    title: "One Time Players",
    description:
      "Identify golfers who played once and never returned, then send targeted win-back offers to bring them back.",
  },
  {
    icon: "bar-chart-3",
    title: "Frequency Segments",
    description:
      "Group golfers by how often they play — weekly regulars, monthly visitors, or seasonal-only — and tailor messaging accordingly.",
  },
  {
    icon: "calendar",
    title: "Time Based",
    description:
      "Segment by recency of last visit to catch lapsing golfers before they disappear entirely.",
  },
  {
    icon: "dollar-sign",
    title: "Lifetime Value",
    description:
      "Rank golfers by total spend and focus your highest-value offers on the contacts most likely to convert.",
  },
  {
    icon: "trending-up",
    title: "POS Rate Segments",
    description:
      "Use point-of-sale rate codes to segment golfers by the type of round they book — twilight, senior, weekend, and more.",
  },
  {
    icon: "settings",
    title: "Custom Segments",
    description:
      "Build your own segments by combining any data point in your database for hyper-targeted campaigns.",
  },
];

// ─── Marketing Dashboard Hero Mockup ─────────────────────────────────────────
const marketingHeroMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl">
    <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-[10px] font-medium text-neutral-400">GolfBack — Marketing</span>
      </div>
      <span className="rounded bg-brand-cyan/15 px-2 py-0.5 text-[9px] font-medium text-brand-teal">4 Active Campaigns</span>
    </div>
    <div className="flex">
      {/* Sidebar */}
      <div className="hidden w-28 shrink-0 border-r border-neutral-100 bg-neutral-50/50 p-2.5 xl:block">
        {["Dashboard","Campaigns","Contacts","Segments","Reports"].map((item, i) => (
          <div key={item} className={`mb-0.5 rounded px-2 py-1.5 text-[9px] ${
            i === 1 ? "bg-brand-cyan/10 font-medium text-brand-teal" : "text-neutral-400"
          }`}>{item}</div>
        ))}
      </div>
      {/* Main */}
      <div className="flex-1 p-3">
        <div className="mb-2 grid grid-cols-4 gap-1.5">
          {[
            { label: "Revenue",   value: "$8,420", delta: "+18%" },
            { label: "Sent",      value: "12.4K",  delta: "This mo" },
            { label: "Open Rate", value: "31%",    delta: "+4pt" },
            { label: "Bookings",  value: "214",    delta: "+22%" },
          ].map((k) => (
            <div key={k.label} className="rounded-lg border border-neutral-100 bg-neutral-50 p-2 text-center">
              <p className="text-[7px] uppercase tracking-wider text-neutral-400">{k.label}</p>
              <p className="text-[11px] font-bold text-neutral-800">{k.value}</p>
              <p className="text-[8px] font-medium text-brand-green">{k.delta}</p>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {[
            { name: "Win-Back Spring",    status: "Active",   sent: "1,240", opens: "34%", rev: "$4,350" },
            { name: "Birthday Offer",     status: "Active",   sent: "83",    opens: "58%", rev: "$2,100" },
            { name: "Low Demand Fill",    status: "Active",   sent: "3,100", opens: "22%", rev: "$1,970" },
            { name: "Welcome Series",     status: "Active",   sent: "204",   opens: "48%", rev: "$—"     },
          ].map((c) => (
            <div key={c.name} className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-2.5 py-1.5">
              <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
              <span className="flex-1 text-[9px] font-medium text-neutral-700">{c.name}</span>
              <span className="text-[8px] text-neutral-400">{c.sent} sent</span>
              <span className="w-8 text-right text-[8px] text-neutral-500">{c.opens}</span>
              <span className="w-12 text-right text-[9px] font-semibold text-brand-green">{c.rev}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ─── POS Integration Flow Mockup ─────────────────────────────────────────────
const posIntegrationMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <span className="text-[10px] font-semibold text-neutral-600">POS Data Sync</span>
    </div>
    <div className="p-4">
      {/* Flow diagram */}
      <div className="mb-4 flex items-center justify-between gap-2">
        {[
          { label: "POS System",    icon: "🖥️",  sub: "Tee sheet + F&B"   },
          { label: "Nightly Sync",  icon: "🔄",  sub: "Auto 2:00 AM"       },
          { label: "GolfBack CRM",  icon: "📊",  sub: "Unified profiles"   },
        ].map((step, i) => (
          <div key={step.label} className="flex items-center gap-2">
            <div className="flex-1 rounded-lg border border-neutral-100 bg-neutral-50 p-2.5 text-center">
              <p className="text-lg leading-none">{step.icon}</p>
              <p className="mt-1 text-[9px] font-semibold text-neutral-800">{step.label}</p>
              <p className="text-[7px] text-neutral-500">{step.sub}</p>
            </div>
            {i < 2 && <span className="shrink-0 text-[10px] text-brand-cyan">→</span>}
          </div>
        ))}
      </div>
      {/* Recent syncs */}
      <p className="mb-1.5 text-[8px] uppercase tracking-wider text-neutral-500">Recent Syncs</p>
      <div className="space-y-1.5">
        {[
          { date: "Mar 26, 2:01 AM", records: "142 rounds",  status: "Success" },
          { date: "Mar 25, 2:00 AM", records: "118 rounds",  status: "Success" },
          { date: "Mar 24, 2:03 AM", records: "96 rounds",   status: "Success" },
          { date: "Mar 23, 2:00 AM", records: "187 rounds",  status: "Success" },
        ].map((s) => (
          <div key={s.date} className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-2.5 py-1.5">
            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
            <span className="flex-1 text-[9px] text-neutral-600">{s.date}</span>
            <span className="text-[8px] text-neutral-500">{s.records}</span>
            <span className="text-[8px] font-medium text-brand-green">{s.status}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg border border-brand-cyan/20 bg-brand-cyan/8 px-3 py-2">
        <p className="text-[9px] text-neutral-600">Last sync enriched <span className="font-semibold text-neutral-800">3,814 profiles</span> with rate codes, F&B spend, and round history.</p>
      </div>
    </div>
  </div>
);

// ─── Contact Profile View Mockup ─────────────────────────────────────────────
const contactProfileMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <span className="text-[10px] font-semibold text-neutral-600">Contact Profile</span>
    </div>
    <div className="p-4">
      {/* Header */}
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cyan/20 text-sm font-bold text-brand-cyan">JM</div>
        <div>
          <p className="text-[11px] font-bold text-neutral-800">James Mercer</p>
          <p className="text-[9px] text-neutral-400">james.mercer@email.com · (555) 842-1190</p>
        </div>
        <span className="ml-auto rounded bg-brand-green/15 px-2 py-0.5 text-[8px] font-semibold text-brand-green">VIP</span>
      </div>
      {/* Stats */}
      <div className="mb-3 grid grid-cols-4 gap-1.5">
        {[
          { label: "Rounds",  value: "14"     },
          { label: "LTV",     value: "$1,840" },
          { label: "Opens",   value: "68%"    },
          { label: "Score",   value: "92"     },
        ].map((s) => (
          <div key={s.label} className="rounded border border-neutral-100 bg-neutral-50 p-1.5 text-center">
            <p className="text-[7px] text-neutral-500">{s.label}</p>
            <p className="text-[10px] font-bold text-neutral-800">{s.value}</p>
          </div>
        ))}
      </div>
      {/* Tags */}
      <div className="mb-3 flex flex-wrap gap-1">
        {["Weekend Regular","Cart Renter","High LTV","Email Engaged","Survey Completed"].map((tag) => (
          <span key={tag} className="rounded-full border border-neutral-100 bg-neutral-50 px-2 py-0.5 text-[7px] text-neutral-400">{tag}</span>
        ))}
      </div>
      {/* Recent activity */}
      <p className="mb-1.5 text-[8px] uppercase tracking-wider text-neutral-500">Recent Activity</p>
      <div className="space-y-1">
        {[
          { icon: "📧", text: "Opened Win-Back email",         date: "Mar 23" },
          { icon: "⛳", text: "Booked — Sat 8:08 AM · $72",   date: "Mar 22" },
          { icon: "⭐", text: "Survey: 5 stars",               date: "Mar 15" },
        ].map((a) => (
          <div key={a.text} className="flex items-center gap-2 rounded border border-neutral-100 bg-neutral-50 px-2 py-1">
            <span className="text-[10px]">{a.icon}</span>
            <span className="flex-1 text-[8px] text-neutral-600">{a.text}</span>
            <span className="text-[7px] text-neutral-500">{a.date}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── Lead Pipeline Mockup ─────────────────────────────────────────────────────
const leadPipelineMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-neutral-600">Lead Pipeline</span>
        <span className="text-[9px] text-neutral-400">48 leads this month</span>
      </div>
    </div>
    <div className="p-4">
      {/* Pipeline stages */}
      <div className="mb-3 grid grid-cols-3 gap-1.5">
        {[
          { stage: "New Leads",    count: 18, color: "bg-brand-cyan"   },
          { stage: "Nurturing",    count: 22, color: "bg-brand-amber"  },
          { stage: "Converted",    count: 8,  color: "bg-brand-green"  },
        ].map((s) => (
          <div key={s.stage} className="rounded-lg border border-neutral-100 bg-neutral-50 p-2.5 text-center">
            <p className="text-xl font-bold text-neutral-800">{s.count}</p>
            <p className="text-[8px] text-neutral-400">{s.stage}</p>
            <div className={`mt-1.5 h-1 w-full rounded-full ${s.color} opacity-60`} />
          </div>
        ))}
      </div>
      {/* Lead list */}
      <p className="mb-1.5 text-[8px] uppercase tracking-wider text-neutral-500">Recent Leads</p>
      <div className="space-y-1.5">
        {[
          { name: "T. Nguyen",   source: "Newsletter signup", stage: "New",       score: 24 },
          { name: "B. Caldwell", source: "Tee sheet browse",  stage: "Nurturing", score: 61 },
          { name: "A. Patel",    source: "Contact form",      stage: "Nurturing", score: 73 },
          { name: "K. Rivera",   source: "Google search",     stage: "Converted", score: 88 },
        ].map((lead) => (
          <div key={lead.name} className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-2.5 py-1.5">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan/15 text-[8px] font-semibold text-brand-cyan">
              {lead.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-semibold text-neutral-800">{lead.name}</p>
              <p className="text-[7px] text-neutral-500">{lead.source}</p>
            </div>
            <span className={`text-[8px] font-medium ${
              lead.stage === "Converted" ? "text-brand-green" :
              lead.stage === "Nurturing" ? "text-brand-amber" :
              "text-brand-cyan"
            }`}>{lead.stage}</span>
            <span className="text-[8px] text-neutral-500">{lead.score}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── Survey Dashboard Mockup ──────────────────────────────────────────────────
const surveyMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-neutral-600">Survey Dashboard</span>
        <span className="rounded bg-brand-green/15 px-2 py-0.5 text-[9px] font-medium text-brand-green">84% response</span>
      </div>
    </div>
    <div className="p-4">
      {/* NPS */}
      <div className="mb-3 flex items-center justify-between rounded-lg border border-neutral-100 bg-neutral-50 px-4 py-3">
        <div>
          <p className="text-[8px] uppercase tracking-wider text-neutral-500">Net Promoter Score</p>
          <p className="text-2xl font-bold text-neutral-800">72</p>
          <p className="text-[9px] text-brand-green">+8 vs. last quarter</p>
        </div>
        <div className="text-right">
          <div className="flex gap-1 justify-end mb-1">
            {["bg-brand-green","bg-brand-green","bg-brand-green","bg-brand-amber","bg-red-400/60"].map((c, i) => (
              <div key={i} className={`h-8 w-5 rounded-sm ${c} opacity-80`} />
            ))}
          </div>
          <p className="text-[7px] text-neutral-500">Detract · Passive · Promote</p>
        </div>
      </div>
      {/* Recent responses */}
      <p className="mb-1.5 text-[8px] uppercase tracking-wider text-neutral-500">Recent Responses</p>
      <div className="space-y-1.5">
        {[
          { name: "J. Mercer",   rating: 5, comment: "Course was in great shape!",        flag: false },
          { name: "R. Tillman",  rating: 4, comment: "Starter was helpful and friendly.",  flag: false },
          { name: "C. Okafor",   rating: 2, comment: "Cart GPS wasn't working on 9.",      flag: true  },
        ].map((r) => (
          <div key={r.name} className={`rounded-lg border px-3 py-2 ${
            r.flag ? "border-brand-amber/30 bg-brand-amber/8" : "border-neutral-100 bg-neutral-50"
          }`}>
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-semibold text-neutral-800">{r.name}</span>
              <span className="text-[9px] text-brand-amber">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span>
            </div>
            <p className="mt-0.5 text-[8px] text-neutral-400">"{r.comment}"</p>
            {r.flag && <p className="mt-0.5 text-[7px] font-medium text-brand-amber">⚠ Follow-up triggered</p>}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const contactManagement = [
  {
    label: "POS Sync",
    title: "Automatic Data from Every Transaction",
    description:
      "GolfBack pulls golfer data directly from your point-of-sale system so your contact database stays current without manual imports.",
    imageContent: posIntegrationMockup,
    bullets: [
      "Nightly automatic data sync",
      "Round history and rate code tracking",
      "F&B and merchandise spend capture",
      "Duplicate contact merging",
    ],
  },
  {
    label: "Contact Management",
    title: "One Profile for Every Golfer",
    description:
      "Every email, booking, and POS transaction is tied to a single contact profile, giving you a complete picture of each golfer.",
    imageContent: contactProfileMockup,
    bullets: [
      "Unified golfer profiles",
      "Email engagement history",
      "Booking and revenue timeline",
      "Custom tags and notes",
    ],
  },
  {
    label: "Lead Tracking",
    title: "Capture Prospects Before They Book",
    description:
      "Track website visitors who submit forms, sign up for newsletters, or browse your tee sheet without booking — then nurture them into customers.",
    imageContent: leadPipelineMockup,
    bullets: [
      "Website form capture",
      "Newsletter signup tracking",
      "Lead scoring based on engagement",
      "Automated nurture sequences",
    ],
  },
  {
    label: "Surveys & Feedback",
    title: "Listen to Your Golfers",
    description:
      "Send post-round surveys automatically and use the responses to improve the experience and identify at-risk golfers.",
    imageContent: surveyMockup,
    bullets: [
      "Automated post-round surveys",
      "Net Promoter Score tracking",
      "Response-triggered follow-ups",
      "Feedback trend reporting",
    ],
  },
];

const comparisonRows = [
  { feature: "Behavior-triggered email automation", golfback: true, competitor: false },
  { feature: "Golfer segmentation by LTV and frequency", golfback: true, competitor: false },
  { feature: "POS data sync for contact enrichment", golfback: true, competitor: false },
  { feature: "One-click campaign templates", golfback: true, competitor: false },
  { feature: "Revenue attribution per campaign", golfback: true, competitor: false },
  { feature: "Basic email blast tool", golfback: true, competitor: true },
  { feature: "Contact list management", golfback: true, competitor: true },
  { feature: "Post-round survey automation", golfback: true, competitor: false },
];

export default function MarketingSolutionsPage() {
  return (
    <>
      <HeroSplit
        label="Marketing Automation"
        heading="Powerful Email Automation Built for Golf."
        subtitle="Stop sending batch-and-blast emails. GolfBack's marketing platform uses real golfer data to send the right message to the right person at the right time — automatically."
        primaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
        secondaryCta={{ label: "See Results", href: "/case-studies" }}
      >
        {marketingHeroMockup}
      </HeroSplit>

      <FeatureGrid
        label="Automation Features"
        heading="Marketing That Runs Itself"
        subtitle="Configure once, then let data-driven automations handle the rest."
        features={automationFeatures}
        columns={2}
      />

      <FeatureGrid
        label="Segmentation"
        heading="Reach Every Golfer with the Right Message"
        subtitle="Six segmentation strategies that turn your database into a revenue engine."
        features={segmentTypes}
        columns={3}
        dark
      />

      <FeatureAlternating features={contactManagement} />

      <ComparisonSection
        label="GolfBack vs. Generic Email Tools"
        heading="Marketing Built on Golfer Data"
        golfbackLabel="GolfBack"
        competitorLabel="Generic Tools"
        rows={comparisonRows}
      />

      <CtaBanner
        heading="Your Golfer Data Deserves Better Marketing"
        subtitle="See how automated, data-driven campaigns outperform batch-and-blast emails."
        primaryCta={{ label: "Get a Demo", href: "/schedule-demo" }}
        secondaryCta={{ label: "View Case Studies", href: "/case-studies" }}
        variant="cyan"
      />
    </>
  );
}
