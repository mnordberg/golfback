export type NavChild = {
  label: string;
  href: string;
  description: string;
};

export type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; children: NavChild[]; href?: never };

export const navItems: NavItem[] = [
  {
    label: "Products",
    children: [
      {
        label: "GRO - Revenue Optimizer",
        href: "/gro",
        description: "Optimize revenue and automate marketing",
      },
      {
        label: "Booking Engine",
        href: "/booking-engine",
        description: "Advanced online tee time booking",
      },
      {
        label: "Marketing Solutions",
        href: "/marketing-solutions",
        description: "Email automation and segmentation",
      },
      {
        label: "Custom Website Design",
        href: "/custom-website-design",
        description: "Golf-specific website design",
      },
      {
        label: "Data Collection",
        href: "/data-collection",
        description: "Accelerated golf data insights",
      },
    ],
  },
  {
    label: "Features",
    children: [
      {
        label: "Reserve with Google",
        href: "/reserve-with-google",
        description: "Send Google searches directly to your tee sheet",
      },
      {
        label: "Dynamic Pricing",
        href: "/dynamic-pricing",
        description: "Real-time rate optimization based on demand",
      },
      {
        label: "Tee Time Lottery",
        href: "/tee-time-lottery",
        description: "Fair, automated high-demand tee time allocation",
      },
      {
        label: "Daily Steals",
        href: "/daily-steals",
        description: "Time-limited offers to fill slow tee times",
      },
      {
        label: "Tee Time Guarantee",
        href: "/tee-time-guarantee",
        description: "No-show protection without deposits",
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        label: "GolfBack Edge",
        href: "/edge",
        description: "Insights and strategies for course operators",
      },
      {
        label: "Case Studies",
        href: "/case-studies",
        description: "Real results from real courses",
      },
      {
        label: "Integration Partners",
        href: "/integration-partners",
        description: "Club Caddie, Lightspeed, ForeUp, and more",
      },
      {
        label: "Taking Our Golf Back",
        href: "/taking-our-golf-back-series",
        description: "Video series on reclaiming direct revenue",
      },
      {
        label: "Barter Calculator",
        href: "/barter-calculator",
        description: "Calculate your true barter cost",
      },
      {
        label: "To The Tee Podcast",
        href: "/podcast",
        description: "Golf business strategy and industry insights",
      },
    ],
  },
  { label: "About", href: "/about" },
];

export const footerLinks = {
  solutions: [
    { label: "GRO - Revenue Optimizer", href: "/gro" },
    { label: "Booking Engine", href: "/booking-engine" },
    { label: "Marketing Solutions", href: "/marketing-solutions" },
    { label: "Custom Website Design", href: "/custom-website-design" },
    { label: "Data Collection", href: "/data-collection" },
    { label: "Reserve with Google", href: "/reserve-with-google" },
    { label: "Dynamic Pricing", href: "/dynamic-pricing" },
    { label: "Tee Time Lottery", href: "/tee-time-lottery" },
    { label: "Daily Steals", href: "/daily-steals" },
    { label: "Tee Time Guarantee", href: "/tee-time-guarantee" },
  ],
  company: [
    { label: "About GolfBack", href: "/about" },
    { label: "Why GolfBack", href: "/why-choose-us" },
    { label: "Integration Partners", href: "/integration-partners" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "GolfBack Edge", href: "/edge" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Taking Our Golf Back", href: "/taking-our-golf-back-series" },
    { label: "Barter Calculator", href: "/barter-calculator" },
    { label: "To The Tee Podcast", href: "/podcast" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Acceptable Use Policy", href: "/acceptable-use-policy" },
  ],
};

// Convenience split for footer columns
export const footerProducts = footerLinks.solutions.slice(0, 5);
export const footerFeatures = footerLinks.solutions.slice(5);
