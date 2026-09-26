'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SectionHero } from '@/components/shared/SectionHero';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { STORAGE_KEYS } from '@/lib/constants';
import { QuizResult, QuizCategory } from '@/types/quiz';
import {
  FileCheck2,
  Zap,
  Tag,
  AlertCircle,
  Play,
  RotateCcw,
  Clock,
  Award,
  CheckCircle2,
  XCircle,
  Trash2,
} from 'lucide-react';

const CATEGORIES: { id: QuizCategory; label: string }[] = [
  { id: 'road-signs', label: 'Road Signs' },
  { id: 'traffic-rules', label: 'Traffic Rules' },
  { id: 'right-of-way', label: 'Right of Way' },
  { id: 'vehicle-knowledge', label: 'Vehicle Knowledge' },
  { id: 'first-aid', label: 'First Aid & Safety' },
  { id: 'documents-insurance', label: 'Documents & Insurance' },
  { id: 'driving-basics', label: 'Driving Basics' },
  { id: 'general-knowledge', label: 'General Knowledge' },
];

export default function MockTestHubPage() {
  const [history, setHistory] = useState<QuizResult[]>([]);
  const [wrongCount, setWrongCount] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory>('road-signs');

  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem(STORAGE_KEYS.QUIZ_HISTORY);
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
      const storedWrong = localStorage.getItem(STORAGE_KEYS.WRONG_QUESTIONS);
      if (storedWrong) {
        const parsed = JSON.parse(storedWrong);
        setWrongCount(Array.isArray(parsed) ? parsed.length : 0);
      }
    } catch (e) {
      console.error('Error reading localStorage:', e);
    }
  }, []);

  const handleClearHistory = () => {
    if (confirm('Clear all past mock test results from your browser?')) {
      localStorage.removeItem(STORAGE_KEYS.QUIZ_HISTORY);
      setHistory([]);
    }
  };

  const formatDate = (isoStr: string) => {
    try {
      return new Date(isoStr).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return isoStr;
    }
  };

  return (
    <div className="space-y-10">
      <SectionHero
        title="Mock Learner's License Test"
        description="Experience the exact computerized testing format used across all Indian State Regional Transport Offices (RTOs). Test your road knowledge under timed exam conditions."
        badge="Official RTO Pattern"
        icon={<FileCheck2 className="w-8 h-8 text-brand-400" />}
      >
        <div className="flex items-center gap-6 text-xs text-navy-300 font-medium pt-2">
          <span>✓ 20 Questions / 20 Mins</span>
          <span>✓ 60% Passing Standard</span>
          <span>✓ Real MV Act Questions</span>
        </div>
      </SectionHero>

      {/* Test Options Grid */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold font-display text-navy-950">Choose Test Mode</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Full RTO Mock Test */}
          <Card hoverable className="p-6 sm:p-8 flex flex-col justify-between border-2 hover:border-brand-500">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500 text-navy-950 flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <Badge variant="brand">Recommended</Badge>
              </div>

              <h3 className="text-xl font-bold font-display text-navy-950 mb-2">
                Full Exam Simulation
              </h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-6">
                Mirrors the real RTO computerized test. 20 randomized questions covering all modules with a 20-minute countdown timer. Requires 60% (12 correct) to pass.
              </p>
            </div>

            <Link href="/mock-test/full">
              <Button variant="primary" fullWidth size="lg" className="flex items-center justify-center gap-2">
                <Play className="w-4 h-4 fill-current" />
                <span>Start Full Exam (20 Qs)</span>
              </Button>
            </Link>
          </Card>

          {/* 2. Quick Practice */}
          <Card hoverable className="p-6 sm:p-8 flex flex-col justify-between border-2 hover:border-brand-500">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center font-bold">
                  <Zap className="w-6 h-6" />
                </div>
                <Badge variant="outline">No Timer</Badge>
              </div>

              <h3 className="text-xl font-bold font-display text-navy-950 mb-2">
                Quick 10-Question Drill
              </h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-6">
                Short, untimed practice quiz. Perfect for a 5-minute study session on your phone while commuting or relaxing. Immediate explanations included.
              </p>
            </div>

            <Link href="/mock-test/quick">
              <Button variant="secondary" fullWidth size="lg" className="flex items-center justify-center gap-2">
                <Play className="w-4 h-4 fill-current" />
                <span>Start Quick Drill (10 Qs)</span>
              </Button>
            </Link>
          </Card>

          {/* 3. Category Practice */}
          <Card className="p-6 sm:p-8 flex flex-col justify-between border border-navy-100">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center font-bold">
                  <Tag className="w-6 h-6" />
                </div>
                <Badge variant="navy">Subject Focus</Badge>
              </div>

              <h3 className="text-xl font-bold font-display text-navy-950 mb-2">
                Topic-Wise Practice
              </h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-4">
                Target specific knowledge gaps by picking an individual subject module below:
              </p>

              <div className="mb-6">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as QuizCategory)}
                  className="w-full px-3.5 py-2.5 bg-navy-50 border border-navy-200 rounded-xl text-navy-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Link href={`/mock-test/category-${selectedCategory}`}>
              <Button variant="outline" fullWidth size="lg" className="flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                <span>Practice This Category (10 Qs)</span>
              </Button>
            </Link>
          </Card>

          {/* 4. Mistake Review Mode */}
          <Card
            className={`p-6 sm:p-8 flex flex-col justify-between border ${
              wrongCount > 0 ? 'border-danger-200 bg-danger-50/20' : 'border-navy-100 opacity-70'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-danger-100 text-danger-700 flex items-center justify-center font-bold">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <Badge variant={wrongCount > 0 ? 'danger' : 'outline'}>
                  {wrongCount} Saved Mistakes
                </Badge>
              </div>

              <h3 className="text-xl font-bold font-display text-navy-950 mb-2">
                Mistake Review Mode
              </h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-6">
                Re-attempt questions you previously answered incorrectly across past mock tests. Getting them right removes them from your wrong question bank.
              </p>
            </div>

            {wrongCount > 0 ? (
              <Link href="/mock-test/mistakes">
                <Button variant="danger" fullWidth size="lg" className="flex items-center justify-center gap-2">
                  <RotateCcw className="w-4 h-4" />
                  <span>Review {wrongCount} Mistakes</span>
                </Button>
              </Link>
            ) : (
              <Button disabled fullWidth size="lg" variant="outline">
                No Mistakes Recorded Yet
              </Button>
            )}
          </Card>
        </div>
      </section>

      {/* Test History Section */}
      <section className="space-y-4 pt-6 border-t border-navy-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-navy-600" />
            <h2 className="text-xl font-bold font-display text-navy-950">Past Attempt History</h2>
          </div>
          {history.length > 0 && (
            <button
              onClick={handleClearHistory}
              className="text-xs text-navy-500 hover:text-danger-600 flex items-center gap-1 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear History</span>
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <Card className="p-8 text-center bg-navy-50/50 border-dashed border-2 border-navy-200">
            <p className="text-sm text-navy-600 mb-2">No past tests recorded yet.</p>
            <p className="text-xs text-navy-400">
              Complete a full or quick practice test above to start tracking your performance.
            </p>
          </Card>
        ) : (
          <div className="space-y-3">
            {history.slice(0, 10).map((item) => (
              <Card key={item.id} className="p-4 sm:p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="shrink-0">
                    {item.passed ? (
                      <CheckCircle2 className="w-6 h-6 text-success-600" />
                    ) : (
                      <XCircle className="w-6 h-6 text-danger-600" />
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy-950 font-display flex items-center gap-2">
                      <span className="capitalize">{item.testType} Test</span>
                      {item.category && (
                        <span className="text-xs font-normal text-navy-500">
                          ({item.category.replace(/-/g, ' ')})
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-navy-400 mt-0.5">{formatDate(item.date)}</div>
                  </div>
                </div>

                <div className="text-right">
                  <span
                    className={`text-lg font-bold font-display ${
                      item.passed ? 'text-success-600' : 'text-danger-600'
                    }`}
                  >
                    {item.score}%
                  </span>
                  <div className="text-[11px] text-navy-400">
                    {item.correctAnswers} / {item.totalQuestions} • {Math.round(item.timeTaken / 60)}m
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
