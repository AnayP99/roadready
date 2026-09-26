import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CAR_SYSTEMS_DATA } from '@/data/car-systems';
import { MarkdownRenderer } from '@/components/shared/MarkdownRenderer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Wrench,
  ArrowLeft,
  CheckCircle2,
  Lightbulb,
  ShieldAlert,
  Info,
} from 'lucide-react';

export default async function CarSystemDetailPage({
  params,
}: {
  params: Promise<{ system: string }>;
}) {
  const { system } = await params;
  const carSystem = CAR_SYSTEMS_DATA.find((s) => s.slug === system);

  if (!carSystem) {
    notFound();
  }

  const getImportanceBadge = (importance: string) => {
    switch (importance) {
      case 'critical':
        return <Badge variant="danger" size="sm">Critical Safety</Badge>;
      case 'important':
        return <Badge variant="brand" size="sm">Important</Badge>;
      default:
        return <Badge variant="outline" size="sm">Auxiliary</Badge>;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'high':
        return <Badge variant="danger" size="sm">Immediate Action</Badge>;
      case 'medium':
        return <Badge variant="brand" size="sm">Service Soon</Badge>;
      default:
        return <Badge variant="navy" size="sm">Monitor</Badge>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Top Navigation */}
      <div>
        <Link
          href="/know-your-car"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-500 hover:text-navy-950 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Car Systems</span>
        </Link>

        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg border border-navy-800">
          <Badge variant="brand" size="md" className="mb-3">
            Automotive Anatomy Guide
          </Badge>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-display text-white mb-3">
            {carSystem.name}
          </h1>
          <p className="text-navy-200 text-sm sm:text-base leading-relaxed max-w-2xl">
            {carSystem.shortDescription}
          </p>
        </div>
      </div>

      {/* 1. How It Works (Markdown) */}
      <section className="bg-white rounded-2xl border border-navy-100 p-6 sm:p-8 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-navy-950 flex items-center gap-2">
          <Info className="w-6 h-6 text-brand-600" />
          <span>How It Works (In Plain English)</span>
        </h2>
        <div className="pt-2 border-t border-navy-50">
          <MarkdownRenderer content={carSystem.howItWorks} />
        </div>
      </section>

      {/* 2. Key Components Breakdown */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-navy-950 flex items-center gap-2">
          <Wrench className="w-6 h-6 text-brand-600" />
          <span>Key Components & Internal Parts</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {carSystem.components.map((comp, idx) => (
            <Card key={idx} className="p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-navy-950 font-display text-base">
                    {comp.name}
                  </h3>
                  {getImportanceBadge(comp.importance)}
                </div>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  {comp.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. Warning Signs & Diagnostic Symptoms */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-navy-950 flex items-center gap-2">
          <ShieldAlert className="w-6 h-6 text-danger-600" />
          <span>Warning Signs & Troubleshooting</span>
        </h2>
        <div className="space-y-3">
          {carSystem.warningSigns.map((warn, idx) => (
            <Card key={idx} className="p-5 border-l-4 border-l-danger-500">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="font-bold text-navy-950 font-display text-sm sm:text-base">
                  {warn.sign}
                </h3>
                {getSeverityBadge(warn.severity)}
              </div>
              <div className="text-xs sm:text-sm text-navy-600 space-y-1 mt-1">
                <div>
                  <strong className="text-navy-900">Possible Cause:</strong> {warn.possibleCause}
                </div>
                <div className="text-danger-700 bg-danger-50 p-2.5 rounded-lg border border-danger-200 mt-2 font-medium">
                  <strong>Action Required:</strong> {warn.action}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. Maintenance Best Practices */}
      <section className="bg-white rounded-2xl border border-navy-100 p-6 sm:p-8 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-navy-950 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-success-600" />
          <span>Recommended Maintenance Habits</span>
        </h2>
        <ul className="space-y-2.5 pt-2 border-t border-navy-50">
          {carSystem.maintenanceTips.map((tip, idx) => (
            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-navy-700 bg-navy-50/60 p-3.5 rounded-xl border border-navy-100">
              <CheckCircle2 className="w-4 h-4 text-success-600 shrink-0 mt-0.5" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Common Myths Debunked */}
      {carSystem.commonMyths.length > 0 && (
        <section className="bg-brand-50 border border-brand-200 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold font-display text-brand-950 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-brand-700" />
            <span>Common Automotive Myths Debunked</span>
          </h2>
          <div className="space-y-4 pt-2">
            {carSystem.commonMyths.map((myth, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-brand-200 shadow-sm text-xs sm:text-sm space-y-1.5">
                <div className="font-bold text-danger-700 flex items-center gap-1.5">
                  <span>❌ Myth:</span>
                  <span>&ldquo;{myth.myth}&rdquo;</span>
                </div>
                <div className="text-navy-900 leading-relaxed">
                  <strong className="text-success-700 font-bold">✓ Reality: </strong>
                  {myth.reality}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom Back Button */}
      <div className="pt-4 border-t border-navy-100 flex justify-between items-center">
        <Link href="/know-your-car">
          <Button variant="ghost" size="md" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>All Car Systems</span>
          </Button>
        </Link>
        <Link href="/mock-test">
          <Button variant="primary" size="md">
            Test Your Knowledge
          </Button>
        </Link>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return CAR_SYSTEMS_DATA.map((s) => ({
    system: s.slug,
  }));
}
