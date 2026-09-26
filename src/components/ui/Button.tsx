import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 select-none active:scale-[0.98]',
          {
            // Variants
            'bg-brand-500 text-navy-950 hover:bg-brand-600 shadow-sm font-semibold': variant === 'primary',
            'bg-navy-900 text-white hover:bg-navy-800 shadow-sm': variant === 'secondary',
            'border-2 border-navy-200 text-navy-800 hover:bg-navy-50 hover:border-navy-300': variant === 'outline',
            'text-navy-700 hover:bg-navy-100 hover:text-navy-900': variant === 'ghost',
            'bg-danger-500 text-white hover:bg-danger-600 shadow-sm': variant === 'danger',
            // Sizes
            'text-xs px-3 py-1.5': size === 'sm',
            'text-sm px-4 py-2.5': size === 'md',
            'text-base px-6 py-3.5': size === 'lg',
            // Width
            'w-full': fullWidth,
            'opacity-50 cursor-not-allowed pointer-events-none': disabled,
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
