"use client";

import {
  Globe,
  MousePointerClick,
  TrendingUp,
  CreditCard,
  Database,
  Mail,
  Plug,
  ClipboardList,
  Ban,
  DollarSign,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateIn from "@/components/ui/AnimateIn";

const STEP_ICONS: Record<string, LucideIcon> = {
  globe: Globe,
  "mouse-pointer-click": MousePointerClick,
  "trending-up": TrendingUp,
  "credit-card": CreditCard,
  database: Database,
  mail: Mail,
  plug: Plug,
  "clipboard-list": ClipboardList,
  ban: Ban,
  "dollar-sign": DollarSign,
};

type Step = {
  number: number;
  title: string;
  description: string;
  icon: string;
};

export default function ProcessSteps({
  label,
  heading,
  subtitle,
  steps,
}: {
  label?: string;
  heading?: string;
  subtitle?: string;
  steps: Step[];
}) {
  return (
    <section className="bg-brand-navy py-20 md:py-28">
      <Container>
        {heading && (
          <SectionHeading
            label={label}
            heading={heading}
            subtitle={subtitle}
            dark
          />
        )}

        {/* Desktop: horizontal */}
        <div className="hidden lg:block">
          <div className="relative flex items-start justify-between">
            {/* Animated connecting line — one segment per gap, grows step by step */}
            {(() => {
              const STAGGER = 0.6;
              const STEP_DUR = 0.4;
              const SEG_DUR = STAGGER - STEP_DUR;
              const n = steps.length;
              return steps.slice(0, -1).map((_, i) => {
                const leftPct = 5 + (90 / (n - 1)) * i;
                const widthPct = 90 / (n - 1);
                return (
                  <motion.div
                    key={i}
                    className="absolute top-5 h-0.5 origin-left bg-brand-cyan/40"
                    style={{ left: `${leftPct}%`, width: `${widthPct}%` }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: SEG_DUR, delay: i * STAGGER + STEP_DUR + 0.15, ease: "easeOut" }}
                  />
                );
              });
            })()}

            {steps.map((step, i) => {
              const STAGGER = 0.6;
              const STEP_DUR = 0.4;
              const Icon = STEP_ICONS[step.icon] || Globe;
              return (
                <motion.div
                  key={step.number}
                  className="relative flex w-40 flex-col items-center text-center"
                  initial={{ opacity: 0, x: -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: STEP_DUR, delay: i * STAGGER, ease: "easeOut" }}
                >
                  <div className="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-cyan">
                    <Icon size={18} className="text-brand-navy" />
                  </div>
                  <h4 className="mb-1 text-sm font-semibold text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-neutral-400">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden">
          <div className="relative space-y-8 pl-12">
            <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-brand-cyan/20" />
            {steps.map((step, i) => {
              const Icon = STEP_ICONS[step.icon] || Globe;
              return (
                <AnimateIn key={step.number} delay={i * 0.1}>
                  <div className="relative">
                    <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-brand-cyan">
                      <Icon size={18} className="text-brand-navy" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-xs text-neutral-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
