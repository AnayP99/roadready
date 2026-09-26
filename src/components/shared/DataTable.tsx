'use client';

import React, { useState, useMemo } from 'react';
import { ArrowUpDown, ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
  className?: string;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyExtractor: (item: T) => string;
  defaultSortKey?: string;
  defaultSortOrder?: 'asc' | 'desc';
  emptyMessage?: string;
  className?: string;
}

export function DataTable<T extends object>({
  data,
  columns,
  keyExtractor,
  defaultSortKey,
  defaultSortOrder = 'asc',
  emptyMessage = 'No matching records found',
  className,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | undefined>(defaultSortKey);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>(defaultSortOrder);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedData = useMemo(() => {
    if (!sortKey) return data;

    return [...data].sort((a, b) => {
      const recordA = a as Record<string, unknown>;
      const recordB = b as Record<string, unknown>;
      const valA = recordA[sortKey];
      const valB = recordB[sortKey];

      if (valA === valB) return 0;
      if (valA === null || valA === undefined) return 1;
      if (valB === null || valB === undefined) return -1;

      // Numerical or string comparison
      const cmp =
        typeof valA === 'number' && typeof valB === 'number'
          ? valA - valB
          : String(valA).localeCompare(String(valB));
      return sortOrder === 'asc' ? cmp : -cmp;
    });
  }, [data, sortKey, sortOrder]);

  return (
    <div className={cn('w-full overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm', className)}>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-navy-100 bg-navy-50/75">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    'p-4 font-semibold text-navy-800 text-xs sm:text-sm select-none whitespace-nowrap',
                    col.sortable && 'cursor-pointer hover:bg-navy-100/60 transition-colors',
                    col.className
                  )}
                  onClick={() => col.sortable && handleSort(col.key)}
                >
                  <div className="flex items-center gap-1.5">
                    <span>{col.header}</span>
                    {col.sortable && (
                      <span className="text-navy-400">
                        {sortKey === col.key ? (
                          sortOrder === 'asc' ? (
                            <ChevronUp className="w-3.5 h-3.5 text-brand-600" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 text-brand-600" />
                          )
                        ) : (
                          <ArrowUpDown className="w-3.5 h-3.5 opacity-40 hover:opacity-100" />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-100">
            {sortedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="p-8 text-center text-navy-500">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              sortedData.map((item) => (
                <tr key={keyExtractor(item)} className="hover:bg-navy-50/40 transition-colors">
                  {columns.map((col) => (
                    <td key={col.key} className={cn('p-4 text-navy-700 align-top', col.className)}>
                      {col.render
                        ? col.render(item)
                        : String((item as Record<string, unknown>)[col.key] ?? '')}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
