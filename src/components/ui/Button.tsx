import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  href,
  children,
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-3 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-wood-700 text-wood-50 hover:bg-wood-800 active:bg-wood-900 shadow-sm',
    secondary:
      'bg-parchment text-bark-800 border border-bark-200 hover:bg-wood-100 hover:border-wood-300 active:bg-wood-200',
    ghost:
      'text-bark-700 hover:text-wood-700 hover:bg-wood-50 active:bg-wood-100',
    outline:
      'bg-transparent text-wood-50 border border-wood-200 hover:bg-wood-700 hover:border-wood-400 active:bg-wood-800',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-sm',
    md: 'px-6 py-3 text-base rounded-sm',
    lg: 'px-8 py-4 text-lg rounded-sm',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (Tag === 'a' && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
