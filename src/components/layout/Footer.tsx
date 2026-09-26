import React from 'react';
import Link from 'next/link';
import { SITE_NAME, SITE_TAGLINE, EXTERNAL_LINKS } from '@/lib/constants';
import { ALL_NAV_ITEMS } from '@/data/navigation';
import { Car, ExternalLink, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200 border-t border-navy-800/80 pt-12 pb-8 mt-16 sm:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-brand-500 text-navy-950 flex items-center justify-center font-bold">
                <Car className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                {SITE_NAME}
              </span>
            </Link>
            <p className="text-sm text-navy-300 font-medium mb-2">{SITE_TAGLINE}</p>
            <p className="text-xs text-navy-400 leading-relaxed mb-4">
              Your single-destination digital encyclopedia and training simulator for all things driving in India.
            </p>
            <div className="flex items-center gap-2 text-xs text-brand-400 font-medium bg-white/5 p-2.5 rounded-xl border border-white/10">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Aligned with MV Act & Central Motor Vehicle Rules</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider mb-4">
              Learning & Test
            </h4>
            <ul className="space-y-2 text-sm">
              {ALL_NAV_ITEMS.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-navy-300 hover:text-brand-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Ownership & Tools */}
          <div>
            <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider mb-4">
              Car Ownership & Guides
            </h4>
            <ul className="space-y-2 text-sm">
              {ALL_NAV_ITEMS.slice(5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-navy-300 hover:text-brand-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Official Resources & SOS */}
          <div>
            <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider mb-4">
              Official Portals & SOS
            </h4>
            <ul className="space-y-2 text-sm mb-4">
              <li>
                <a
                  href={EXTERNAL_LINKS.SARATHI}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-navy-300 hover:text-brand-400 transition-colors"
                >
                  <span>Sarathi Parivahan (Licenses)</span>
                  <ExternalLink className="w-3 h-3 text-navy-500" />
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.PARIVAHAN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-navy-300 hover:text-brand-400 transition-colors"
                >
                  <span>Vahan Parivahan (RC & Tax)</span>
                  <ExternalLink className="w-3 h-3 text-navy-500" />
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.MORTH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-navy-300 hover:text-brand-400 transition-colors"
                >
                  <span>MoRTH Government Portal</span>
                  <ExternalLink className="w-3 h-3 text-navy-500" />
                </a>
              </li>
            </ul>

            <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-xs">
              <span className="font-bold text-white block mb-1">Emergency Numbers:</span>
              <div className="text-navy-300 space-y-0.5">
                <div>National SOS: <span className="text-brand-400 font-bold">112</span></div>
                <div>Highway Helpline: <span className="text-brand-400 font-bold">1033</span></div>
                <div>Ambulance: <span className="text-brand-400 font-bold">108</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Disclaimer */}
        <div className="pt-8 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="max-w-xl text-[11px] text-navy-400">
            Disclaimer: Content on this platform is for educational and training guidance only. Always refer to your jurisdictional Regional Transport Office (RTO) and the official Gazette of India for formal statutory rules.
          </p>
        </div>
      </div>
    </footer>
  );
}
