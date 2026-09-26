import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

export interface SectionHeroProps {
  title: string;
  description: string;
  badge?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function SectionHero({ title, description, badge, children, icon, className }: SectionHeroProps) {
  return (
    <div
      className={cn(
        'relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-6 sm:p-8 md:p-12 mb-8 md:mb-12 overflow-hidden shadow-lg border border-navy-800',
        className
      )}
    >
      {/* Subtle background glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        {badge && (
          <div className="mb-4">
            <Badge variant="brand" size="md" className="bg-brand-500/20 text-brand-300 border-brand-500/30">
              {badge}
            </Badge>
          </div>
        )}
        <div className="flex items-start gap-4 mb-3">
          {icon && <div className="p-2.5 rounded-xl bg-white/10 text-brand-400 shrink-0 mt-1">{icon}</div>}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
            {title}
          </h1>
        </div>
        <p className="text-navy-200 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-2xl font-sans">
          {description}
        </p>
        {children && <div className="flex flex-wrap items-center gap-3 pt-2">{children}</div>}
      </div>
    </div>
  );
}
