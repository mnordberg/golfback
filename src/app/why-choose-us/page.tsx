import type { Metadata } from "next";
import HeroMinimal from "@/components/sections/HeroMinimal";
import ComparisonSection from "@/components/sections/ComparisonSection";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Why Choose GolfBack | Purpose-Built Golf Revenue Tools",
  description:
    "See how GolfBack's booking engine, revenue optimizer, email marketing, and website design stack up against generic POS built-in tools.",
};

const bookingEngineRows = [
  { feature: "Mobile-optimized booking flow", golfback: true, competitor: false },
  { feature: "Daily Steals & promotional pricing", golfback: true, competitor: false },
  { feature: "Reserve with Google integration", golfback: true, competitor: false },
  { feature: "Upsell add-ons during checkout", golfback: true, competitor: false },
  { feature: "Conversion rate analytics", golfback: true, competitor: false },
  { feature: "Lowest-rate-guaranteed messaging", golfback: true, competitor: false },
];

const groRows = [
  { feature: "Utilization-based dynamic pricing", golfback: true, competitor: false },
  { feature: "Weather-adjusted rate optimization", golfback: true, competitor: false },
  { feature: "High-demand day detection", golfback: true, competitor: false },
  { feature: "Real-time admin alerts", golfback: true, competitor: false },
  { feature: "Revenue-per-round analytics", golfback: true, competitor: false },
  { feature: "Automated yield management", golfback: true, competitor: false },
];

const emailRows = [
  { feature: "Golfer behavior segmentation", golfback: true, competitor: false },
  { feature: "Lifetime value-based targeting", golfback: true, competitor: false },
  { feature: "Automated drip campaigns", golfback: true, competitor: false },
  { feature: "Dynamic content personalization", golfback: true, competitor: false },
  { feature: "Post-round follow-up sequences", golfback: true, competitor: false },
  { feature: "Campaign revenue attribution", golfback: true, competitor: false },
];

const websiteRows = [
  { feature: "Golf-specific design templates", golfback: true, competitor: false },
  { feature: "Integrated tee time booking widget", golfback: true, competitor: false },
  { feature: "Course photography & drone media", golfback: true, competitor: false },
  { feature: "SEO optimized for local golf search", golfback: true, competitor: false },
  { feature: "Event & league promotion pages", golfback: true, competitor: false },
  { feature: "Mobile-first responsive design", golfback: true, competitor: true },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <HeroMinimal
        label="Why GolfBack"
        heading={"Purpose-Built for Golf,\nNot Added On."}
        subtitle="POS companies bolt on booking and marketing as afterthoughts. GolfBack was built from the ground up for golf course revenue."
        tall
      />

      {/* Intro */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              label="The Difference"
              heading="Why Golf-Specific Tools Matter"
            />
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600">
              POS companies bolt on booking engines and email tools as
              afterthoughts. They&apos;re designed to check a box, not to drive
              revenue. GolfBack is different — every feature is purpose-built for
              golf course operations, optimized to increase direct bookings and
              maximize what you earn per round.
            </p>
          </div>
        </Container>
      </section>

      <ComparisonSection
        label="Booking Engine"
        heading="Direct Booking, Done Right"
        golfbackLabel="GolfBack"
        competitorLabel="POS Built-in"
        rows={bookingEngineRows}
      />

      <ComparisonSection
        label="Revenue Optimizer"
        heading="Dynamic Pricing That Actually Works"
        golfbackLabel="GolfBack GRO"
        competitorLabel="POS Built-in"
        rows={groRows}
      />

      <ComparisonSection
        label="Email Marketing"
        heading="Marketing Built on Golfer Data"
        golfbackLabel="GolfBack"
        competitorLabel="POS Built-in"
        rows={emailRows}
      />

      <ComparisonSection
        label="Website Design"
        heading="Your Course Deserves Better Than a Template"
        golfbackLabel="GolfBack"
        competitorLabel="Generic Website Builder"
        rows={websiteRows}
      />

      <CtaBanner
        heading="See the Difference for Yourself"
        subtitle="Schedule a demo and we'll show you exactly how GolfBack outperforms your current tools."
        primaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
        secondaryCta={{ label: "View Case Studies", href: "/case-studies" }}
        variant="cyan"
      />
    </>
  );
}
