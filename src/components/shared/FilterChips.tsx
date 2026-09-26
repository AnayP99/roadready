'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface FilterChipOption {
  id: string;
  label: string;
  count?: number;
}

export interface FilterChipsProps {
  options: FilterChipOption[];
  selectedId: string;
  onChange: (id: string) => void;
  className?: string;
}

export function FilterChips({ options, selectedId, onChange, className }: FilterChipsProps) {
  return (
    <div className={cn('flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar', className)}>
      {options.map((opt) => {
        const isSelected = opt.id === selectedId;

        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={cn(
              'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-150 select-none shrink-0',
              isSelected
                ? 'bg-navy-900 text-white shadow-sm ring-2 ring-navy-900 ring-offset-1 font-semibold'
                : 'bg-white text-navy-700 hover:bg-navy-50 hover:text-navy-950 border border-navy-200'
            )}
          >
            <span>{opt.label}</span>
            {opt.count !== undefined && (
              <span
                className={cn(
                  'text-xs px-1.5 py-0.2 rounded-full font-semibold',
                  isSelected ? 'bg-brand-400 text-navy-950' : 'bg-navy-100 text-navy-600'
                )}
              >
                {opt.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
