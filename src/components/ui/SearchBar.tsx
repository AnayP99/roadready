'use client';

import React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  onClear?: () => void;
}

export function SearchBar({ value, onChange, placeholder = 'Search...', className, onClear }: SearchBarProps) {
  return (
    <div className={cn('relative w-full', className)}>
      <Search className="w-4 h-4 text-navy-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-9 py-2.5 bg-white border border-navy-200 rounded-xl text-navy-900 placeholder:text-navy-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors shadow-sm"
      />
      {value && (
        <button
          type="button"
          onClick={() => {
            onChange('');
            onClear?.();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-navy-100 text-navy-400 hover:text-navy-600 transition-colors"
          aria-label="Clear search"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
