'use client';

import React from 'react';
import { Timer, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface QuizTimerProps {
  timeRemaining: number; // in seconds
  className?: string;
}

export function QuizTimer({ timeRemaining, className }: QuizTimerProps) {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const isLowTime = timeRemaining <= 180; // 3 minutes left
  const isCriticalTime = timeRemaining <= 60; // 1 minute left

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-sm font-bold shadow-sm transition-all',
        {
          'bg-navy-900 text-white border border-navy-700': !isLowTime && !isCriticalTime,
          'bg-brand-50 text-brand-900 border border-brand-300': isLowTime && !isCriticalTime,
          'bg-danger-50 text-danger-700 border border-danger-300 animate-pulse': isCriticalTime,
        },
        className
      )}
    >
      {isCriticalTime ? (
        <AlertTriangle className="w-4 h-4 text-danger-600" />
      ) : (
        <Timer className="w-4 h-4 text-brand-400" />
      )}
      <span>{formattedTime}</span>
    </div>
  );
}
