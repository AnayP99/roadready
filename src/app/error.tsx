'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { AlertTriangle, RotateCcw } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled app error:', error);
  }, [error]);

  return (
    <div className="max-w-xl mx-auto py-16 text-center">
      <Card className="p-8 sm:p-12 bg-white shadow-md border-danger-200">
        <div className="w-16 h-16 rounded-2xl bg-danger-100 text-danger-700 mx-auto flex items-center justify-center mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold font-display text-navy-950 mb-2">
          Engine Stalled! Something went wrong
        </h1>

        <p className="text-sm text-navy-600 mb-8 leading-relaxed">
          An unexpected error occurred while processing this page. Don&apos;t worry, your progress and saved test history are safe in your browser.
        </p>

        <Button onClick={() => reset()} variant="primary" size="md" className="inline-flex items-center gap-2">
          <RotateCcw className="w-4 h-4" />
          <span>Restart Engine (Try Again)</span>
        </Button>
      </Card>
    </div>
  );
}
