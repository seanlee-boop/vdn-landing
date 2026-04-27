import type { RiskLevel } from '../../types';
import { cn } from '../../utils/format';

interface BadgeProps {
  level: RiskLevel;
  className?: string;
}

const badgeConfig: Record<RiskLevel, { label: string; style: string }> = {
  safe: {
    label: '안전',
    style: 'bg-status-safe/10 text-status-safe border-status-safe/30',
  },
  caution: {
    label: '주의',
    style: 'bg-status-caution/10 text-status-caution border-status-caution/30',
  },
  danger: {
    label: '위험',
    style: 'bg-status-danger/10 text-status-danger border-status-danger/30',
  },
};

export default function Badge({ level, className }: BadgeProps) {
  const config = badgeConfig[level];

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border',
        config.style,
        className,
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {config.label}
    </span>
  );
}
