'use client';

import React, { useState } from 'react';
import { SectionHero } from '@/components/shared/SectionHero';
import { FilterChips } from '@/components/shared/FilterChips';
import { ContentCard } from '@/components/shared/ContentCard';
import { DRIVING_TUTORIALS_DATA } from '@/data/driving-tutorials';
import { Compass } from 'lucide-react';

const CATEGORY_CHIPS = [
  { id: 'all', label: 'All Lessons' },
  { id: 'before-you-start', label: 'Before You Start' },
  { id: 'basic-manual', label: 'Manual Gearbox' },
  { id: 'basic-automatic', label: 'Automatic Driving' },
  { id: 'essential-maneuvers', label: 'Parking & Maneuvers' },
  { id: 'road-driving', label: 'Road & City Driving' },
  { id: 'highway-driving', label: 'Highway & Expressway' },
  { id: 'night-driving', label: 'Night Driving' },
  { id: 'adverse-conditions', label: 'Monsoon & Fog' },
];

export default function LearnDrivingHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredTutorials =
    selectedCategory === 'all'
      ? DRIVING_TUTORIALS_DATA
      : DRIVING_TUTORIALS_DATA.filter((t) => t.category === selectedCategory);

  return (
    <div className="space-y-8">
      <SectionHero
        title="Learn Driving: Step-by-Step Curriculum"
        description="Comprehensive beginner-to-advanced driving tutorials designed for Indian conditions. Learn pedal control, manual clutch biting point, automatic transmission, parallel parking, hill starts, and adverse weather safety."
        badge={`${DRIVING_TUTORIALS_DATA.length} Interactive Lessons`}
        icon={<Compass className="w-8 h-8 text-brand-400" />}
      />

      {/* Category Filter Chips */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-navy-100 shadow-sm">
        <FilterChips
          options={CATEGORY_CHIPS.map((chip) => ({
            ...chip,
            count:
              chip.id === 'all'
                ? DRIVING_TUTORIALS_DATA.length
                : DRIVING_TUTORIALS_DATA.filter((t) => t.category === chip.id).length,
          }))}
          selectedId={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>

      {/* Tutorials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTutorials.map((tut) => (
          <ContentCard
            key={tut.id}
            title={tut.title}
            description={tut.content.slice(0, 140).replace(/#/g, '') + '...'}
            href={`/learn-driving/${tut.slug}`}
            category={tut.category.replace(/-/g, ' ')}
            badge={tut.difficulty.toUpperCase()}
            readTime={tut.estimatedReadTime}
          />
        ))}
      </div>
    </div>
  );
}
