"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

export default function Accordion({
  items,
  dark = false,
}: {
  items: { title: string; content: string }[];
  dark?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className={clsx(
        "divide-y rounded-xl border",
        dark
          ? "divide-brand-mid border-brand-mid"
          : "divide-neutral-200 border-neutral-200"
      )}
    >
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            className={clsx(
              "flex w-full items-center justify-between px-6 py-4 text-left font-semibold transition-colors",
              dark
                ? "text-white hover:text-brand-cyan"
                : "text-neutral-900 hover:text-brand-teal"
            )}
          >
            {item.title}
            <ChevronDown
              size={20}
              className={clsx(
                "shrink-0 transition-transform duration-300",
                openIndex === i && "rotate-180"
              )}
            />
          </button>
          <div
            className={clsx(
              "grid transition-[grid-template-rows] duration-300 ease-in-out",
              openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <div className="overflow-hidden">
              <p
                className={clsx(
                  "px-6 pb-4 text-base leading-relaxed",
                  dark ? "text-neutral-300" : "text-neutral-600"
                )}
              >
                {item.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
