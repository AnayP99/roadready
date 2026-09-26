'use client';

import React from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Checkbox } from '@/components/ui/Checkbox';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { RotateCcw, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ChecklistItem {
  id: string;
  name: string;
  description?: string;
  required?: boolean;
}

export interface ChecklistProps {
  storageKey: string;
  items: ChecklistItem[];
  title?: string;
  className?: string;
}

export function Checklist({ storageKey, items, title, className }: ChecklistProps) {
  const [checkedIds, setCheckedIds] = useLocalStorage<string[]>(storageKey, []);

  const toggleItem = (id: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedIds([...checkedIds, id]);
    } else {
      setCheckedIds(checkedIds.filter((item) => item !== id));
    }
  };

  const handleReset = () => {
    setCheckedIds([]);
  };

  const completedCount = items.filter((item) => checkedIds.includes(item.id)).length;
  const progressPercent = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;
  const allCompleted = items.length > 0 && completedCount === items.length;

  return (
    <div className={cn('bg-white rounded-2xl border border-navy-100 p-5 sm:p-6 shadow-sm', className)}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          {title && <h3 className="text-base sm:text-lg font-bold font-display text-navy-950">{title}</h3>}
          <p className="text-xs text-navy-500 mt-0.5">
            {completedCount} of {items.length} items checked ({progressPercent}%)
          </p>
        </div>

        <div className="flex items-center gap-2">
          {allCompleted && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-success-700 bg-success-50 px-2.5 py-1 rounded-full border border-success-200">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Ready!
            </span>
          )}
          {checkedIds.length > 0 && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-xs text-navy-500 hover:text-danger-600 transition-colors px-2 py-1 rounded-lg hover:bg-navy-50"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      <div className="mb-5">
        <ProgressBar
          value={completedCount}
          max={items.length}
          variant={allCompleted ? 'success' : 'brand'}
          size="md"
        />
      </div>

      <div className="space-y-3.5 divide-y divide-navy-50">
        {items.map((item) => {
          const isChecked = checkedIds.includes(item.id);

          return (
            <div key={item.id} className="pt-3.5 first:pt-0">
              <Checkbox
                id={`check-${item.id}`}
                checked={isChecked}
                onChange={(checked) => toggleItem(item.id, checked)}
                label={
                  <span className="flex items-center gap-1.5">
                    <span>{item.name}</span>
                    {item.required && (
                      <span className="text-[10px] text-danger-600 bg-danger-50 border border-danger-200 px-1.5 py-0.2 rounded font-bold">
                        Required
                      </span>
                    )}
                  </span>
                }
                description={item.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
