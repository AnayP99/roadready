import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { RTO_PROCESSES_DATA } from '@/data/rto-processes';
import { StepTimeline } from '@/components/shared/StepTimeline';
import { Checklist } from '@/components/interactive/Checklist';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  ArrowLeft,
  Clock,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

export default async function RTOProcessDetailPage({
  params,
}: {
  params: Promise<{ process: string }>;
}) {
  const { process } = await params;
  const rtoProcess = RTO_PROCESSES_DATA.find((p) => p.slug === process);

  if (!rtoProcess) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <Link
          href="/rto-guide"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-500 hover:text-navy-950 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All RTO Guides</span>
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg border border-navy-800">
          <Badge variant="brand" size="md" className="mb-3">
            RTO Official Procedure
          </Badge>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-display text-white mb-3">
            {rtoProcess.title}
          </h1>
          <p className="text-navy-200 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
            {rtoProcess.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="flex items-center gap-1 text-brand-400 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
              <Clock className="w-4 h-4" />
              <span><strong>Timeline:</strong> {rtoProcess.timeline}</span>
            </span>

            {rtoProcess.onlinePortalUrl && (
              <a
                href={rtoProcess.onlinePortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-brand-500 hover:bg-brand-600 text-navy-950 rounded-xl font-bold transition-all shadow"
              >
                <span>Launch Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Eligibility */}
      <section className="bg-white rounded-2xl border border-navy-100 p-6 sm:p-8 shadow-sm space-y-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-navy-900 font-display">
          Eligibility Criteria
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {rtoProcess.eligibility.map((el, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-700 bg-navy-50/60 p-3.5 rounded-xl border border-navy-100">
              <CheckCircle2 className="w-4 h-4 text-success-600 shrink-0 mt-0.5" />
              <span>{el}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Checklist & Fees */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <Checklist
            storageKey={`roadready_checklist_${rtoProcess.slug}`}
            items={rtoProcess.documents.map((d, idx) => ({
              id: `${rtoProcess.slug}_doc_${idx}`,
              name: d.name,
              description: d.description,
              required: d.required,
            }))}
            title="Required Documents Checklist"
          />
        </div>

        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6 bg-white border border-navy-100">
            <h3 className="text-base font-bold font-display text-navy-950 mb-3">
              Government Fee Structure
            </h3>
            <div className="divide-y divide-navy-100 text-xs sm:text-sm">
              {rtoProcess.fees.map((fee, idx) => (
                <div key={idx} className="py-2.5 flex justify-between items-center first:pt-0 last:pb-0">
                  <span className="text-navy-700">{fee.item}</span>
                  <span className="font-bold text-navy-950 font-display">{fee.amount}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="bg-brand-50 border border-brand-200 p-5 rounded-2xl space-y-2">
            <h4 className="text-xs font-bold text-brand-950 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-700" />
              <span>Helpful Advice</span>
            </h4>
            <ul className="text-xs text-brand-950 space-y-1.5 list-disc pl-4">
              {rtoProcess.tips.map((tip, idx) => (
                <li key={idx} className="leading-relaxed">{tip}</li>
              ))}
            </ul>
          </div>

          <div className="bg-danger-50 border border-danger-200 p-5 rounded-2xl space-y-2">
            <h4 className="text-xs font-bold text-danger-900 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-danger-600" />
              <span>Common Mistakes</span>
            </h4>
            <ul className="text-xs text-danger-900 space-y-1.5 list-disc pl-4">
              {rtoProcess.commonMistakes.map((m, idx) => (
                <li key={idx} className="leading-relaxed">{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Step by Step Timeline */}
      <section className="bg-white rounded-2xl border border-navy-100 p-6 sm:p-8 shadow-sm">
        <h3 className="text-xl font-bold font-display text-navy-950 mb-6">
          Step-by-Step Procedure
        </h3>
        <StepTimeline steps={rtoProcess.steps} />
      </section>

      {/* Bottom Back Button */}
      <div className="pt-4 border-t border-navy-100 flex justify-between items-center">
        <Link href="/rto-guide">
          <Button variant="ghost" size="md" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>All RTO Guides</span>
          </Button>
        </Link>
        <Link href="/mock-test">
          <Button variant="primary" size="md">
            Practice LL Mock Test
          </Button>
        </Link>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return RTO_PROCESSES_DATA.map((p) => ({
    process: p.slug,
  }));
}
