import type { Metadata } from "next";
import HeroMinimal from "@/components/sections/HeroMinimal";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "GolfBack Edge | Golf Revenue & Direct Booking Insights",
  description:
    "Stay ahead with GolfBack Edge — insights, strategies, and tools to maximize direct bookings, optimize revenue, and take full control of your golf course operations.",
};

const articles = [
  {
    slug: "golfback-promotes-bryce-voisin-to-ceo-and-brent-miller-to-coo",
    title: "GolfBack Promotes Bryce Voisin to CEO and Brent Miller to COO",
    category: "Company News",
    href: "https://golfbacksolutions.com/golfback-promotes-bryce-voisin-to-ceo-and-brent-miller-to-coo/",
  },
  {
    slug: "from-data-to-dollars",
    title: "From Data to Dollars – How to Turn Golfer Behavior Into Better Pricing Decisions",
    category: "Revenue Strategy",
    href: "https://golfbacksolutions.com/from-data-to-dollars-how-to-turn-golfer-behavior-into-better-pricing-decisions/",
  },
  {
    slug: "when-is-the-best-time-to-market",
    title: "When Is the Best Time to Market Your Golf Course?",
    category: "Marketing",
    href: "https://golfbacksolutions.com/when-is-the-best-time-to-market-your-golf-course/",
  },
  {
    slug: "daily-steals",
    title: "Daily Steals: A Smart Way to Attract Golfers and Drive Revenue",
    category: "Revenue Strategy",
    href: "https://golfbacksolutions.com/daily-steals-a-smart-way-to-attract-golfers-and-drive-revenue/",
  },
  {
    slug: "ultimate-guide-dynamic-pricing",
    title: "The Ultimate Guide to Dynamic Pricing for Golf Courses",
    category: "Dynamic Pricing",
    href: "https://golfbacksolutions.com/the-ultimate-guide-to-dynamic-pricing-for-golf-courses/",
  },
  {
    slug: "golf-course-marketing-guide-2025",
    title: "Golf Course Guide to Marketing in 2025",
    category: "Marketing",
    href: "https://golfbacksolutions.com/golf-course-guide-to-marketing-in-2025/",
  },
  {
    slug: "ultimate-guide-revenue-optimization",
    title: "The Ultimate Guide to Revenue Optimization for Golf Courses",
    category: "Revenue Strategy",
    href: "https://golfbacksolutions.com/the-ultimate-guide-to-revenue-optimization-for-golf-courses/",
  },
  {
    slug: "5-golf-marketing-automations",
    title: "5 Easy Golf Marketing Automations to Increase Sales and Decrease Staff Resources",
    category: "Marketing",
    href: "https://golfbacksolutions.com/5-easy-golf-marketing-automations-to-increase-sales-and-decrease-staff-resources/",
  },
];

const categoryColors: Record<string, string> = {
  "Revenue Strategy": "bg-brand-cyan/10 text-brand-teal",
  "Marketing":        "bg-brand-amber/10 text-brand-amber",
  "Dynamic Pricing":  "bg-brand-green/10 text-brand-green",
  "Company News":     "bg-neutral-100 text-neutral-500",
};

export default function EdgePage() {
  return (
    <>
      <HeroMinimal
        label="News & Articles"
        heading="GolfBack Edge"
        subtitle="Stay ahead of the game with insights, strategies, and tools to maximize direct bookings, optimize revenue, and take full control of your golf course operations."
        tall
      />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Recent Articles"
            heading="What's on the Edge"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <a
                key={article.slug}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-brand-cyan/40 hover:shadow-md"
              >
                <span className={`mb-4 inline-flex self-start rounded-full px-2.5 py-1 text-xs font-medium ${categoryColors[article.category] ?? "bg-neutral-100 text-neutral-500"}`}>
                  {article.category}
                </span>
                <h3 className="flex-1 text-base font-semibold leading-snug text-neutral-900 group-hover:text-brand-teal">
                  {article.title}
                </h3>
                <span className="mt-4 text-sm font-medium text-brand-cyan group-hover:underline">
                  Read article →
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="Ready to Put These Strategies to Work?"
        subtitle="See how GolfBack helps courses implement dynamic pricing, direct booking, and automated marketing."
        primaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
        secondaryCta={{ label: "View Case Studies", href: "/case-studies" }}
        variant="dark"
      />
    </>
  );
}
