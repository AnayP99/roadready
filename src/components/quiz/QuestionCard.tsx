'use client';

import React, { useEffect } from 'react';
import { QuizQuestion } from '@/types/quiz';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, XCircle, ArrowRight, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface QuestionCardProps {
  question: QuizQuestion;
  selectedAnswer: number | null;
  showingFeedback: boolean;
  onSelectOption: (index: number) => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export function QuestionCard({
  question,
  selectedAnswer,
  showingFeedback,
  onSelectOption,
  onNext,
  isLastQuestion,
}: QuestionCardProps) {
  // Keyboard listener for 1-4, A-D and Enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If feedback is already showing, Enter advances to next question
      if (showingFeedback && e.key === 'Enter') {
        e.preventDefault();
        onNext();
        return;
      }

      // If not yet answered, allow picking 1-4 or A-D
      if (!showingFeedback) {
        if (e.key === '1' || e.key.toLowerCase() === 'a') onSelectOption(0);
        else if (e.key === '2' || e.key.toLowerCase() === 'b') onSelectOption(1);
        else if (e.key === '3' || e.key.toLowerCase() === 'c') onSelectOption(2);
        else if (e.key === '4' || e.key.toLowerCase() === 'd') onSelectOption(3);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showingFeedback, onSelectOption, onNext]);

  return (
    <div className="bg-white rounded-2xl border border-navy-100 p-6 sm:p-8 shadow-sm">
      {/* Question Text */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-display text-navy-950 leading-snug mb-6 sm:mb-8">
        {question.question}
      </h2>

      {/* 4 Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = question.correctIndex === index;

          let optionStyle = 'bg-white border-navy-200 text-navy-800 hover:border-brand-400 hover:bg-navy-50/50';

          if (showingFeedback) {
            if (isCorrect) {
              optionStyle = 'bg-success-50 border-success-500 text-success-900 font-semibold ring-1 ring-success-500';
            } else if (isSelected && !isCorrect) {
              optionStyle = 'bg-danger-50 border-danger-500 text-danger-900 font-semibold ring-1 ring-danger-500';
            } else {
              optionStyle = 'bg-navy-50/40 border-navy-100 text-navy-400 opacity-60';
            }
          }

          return (
            <button
              key={`${question.id}-opt-${index}`}
              type="button"
              disabled={showingFeedback}
              onClick={() => onSelectOption(index)}
              className={cn(
                'w-full text-left p-4 rounded-xl border-2 transition-all duration-150 flex items-start gap-3.5 select-none focus:outline-none',
                optionStyle
              )}
            >
              <div
                className={cn(
                  'w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border',
                  showingFeedback && isCorrect
                    ? 'bg-success-500 text-white border-success-600'
                    : showingFeedback && isSelected
                    ? 'bg-danger-500 text-white border-danger-600'
                    : 'bg-navy-100 text-navy-700 border-navy-200'
                )}
              >
                {OPTION_LETTERS[index]}
              </div>

              <div className="flex-1 text-sm sm:text-base leading-relaxed pt-0.5">
                {option}
              </div>

              {showingFeedback && isCorrect && (
                <CheckCircle2 className="w-5 h-5 text-success-600 shrink-0 mt-1" />
              )}
              {showingFeedback && isSelected && !isCorrect && (
                <XCircle className="w-5 h-5 text-danger-600 shrink-0 mt-1" />
              )}
            </button>
          );
        })}
      </div>

      {/* Immediate Explanation Box */}
      {showingFeedback && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-200 mb-6 bg-navy-50/80 border border-navy-200/80 rounded-xl p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-navy-950 uppercase tracking-wider block mb-1">
                Explanation & MV Act Reference:
              </span>
              <p className="text-xs sm:text-sm text-navy-800 leading-relaxed font-sans">
                {question.explanation}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-navy-100">
        <div className="text-xs text-navy-400 hidden sm:block">
          {!showingFeedback ? (
            <span>Use keys <kbd className="px-1.5 py-0.5 bg-navy-100 rounded text-navy-700">1-4</kbd> or <kbd className="px-1.5 py-0.5 bg-navy-100 rounded text-navy-700">A-D</kbd></span>
          ) : (
            <span>Press <kbd className="px-1.5 py-0.5 bg-navy-100 rounded text-navy-700">Enter ↵</kbd> for next</span>
          )}
        </div>

        {showingFeedback && (
          <Button
            onClick={onNext}
            variant="primary"
            size="md"
            className="ml-auto flex items-center gap-2"
          >
            <span>{isLastQuestion ? 'View Test Results' : 'Next Question'}</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
