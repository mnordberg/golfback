import type { Metadata } from "next";
import HeroMinimal from "@/components/sections/HeroMinimal";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCard from "@/components/ui/StatCard";
import Card from "@/components/ui/Card";
import { team } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "About GolfBack | Golf Revenue Optimization Platform",
  description:
    "GolfBack helps golf courses take back control of their revenue and customer relationships. Learn about our mission, team, and why we built the platform.",
};

export default function AboutPage() {
  return (
    <>
      <HeroMinimal
        label="About GolfBack"
        heading="Take Back Control of Your Golf Business"
        subtitle="We build technology that puts golf courses back in the driver's seat — owning their revenue, their data, and their customer relationships."
        tall
      />

      {/* Mission + Stats */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              label="Our Mission"
              heading="Built for Golf Courses, Not Aggregators"
            />
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600">
              GolfBack exists for one reason: to help golf courses maximize
              revenue through direct bookings, smarter pricing, and marketing
              they actually control. We believe every course deserves tools
              purpose-built for their business — not watered-down features bolted
              onto a POS system.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <StatCard value="125+" label="Golf Courses Served" />
            <StatCard value="2020" label="Founded" />
            <StatCard value="Hummelstown, PA" label="Headquarters" />
          </div>
        </Container>
      </section>

      {/* Why We Started */}
      <section className="bg-brand-navy py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              label="Our Story"
              heading="Why We Started GolfBack"
              dark
            />
            <div className="space-y-6 text-lg leading-relaxed text-neutral-300">
              <p>
                For years, golf courses have been handing over their most
                valuable assets — their customers and their revenue — to
                third-party aggregators. Barter agreements drain tee times.
                Marketplace listings train golfers to shop on price. And the data
                from every transaction? It belongs to someone else.
              </p>
              <p>
                We started GolfBack because we saw an industry being
                systematically disintermediated. Courses were paying for
                convenience with their margins, their brand, and their ability to
                build direct relationships with golfers.
              </p>
              <p>
                The tools courses needed — dynamic pricing, conversion-optimized
                booking, real marketing automation — either didn&apos;t exist or
                were locked inside POS platforms that treated them as
                afterthoughts. So we built them from the ground up, specifically
                for golf.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Leadership"
            heading="The Team Behind GolfBack"
          />
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {team.map((member) => (
              <Card key={member.name} hover>
                <h3 className="text-xl font-bold text-neutral-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-brand-cyan">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="Ready to Take Back Control?"
        subtitle="Join 125+ golf courses already growing their revenue with GolfBack."
        primaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
        secondaryCta={{ label: "Why Choose Us?", href: "/why-choose-us" }}
        variant="cyan"
      />
    </>
  );
}
