import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface CheckboxProps {
  id?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: React.ReactNode;
  description?: string;
  className?: string;
  disabled?: boolean;
}

export function Checkbox({
  id,
  checked,
  onChange,
  label,
  description,
  className,
  disabled = false,
}: CheckboxProps) {
  const checkboxId = id || (typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <label
      htmlFor={checkboxId}
      className={cn(
        'flex items-start gap-3 select-none cursor-pointer',
        disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
        className
      )}
    >
      <div className="relative flex items-center justify-center mt-0.5">
        <input
          type="checkbox"
          id={checkboxId}
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div
          className={cn(
            'w-5 h-5 rounded-md border transition-all duration-150 flex items-center justify-center',
            checked
              ? 'bg-brand-500 border-brand-600 text-navy-950 shadow-sm'
              : 'bg-white border-navy-300 hover:border-brand-400'
          )}
        >
          {checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
        </div>
      </div>
      {(label || description) && (
        <div className="flex-1 text-sm leading-snug">
          {label && <span className={cn('font-medium text-navy-900', checked && 'line-through text-navy-400')}>{label}</span>}
          {description && <p className="text-xs text-navy-500 mt-0.5">{description}</p>}
        </div>
      )}
    </label>
  );
}
