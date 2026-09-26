import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ContentCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string;
  category?: string;
  readTime?: number;
  className?: string;
}

export function ContentCard({
  title,
  description,
  href,
  icon,
  badge,
  category,
  readTime,
  className,
}: ContentCardProps) {
  return (
    <Link href={href} className="group block focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-2xl">
      <Card hoverable className={cn('h-full flex flex-col justify-between p-6', className)}>
        <div>
          <div className="flex items-center justify-between gap-2 mb-4">
            {icon && (
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 group-hover:bg-brand-50 group-hover:text-brand-700 flex items-center justify-center transition-colors">
                {icon}
              </div>
            )}
            <div className="flex items-center gap-1.5 ml-auto">
              {category && <Badge variant="outline">{category}</Badge>}
              {badge && <Badge variant="brand">{badge}</Badge>}
            </div>
          </div>
          <h3 className="text-lg font-bold text-navy-950 font-display mb-2 group-hover:text-brand-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-navy-600 line-clamp-3 leading-relaxed">{description}</p>
        </div>

        <div className="mt-6 pt-4 border-t border-navy-50 flex items-center justify-between text-xs text-navy-500">
          {readTime ? (
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {readTime} min read
            </span>
          ) : (
            <span className="font-medium text-brand-600 group-hover:text-brand-700">Explore Guide</span>
          )}
          <span className="flex items-center gap-1 font-semibold text-navy-700 group-hover:text-brand-600 transition-colors">
            <span>Read more</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Card>
    </Link>
  );
}
