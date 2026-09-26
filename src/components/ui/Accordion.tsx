'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItemData {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  badge?: string;
}

export interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, defaultOpenId, allowMultiple = false, className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenId ? [defaultOpenId] : []);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white shadow-sm overflow-hidden', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div key={item.id} className="transition-colors">
            <button
              id={`accordion-header-${item.id}`}
              type="button"
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between p-4 md:p-5 text-left font-medium text-navy-900 hover:bg-navy-50/70 transition-colors"
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <div className="flex items-center gap-3 pr-4">
                <span className="text-sm md:text-base font-semibold">{item.title}</span>
                {item.badge && (
                  <span className="text-xs bg-brand-100 text-brand-900 px-2 py-0.5 rounded-full font-medium">
                    {item.badge}
                  </span>
                )}
              </div>
              <ChevronDown
                className={cn('w-4 h-4 text-navy-400 transition-transform duration-200 shrink-0', isOpen && 'rotate-180 text-brand-600')}
              />
            </button>
            {isOpen && <div id={`accordion-content-${item.id}`} role="region" aria-labelledby={`accordion-header-${item.id}`} className="px-4 pb-5 md:px-5 text-sm text-navy-600 border-t border-navy-50 pt-3">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}
