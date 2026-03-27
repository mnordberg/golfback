import type { Metadata } from "next";
import HeroSplit from "@/components/sections/HeroSplit";
import FeatureGrid from "@/components/sections/FeatureGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CtaBanner from "@/components/sections/CtaBanner";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Tee Time Lottery | GolfBack",
  description:
    "Automate high-demand tee time allocation with a fair, transparent lottery system. Eliminate favoritism, reduce staff workload, and keep every golfer informed.",
};

const lotteryFeatures = [
  {
    icon: "shield",
    title: "Fair & Transparent",
    description:
      "Weighted scoring and configurable rules eliminate favoritism. Every golfer knows the process is impartial.",
  },
  {
    icon: "zap",
    title: "Fully Automated",
    description:
      "Requests come in, the lottery runs, results post, and notifications go out — all without staff touching it.",
  },
  {
    icon: "mail",
    title: "Instant Notifications",
    description:
      "Golfers receive automated confirmations the moment results are posted. No waiting, no calling the pro shop.",
  },
  {
    icon: "target",
    title: "Customizable Rules",
    description:
      "Adjust timing windows, scoring weights, priority groups, and exclusion rules to match your course's policies.",
  },
  {
    icon: "calendar",
    title: "Real-Time Tee Sheet",
    description:
      "Won slots populate your tee sheet in real time. No manual entry, no gaps, no double-bookings.",
  },
  {
    icon: "users",
    title: "Seamless Integration",
    description:
      "The lottery connects directly to your GolfBack booking engine. Golfers enter and receive results through the same system.",
  },
];

const steps = [
  {
    number: 1,
    title: "Golfers Submit",
    description: "Members submit tee time requests through the public booking engine during the open window.",
    icon: "mouse-pointer-click",
  },
  {
    number: 2,
    title: "Groups Are Ranked",
    description: "GolfBack scores and ranks requests using your customized weighted criteria.",
    icon: "trending-up",
  },
  {
    number: 3,
    title: "Results Posted",
    description: "Course operators review and approve, or enable fully automatic result posting.",
    icon: "clipboard-list",
  },
  {
    number: 4,
    title: "Golfers Notified",
    description: "Winners and non-winners receive instant automated notifications with their result.",
    icon: "mail",
  },
];

// ─── Lottery Dashboard Mockup ─────────────────────────────────────────────────
const lotteryMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <span className="text-[10px] font-semibold text-neutral-600">Tee Time Lottery — Weekend Draw</span>
      <span className="rounded bg-brand-amber/15 px-2 py-0.5 text-[9px] font-medium text-brand-amber">Drawing Open</span>
    </div>
    <div className="p-4 space-y-3">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Requests", value: "84" },
          { label: "Slots",    value: "32" },
          { label: "Closes",   value: "6h" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-neutral-100 bg-neutral-50 p-2 text-center">
            <p className="text-[7px] uppercase tracking-wider text-neutral-500">{s.label}</p>
            <p className="text-[15px] font-bold text-neutral-800">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Request list */}
      <div>
        <p className="mb-1.5 text-[8px] uppercase tracking-wider text-neutral-500">Top Ranked Requests</p>
        <div className="space-y-1.5">
          {[
            { rank: 1, name: "J. Mercer (4)",    time: "7:00 AM", score: "94", won: true  },
            { rank: 2, name: "T. Sullivan (2)",  time: "7:12 AM", score: "91", won: true  },
            { rank: 3, name: "R. Tillman (4)",   time: "8:00 AM", score: "88", won: true  },
            { rank: 4, name: "M. Okafor (3)",    time: "9:30 AM", score: "85", won: false },
            { rank: 5, name: "D. Chen (4)",      time: "7:48 AM", score: "82", won: false },
          ].map((entry) => (
            <div key={entry.rank} className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-2.5 py-2">
              <span className="w-4 shrink-0 text-center text-[9px] text-neutral-400">#{entry.rank}</span>
              <span className="flex-1 text-[9px] font-medium text-neutral-800">{entry.name}</span>
              <span className="text-[8px] text-neutral-500">{entry.time}</span>
              <span className="text-[8px] text-neutral-500">Score: {entry.score}</span>
              <span className={`rounded px-1.5 py-0.5 text-[7px] font-medium ${
                entry.won ? "bg-brand-green/15 text-brand-green" : "bg-neutral-100 text-neutral-400"
              }`}>{entry.won ? "Won" : "Pending"}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Auto-post toggle */}
      <div className="flex items-center justify-between rounded-lg border border-brand-cyan/20 bg-brand-cyan/5 px-3 py-2">
        <span className="text-[9px] text-neutral-600">Auto-post results at close</span>
        <div className="flex h-4 w-8 items-center justify-end rounded-full bg-brand-cyan px-0.5">
          <div className="h-3 w-3 rounded-full bg-white shadow-sm" />
        </div>
      </div>
    </div>
  </div>
);

export default function TeeTimeLotteryPage() {
  return (
    <>
      <HeroSplit
        label="Tee Time Lottery"
        heading="Fair, Automated, and Completely Hassle-Free."
        subtitle="High-demand tee times create conflict. GolfBack's lottery system handles allocation automatically — with transparent scoring, instant notifications, and zero staff involvement."
        primaryCta={{ label: "See It in Action", href: "/contact" }}
        secondaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
      >
        {lotteryMockup}
      </HeroSplit>

      <FeatureGrid
        label="Built to Eliminate Conflict"
        heading="Everything You Need for Fair Tee Time Allocation"
        subtitle="From request submission to result notification, the entire process runs automatically."
        features={lotteryFeatures}
        columns={3}
      />

      <ProcessSteps
        label="How It Works"
        heading="Four Steps from Request to Confirmation"
        subtitle="Golfers submit, GolfBack ranks, results post, notifications go out. That's it."
        steps={steps}
      />

      <TestimonialSection
        label="Client Results"
        heading="What Operators Are Saying"
        testimonials={testimonials}
        carousel
      />

      <CtaBanner
        heading="Stop Managing Lottery Requests by Hand."
        subtitle="GolfBack automates the entire process — from request window through result notifications."
        primaryCta={{ label: "Request a Demo", href: "/schedule-demo" }}
        secondaryCta={{ label: "See All Features", href: "/gro" }}
        variant="dark"
      />
    </>
  );
}
