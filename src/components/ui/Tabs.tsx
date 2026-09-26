'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface TabItem {
  id: string;
  label: string;
  count?: number;
  icon?: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
  variant?: 'pills' | 'underline';
}

export function Tabs({ tabs, activeTab, onChange, className, variant = 'pills' }: TabsProps) {
  return (
    <div className={cn('flex flex-wrap gap-1.5', className)}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;

        if (variant === 'underline') {
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-all duration-150',
                isActive
                  ? 'border-brand-500 text-brand-700 font-semibold'
                  : 'border-transparent text-navy-600 hover:text-navy-900 hover:border-navy-300'
              )}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span
                  className={cn(
                    'text-xs px-1.5 py-0.5 rounded-full font-semibold',
                    isActive ? 'bg-brand-100 text-brand-900' : 'bg-navy-100 text-navy-600'
                  )}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        }

        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              'flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-150',
              isActive
                ? 'bg-navy-900 text-white shadow-sm font-semibold'
                : 'bg-navy-50 text-navy-700 hover:bg-navy-100 hover:text-navy-900 border border-navy-200/60'
            )}
          >
            {tab.icon}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={cn(
                  'text-xs px-1.5 py-0.2 rounded-full font-semibold',
                  isActive ? 'bg-brand-400 text-navy-950' : 'bg-navy-200 text-navy-700'
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
