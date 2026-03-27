import type { Metadata } from "next";
import HeroSplit from "@/components/sections/HeroSplit";
import FeatureGrid from "@/components/sections/FeatureGrid";
import FeatureAlternating from "@/components/sections/FeatureAlternating";
import ComparisonSection from "@/components/sections/ComparisonSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CtaBanner from "@/components/sections/CtaBanner";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Custom Website Design | GolfBack",
  description:
    "Custom-designed, mobile-optimized golf course websites with built-in booking, SEO, lead capture, and a drag-and-drop editor your staff can manage.",
};

const designFeatures = [
  {
    icon: "smartphone",
    title: "Mobile-Optimized",
    description:
      "Every page is built mobile-first. Over 60% of golf bookings start on a phone — your site needs to convert on every screen.",
  },
  {
    icon: "zap",
    title: "Lightning-Fast",
    description:
      "Performance-optimized hosting and code ensure your pages load in under two seconds, reducing bounce rates.",
  },
  {
    icon: "search",
    title: "SEO-Optimized",
    description:
      "Built-in technical SEO, structured data, and local search optimization help golfers find your course on Google.",
  },
  {
    icon: "target",
    title: "Lead Generation",
    description:
      "Embedded forms, pop-ups, and newsletter signups capture visitor information before they leave your site.",
  },
  {
    icon: "calendar",
    title: "Event Calendars",
    description:
      "Display tournaments, leagues, and special events with an integrated calendar that syncs with your tee sheet.",
  },
  {
    icon: "shield",
    title: "SSL Secure",
    description:
      "Every site includes SSL encryption, ensuring golfer data is protected and your site ranks higher in search results.",
  },
];

// ─── Website Showcase Hero Mockup ─────────────────────────────────────────────
const websiteShowcaseMockup = (
  <div className="device-showcase-wrap">
    <div className="device-scene">
    {/* Desktop browser — behind */}
    <div className="device-desktop-frame">
      {/* Browser chrome */}
      <div className="device-browser-chrome">
        <div className="device-browser-dots">
          <div className="device-dot device-dot-red" />
          <div className="device-dot device-dot-yellow" />
          <div className="device-dot device-dot-green" />
        </div>
        <div className="device-browser-bar">
          <span className="device-browser-url">prairiehighlands.com</span>
        </div>
      </div>
      {/* Screen */}
      <div className="device-desktop-screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/screenshots/prairie-highlands-desktop.jpg"
          alt="Prairie Highlands Golf Club desktop website"
          className="device-desktop-img"
        />
      </div>
    </div>

    {/* Phone — in front, offset */}
    <div className="device-phone-frame">
      <div className="relative overflow-hidden rounded-[28px] border-[7px] border-neutral-800 bg-neutral-900 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
        {/* Side buttons — positioned on the border shell */}
        <div className="absolute -right-[10px] top-20 h-8 w-[3px] rounded-r bg-neutral-700" />
        <div className="absolute -left-[10px] top-16 h-6 w-[3px] rounded-l bg-neutral-700" />
        <div className="absolute -left-[10px] top-28 h-6 w-[3px] rounded-l bg-neutral-700" />
        {/* Notch */}
        <div className="flex justify-center bg-neutral-900 pt-1.5 pb-1">
          <div className="h-3 w-16 rounded-full bg-neutral-800" />
        </div>
        {/* Screen */}
        <div className="device-phone-screen">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/screenshots/prarie-highlands-mobile.png"
            alt="Prairie Highlands Golf Club mobile website"
            className="device-phone-img"
          />
        </div>
        {/* Home indicator */}
        <div className="flex justify-center bg-white py-1.5">
          <div className="h-1 w-12 rounded-full bg-neutral-300" />
        </div>
      </div>
    </div>

    {/* Glow */}
    <div className="device-glow" />
    </div>{/* end device-scene */}
  </div>
);

