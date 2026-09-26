import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DRIVING_TUTORIALS_DATA } from '@/data/driving-tutorials';
import { MarkdownRenderer } from '@/components/shared/MarkdownRenderer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  XCircle,
  Dumbbell,
} from 'lucide-react';

export default async function DrivingTutorialPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tutorial = DRIVING_TUTORIALS_DATA.find((t) => t.slug === slug);

  if (!tutorial) {
    notFound();
  }

  // Find next and prev tutorial for navigation
  const currentIndex = DRIVING_TUTORIALS_DATA.findIndex((t) => t.slug === slug);
  const prevTutorial = currentIndex > 0 ? DRIVING_TUTORIALS_DATA[currentIndex - 1] : null;
  const nextTutorial =
    currentIndex < DRIVING_TUTORIALS_DATA.length - 1
      ? DRIVING_TUTORIALS_DATA[currentIndex + 1]
      : null;

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Top Breadcrumb Link */}
      <div>
        <Link
          href="/learn-driving"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-500 hover:text-navy-950 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Driving Curriculum</span>
        </Link>

        {/* Header Banner */}
        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg border border-navy-800">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="brand" size="md">
              {tutorial.category.replace(/-/g, ' ').toUpperCase()}
            </Badge>
            <Badge variant="outline" size="md" className="text-white border-white/30">
              {tutorial.difficulty.toUpperCase()}
            </Badge>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold font-display text-white mb-4">
            {tutorial.title}
          </h1>

          <div className="flex items-center gap-2 text-xs text-navy-300 font-medium">
            <Clock className="w-4 h-4 text-brand-400" />
            <span>Estimated read & practice time: {tutorial.estimatedReadTime} minutes</span>
          </div>
        </div>
      </div>

      {/* Key Takeaways Box */}
      <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 shadow-sm space-y-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-brand-950 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-brand-700" />
          <span>Key Lesson Takeaways</span>
        </h3>
        <ul className="space-y-1.5 text-xs sm:text-sm text-brand-950 list-disc pl-4">
          {tutorial.keyTakeaways.map((takeaway, idx) => (
            <li key={idx} className="leading-relaxed">
              {takeaway}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Long-Form Article Content */}
      <article className="bg-white rounded-2xl border border-navy-100 p-6 sm:p-10 shadow-sm">
        <MarkdownRenderer content={tutorial.content} />
      </article>

      {/* Pro Tips & Warnings Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tips */}
        {tutorial.tips.length > 0 && (
          <Card className="p-6 bg-navy-50/70 border-navy-200">
            <h3 className="text-sm font-bold uppercase tracking-wider text-navy-900 font-display flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-brand-600" />
              <span>Pro Instructor Tips</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-navy-700 list-disc pl-4">
              {tutorial.tips.map((tip, idx) => (
                <li key={idx} className="leading-relaxed">{tip}</li>
              ))}
            </ul>
          </Card>
        )}

        {/* Safety Warnings */}
        {tutorial.warnings.length > 0 && (
          <Card className="p-6 bg-danger-50/40 border-danger-200">
            <h3 className="text-sm font-bold uppercase tracking-wider text-danger-900 font-display flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-danger-600" />
              <span>Safety Warnings</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-danger-900 list-disc pl-4">
              {tutorial.warnings.map((warn, idx) => (
                <li key={idx} className="leading-relaxed">{warn}</li>
              ))}
            </ul>
          </Card>
        )}
      </div>

      {/* Common Mistakes */}
      {tutorial.commonMistakes.length > 0 && (
        <Card className="p-6 bg-white border border-navy-100 shadow-sm">
          <h3 className="text-base font-bold font-display text-navy-950 flex items-center gap-2 mb-3">
            <XCircle className="w-5 h-5 text-danger-600" />
            <span>Common Beginner Mistakes to Avoid</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-navy-700 divide-y divide-navy-50">
            {tutorial.commonMistakes.map((mistake, idx) => (
              <li key={idx} className="pt-2 first:pt-0 flex items-start gap-2">
                <span className="text-danger-500 font-bold">✗</span>
                <span>{mistake}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Practice Exercises (if applicable) */}
      {tutorial.practiceExercises && tutorial.practiceExercises.length > 0 && (
        <div className="bg-gradient-to-r from-navy-900 to-navy-950 text-white rounded-2xl p-6 sm:p-8 border border-navy-800 space-y-3">
          <h3 className="text-base font-bold font-display text-brand-400 flex items-center gap-2">
            <Dumbbell className="w-5 h-5" />
            <span>Recommended Real-World Practice Drill</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-navy-200">
            {tutorial.practiceExercises.map((drill, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0 mt-2" />
                <span>{drill}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Previous / Next Lesson Navigation */}
      <div className="pt-6 border-t border-navy-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevTutorial ? (
          <Link href={`/learn-driving/${prevTutorial.slug}`} className="w-full sm:w-auto">
            <Button variant="outline" size="md" className="w-full sm:w-auto flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span className="truncate max-w-[200px]">Prev: {prevTutorial.title}</span>
            </Button>
          </Link>
        ) : <div />}

        {nextTutorial && (
          <Link href={`/learn-driving/${nextTutorial.slug}`} className="w-full sm:w-auto">
            <Button variant="primary" size="md" className="w-full sm:w-auto flex items-center gap-2">
              <span className="truncate max-w-[200px]">Next: {nextTutorial.title}</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return DRIVING_TUTORIALS_DATA.map((t) => ({
    slug: t.slug,
  }));
}
