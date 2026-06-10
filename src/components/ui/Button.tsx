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
  primary: "bg-primary text-on-primary shadow-lift hover:bg-primary-container",
  secondary: "border border-outline-variant bg-surface text-primary hover:border-primary hover:bg-surface-container",
  ghost: "text-primary hover:bg-surface-container",
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
