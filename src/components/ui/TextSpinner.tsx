"use client";

import { useState, useEffect, useCallback } from "react";

export default function TextSpinner({
  words,
  className,
  typingSpeed = 80,
  erasingSpeed = 40,
  pauseDuration = 1800,
}: {
  words: string[];
  className?: string;
  typingSpeed?: number;
  erasingSpeed?: number;
  pauseDuration?: number;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">("typing");

  const currentWord = words[wordIndex];

  const tick = useCallback(() => {
    if (phase === "typing") {
      if (displayed.length < currentWord.length) {
        setDisplayed(currentWord.slice(0, displayed.length + 1));
      } else {
        setPhase("pausing");
      }
    } else if (phase === "erasing") {
      if (displayed.length > 0) {
        setDisplayed(displayed.slice(0, -1));
      } else {
        setWordIndex((prev) => (prev + 1) % words.length);
        setPhase("typing");
      }
    }
  }, [phase, displayed, currentWord, words.length]);

  useEffect(() => {
    if (phase === "pausing") {
      const timeout = setTimeout(() => setPhase("erasing"), pauseDuration);
      return () => clearTimeout(timeout);
    }

    const speed = phase === "typing" ? typingSpeed : erasingSpeed;
    const timeout = setTimeout(tick, speed);
    return () => clearTimeout(timeout);
  }, [tick, phase, typingSpeed, erasingSpeed, pauseDuration]);

  return (
    <span className={className}>
      <span className="text-brand-cyan">{displayed}</span>
      <span className="animate-[blink_0.8s_step-end_infinite] text-brand-cyan/40 font-light">|</span>
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </span>
  );
}
