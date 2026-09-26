'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BreadcrumbProps {
  customItems?: { label: string; href?: string }[];
  className?: string;
}

export function Breadcrumb({ customItems, className }: BreadcrumbProps) {
  const pathname = usePathname();

  if (pathname === '/') return null;

  // Generate breadcrumbs from URL if customItems is not provided
  let items = customItems;
  if (!items) {
    const segments = pathname.split('/').filter(Boolean);
    const ACRONYMS = new Set(['rto', 'emi', 'dl', 'll', 'rc', 'idp', 'ev', 'cng', 'abs', 'tco']);
    items = segments.map((seg, idx) => {
      const href = '/' + segments.slice(0, idx + 1).join('/');
      // Format segment name into readable text with acronym handling
      const label = seg
        .replace(/-/g, ' ')
        .replace(/\b\w+/g, (word) =>
          ACRONYMS.has(word.toLowerCase()) ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)
        );
      return { label, href };
    });
  }

  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center text-xs text-navy-500 py-3 mb-4', className)}>
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-brand-600 transition-colors p-1 rounded"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href || `${item.label}-${index}`} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-navy-300 shrink-0" />
              {isLast || !item.href ? (
                <span className="font-semibold text-navy-900 max-w-[200px] truncate" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-brand-600 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
