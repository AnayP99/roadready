import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Compass, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto py-16 text-center">
      <Card className="p-8 sm:p-12 bg-white shadow-md border-navy-100">
        <div className="w-16 h-16 rounded-2xl bg-brand-100 text-brand-900 mx-auto flex items-center justify-center mb-6">
          <Compass className="w-8 h-8" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-black font-display text-navy-950 mb-2">
          404 — Wrong Turn!
        </h1>

        <p className="text-sm text-navy-600 mb-8 leading-relaxed">
          Looks like this road leads to a dead end. The page you are looking for has either moved, been renamed, or does not exist.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/">
            <Button variant="primary" size="md" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
          <Link href="/road-signs">
            <Button variant="outline" size="md" className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              <span>Browse Road Signs</span>
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
