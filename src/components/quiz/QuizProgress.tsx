import React from 'react';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Badge } from '@/components/ui/Badge';
import { QuizCategory } from '@/types/quiz';

export interface QuizProgressProps {
  currentIndex: number;
  totalQuestions: number;
  category?: QuizCategory;
}

export function QuizProgress({ currentIndex, totalQuestions, category }: QuizProgressProps) {
  const currentNumber = currentIndex + 1;

  const formatCategory = (cat?: QuizCategory) => {
    if (!cat) return '';
    return cat.replace(/-/g, ' ').toUpperCase();
  };

  return (
    <div className="w-full space-y-2 mb-6">
      <div className="flex items-center justify-between text-xs sm:text-sm">
        <span className="font-bold text-navy-900 font-display">
          Question <span className="text-brand-600">{currentNumber}</span> of {totalQuestions}
        </span>
        {category && (
          <Badge variant="outline" size="sm" className="text-[11px] font-semibold text-navy-600">
            {formatCategory(category)}
          </Badge>
        )}
      </div>
      <ProgressBar value={currentNumber} max={totalQuestions} variant="brand" size="md" />
    </div>
  );
}
