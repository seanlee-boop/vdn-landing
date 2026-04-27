import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/format';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  isLoading?: boolean;
}

const variantStyles: Record<string, string> = {
  primary:
    'bg-primary-main text-neutral-text hover:bg-yellow-400 active:bg-yellow-600 shadow-lg shadow-primary-main/20',
  secondary:
    'border-2 border-neutral-text text-neutral-text hover:bg-neutral-bg active:bg-neutral-200',
  ghost:
    'text-neutral-muted hover:text-neutral-text hover:bg-neutral-bg',
};

const sizeStyles: Record<string, string> = {
  sm: 'py-2.5 px-6 text-sm',
  md: 'py-3.5 px-8 text-base',
  lg: 'py-4 px-10 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  isLoading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-bold',
        'transition-all duration-200 ease-in-out cursor-pointer',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {children}
    </button>
  );
}
