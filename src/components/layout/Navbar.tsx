'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MAIN_NAV_ITEMS, MORE_NAV_ITEMS } from '@/data/navigation';
import { SITE_NAME } from '@/lib/constants';
import { Menu, ChevronDown, Car } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  // Close dropdown on route change
  useEffect(() => {
    setMoreDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const isMoreActive = MORE_NAV_ITEMS.some((item) => pathname.startsWith(item.href));

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-navy-950 text-white border-b border-navy-800/80 backdrop-blur shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1">
            <div className="w-9 h-9 rounded-xl bg-brand-500 text-navy-950 flex items-center justify-center font-bold shadow-sm group-hover:scale-105 transition-transform">
              <Car className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg text-white tracking-tight leading-none group-hover:text-brand-400 transition-colors">
                {SITE_NAME}
              </span>
              <span className="text-[10px] text-navy-300 font-medium tracking-wide">INDIA DRIVING HUB</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
                    isActive
                      ? 'text-brand-400 font-semibold bg-white/5'
                      : 'text-navy-200 hover:text-white hover:bg-white/5'
                  )}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-1.5 text-[10px] bg-brand-500 text-navy-950 font-bold px-1.5 py-0.2 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            {/* "More" Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={cn(
                  'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
                  isMoreActive || moreDropdownOpen
                    ? 'text-brand-400 font-semibold bg-white/5'
                    : 'text-navy-200 hover:text-white hover:bg-white/5'
                )}
                aria-expanded={moreDropdownOpen}
              >
                <span>More</span>
                <ChevronDown className={cn('w-4 h-4 transition-transform duration-150', moreDropdownOpen && 'rotate-180')} />
              </button>

              {moreDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setMoreDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-navy-900 border border-navy-700 shadow-xl py-2 z-20 animate-in fade-in zoom-in-95 duration-100">
                    {MORE_NAV_ITEMS.map((item) => {
                      const isActive = pathname.startsWith(item.href);

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            'block px-4 py-2.5 transition-colors',
                            isActive ? 'bg-navy-800 text-brand-400' : 'text-navy-200 hover:bg-navy-800 hover:text-white'
                          )}
                        >
                          <div className="text-sm font-semibold text-white">{item.label}</div>
                          <div className="text-xs text-navy-400 line-clamp-1 mt-0.5">{item.description}</div>
                        </Link>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* Quick CTA on desktop + Mobile Hamburger */}
          <div className="flex items-center gap-2">
            <Link
              href="/mock-test"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold rounded-xl bg-brand-500 hover:bg-brand-600 text-navy-950 shadow-sm transition-all active:scale-95"
            >
              Take Mock Test
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-navy-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Sidebar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
