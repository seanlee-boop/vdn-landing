import type { ReactNode } from 'react';
import { cn } from '../../utils/format';

interface SectionContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionContainer({
  id,
  children,
  className,
  dark = false,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-24 md:py-32 px-4 sm:px-6 lg:px-8',
        dark ? 'bg-primary-dark text-white' : 'bg-neutral-bg',
        className,
      )}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
