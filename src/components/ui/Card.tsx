import clsx from "clsx";

export default function Card({
  children,
  className,
  variant = "light",
  hover = false,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
  hover?: boolean;
  as?: "div" | "article" | "section" | "li";
}) {
  return (
    <Tag
      className={clsx(
        "rounded-xl p-6 md:p-8",
        variant === "light"
          ? "border border-neutral-200 bg-white shadow-sm"
          : "border border-brand-mid bg-brand-dark",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      {children}
    </Tag>
  );
}
