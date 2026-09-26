import React from 'react';
import { cn } from '@/lib/utils';

export interface ProgressBarProps {
  value: number; // current value
  max?: number; // maximum (default 100)
  variant?: 'brand' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  variant = 'brand',
  size = 'md',
  showLabel = false,
  className,
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between text-xs font-medium text-navy-600 mb-1">
          <span>Progress</span>
          <span>{percentage}%</span>
        </div>
      )}
      <div
        className={cn('w-full bg-navy-100 rounded-full overflow-hidden', {
          'h-1.5': size === 'sm',
          'h-2.5': size === 'md',
          'h-4': size === 'lg',
        })}
      >
        <div
          className={cn('h-full transition-all duration-300 rounded-full', {
            'bg-brand-500': variant === 'brand',
            'bg-success-500': variant === 'success',
            'bg-danger-500': variant === 'danger',
          })}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
