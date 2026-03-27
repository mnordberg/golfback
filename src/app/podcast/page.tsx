import type { Metadata } from "next";
import HeroMinimal from "@/components/sections/HeroMinimal";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "To The Tee Podcast | GolfBack",
  description:
    "The To The Tee Podcast breaks down the golf business, industry trends, and the game itself with expert insights, real conversations, and a fresh perspective.",
};

export default function PodcastPage() {
  return (
    <>
      <HeroMinimal
        label="To The Tee Podcast"
        heading="Golf Business. Industry Trends. Real Conversations."
        subtitle="To The Tee breaks down the business of golf — from revenue strategy and marketing to industry shifts and what's actually working for course operators right now."
        tall
      />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Latest Episode"
            heading="GolfBack Explained — With Graeme McDowell"
            subtitle="U.S. Open Champion Graeme McDowell sits down to discuss what GolfBack is, why it matters to golf course operators, and where the industry is headed."
          />

          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-neutral-200 shadow-lg">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/Po8Yblr9nzE?controls=1&rel=0"
                title="To the Tee Podcast - GolfBack version with U.S Open Champion, Graeme McDowell"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-neutral-500">
            Find all episodes on the{" "}
            <a
              href="https://www.youtube.com/@golfback"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-cyan hover:underline"
            >
              GolfBack YouTube channel
            </a>
          </p>
        </Container>
      </section>

      <section className="bg-brand-navy py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              label="About the Show"
              heading="Built for Golf Course Operators"
              dark
            />
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-300">
              To The Tee is produced by GolfBack and features conversations with course operators,
              industry veterans, and anyone with something real to say about the golf business.
              Every episode is designed to give operators actionable insight — not theoretical advice.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="Want to Be a Guest on To The Tee?"
        subtitle="We talk to course operators, industry veterans, and anyone with something real to say about the golf business."
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
        variant="dark"
      />
    </>
  );
}
