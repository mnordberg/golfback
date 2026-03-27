import type { Metadata } from "next";
import HeroMinimal from "@/components/sections/HeroMinimal";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Integration Partners | GolfBack",
  description:
    "GolfBack integrates with Club Caddie, Lightspeed, ForeUp, and ProShop Tee Times. Connect your tee sheet, pricing, and marketing tools seamlessly.",
};

const partners = [
  {
    id: "clubcaddie",
    name: "Club Caddie",
    logo: "/logos/clubcaddie.png",
    logoBgClass: "",
    url: "clubcaddie.com",
    description:
      "A comprehensive software suite equipped to handle every need of public and semi-private golf course operations. Club Caddie combines tee sheet management, point-of-sale, and member management in a single platform.",
    features: [
      "Full tee sheet and POS integration",
      "Member management sync",
      "Real-time booking data flow",
      "Automated golfer database population",
    ],
  },
  {
    id: "lightspeed",
    name: "Lightspeed",
    logo: "/logos/lightspeed.svg",
    logoBgClass: "",
    url: "lightspeedhq.com/golf",
    description:
      "Used by over 850 golf courses worldwide and supported by a team of passionate golfers who understand the business. Lightspeed's golf POS is one of the most widely deployed platforms in the industry.",
    features: [
      "Industry-leading POS integration",
      "Transaction-level data sync",
      "Golfer profile enrichment",
      "Revenue tracking and attribution",
    ],
  },
  {
    id: "foreup",
    name: "ForeUp",
    logo: "/logos/foreup.png",
    logoBgClass: "",
    url: "foreupgolf.com",
    description:
      "ForeUp helps you simplify your golf course operations with powerful technology that's easy to learn, use, and customize. Built for operators who want flexibility without complexity.",
    features: [
      "Tee sheet and booking data integration",
      "POS transaction sync",
      "Customer data export to GolfBack",
      "Dynamic pricing trigger support",
    ],
  },
  {
    id: "pstt",
    name: "ProShop Tee Times",
    logo: "/logos/pstt.png",
    logoBgClass: "bg-[#007148]",
    url: "pstt.golf",
    description:
      "A complete, user-friendly, and highly efficient software solution for your course. ProShop Tee Times combines tee sheet management with intuitive controls designed for busy course staff.",
    features: [
      "Tee sheet data sync",
      "Golfer record integration",
      "Booking confirmation passthrough",
      "Marketing automation triggers",
    ],
  },
];

export default function IntegrationPartnersPage() {
  return (
    <>
      <HeroMinimal
        label="Integration Partners"
        heading="GolfBack Works With Your Current System"
        subtitle="You don't have to switch your POS to use GolfBack. We integrate directly with the platforms golf courses already rely on — so you get the revenue tools without the disruption."
        tall
      />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Supported Platforms"
            heading="Built to Connect With the Best Golf POS Systems"
            subtitle="GolfBack pulls real-time data from your tee sheet, enriches it with booking and marketing intelligence, and feeds results back — without replacing the system your staff already knows."
          />

          <div className="mt-16 space-y-8">
            {partners.map((partner, i) => (
              <div
                key={partner.id}
                className={`rounded-2xl border border-neutral-200 p-8 md:p-10 ${
                  i % 2 === 1 ? "bg-neutral-50" : "bg-white"
                }`}
              >

                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                  {/* Left: logo + description */}
                  <div>
                    <div className={`mb-5 inline-flex items-center ${partner.logoBgClass ? `rounded-xl px-6 py-4 shadow-sm ${partner.logoBgClass}` : ""}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                    <p className="mb-1 text-sm text-neutral-400">{partner.url}</p>
                    <p className="mt-3 text-base leading-relaxed text-neutral-600">{partner.description}</p>
                  </div>
                  {/* Right: features */}
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      What the Integration Provides
                    </p>
                    <ul className="space-y-2.5">
                      {partner.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-cyan/15">
                            <span className="text-[9px] font-bold text-brand-teal">✓</span>
                          </span>
                          <span className="text-sm text-neutral-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-navy py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              label="How Integration Works"
              heading="Your Data Flows Automatically"
              dark
            />
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-300">
              Once connected, GolfBack reads tee sheet data, booking history, and transaction records
              from your POS. That data powers dynamic pricing decisions, fills your golfer database,
              and triggers automated marketing campaigns — all without manual exports or data entry.
              Your staff keeps using the system they know. GolfBack adds the intelligence layer on top.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="Don't See Your POS Listed?"
        subtitle="We're adding integration partners regularly. Talk to our team about your current system."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
        variant="dark"
      />
    </>
  );
}
