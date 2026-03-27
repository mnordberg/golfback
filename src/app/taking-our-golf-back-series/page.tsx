import type { Metadata } from "next";
import HeroMinimal from "@/components/sections/HeroMinimal";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Taking Our Golf Back Video Series | GolfBack",
  description:
    "Go behind the scenes to look at the technology and distribution landscape, then and now. The Taking Our Golf Back series explores how courses are reclaiming control of their revenue and customers.",
};

const articles = [
  {
    number: 1,
    title: "Take back your golf #1 – Introduction",
    href: "https://golfbacksolutions.com/taking-back-your-golf-1/",
  },
  {
    number: 2,
    title: "Take back your golf #2 – Barter & today's current marketplace",
    href: "https://golfbacksolutions.com/take-your-golf-back-2/",
  },
  {
    number: 3,
    title: "Take back your golf #3 – Giving away the keys to your golf course inventory",
    href: "https://golfbacksolutions.com/take-back-your-golf-3/",
  },
  {
    number: 4,
    title: "Take back your golf #4 – Is barter agreement language sinking your profits?",
    href: "https://golfbacksolutions.com/take-back-your-golf-4/",
  },
  {
    number: 5,
    title: "Take back your golf #5 – GolfNow is cable. It's time to stream",
    href: "https://golfbacksolutions.com/take-back-your-golf-5/",
  },
  {
    number: 6,
    title: "Take back your golf #6 – GolfNow vs Golf Course – The battle for market share & attention",
    href: "https://golfbacksolutions.com/take-back-your-golf-6/",
  },
];

export default function TakingOurGolfBackSeriesPage() {
  return (
    <>
      <HeroMinimal
        label="Video Series"
        heading="Taking Our Golf Back"
        subtitle="Go behind the scenes to look at the technology and distribution landscape, then and now. How golf courses are reclaiming control of their revenue, their data, and their customer relationships."
        tall
      />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Episode 1"
            heading="Breaking Free from GolfNow: How We Took Back Our Tee Times"
            subtitle="Then &amp; Now Series — the first episode in the Taking Our Golf Back video series."
          />

          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-neutral-200 shadow-lg">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/xRx8sQCb_qw?controls=1&rel=0"
                title="Breaking Free from GolfNow: How We Took Back Our Tee Times | Taking Our Golf Back: Then & Now Series"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Article Series"
            heading="Read the Taking Our Golf Back Articles"
            subtitle="The companion article series goes deeper into the data, the history, and the strategies behind taking back direct control."
          />
          <div className="mx-auto mt-10 max-w-2xl space-y-4">
            {articles.map((article) => (
              <a
                key={article.number}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-brand-cyan/40 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cyan/10 text-sm font-bold text-brand-teal">
                  {article.number}
                </div>
                <span className="flex-1 font-semibold text-neutral-900 group-hover:text-brand-teal">
                  {article.title}
                </span>
                <span className="text-sm font-medium text-brand-cyan group-hover:underline">Read →</span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="Ready to Take Back Your Golf Business?"
        subtitle="Join 125+ courses already using GolfBack to own their revenue, their data, and their customer relationships."
        primaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
        secondaryCta={{ label: "Read the GolfBack Edge", href: "/edge" }}
        variant="dark"
      />
    </>
  );
}
