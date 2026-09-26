'use client';

import React, { useState } from 'react';
import { SectionHero } from '@/components/shared/SectionHero';
import { Tabs } from '@/components/ui/Tabs';
import { Card } from '@/components/ui/Card';
import { StepTimeline } from '@/components/shared/StepTimeline';
import { Checklist } from '@/components/interactive/Checklist';
import { RTO_PROCESSES_DATA } from '@/data/rto-processes';
import { EXTERNAL_LINKS } from '@/lib/constants';
import { FileText, ExternalLink, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function RTOGuidePage() {
  const [activeProcessId, setActiveProcessId] = useState(RTO_PROCESSES_DATA[0].id);

  const currentProcess =
    RTO_PROCESSES_DATA.find((p) => p.id === activeProcessId) || RTO_PROCESSES_DATA[0];

  const tabs = RTO_PROCESSES_DATA.map((p) => ({
    id: p.id,
    label: p.title.replace('Getting a ', '').replace(' (LL)', '').replace(' (DL)', ''),
  }));

  return (
    <div className="space-y-8">
      <SectionHero
        title="Indian RTO Process Guide"
        description="Clear, step-by-step instructions for getting a Learner's License, Permanent Driving License, Renewal, International Driving Permit, and Vehicle Registration without needing an agent."
        badge="Direct Citizen Walkthrough"
        icon={<FileText className="w-8 h-8 text-brand-400" />}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={EXTERNAL_LINKS.SARATHI}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors border border-white/15"
          >
            <span>Sarathi License Portal</span>
            <ExternalLink className="w-3 h-3 text-brand-400" />
          </a>
          <a
            href={EXTERNAL_LINKS.PARIVAHAN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors border border-white/15"
          >
            <span>Vahan Vehicle Portal</span>
            <ExternalLink className="w-3 h-3 text-brand-400" />
          </a>
        </div>
      </SectionHero>

      {/* Process Selection Tabs */}
      <div className="bg-white p-3 sm:p-4 rounded-2xl border border-navy-100 shadow-sm overflow-x-auto">
        <Tabs tabs={tabs} activeTab={activeProcessId} onChange={setActiveProcessId} />
      </div>

      {/* Active Process Details */}
      <div className="space-y-8">
        {/* Overview Header */}
        <div className="bg-white rounded-2xl border border-navy-100 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-navy-100">
            <div>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-1">
                Official Government Procedure
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy-950">
                {currentProcess.title}
              </h2>
              <p className="text-sm text-navy-600 mt-2 max-w-2xl leading-relaxed">
                {currentProcess.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5 text-xs text-navy-500 bg-navy-50 px-3 py-2 rounded-xl border border-navy-200">
                <Clock className="w-4 h-4 text-brand-600 shrink-0" />
                <span><strong>Timeline:</strong> {currentProcess.timeline}</span>
              </div>

              {currentProcess.onlinePortalUrl && (
                <a
                  href={currentProcess.onlinePortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-navy-900 hover:bg-navy-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
                >
                  <span>Open Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div className="pt-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-navy-900 font-display mb-3">
              Eligibility Requirements
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {currentProcess.eligibility.map((el, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-700 bg-navy-50/60 p-3 rounded-xl border border-navy-100">
                  <CheckCircle2 className="w-4 h-4 text-success-600 shrink-0 mt-0.5" />
                  <span>{el}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Two-Column: Interactive Checklist & Fee Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Document Checklist */}
          <div className="lg:col-span-7">
            <Checklist
              storageKey={`roadready_checklist_${currentProcess.slug}`}
              items={currentProcess.documents.map((d, idx) => ({
                id: `${currentProcess.slug}_doc_${idx}`,
                name: d.name,
                description: d.description,
                required: d.required,
              }))}
              title="Required Documents Checklist (Tick to Save Progress)"
            />
          </div>

          {/* Statutory Fee Schedule */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 bg-white border border-navy-100">
              <h3 className="text-base font-bold font-display text-navy-950 mb-3">
                Government Fee Schedule
              </h3>
              <div className="divide-y divide-navy-100 text-xs sm:text-sm">
                {currentProcess.fees.map((fee, idx) => (
                  <div key={idx} className="py-2.5 flex justify-between items-center first:pt-0 last:pb-0">
                    <span className="text-navy-700">{fee.item}</span>
                    <span className="font-bold text-navy-950 font-display">{fee.amount}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Pro Tips Box */}
            <div className="bg-brand-50 border border-brand-200 p-5 rounded-2xl space-y-2">
              <h4 className="text-xs font-bold text-brand-950 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-700" />
                <span>RTO Insider Advice</span>
              </h4>
              <ul className="text-xs text-brand-950 space-y-1.5 list-disc pl-4">
                {currentProcess.tips.map((tip, idx) => (
                  <li key={idx} className="leading-relaxed">{tip}</li>
                ))}
              </ul>
            </div>

            {/* Common Mistakes */}
            <div className="bg-danger-50 border border-danger-200 p-5 rounded-2xl space-y-2">
              <h4 className="text-xs font-bold text-danger-900 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-danger-600" />
                <span>Common Mistakes to Avoid</span>
              </h4>
              <ul className="text-xs text-danger-900 space-y-1.5 list-disc pl-4">
                {currentProcess.commonMistakes.map((mistake, idx) => (
                  <li key={idx} className="leading-relaxed">{mistake}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Step-by-Step Procedure Timeline */}
        <div className="bg-white rounded-2xl border border-navy-100 p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl font-bold font-display text-navy-950 mb-6">
            Step-by-Step Application Timeline
          </h3>
          <StepTimeline steps={currentProcess.steps} />
        </div>
      </div>
    </div>
  );
}
