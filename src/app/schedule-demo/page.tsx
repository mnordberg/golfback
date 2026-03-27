"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Calendar, Clock, User, Mail, Building2, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import clsx from "clsx";

// ─── Types ───────────────────────────────────────────────────────────────────

type Step = "details" | "date" | "confirm";

interface FormData {
  name: string;
  email: string;
  course: string;
  date: Date | null;
  time: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
];

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const UNAVAILABLE_DAYS = [0, 6]; // Sundays & Saturdays

// ─── Step Indicator ──────────────────────────────────────────────────────────

function StepIndicator({ current }: { current: Step }) {
  const steps: { id: Step; label: string }[] = [
    { id: "details", label: "Your Info" },
    { id: "date", label: "Pick a Time" },
    { id: "confirm", label: "Confirm" },
  ];
  const idx = steps.findIndex((s) => s.id === current);

  return (
    <div className="flex items-center justify-center gap-0">
      {steps.map((step, i) => (
        <div key={step.id} className="flex items-center">
          <div className="flex flex-col items-center gap-1.5">
            <div
              className={clsx(
                "flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-all duration-500",
                i < idx
                  ? "bg-brand-cyan text-brand-navy"
                  : i === idx
                  ? "bg-brand-cyan text-brand-navy shadow-[0_0_16px_rgba(0,188,212,0.5)]"
                  : "border border-brand-mid bg-brand-dark text-neutral-500"
              )}
            >
              {i < idx ? <Check size={13} strokeWidth={3} /> : i + 1}
            </div>
            <span
              className={clsx(
                "text-[10px] font-semibold uppercase tracking-widest transition-colors duration-300",
                i <= idx ? "text-brand-cyan" : "text-neutral-600"
              )}
            >
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={clsx(
                "mb-5 h-px w-16 transition-all duration-500 md:w-24",
                i < idx ? "bg-brand-cyan" : "bg-brand-mid"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Calendar ────────────────────────────────────────────────────────────────

function CalendarPicker({
  selected,
  onChange,
}: {
  selected: Date | null;
  onChange: (d: Date) => void;
}) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const canGoPrev = viewYear > today.getFullYear() || viewMonth > today.getMonth();

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={prevMonth}
          disabled={!canGoPrev}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-900 disabled:opacity-30"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="text-sm font-semibold text-neutral-900">
          {MONTHS[viewMonth]} {viewYear}
        </span>
        <button
          onClick={nextMonth}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Day headers */}
      <div className="mb-2 grid grid-cols-7 gap-1">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
            {d}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (day === null) return <div key={`e-${i}`} />;

          const date = new Date(viewYear, viewMonth, day);
          const isWeekend = UNAVAILABLE_DAYS.includes(date.getDay());
          const isPast = date < today;
          const disabled = isWeekend || isPast;
          const isSelected =
            selected &&
            selected.getDate() === day &&
            selected.getMonth() === viewMonth &&
            selected.getFullYear() === viewYear;
          const isToday = date.getTime() === today.getTime();

          return (
            <button
              key={day}
              disabled={disabled}
              onClick={() => onChange(date)}
              className={clsx(
                "flex aspect-square items-center justify-center rounded-lg text-sm font-medium transition-all duration-200",
                disabled
                  ? "cursor-not-allowed text-neutral-300"
                  : isSelected
                  ? "bg-brand-cyan text-brand-navy shadow-[0_0_12px_rgba(0,188,212,0.4)]"
                  : isToday
                  ? "border border-brand-cyan/40 text-brand-cyan hover:bg-brand-cyan hover:text-brand-navy"
                  : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
              )}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Time Slots ──────────────────────────────────────────────────────────────

function TimeSlotPicker({
  selected,
  onChange,
}: {
  selected: string;
  onChange: (t: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {TIME_SLOTS.map((slot) => (
        <button
          key={slot}
          onClick={() => onChange(slot)}
          className={clsx(
            "rounded-lg border px-3 py-2.5 text-sm font-medium transition-all duration-200",
            selected === slot
              ? "border-brand-cyan bg-brand-cyan/10 text-brand-cyan shadow-[0_0_12px_rgba(0,188,212,0.2)]"
              : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-900"
          )}
        >
          {slot}
        </button>
      ))}
    </div>
  );
}

// ─── Input field ─────────────────────────────────────────────────────────────

function Field({
  label,
  icon: Icon,
  ...props
}: {
  label: string;
  icon: React.ElementType;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        {label}
      </label>
      <div className="relative">
        <Icon
          size={15}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
        />
        <input
          {...props}
          className={clsx(
            "w-full rounded-lg border border-neutral-200 bg-white py-3 pl-10 pr-4 text-sm text-neutral-900",
            "placeholder-neutral-400 outline-none",
            "transition-all duration-200",
            "focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan focus:ring-offset-0",
            props.className
          )}
        />
      </div>
    </div>
  );
}

// ─── Confirmation card ────────────────────────────────────────────────────────

function ConfirmRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between border-b border-neutral-200 py-3.5 last:border-0">
      <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{label}</span>
      <span className="text-right text-sm font-medium text-neutral-900">{value}</span>
    </div>
  );
}

// ─── Success screen ───────────────────────────────────────────────────────────

function SuccessScreen({ data }: { data: FormData }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="text-center"
    >
      <div className="mb-6 flex justify-center">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-brand-cyan/10">
          <div className="absolute inset-0 rounded-full border border-brand-cyan/30" />
          <Check size={32} className="text-brand-cyan" strokeWidth={2.5} />
          {/* Ripple */}
          <div className="absolute inset-0 animate-ping rounded-full border border-brand-cyan/20" />
        </div>
      </div>

      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
        You&apos;re booked
      </p>
      <h2 className="mb-3 font-display text-2xl font-bold text-white">
        Demo Confirmed
      </h2>
      <p className="mx-auto mb-8 max-w-sm text-sm text-neutral-400">
        We&apos;ve sent a calendar invite to{" "}
        <span className="text-neutral-700">{data.email}</span>. We&apos;re looking forward to
        showing you what GolfBack can do for {data.course || "your course"}.
      </p>

      <div className="mx-auto mb-8 max-w-xs rounded-xl border border-neutral-200 bg-white p-5 text-left shadow-sm">
        <ConfirmRow label="Name" value={data.name} />
        <ConfirmRow
          label="Date"
          value={
            data.date
              ? data.date.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })
              : ""
          }
        />
        <ConfirmRow label="Time" value={`${data.time} ET`} />
      </div>

      <a
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-brand-cyan transition-colors hover:text-brand-glow"
      >
        Back to home <ArrowRight size={14} />
      </a>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ScheduleDemoPage() {
  const [step, setStep] = useState<Step>("details");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    course: "",
    date: null,
    time: "",
  });

  const detailsValid = form.name.trim() && form.email.trim() && form.email.includes("@");
  const dateValid = form.date !== null && form.time !== "";

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 32 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -32 }),
  };

  const [direction, setDirection] = useState(1);

  const goTo = (next: Step) => {
    const order: Step[] = ["details", "date", "confirm"];
    setDirection(order.indexOf(next) > order.indexOf(step) ? 1 : -1);
    setStep(next);
  };

  return (
    <main className="noise-overlay min-h-screen bg-brand-navy">
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-brand-cyan/5 blur-[120px]" />
        <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-brand-teal/5 blur-[100px]" />
      </div>

      <Container className="relative z-10 py-24 md:py-32">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mx-auto max-w-lg"
            >
              <SuccessScreen data={form} />
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mx-auto max-w-2xl"
            >
              {/* Header */}
              <div className="mb-12 text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                  Schedule a Demo
                </p>
                <h1 className="mb-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  See GolfBack in Action
                </h1>
                <p className="mx-auto max-w-md text-base text-neutral-400">
                  30 minutes. No commitment. We&apos;ll show you exactly how much
                  direct revenue your course could be recapturing.
                </p>
              </div>

              {/* Step indicator */}
              <div className="mb-10">
                <StepIndicator current={step} />
              </div>

              {/* Card */}
              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <AnimatePresence mode="wait" custom={direction}>
                  {step === "details" && (
                    <motion.div
                      key="details"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="p-8 md:p-10"
                    >
                      <h2 className="mb-1 font-display text-lg font-semibold text-neutral-900">
                        About You
                      </h2>
                      <p className="mb-7 text-sm text-neutral-500">
                        Just the basics so we can personalize your demo.
                      </p>

                      <div className="space-y-4">
                        <Field
                          label="Full Name"
                          icon={User}
                          type="text"
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                        <Field
                          label="Work Email"
                          icon={Mail}
                          type="email"
                          placeholder="jane@pinehurst.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                        <Field
                          label="Golf Course Name"
                          icon={Building2}
                          type="text"
                          placeholder="Pinehurst No. 2"
                          value={form.course}
                          onChange={(e) => setForm({ ...form, course: e.target.value })}
                        />
                      </div>

                      <div className="mt-8 flex justify-end">
                        <button
                          disabled={!detailsValid}
                          onClick={() => goTo("date")}
                          className={clsx(
                            "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300",
                            detailsValid
                              ? "bg-brand-cyan text-brand-navy hover:bg-brand-glow hover:shadow-[0_0_24px_rgba(0,244,255,0.3)]"
                              : "cursor-not-allowed bg-neutral-100 text-neutral-400"
                          )}
                        >
                          Choose a Time <ArrowRight size={15} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === "date" && (
                    <motion.div
                      key="date"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="p-8 md:p-10"
                    >
                      <h2 className="mb-1 font-display text-lg font-semibold text-neutral-900">
                        Pick a Date &amp; Time
                      </h2>
                      <p className="mb-7 text-sm text-neutral-500">
                        Choose a date, and we&apos;ll show you available time slots for a 30-minute demo.
                      </p>

                      <div className="space-y-6">
                        {/* Calendar */}
                        <div>
                          <div className="mb-2 flex items-center gap-2">
                            <Calendar size={13} className="text-brand-cyan" />
                            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                              Date
                            </span>
                          </div>
                          <CalendarPicker
                            selected={form.date}
                            onChange={(d) => setForm({ ...form, date: d })}
                          />
                        </div>

                        {/* Time slots — only show after date is picked */}
                        <AnimatePresence>
                          {form.date && (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 8 }}
                              transition={{ duration: 0.25 }}
                            >
                              <div className="mb-2 flex items-center gap-2">
                                <Clock size={13} className="text-brand-cyan" />
                                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                                  Time Slot
                                </span>
                              </div>
                              <div className="text-sm text-neutral-400 mb-2">
                                All times are Eastern.
                              </div>
                              <TimeSlotPicker
                                selected={form.time}
                                onChange={(t) => setForm({ ...form, time: t })}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="mt-8 flex items-center justify-between">
                        <button
                          onClick={() => goTo("details")}
                          className="inline-flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-neutral-700"
                        >
                          <ChevronLeft size={14} /> Back
                        </button>
                        <button
                          disabled={!dateValid}
                          onClick={() => goTo("confirm")}
                          className={clsx(
                            "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300",
                            dateValid
                              ? "bg-brand-cyan text-brand-navy hover:bg-brand-glow hover:shadow-[0_0_24px_rgba(0,244,255,0.3)]"
                              : "cursor-not-allowed bg-neutral-100 text-neutral-400"
                          )}
                        >
                          Review &amp; Confirm <ArrowRight size={15} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === "confirm" && (
                    <motion.div
                      key="confirm"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="p-8 md:p-10"
                    >
                      <h2 className="mb-1 font-display text-lg font-semibold text-neutral-900">
                        Review Your Demo
                      </h2>
                      <p className="mb-7 text-sm text-neutral-500">
                        Everything look right? We&apos;ll send you a calendar invite.
                      </p>

                      <div className="mb-6 rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                        <ConfirmRow label="Name" value={form.name} />
                        <ConfirmRow label="Email" value={form.email} />
                        {form.course && (
                          <ConfirmRow label="Course" value={form.course} />
                        )}
                        <ConfirmRow
                          label="Date"
                          value={
                            form.date
                              ? form.date.toLocaleDateString("en-US", {
                                  weekday: "long",
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                })
                              : ""
                          }
                        />
                        <ConfirmRow label="Time" value={`${form.time} Eastern`} />
                        <ConfirmRow label="Duration" value="30 minutes" />
                      </div>

                      {/* Social proof nudge */}
                      <div className="mb-7 flex items-start gap-3 rounded-xl border border-brand-cyan/20 bg-brand-cyan/5 p-4">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan/20">
                          <Check size={11} className="text-brand-cyan" strokeWidth={3} />
                        </div>
                        <p className="text-xs leading-relaxed text-neutral-600">
                          Courses on GolfBack recover an average of{" "}
                          <span className="font-semibold text-neutral-900">$48,000+</span>{" "}
                          in direct revenue per year. We&apos;ll show you your specific
                          number during the demo.
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => goTo("date")}
                          className="inline-flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-neutral-700"
                        >
                          <ChevronLeft size={14} /> Back
                        </button>
                        <button
                          onClick={handleSubmit}
                          className="inline-flex items-center gap-2 rounded-lg bg-brand-cyan px-7 py-3.5 text-sm font-semibold text-brand-navy transition-all duration-300 hover:bg-brand-glow hover:shadow-[0_0_28px_rgba(0,244,255,0.35)]"
                        >
                          Book My Demo <ArrowRight size={15} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Trust line */}
              <p className="mt-6 text-center text-xs text-neutral-600">
                No credit card required · Cancel anytime · Typically responds within 1 hour
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </main>
  );
}
