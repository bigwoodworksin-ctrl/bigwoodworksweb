import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-bark text-paper shadow-lift hover:bg-ink",
  secondary: "border border-bark/25 bg-paper text-ink hover:border-bark hover:bg-linen",
  ghost: "text-ink hover:bg-bark/10",
};

export function Button({ children, href, type = "button", variant = "primary", className = "", onClick }: ButtonProps) {
  const classes = `focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
