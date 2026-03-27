"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import clsx from "clsx";

const inputClasses =
  "w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan";

export default function ContactForm({
  dark = false,
}: {
  dark?: boolean;
}) {
  return (
    <section className={clsx("py-20 md:py-28", dark ? "bg-brand-navy" : "bg-white")}>
      <Container>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Golf Course Operators */}
          <div className={clsx(
            "rounded-2xl border p-8 md:p-10",
            dark ? "border-brand-mid bg-brand-dark" : "border-neutral-200 bg-white shadow-sm"
          )}>
            <h3 className={clsx(
              "mb-2 text-xl font-bold",
              dark ? "text-white" : "text-neutral-900"
            )}>
              Golf Course Operators
            </h3>
            <p className={clsx(
              "mb-6 text-sm",
              dark ? "text-neutral-400" : "text-neutral-500"
            )}>
              Have a question or want to learn more about what GolfBack can do for your course?
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className={inputClasses}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className={inputClasses}
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className={inputClasses}
              />
              <input
                type="text"
                placeholder="Golf Course Name"
                className={inputClasses}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className={inputClasses}
              />
              <textarea
                placeholder="Tell us about your goals..."
                rows={4}
                className={inputClasses}
              />
              <Button variant="primary" size="lg" className="w-full justify-center">
                Send Message
              </Button>
            </form>
          </div>

          {/* Golfers */}
          <div className={clsx(
            "rounded-2xl border p-8 md:p-10",
            dark ? "border-brand-mid bg-brand-dark" : "border-neutral-200 bg-white shadow-sm"
          )}>
            <h3 className={clsx(
              "mb-2 text-xl font-bold",
              dark ? "text-white" : "text-neutral-900"
            )}>
              Golfers
            </h3>
            <p className={clsx(
              "mb-6 text-sm",
              dark ? "text-neutral-400" : "text-neutral-500"
            )}>
              GolfBack works directly with golf courses rather than individual golfers. If you need help with a tee time booking, contact the golf course directly.
            </p>
            <div className={clsx(
              "rounded-xl border p-6",
              dark ? "border-brand-mid/50 bg-brand-navy/50" : "border-neutral-100 bg-neutral-50"
            )}>
              <h4 className={clsx(
                "mb-3 text-sm font-semibold",
                dark ? "text-white" : "text-neutral-900"
              )}>
                Need Support?
              </h4>
              <p className={clsx(
                "mb-4 text-sm",
                dark ? "text-neutral-400" : "text-neutral-500"
              )}>
                If you booked a tee time through a GolfBack-powered course and need assistance, contact us.
              </p>
              <p className={clsx(
                "text-lg font-semibold",
                dark ? "text-brand-cyan" : "text-brand-teal"
              )}>
                (888) 817-8107
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
