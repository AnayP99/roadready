import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, helperText, error, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-navy-800 mb-1.5">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-3.5 py-2.5 bg-white border border-navy-200 rounded-xl text-navy-900 placeholder:text-navy-400 text-sm transition-colors duration-150',
            'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500',
            error && 'border-danger-500 focus:ring-danger-500 focus:border-danger-500',
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-danger-600 mt-1">{error}</p>}
        {helperText && !error && <p className="text-xs text-navy-500 mt-1">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
