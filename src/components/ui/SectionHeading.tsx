import clsx from "clsx";

export default function SectionHeading({
  label,
  heading,
  subtitle,
  align = "center",
  dark = false,
}: {
  label?: string;
  heading: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={clsx(align === "center" && "text-center", "mb-12 md:mb-16")}>
      {label && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
          {label}
        </p>
      )}
      <h2
        className={clsx(
          "text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-neutral-900"
        )}
      >
        {heading}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 max-w-2xl text-lg",
            dark ? "text-neutral-300" : "text-neutral-500",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
