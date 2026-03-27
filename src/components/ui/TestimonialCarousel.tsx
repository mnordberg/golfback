"use client";

import { useState, useEffect } from "react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  course: string;
};

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="mx-auto h-[293px] max-w-3xl text-center">
      <span className="mb-4 block font-serif text-6xl leading-none text-brand-cyan/20">&ldquo;</span>

      {/* Slide track */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out [transform:translateX(calc(-1*var(--slide-index)*100%))]"
          style={{ "--slide-index": index } as never}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="w-full shrink-0 px-4">
              <blockquote className="mb-6 text-xl leading-relaxed text-neutral-700 italic md:text-2xl">
                {t.quote}
              </blockquote>
              <div className="mb-6">
                <p className="font-semibold text-neutral-900">{t.name}</p>
                <p className="text-sm text-neutral-500">{t.title}, {t.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-colors ${i === index ? "bg-brand-cyan" : "bg-neutral-300"}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
