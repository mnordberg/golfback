import type { Metadata } from "next";
import HeroSplit from "@/components/sections/HeroSplit";
import FeatureGrid from "@/components/sections/FeatureGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Reserve with Google | GolfBack",
  description:
    "Connect your Google Business Profile directly to your tee sheet. Reserve with Google sends golfers straight to your booking page — no third-party fees, no lost data.",
};

const benefits = [
  {
    icon: "target",
    title: "Direct to Your Booking Page",
    description:
      "The 'Book Online' button in Google Search and Maps links straight to your tee sheet — not a marketplace that charges you per booking.",
  },
  {
    icon: "dollar-sign",
    title: "Eliminate Third-Party Fees",
    description:
      "Every booking that flows through an aggregator costs you money. Reserve with Google captures that revenue before it ever leaves your property.",
  },
  {
    icon: "database",
    title: "You Own the Data",
    description:
      "Direct bookings mean golfer contact information flows into your database, not a competitor's. Build your list every time someone books from Google.",
  },
  {
    icon: "zap",
    title: "Real-Time Availability",
    description:
      "Golfers see live tee time availability from your tee sheet. No stale inventory, no double-bookings, no friction.",
  },
  {
    icon: "trending-up",
    title: "Convert Search Intent",
    description:
      "A golfer searching for your course on Google is ready to book. Reserve with Google captures that intent at the moment it peaks.",
  },
  {
    icon: "shield",
    title: "No Marketplace Dependency",
    description:
      "When golfers book directly, you control the experience, the pricing, and the relationship — not a platform with its own interests.",
  },
];

const steps = [
  {
    number: 1,
    title: "Claim Your Profile",
    description: "Verify your Google Business Profile if you haven't already. This is the foundation.",
    icon: "globe",
  },
  {
    number: 2,
    title: "Connect GolfBack",
    description: "GolfBack links your booking engine to Google's Reserve with Google integration.",
    icon: "plug",
  },
  {
    number: 3,
    title: "Go Live",
    description: "Your 'Book Online' button on Google Search and Maps now routes directly to your tee sheet.",
    icon: "mouse-pointer-click",
  },
  {
    number: 4,
    title: "Capture Every Booking",
    description: "Golfer data, payment, and confirmation all flow through your system — not a third party's.",
    icon: "database",
  },
];

// ─── Google Search Result Mockup ──────────────────────────────────────────────
const googleMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    {/* Google search bar */}
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-3">
      <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 shadow-sm">
        <div className="flex h-4 w-4 items-center justify-center">
          <div className="h-3 w-3 rounded-full border-2 border-blue-500" />
        </div>
        <span className="flex-1 text-[11px] text-neutral-500">Riverside Golf Club tee times</span>
        <div className="flex gap-0.5">
          <div className="h-1 w-1 rounded-full bg-blue-500" />
          <div className="h-1 w-1 rounded-full bg-red-500" />
          <div className="h-1 w-1 rounded-full bg-yellow-500" />
          <div className="h-1 w-1 rounded-full bg-green-500" />
        </div>
      </div>
    </div>

    <div className="p-4 space-y-3">
      {/* Knowledge panel */}
      <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-3">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-green">
            <span className="text-[10px] font-bold text-white">RC</span>
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-bold text-neutral-900">Riverside Golf Club</p>
            <p className="text-[9px] text-neutral-500">Golf Course · 4.7 ★ (312 reviews)</p>
            <p className="text-[9px] text-neutral-500">Open · 7:00 AM – 6:00 PM</p>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <div className="flex-1 rounded-lg border border-neutral-200 bg-white px-2 py-1.5 text-center">
            <p className="text-[8px] text-neutral-500">Directions</p>
          </div>
          <div className="flex-1 rounded-lg border border-neutral-200 bg-white px-2 py-1.5 text-center">
            <p className="text-[8px] text-neutral-500">Call</p>
          </div>
          <div className="flex-1 rounded-lg bg-brand-cyan px-2 py-1.5 text-center">
            <p className="text-[8px] font-semibold text-white">Book Online</p>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1.5 rounded-lg border border-brand-cyan/20 bg-brand-cyan/5 px-2 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
          <p className="text-[8px] text-brand-teal font-medium">Links directly to your booking page</p>
        </div>
      </div>

      {/* Without RwG — aggregator result */}
      <div className="rounded-xl border border-red-100 bg-red-50/50 p-3">
        <p className="mb-1.5 text-[8px] font-semibold uppercase tracking-wider text-red-400">Without Reserve with Google</p>
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-neutral-200">
            <span className="text-[7px] text-neutral-500">3P</span>
          </div>
          <div className="flex-1">
            <p className="text-[9px] font-medium text-neutral-600">GolfNow · Book at Riverside Golf Club</p>
            <p className="text-[8px] text-neutral-400">golfnow.com/tee-times/...</p>
          </div>
        </div>
        <p className="mt-1.5 text-[8px] text-red-500">Golfer data, revenue, and relationship captured by a third party.</p>
      </div>
    </div>
  </div>
);

export default function ReserveWithGooglePage() {
  return (
    <>
      <HeroSplit
        label="Reserve with Google"
        heading="Your Google 'Book Online' Button Should Work for You."
        subtitle="Most golf courses don't realize their Google Business listing is sending golfers to a third-party marketplace. Reserve with Google fixes that — directing every search directly to your booking page."
        primaryCta={{ label: "Set Up Direct Booking", href: "/contact" }}
        secondaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
      >
        {googleMockup}
      </HeroSplit>

      <FeatureGrid
        label="Why It Matters"
        heading="Every Google Search Is a Booking Opportunity"
        subtitle="Golfers who search for your course on Google are ready to book. Make sure that click stays in your ecosystem."
        features={benefits}
        columns={3}
      />

      <ProcessSteps
        label="How It Works"
        heading="Up and Running in Four Steps"
        subtitle="GolfBack handles the integration. You get direct bookings from day one."
        steps={steps}
      />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              label="The Problem"
              heading="Your Booking Button Might Be Working Against You"
            />
            <div className="space-y-5 text-lg leading-relaxed text-neutral-600">
              <p>
                When golfers find your course on Google and tap "Book Online," where do they go? For
                most courses, the answer is a third-party booking platform — one that charges a fee per
                round, keeps the golfer's data, and trains players to shop by price rather than book
                with you directly.
              </p>
              <p>
                Reserve with Google changes that. By integrating your GolfBack booking engine with your
                Google Business Profile, the "Book Online" button routes directly to your tee sheet.
                The booking stays on your system. The data is yours. The revenue is yours.
              </p>
              <p>
                It's a small change with a compounding effect: every direct booking you capture is a
                golfer in your database, not a competitor's.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="Stop Letting Google Send Your Golfers Somewhere Else."
        subtitle="GolfBack integrates Reserve with Google as part of your booking engine setup."
        primaryCta={{ label: "Get Started", href: "/contact" }}
        secondaryCta={{ label: "See the Booking Engine", href: "/booking-engine" }}
        variant="dark"
      />
    </>
  );
}
