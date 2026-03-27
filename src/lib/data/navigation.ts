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
    label: "Resources",
    children: [
      {
        label: "Case Studies",
        href: "/case-studies",
        description: "Real results from real courses",
      },
      {
        label: "Barter Calculator",
        href: "/barter-calculator",
        description: "Calculate your true barter cost",
      },
    ],
  },
  { label: "Why GolfBack", href: "/why-choose-us" },
  { label: "About", href: "/about" },
];

export const footerLinks = {
  solutions: [
    { label: "GRO - Revenue Optimizer", href: "/gro" },
    { label: "Booking Engine", href: "/booking-engine" },
    { label: "Marketing Solutions", href: "/marketing-solutions" },
    { label: "Custom Website Design", href: "/custom-website-design" },
    { label: "Data Collection", href: "/data-collection" },
  ],
  company: [
    { label: "About GolfBack", href: "/about" },
    { label: "Why GolfBack", href: "/why-choose-us" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Barter Calculator", href: "/barter-calculator" },
  ],
};
