import clsx from "clsx";

const variants = {
  cyan: "bg-brand-cyan/10 text-brand-cyan",
  amber: "bg-brand-amber/10 text-brand-amber",
  green: "bg-brand-green/10 text-brand-green",
  dark: "bg-brand-mid text-neutral-300",
};

export default function Badge({
  children,
  variant = "cyan",
}: {
  children: React.ReactNode;
  variant?: keyof typeof variants;
}) {
  return (
    <span
      className={clsx(
        "inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest",
        variants[variant]
      )}
    >
      {children}
    </span>
  );
}
