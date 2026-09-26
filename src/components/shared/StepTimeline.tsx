import React from 'react';
import { ProcessStep } from '@/types/content';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface StepTimelineProps {
  steps: ProcessStep[];
  className?: string;
}

export function StepTimeline({ steps, className }: StepTimelineProps) {
  return (
    <div className={cn('relative space-y-8 before:absolute before:inset-0 before:left-5 before:h-full before:w-0.5 before:bg-navy-100', className)}>
      {steps.map((step) => (
        <div key={step.stepNumber} className="relative flex items-start gap-4 sm:gap-6 group">
          {/* Step Number Circle */}
          <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500 text-navy-950 font-bold font-display text-sm shadow-md ring-4 ring-white">
            {step.stepNumber}
          </div>

          {/* Content Card */}
          <div className="flex-1 rounded-2xl border border-navy-100 bg-white p-5 sm:p-6 shadow-sm">
            <h4 className="text-base sm:text-lg font-bold text-navy-950 font-display mb-2">
              {step.title}
            </h4>
            <p className="text-sm text-navy-600 leading-relaxed mb-3">
              {step.description}
            </p>

            {step.substeps && step.substeps.length > 0 && (
              <ul className="space-y-1.5 mb-3 bg-navy-50/60 p-3 rounded-xl">
                {step.substeps.map((sub, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-navy-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            )}

            {step.tip && (
              <div className="flex items-start gap-2 text-xs sm:text-sm text-navy-700 bg-brand-50/70 border border-brand-200/60 p-3 rounded-xl mt-2">
                <AlertCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <span className="font-medium text-brand-950">Tip: {step.tip}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
