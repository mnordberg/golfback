import clsx from "clsx";

export default function StatCard({
  value,
  label,
  delta,
  dark = false,
}: {
  value: string;
  label: string;
  delta?: string;
  dark?: boolean;
}) {
  const isPositive = delta && !delta.startsWith("-");

  return (
    <div className="text-center">
      <p
        className={clsx(
          "font-[family-name:var(--font-display)] text-4xl font-bold md:text-5xl",
          dark ? "text-brand-cyan" : "text-brand-navy"
        )}
      >
        {value}
      </p>
      <p
        className={clsx(
          "mt-1 text-sm",
          dark ? "text-neutral-400" : "text-neutral-500"
        )}
      >
        {label}
      </p>
      {delta && (
        <p
          className={clsx(
            "mt-1 text-sm font-semibold",
            isPositive ? "text-brand-green" : "text-red-500"
          )}
        >
          {delta}
        </p>
      )}
    </div>
  );
}
