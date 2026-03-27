"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import clsx from "clsx";
import { navItems, type NavItem } from "@/lib/data/navigation";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-0.5">
      <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
        <span className="text-white">GOLF</span>
        <span className="text-brand-cyan">BACK</span>
      </span>
      {/* Circular "back" arrow icon */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
        className="text-brand-cyan"
      >
        <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 7L9 10L12 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

function DropdownMenu({
  item,
  isOpen,
  onOpen,
  onClose,
  closeTimeoutRef,
}: {
  item: NavItem & { children: NonNullable<NavItem["children"]> };
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  closeTimeoutRef: React.RefObject<NodeJS.Timeout | null>;
}) {
  const handleEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    onOpen();
  };

  const handleLeave = () => {
    closeTimeoutRef.current = setTimeout(onClose, 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="flex items-center gap-1 text-sm font-medium text-neutral-300 transition-colors hover:text-white"
        onClick={() => (isOpen ? onClose() : onOpen())}
      >
        {item.label}
        <ChevronDown
          size={14}
          className={clsx(
            "transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 top-full z-50 pt-3 -translate-x-1/2">
          <div className="w-72 rounded-xl border border-brand-mid bg-brand-dark/95 p-2 shadow-2xl backdrop-blur-lg">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClose}
                className="block rounded-lg px-4 py-3 transition-colors hover:bg-brand-mid/50"
              >
                <span className="block text-sm font-semibold text-white">
                  {child.label}
                </span>
                <span className="block text-xs text-neutral-400">
                  {child.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <nav
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-brand-mid/50 bg-brand-navy/95 backdrop-blur-lg"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center px-4 py-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop nav + CTAs — right-aligned together */}
          <div className="ml-auto hidden items-center gap-8 lg:flex">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu
                  key={item.label}
                  item={item as NavItem & { children: NonNullable<NavItem["children"]> }}
                  isOpen={openDropdown === item.label}
                  onOpen={() => setOpenDropdown(item.label)}
                  onClose={() => setOpenDropdown(null)}
                  closeTimeoutRef={closeTimeoutRef}
                />
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              )
            )}

            {/* CTAs */}
            <div className="flex items-center gap-3 border-l border-brand-mid/50 pl-6">
              <Button variant="secondary" size="sm" href="/why-choose-us">
                GolfBack Difference
              </Button>
              <Button variant="primary" size="sm" href="/schedule-demo">
                Get a Demo
              </Button>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="ml-auto text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
