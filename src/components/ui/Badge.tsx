import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'brand' | 'navy' | 'success' | 'danger' | 'outline';
  size?: 'sm' | 'md';
}

export function Badge({ className, variant = 'brand', size = 'sm', children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        {
          'bg-brand-100 text-brand-900 border border-brand-200': variant === 'brand',
          'bg-navy-100 text-navy-800 border border-navy-200': variant === 'navy',
          'bg-success-100 text-success-700 border border-success-200': variant === 'success',
          'bg-danger-100 text-danger-700 border border-danger-200': variant === 'danger',
          'border border-navy-300 text-navy-700 bg-white': variant === 'outline',
          'text-xs px-2.5 py-0.5': size === 'sm',
          'text-sm px-3 py-1': size === 'md',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
