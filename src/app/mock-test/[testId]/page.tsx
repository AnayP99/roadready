import React from 'react';
import { QuizEngine } from '@/components/quiz/QuizEngine';
import { QuizConfig, QuizCategory } from '@/types/quiz';
import { notFound } from 'next/navigation';

export default async function ActiveTestPage({
  params,
}: {
  params: Promise<{ testId: string }>;
}) {
  const { testId } = await params;

  let config: QuizConfig;

  if (testId === 'full') {
    config = {
      type: 'full',
      timed: true,
      timeLimit: 20 * 60, // 20 minutes
      questionCount: 20,
    };
  } else if (testId === 'quick') {
    config = {
      type: 'quick',
      timed: false,
      questionCount: 10,
    };
  } else if (testId === 'mistakes') {
    config = {
      type: 'mistakes',
      timed: false,
      questionCount: 20,
    };
  } else if (testId.startsWith('category-')) {
    const category = testId.replace('category-', '') as QuizCategory;
    config = {
      type: 'category',
      category,
      timed: false,
      questionCount: 10,
    };
  } else {
    notFound();
  }

  return (
    <div className="py-4">
      <QuizEngine config={config} />
    </div>
  );
}

export function generateStaticParams() {
  return [
    { testId: 'full' },
    { testId: 'quick' },
    { testId: 'mistakes' },
    { testId: 'category-traffic-rules' },
    { testId: 'category-road-signs' },
    { testId: 'category-right-of-way' },
    { testId: 'category-vehicle-knowledge' },
    { testId: 'category-first-aid' },
    { testId: 'category-documents' },
    { testId: 'category-driving-basics' },
    { testId: 'category-general' },
  ];
}
