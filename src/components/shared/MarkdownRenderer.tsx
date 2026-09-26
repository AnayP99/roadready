import React from 'react';
import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';

export interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div
      className={cn(
        'prose prose-navy max-w-none text-navy-800 text-sm sm:text-base leading-relaxed',
        'prose-headings:font-display prose-headings:font-bold prose-headings:text-navy-950',
        'prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-6 prose-h2:mb-3',
        'prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-5 prose-h3:mb-2',
        'prose-p:mb-4 prose-p:leading-relaxed',
        'prose-ul:my-3 prose-ul:pl-5 prose-li:my-1',
        'prose-ol:my-3 prose-ol:pl-5 prose-li:my-1',
        'prose-strong:font-bold prose-strong:text-navy-950',
        className
      )}
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
