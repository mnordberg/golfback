"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/lib/data/navigation";
import Button from "@/components/ui/Button";

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setExpandedItem(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.32, 0, 0.18, 1], duration: 0.35 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-brand-navy"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between px-6 py-5">
                <span className="font-[family-name:var(--font-display)] text-xl font-bold">
                  <span className="text-white">GOLF</span>
                  <span className="text-brand-cyan">BACK</span>
                </span>
                <button
                  onClick={onClose}
                  className="text-neutral-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-4">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-brand-mid/50">
                    {item.children ? (
                      <>
                        <button
                          onClick={() =>
                            setExpandedItem(
                              expandedItem === item.label ? null : item.label
                            )
                          }
                          className="flex w-full items-center justify-between py-4 text-base font-medium text-white"
                        >
                          {item.label}
                          <ChevronDown
                            size={18}
                            className={clsx(
                              "text-neutral-400 transition-transform duration-200",
                              expandedItem === item.label && "rotate-180"
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {expandedItem === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-1 pb-4 pl-4">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={onClose}
                                    className="block rounded-lg px-3 py-2.5 text-sm text-neutral-300 transition-colors hover:bg-brand-mid/50 hover:text-white"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href!}
                        onClick={onClose}
                        className="block py-4 text-base font-medium text-white"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="border-t border-brand-mid/50 p-6">
                <Button
                  variant="primary"
                  size="lg"
                  href="/schedule-demo"
                  className="w-full justify-center"
                >
                  Get a Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
