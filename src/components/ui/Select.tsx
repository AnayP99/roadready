import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, helperText, error, id, children, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={selectId} className="block text-sm font-medium text-navy-800 mb-1.5">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              'w-full appearance-none px-3.5 py-2.5 bg-white border border-navy-200 rounded-xl text-navy-900 text-sm transition-colors duration-150 pr-10',
              'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500',
              error && 'border-danger-500 focus:ring-danger-500 focus:border-danger-500',
              className
            )}
            {...props}
          >
            {children}
          </select>
          <ChevronDown className="w-4 h-4 text-navy-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        {error && <p className="text-xs text-danger-600 mt-1">{error}</p>}
        {helperText && !error && <p className="text-xs text-navy-500 mt-1">{helperText}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';
