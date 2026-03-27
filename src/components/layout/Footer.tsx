import Link from "next/link";
import Container from "@/components/ui/Container";
import { footerLinks, footerProducts, footerFeatures } from "@/lib/data/navigation";

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-neutral-400 transition-colors hover:text-brand-cyan"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-brand-mid bg-brand-navy">
      <Container className="py-16 md:py-20">
        {/* Top: logo + tagline */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-1">
            <span className="font-[family-name:var(--font-display)] text-xl font-bold">
              <span className="text-white">GOLF</span>
              <span className="text-brand-cyan">BACK</span>
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              className="text-brand-cyan"
            >
              <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="2" />
              <path d="M12 7L9 10L12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="mt-3 max-w-xs text-sm text-neutral-400">
            Golf&apos;s top revenue optimization platform. Take back your
            revenue, customers, and data.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <FooterLinkGroup title="Products" links={footerProducts} />
          <FooterLinkGroup title="Features" links={footerFeatures} />
          <FooterLinkGroup title="Resources" links={footerLinks.resources} />
          <FooterLinkGroup title="Company" links={footerLinks.company} />

          {/* Connect column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Connect
            </h3>
            <div className="space-y-2.5 text-sm text-neutral-400">
              <p>(888) 817-8107</p>
              <p>Hummelstown, PA</p>
            </div>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.linkedin.com/company/golfback/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 transition-colors hover:text-brand-cyan"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
              </a>
              <a
                href="https://www.youtube.com/@GolfBackSolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 transition-colors hover:text-brand-cyan"
                aria-label="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.3-1.9.5-3.8.5-5.8s-.2-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>
              </a>
              <a
                href="https://www.facebook.com/golfbacksolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 transition-colors hover:text-brand-cyan"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"/></svg>
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-brand-mid/50">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-neutral-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} GolfBack Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-neutral-300">
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
