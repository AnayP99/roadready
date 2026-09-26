import React from 'react';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

export interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: string;
  subtext?: string;
  className?: string;
}

export function StatCard({ label, value, icon, trend, subtext, className }: StatCardProps) {
  return (
    <Card className={cn('p-5 sm:p-6', className)}>
      <div className="flex items-center justify-between gap-4 mb-2">
        <span className="text-xs sm:text-sm font-medium text-navy-500">{label}</span>
        {icon && <div className="p-2 rounded-xl bg-navy-50 text-navy-800 shrink-0">{icon}</div>}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-display tracking-tight">
          {value}
        </span>
        {trend && <span className="text-xs font-semibold text-success-600">{trend}</span>}
      </div>
      {subtext && <p className="text-xs text-navy-500 mt-1">{subtext}</p>}
    </Card>
  );
}