// ─── Drag-and-Drop Editor Mockup ──────────────────────────────────────────────
const dragDropMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-neutral-600">Page Builder — Homepage</span>
        <div className="flex gap-1.5">
          <span className="rounded bg-neutral-100 px-2 py-0.5 text-[8px] text-neutral-400">Preview</span>
          <span className="rounded bg-brand-cyan px-2 py-0.5 text-[8px] font-semibold text-white">Publish</span>
        </div>
      </div>
    </div>
    <div className="flex">
      {/* Block palette */}
      <div className="w-28 shrink-0 border-r border-neutral-100 p-2.5">
        <p className="mb-2 text-[7px] uppercase tracking-wider text-neutral-500">Blocks</p>
        {["Hero Banner","Text + Image","Tee Time CTA","Testimonial","Event List","Contact Form"].map((block) => (
          <div key={block} className="mb-1 rounded border border-neutral-100 bg-neutral-50 px-2 py-1.5 text-[8px] text-neutral-400 cursor-default">
            {block}
          </div>
        ))}
      </div>
      {/* Canvas */}
      <div className="flex-1 p-3 space-y-2">
        <div className="rounded border-2 border-dashed border-brand-cyan/40 bg-brand-cyan/5 p-2 text-center">
          <p className="text-[8px] text-brand-cyan font-medium">Hero Banner</p>
          <p className="text-[7px] text-neutral-500">Drag to reorder</p>
        </div>
        <div className="rounded border border-neutral-100 bg-neutral-50 p-2">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-[8px] text-neutral-600 font-medium">Tee Time CTA</p>
            <span className="text-[7px] text-neutral-500">✎ Edit</span>
          </div>
          <div className="h-2 w-3/4 rounded bg-neutral-200" />
        </div>
        <div className="rounded border border-neutral-100 bg-neutral-50 p-2">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-[8px] text-neutral-600 font-medium">Testimonials</p>
            <span className="text-[7px] text-neutral-500">✎ Edit</span>
          </div>
          <div className="h-2 w-1/2 rounded bg-neutral-200" />
        </div>
        <div className="flex items-center justify-center rounded border border-dashed border-neutral-200 py-2">
          <span className="text-[8px] text-neutral-600">+ Add Block</span>
        </div>
      </div>
    </div>
  </div>
);

