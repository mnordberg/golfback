import Link from "next/link";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variantClasses = {
  primary:
    "bg-brand-cyan text-brand-navy font-semibold rounded-lg hover:bg-brand-glow hover:shadow-[0_0_24px_rgba(0,244,255,0.3)] transition-all duration-300",
  secondary:
    "border border-brand-cyan text-brand-cyan font-semibold rounded-lg hover:bg-brand-cyan/10 transition-all duration-300",
  ghost:
    "text-white underline-offset-4 hover:underline transition-all duration-300",
};

const arrowSizes = { sm: 14, md: 16, lg: 18 };

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  arrow,
  className,
  onClick,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 cursor-pointer",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          size={arrowSizes[size]}
          className="transition-transform group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clsx(classes, "group")}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={clsx(classes, "group")}>
      {content}
    </button>
  );
}
