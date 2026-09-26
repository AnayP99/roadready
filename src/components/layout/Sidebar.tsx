'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ALL_NAV_ITEMS } from '@/data/navigation';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/constants';
import { X, Car, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-navy-950 text-white shadow-2xl flex flex-col z-10 border-r border-navy-800">
        {/* Header */}
        <div className="p-5 border-b border-navy-800 flex items-center justify-between">
          <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-500 text-navy-950 flex items-center justify-center font-bold">
              <Car className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-display font-extrabold text-lg text-white tracking-tight block leading-none">
                {SITE_NAME}
              </span>
              <span className="text-[10px] text-navy-300 font-medium">INDIA DRIVING HUB</span>
            </div>
          </Link>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-navy-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close navigation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          <div className="px-3 py-1.5 text-xs font-semibold text-navy-400 uppercase tracking-wider">
            Explore All Sections
          </div>
          {ALL_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  'flex items-center justify-between p-3 rounded-xl transition-all duration-150 group',
                  isActive
                    ? 'bg-brand-500 text-navy-950 font-semibold shadow-sm'
                    : 'text-navy-200 hover:bg-white/5 hover:text-white'
                )}
              >
                <div>
                  <div className="text-sm font-semibold flex items-center gap-2">
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className={cn('text-[10px] px-1.5 py-0.2 rounded-full font-bold', isActive ? 'bg-navy-950 text-white' : 'bg-brand-500 text-navy-950')}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className={cn('text-xs line-clamp-1 mt-0.5', isActive ? 'text-navy-900/80' : 'text-navy-400')}>
                    {item.description}
                  </div>
                </div>
                <ChevronRight className={cn('w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5', isActive ? 'text-navy-950' : 'text-navy-500')} />
              </Link>
            );
          })}
        </div>

        {/* Footer info in sidebar */}
        <div className="p-4 border-t border-navy-800/80 bg-navy-900/50">
          <p className="text-xs text-navy-400 leading-relaxed">
            {SITE_TAGLINE}
          </p>
        </div>
      </div>
    </div>
  );
}
