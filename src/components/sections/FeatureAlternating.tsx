import React from "react";
import { Check } from "lucide-react";
import clsx from "clsx";
import Container from "@/components/ui/Container";

type Feature = {
  label?: string;
  title: string;
  description: string;
  imagePlaceholder?: string;
  imageContent?: React.ReactNode;
  bullets?: string[];
};

export default function FeatureAlternating({
  features,
  dark = false,
}: {
  features: Feature[];
  dark?: boolean;
}) {
  return (
    <section className={clsx("py-20 md:py-28", dark ? "bg-brand-navy" : "bg-white")}>
      <Container>
        <div className="space-y-20 md:space-y-28">
          {features.map((feature, i) => {
            const imageFirst = i % 2 === 0;
            return (
              <div
                key={feature.title}
                className="grid items-center gap-12 lg:grid-cols-2"
              >
                {/* Image placeholder */}
                <div
                  className={clsx(
                    "order-1",
                    imageFirst ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  {feature.imageContent ? (
                    feature.imageContent
                  ) : (
                    <div
                      className={clsx(
                        "overflow-hidden rounded-2xl border shadow-lg",
                        dark ? "border-brand-mid" : "border-neutral-200"
                      )}
                    >
                      <div
                        className={clsx(
                          "flex aspect-[4/3] items-center justify-center",
                          dark
                            ? "bg-gradient-to-br from-brand-mid to-brand-dark"
                            : "bg-gradient-to-br from-neutral-100 to-neutral-50"
                        )}
                      >
                        <p
                          className={clsx(
                            "text-sm font-medium",
                            dark ? "text-neutral-500" : "text-neutral-400"
                          )}
                        >
                          {feature.imagePlaceholder || "Feature Screenshot"}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Text */}
                <div
                  className={clsx(
                    "order-2",
                    imageFirst ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  {feature.label && (
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                      {feature.label}
                    </p>
                  )}
                  <h3
                    className={clsx(
                      "mb-4 text-2xl font-bold tracking-tight md:text-3xl",
                      dark ? "text-white" : "text-neutral-900"
                    )}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={clsx(
                      "mb-6 text-base leading-relaxed",
                      dark ? "text-neutral-300" : "text-neutral-500"
                    )}
                  >
                    {feature.description}
                  </p>
                  {feature.bullets && (
                    <ul className="space-y-3">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <Check
                            size={18}
                            className="mt-0.5 shrink-0 text-brand-green"
                          />
                          <span
                            className={clsx(
                              "text-sm",
                              dark ? "text-neutral-300" : "text-neutral-600"
                            )}
                          >
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
