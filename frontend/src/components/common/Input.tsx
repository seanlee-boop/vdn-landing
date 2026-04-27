import type { InputHTMLAttributes } from 'react';
import { cn } from '../../utils/format';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  labelClassName?: string;
}

export default function Input({ label, error, className, labelClassName, id, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className={cn("text-sm font-medium text-neutral-text", labelClassName)}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'border border-neutral-border rounded-lg p-3 w-full',
          'bg-neutral-surface text-neutral-text placeholder:text-neutral-muted',
          'focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent',
          'transition-all duration-200',
          error && 'border-status-danger focus:ring-status-danger',
          className,
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-status-danger">{error}</p>
      )}
    </div>
  );
}
