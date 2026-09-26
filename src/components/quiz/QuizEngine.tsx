'use client';

import React, { useState } from 'react';
import { QuizConfig } from '@/types/quiz';
import { QUIZ_QUESTIONS } from '@/data/quiz-questions';
import { useQuiz } from '@/hooks/useQuiz';
import { QuestionCard } from './QuestionCard';
import { QuizTimer } from './QuizTimer';
import { QuizProgress } from './QuizProgress';
import { QuizResults } from './QuizResults';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Play, ArrowLeft, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export interface QuizEngineProps {
  config: QuizConfig;
}

export function QuizEngine({ config }: QuizEngineProps) {
  const { state, startQuiz, selectAnswer, nextQuestion, resetQuiz } = useQuiz(QUIZ_QUESTIONS);
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
    startQuiz(config);
  };

  const handleRetry = () => {
    resetQuiz();
    setHasStarted(false);
  };

  const handleReviewMistakes = () => {
    resetQuiz();
    startQuiz({
      type: 'mistakes',
      timed: false,
      questionCount: 20,
    });
  };

  // Compute test duration / name
  const getTestTitle = () => {
    if (config.type === 'full') return "Official RTO Learner's License Full Mock Test";
    if (config.type === 'quick') return 'Quick Practice Quiz';
    if (config.type === 'mistakes') return 'Mistake Review & Re-attempt Mode';
    if (config.category) {
      return `${config.category.replace(/-/g, ' ').toUpperCase()} Practice`;
    }
    return 'Practice Test';
  };

  // 1. Initial Start Screen
  if (state.status === 'idle' || !hasStarted) {
    return (
      <div className="max-w-2xl mx-auto py-8">
        <Card className="p-6 sm:p-10 text-center bg-white shadow-md border-navy-100">
          <div className="w-16 h-16 rounded-2xl bg-brand-100 text-brand-900 mx-auto flex items-center justify-center mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-navy-950 mb-3">
            {getTestTitle()}
          </h1>

          <p className="text-sm text-navy-600 max-w-md mx-auto mb-8 leading-relaxed">
            Test your knowledge against real Indian RTO exam questions. Get instant answer explanations and view your pass/fail result upon completion.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-left">
            <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100">
              <span className="text-[11px] font-bold text-navy-400 uppercase tracking-wider block mb-1">
                Questions
              </span>
              <span className="text-lg font-bold text-navy-950 font-display">
                {config.questionCount} Questions
              </span>
            </div>

            <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100">
              <span className="text-[11px] font-bold text-navy-400 uppercase tracking-wider block mb-1">
                Time Limit
              </span>
              <span className="text-lg font-bold text-navy-950 font-display">
                {config.timed ? `${Math.round((config.timeLimit ?? 1200) / 60)} Minutes` : 'Untimed'}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100 col-span-2 sm:col-span-1">
              <span className="text-[11px] font-bold text-navy-400 uppercase tracking-wider block mb-1">
                Passing Score
              </span>
              <span className="text-lg font-bold text-success-600 font-display">
                60% (RTO Norm)
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button onClick={handleStart} variant="primary" size="lg" className="w-full sm:w-auto px-8 flex items-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              <span>Begin Test Now</span>
            </Button>
            <Link href="/mock-test" className="w-full sm:w-auto">
              <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                Back to Tests
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  // 2. Completed Results Screen
  if (state.status === 'completed' || state.status === 'reviewing') {
    const startTimeMs = state.startTime ? new Date(state.startTime).getTime() : Date.now();
    const endTimeMs = state.endTime ? new Date(state.endTime).getTime() : Date.now();
    const timeTaken = Math.max(1, Math.round((endTimeMs - startTimeMs) / 1000));

    return (
      <QuizResults
        questions={state.questions}
        answers={state.answers}
        timeTaken={timeTaken}
        onRetry={handleRetry}
        onReviewMistakes={handleReviewMistakes}
      />
    );
  }

  // 3. Active Test Screen
  const currentQ = state.questions[state.currentIndex];
  if (!currentQ) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/mock-test"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-500 hover:text-navy-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit Test</span>
        </Link>

        {state.timeRemaining !== null && (
          <QuizTimer timeRemaining={state.timeRemaining} />
        )}
      </div>

      {/* Progress Bar */}
      <QuizProgress
        currentIndex={state.currentIndex}
        totalQuestions={state.questions.length}
        category={currentQ.category}
      />

      {/* Active Question Card */}
      <QuestionCard
        question={currentQ}
        selectedAnswer={state.answers[state.currentIndex]}
        showingFeedback={state.showingFeedback}
        onSelectOption={selectAnswer}
        onNext={nextQuestion}
        isLastQuestion={state.currentIndex + 1 === state.questions.length}
      />
    </div>
  );
}
