import type { Metadata } from "next";
import HeroMinimal from "@/components/sections/HeroMinimal";
import CalculatorForm from "@/components/sections/CalculatorForm";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Barter Calculator | See What Third-Party Deals Really Cost",
  description:
    "Calculate the true cost of barter agreements and third-party tee time deals. Find out how much revenue your golf course is giving away.",
};

export default function BarterCalculatorPage() {
  return (
    <>
      <HeroMinimal
        label="Barter Calculator"
        heading="What's Your Barter Really Costing?"
        subtitle="Most courses underestimate how much revenue they're giving away. Find out in 30 seconds."
        tall
      />

      {/* Intro */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-neutral-600">
              Barter agreements are a staple of the golf industry — trade tee
              times for advertising, sponsorships, or marketplace placement.
              But the math rarely works in the course&apos;s favor. When you
              factor in the retail value of the rounds given away, the lost
              ancillary revenue, and the opportunity cost of those tee times,
              barter deals often cost far more than they return. Use the
              calculator below to see what your agreements are actually costing
              you.
            </p>
          </div>
        </Container>
      </section>

      <div className="bg-white pb-4">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-cyan">
              Run the Numbers
            </p>
            <h2 className="mb-4 text-2xl font-bold text-neutral-900 md:text-3xl">
              Enter Your Course Details
            </h2>
            <p className="text-base text-neutral-500">
              Fill in what you know — estimates are fine. The calculator will show you the real cost of your barter agreements.
            </p>
          </div>
        </Container>
      </div>

      <CalculatorForm />

      <CtaBanner
        heading="Ready to Stop Giving Away Revenue?"
        subtitle="GolfBack helps courses replace barter-dependent channels with direct bookings that keep 100% of the revenue."
        primaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
        secondaryCta={{ label: "Learn More", href: "/why-choose-us" }}
        variant="dark"
      />
    </>
  );
}
