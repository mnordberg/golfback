"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

export default function AnimateIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left";
}) {
  const initial =
    direction === "left"
      ? { opacity: 0, x: 48, y: 0 }
      : { opacity: 0, x: 0, y: 20 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
}