// ─── Brand Customization Mockup ───────────────────────────────────────────────
const brandMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <span className="text-[10px] font-semibold text-neutral-600">Brand Settings</span>
    </div>
    <div className="p-4 space-y-3">
      {/* Color palette */}
      <div>
        <p className="mb-1.5 text-[8px] uppercase tracking-wider text-neutral-500">Color Palette</p>
        <div className="grid grid-cols-4 gap-1.5">
          {[
            { label: "Primary",   color: "bg-[#1a6b3c]" },
            { label: "Secondary", color: "bg-[#c8a84b]" },
            { label: "Accent",    color: "bg-[#2c3e50]" },
            { label: "Light",     color: "bg-neutral-100 border border-neutral-300" },
          ].map((c) => (
            <div key={c.label} className="text-center">
              <div className={`mb-0.5 h-6 w-full rounded ${c.color}`} />
              <p className="text-[7px] text-neutral-500">{c.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Typography */}
      <div>
        <p className="mb-1.5 text-[8px] uppercase tracking-wider text-neutral-500">Typography</p>
        <div className="space-y-1">
          {[
            { role: "Heading", font: "Playfair Display", size: "36px" },
            { role: "Body",    font: "Inter",            size: "16px" },
            { role: "Labels",  font: "Inter Medium",     size: "11px" },
          ].map((t) => (
            <div key={t.role} className="flex items-center gap-2 rounded border border-neutral-100 bg-neutral-50 px-2.5 py-1.5">
              <span className="w-12 shrink-0 text-[8px] text-neutral-500">{t.role}</span>
              <span className="flex-1 text-[9px] font-medium text-neutral-800">{t.font}</span>
              <span className="text-[8px] text-neutral-500">{t.size}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Logo */}
      <div>
        <p className="mb-1.5 text-[8px] uppercase tracking-wider text-neutral-500">Logo</p>
        <div className="flex items-center gap-3 rounded border border-neutral-100 bg-neutral-50 px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-[#1a6b3c]">
            <span className="text-[10px] font-bold text-white">PH</span>
          </div>
          <div>
            <p className="text-[9px] font-semibold text-neutral-800">painted-hills-logo.svg</p>
            <p className="text-[8px] text-neutral-500">SVG · 4.2 KB</p>
          </div>
          <span className="ml-auto text-[8px] text-brand-cyan">Replace</span>
        </div>
      </div>
    </div>
  </div>
);

// ─── Blog Management Mockup ───────────────────────────────────────────────────
const blogMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-neutral-600">Blog & News</span>
        <span className="rounded bg-brand-cyan px-2 py-0.5 text-[8px] font-semibold text-white">+ New Post</span>
      </div>
    </div>
    <div className="p-4 space-y-2">
      {[
        { title: "Spring League Registration Now Open",      date: "Mar 20", status: "Published", tag: "Events"   },
        { title: "Course Improvements: New Cart Paths Ready", date: "Mar 15", status: "Published", tag: "Updates"  },
        { title: "Junior Golf Camp — Summer 2026 Preview",   date: "Mar 10", status: "Published", tag: "Programs" },
        { title: "How to Play Our Signature Par-5 Hole 14",  date: "Draft",  status: "Draft",     tag: "Tips"     },
      ].map((post) => (
        <div key={post.title} className="flex items-start gap-2.5 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2.5">
          <div className="mt-0.5 h-7 w-7 shrink-0 rounded bg-neutral-200 flex items-center justify-center">
            <span className="text-[9px] text-neutral-400">📝</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-[9px] font-semibold text-neutral-800">{post.title}</p>
            <div className="mt-0.5 flex items-center gap-1.5">
              <span className="text-[7px] text-neutral-500">{post.date}</span>
              <span className="text-[7px] text-neutral-600">·</span>
              <span className="text-[7px] text-neutral-500">{post.tag}</span>
            </div>
          </div>
          <span className={`shrink-0 rounded px-1.5 py-0.5 text-[7px] font-medium ${
            post.status === "Published"
              ? "bg-brand-green/15 text-brand-green"
              : "bg-brand-amber/15 text-brand-amber"
          }`}>{post.status}</span>
        </div>
      ))}
      <div className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2">
        <span className="text-[8px] text-neutral-500">SEO Score: </span>
        <div className="flex-1 h-1 rounded-full bg-neutral-200 overflow-hidden">
          <div className="h-full w-[82%] rounded-full bg-brand-green" />
        </div>
        <span className="text-[8px] font-medium text-brand-green">82 / 100</span>
      </div>
    </div>
  </div>
);

// ─── Social Widgets Mockup ────────────────────────────────────────────────────
const socialMockup = (
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
    <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <span className="text-[10px] font-semibold text-neutral-600">Social & Reviews</span>
    </div>
    <div className="p-4 space-y-3">
      {/* Google reviews */}
      <div>
        <p className="mb-1.5 text-[8px] uppercase tracking-wider text-neutral-500">Google Reviews Widget</p>
        <div className="rounded-lg border border-neutral-100 bg-neutral-50 p-2.5">
          <div className="mb-1.5 flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[7px] font-bold text-white">G</div>
            <span className="text-[9px] font-semibold text-neutral-800">4.8</span>
            <span className="text-[9px] text-brand-amber">★★★★★</span>
            <span className="text-[8px] text-neutral-500">· 214 reviews</span>
          </div>
          {["Great course, great staff.", "Best twilight rates in the area.", "Conditions are always immaculate."].map((r) => (
            <p key={r} className="mb-0.5 truncate text-[8px] text-neutral-400">"{r}"</p>
          ))}
        </div>
      </div>
      {/* Instagram grid */}
      <div>
        <p className="mb-1.5 text-[8px] uppercase tracking-wider text-neutral-500">Instagram Gallery</p>
        <div className="grid grid-cols-4 gap-1">
          {[
            "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=120&h=120&fit=crop",
            "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=120&h=120&fit=crop",
            "https://images.unsplash.com/photo-1592919505780-303950717480?w=120&h=120&fit=crop",
            "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=120&h=120&fit=crop",
            "https://images.unsplash.com/photo-1500932334442-8761ee4810a7?w=120&h=120&fit=crop",
          ].map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={src} alt="Golf course Instagram photo" className="aspect-square w-full rounded object-cover" />
          ))}
        </div>
      </div>
      {/* Share buttons */}
      <div>
        <p className="mb-1.5 text-[8px] uppercase tracking-wider text-neutral-500">Share On:</p>
        <div className="flex gap-1.5">
          {[
            { label: "Facebook", color: "bg-blue-600" },
            { label: "Instagram", color: "bg-pink-600" },
            { label: "Twitter/X", color: "bg-neutral-700" },
          ].map((s) => (
            <div key={s.label} className={`flex-1 rounded ${s.color} px-1.5 py-1 text-center text-[7px] font-medium text-white`}>
              {s.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const managementTools = [
  {
    label: "Content Editor",
    title: "Drag-and-Drop Page Builder",
    description:
      "Update pages, add promotions, and publish content without touching code. Your staff can manage the site with a visual editor.",
    imageContent: dragDropMockup,
    bullets: [
      "Visual page builder with live preview",
      "Pre-built content blocks and layouts",
      "Image library with automatic optimization",
      "Scheduled publishing for promotions",
    ],
  },
  {
    label: "Branding",
    title: "Custom Branding That Matches Your Course",
    description:
      "Your website reflects your course identity — custom colors, typography, photography, and layout tailored to your brand.",
    imageContent: brandMockup,
    bullets: [
      "Custom color palette and typography",
      "Professional photography integration",
      "Logo and brand asset management",
      "Consistent styling across all pages",
    ],
  },
  {
    label: "Blog & News",
    title: "Keep Golfers Engaged Between Rounds",
    description:
      "Publish course updates, tournament results, and seasonal promotions on a built-in blog that feeds your SEO strategy.",
    imageContent: blogMockup,
    bullets: [
      "Built-in blog with category tagging",
      "SEO-optimized post templates",
      "Social sharing integration",
      "Email newsletter content sync",
    ],
  },
  {
    label: "Social Integration",
    title: "Connect Your Social Channels",
    description:
      "Display social feeds, share buttons, and review widgets that build trust and drive engagement from your website.",
    imageContent: socialMockup,
    bullets: [
      "Social media feed widgets",
      "One-click sharing on posts and promotions",
      "Google Reviews integration",
      "Instagram gallery embedding",
    ],
  },
];

const comparisonRows = [
  { feature: "Custom design for your brand", golfback: true, competitor: false },
  { feature: "Drag-and-drop content editor", golfback: true, competitor: true },
  { feature: "Built-in booking engine integration", golfback: true, competitor: false },
  { feature: "Local SEO and structured data", golfback: true, competitor: false },
  { feature: "Lead capture forms and pop-ups", golfback: true, competitor: false },
  { feature: "Mobile-first responsive design", golfback: true, competitor: true },
  { feature: "Performance-optimized hosting", golfback: true, competitor: false },
  { feature: "Event calendar integration", golfback: true, competitor: false },
];

export default function CustomWebsiteDesignPage() {
  return (
    <>
      <HeroSplit
        label="Custom Website Design"
        heading="Your Website Is Your Most Powerful Marketing Tool."
        subtitle="GolfBack designs and builds high-performance golf course websites that convert visitors into bookers — with built-in SEO, lead capture, and a drag-and-drop editor your team can manage."
        primaryCta={{ label: "See Our Portfolio", href: "/contact" }}
        secondaryCta={{ label: "Schedule a Demo", href: "/schedule-demo" }}
      >
        {websiteShowcaseMockup}
      </HeroSplit>

      <FeatureGrid
        label="Built for Golf"
        heading="Every Feature a Golf Course Website Needs"
        subtitle="Fast, secure, mobile-optimized, and designed to turn traffic into tee times."
        features={designFeatures}
        columns={3}
      />

      <FeatureAlternating features={managementTools} dark />

      <TestimonialSection
        label="Client Feedback"
        heading="What Course Operators Are Saying"
        testimonials={testimonials}
        carousel
      />

      <ComparisonSection
        label="GolfBack vs. Generic POS Websites"
        heading="Your Course Deserves More Than a Template"
        golfbackLabel="GolfBack"
        competitorLabel="POS Website"
        rows={comparisonRows}
      />

      <CtaBanner
        heading="Your Course Deserves a Better Website"
        subtitle="Get a custom-designed, conversion-optimized website that you actually control."
        primaryCta={{ label: "Request a Consultation", href: "/contact" }}
        secondaryCta={{ label: "View Case Studies", href: "/case-studies" }}
        variant="dark"
      />
    </>
  );
}
