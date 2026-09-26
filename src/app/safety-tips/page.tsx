'use client';

import React from 'react';
import { SectionHero } from '@/components/shared/SectionHero';
import { Accordion } from '@/components/ui/Accordion';
import { MarkdownRenderer } from '@/components/shared/MarkdownRenderer';
import { SAFETY_TOPICS_DATA } from '@/data/safety-tips';
import { EMERGENCY_NUMBERS } from '@/lib/constants';
import { ShieldCheck, Phone, CheckCircle2, XCircle } from 'lucide-react';

export default function SafetyTipsPage() {
  const accordionItems = SAFETY_TOPICS_DATA.map((topic) => ({
    id: topic.id,
    title: topic.title,
    badge: topic.severity.toUpperCase(),
    content: (
      <div className="space-y-6 pt-2">
        <MarkdownRenderer content={topic.content} />

        {/* Dos and Donts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Do's */}
          <div className="bg-success-50/60 border border-success-200 rounded-xl p-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-success-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-success-600" />
              <span>Safety Do&apos;s</span>
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-success-950">
              {topic.dos.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-success-600 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Don'ts */}
          <div className="bg-danger-50/60 border border-danger-200 rounded-xl p-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-danger-900 flex items-center gap-1.5">
              <XCircle className="w-4 h-4 text-danger-600" />
              <span>Safety Don&apos;ts</span>
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-danger-950">
              {topic.donts.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-danger-600 font-bold">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <div className="space-y-8">
      <SectionHero
        title="Defensive Driving & Road Safety Guide"
        description="Life-saving knowledge for Indian roads. Master defensive space cushioning, monsoon hydroplaning avoidance, night glare control, child seat safety, and road crash emergency procedures."
        badge="Accident Prevention Handbook"
        icon={<ShieldCheck className="w-8 h-8 text-brand-400" />}
      />

      {/* Emergency Helpline Directory */}
      <section className="bg-navy-950 text-white rounded-3xl p-6 sm:p-8 border border-navy-800 shadow-md">
        <div className="flex items-center gap-2 mb-4 text-brand-400 font-display font-bold text-base">
          <Phone className="w-5 h-5" />
          <span>India 24x7 Road Emergency Helplines</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {EMERGENCY_NUMBERS.map((sos, idx) => (
            <a
              key={idx}
              href={`tel:${sos.number}`}
              className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between group"
            >
              <div>
                <span className="text-xs text-navy-300 block">{sos.service}</span>
                <span className="text-[11px] text-navy-400 line-clamp-1">{sos.description}</span>
              </div>
              <span className="text-xl font-black font-display text-brand-400 group-hover:scale-105 transition-transform ml-2">
                {sos.number}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Safety Topics Accordion */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold font-display text-navy-950">
          Essential Safety Protocols
        </h2>
        <Accordion items={accordionItems} defaultOpenId={SAFETY_TOPICS_DATA[0].id} />
      </section>
    </div>
  );
}
