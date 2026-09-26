'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface AnimatedSectionProps extends HTMLMotionProps<'div'> {
  delay?: number;
}

export function AnimatedSection({ children, className, delay = 0, ...props }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
