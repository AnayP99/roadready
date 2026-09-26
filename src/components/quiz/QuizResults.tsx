'use client';

import React from 'react';
import { QuizQuestion } from '@/types/quiz';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CheckCircle2, XCircle, RotateCcw, ArrowLeft, Award, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export interface QuizResultsProps {
  questions: QuizQuestion[];
  answers: (number | null)[];
  timeTaken: number; // in seconds
  onRetry: () => void;
  onReviewMistakes?: () => void;
}

export function QuizResults({
  questions,
  answers,
  timeTaken,
  onRetry,
  onReviewMistakes,
}: QuizResultsProps) {
  const totalQuestions = questions.length;
  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;

  questions.forEach((q, idx) => {
    const userChoice = answers[idx];
    if (userChoice === null) {
      unansweredCount++;
    } else if (userChoice === q.correctIndex) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const isPassed = percentage >= 60; // 60% standard RTO passing score

  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins}m ${s}s`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Hero Banner */}
      <div
        className={`p-6 sm:p-8 rounded-3xl text-white shadow-lg text-center ${
          isPassed
            ? 'bg-gradient-to-br from-success-600 via-success-700 to-navy-950'
            : 'bg-gradient-to-br from-danger-600 via-danger-700 to-navy-950'
        }`}
      >
        <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-white/20 backdrop-blur flex items-center justify-center text-white">
          {isPassed ? <Award className="w-9 h-9 stroke-[2.5]" /> : <AlertCircle className="w-9 h-9 stroke-[2.5]" />}
        </div>

        <h1 className="text-2xl sm:text-4xl font-black font-display tracking-tight mb-2">
          {isPassed ? 'Test Passed! Congratulations!' : 'Test Needs Practice!'}
        </h1>
        <p className="text-white/90 text-sm sm:text-base max-w-lg mx-auto mb-6">
          {isPassed
            ? "You scored above the required 60% passing standard for an Indian Learner's License. You are road ready!"
            : 'You scored below the 60% passing mark. Review your mistakes below and reattempt to build confidence.'}
        </p>

        {/* Score Ring / Pill */}
        <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-md px-6 py-3.5 rounded-2xl border border-white/20">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-white/70 block">Your Score</span>
            <span className="text-2xl sm:text-3xl font-extrabold font-display">
              {correctCount} / {totalQuestions}
            </span>
          </div>
          <div className="h-8 w-px bg-white/20" />
          <div>
            <span className="text-[11px] uppercase tracking-wider text-white/70 block">Percentage</span>
            <span className="text-2xl sm:text-3xl font-extrabold font-display">{percentage}%</span>
          </div>
          <div className="h-8 w-px bg-white/20" />
          <div>
            <span className="text-[11px] uppercase tracking-wider text-white/70 block">Time Taken</span>
            <span className="text-lg sm:text-2xl font-bold font-display">{formatTime(timeTaken)}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button onClick={onRetry} variant="primary" size="md" className="flex items-center gap-2">
          <RotateCcw className="w-4 h-4" />
          <span>Retake Test</span>
        </Button>

        {wrongCount > 0 && onReviewMistakes && (
          <Button onClick={onReviewMistakes} variant="outline" size="md" className="flex items-center gap-2">
            <XCircle className="w-4 h-4 text-danger-500" />
            <span>Practice {wrongCount} Wrong Answers</span>
          </Button>
        )}

        <Link href="/mock-test">
          <Button variant="ghost" size="md" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Mock Test Hub</span>
          </Button>
        </Link>
      </div>

      {/* Comprehensive Question Review List */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold font-display text-navy-950">Detailed Answer Review</h2>
          <span className="text-xs text-navy-500">
            {correctCount} Correct • {wrongCount} Incorrect • {unansweredCount} Unanswered
          </span>
        </div>

        <div className="space-y-4">
          {questions.map((q, idx) => {
            const userChoice = answers[idx];
            const isCorrect = userChoice === q.correctIndex;
            const isUnanswered = userChoice === null;

            return (
              <Card
                key={q.id}
                className={`p-5 sm:p-6 border-l-4 ${
                  isCorrect
                    ? 'border-l-success-500'
                    : isUnanswered
                    ? 'border-l-navy-400'
                    : 'border-l-danger-500'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="text-xs font-bold text-navy-500 uppercase tracking-wider">
                    Question {idx + 1} • {q.category.replace(/-/g, ' ').toUpperCase()}
                  </span>
                  {isCorrect ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-success-700 bg-success-50 px-2 py-0.5 rounded-full border border-success-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Correct
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-danger-700 bg-danger-50 px-2 py-0.5 rounded-full border border-danger-200">
                      <XCircle className="w-3.5 h-3.5" />
                      {isUnanswered ? 'Unanswered' : 'Incorrect'}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-navy-950 font-display mb-4">{q.question}</h3>

                <div className="space-y-2 mb-4 text-xs sm:text-sm">
                  {q.options.map((opt, optIdx) => {
                    const isOptionCorrect = optIdx === q.correctIndex;
                    const isUserPick = optIdx === userChoice;

                    return (
                      <div
                        key={`${q.id}-opt-${optIdx}`}
                        className={`p-3 rounded-xl border flex items-center justify-between ${
                          isOptionCorrect
                            ? 'bg-success-50 border-success-400 text-success-950 font-semibold'
                            : isUserPick && !isOptionCorrect
                            ? 'bg-danger-50 border-danger-400 text-danger-950 font-semibold'
                            : 'bg-navy-50/40 border-navy-100 text-navy-600'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs">
                            {['A', 'B', 'C', 'D'][optIdx]}.
                          </span>
                          <span>{opt}</span>
                        </div>
                        {isOptionCorrect && <span className="text-xs text-success-700 font-bold">Correct Answer</span>}
                        {isUserPick && !isOptionCorrect && (
                          <span className="text-xs text-danger-700 font-bold">Your Choice</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="bg-navy-50/70 p-3.5 rounded-xl border border-navy-100 text-xs text-navy-700 leading-relaxed">
                  <strong className="text-navy-900 block mb-0.5">Why:</strong>
                  {q.explanation}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
