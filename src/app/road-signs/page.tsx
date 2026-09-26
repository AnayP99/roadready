'use client';

import React from 'react';
import { SectionHero } from '@/components/shared/SectionHero';
import { SearchBar } from '@/components/ui/SearchBar';
import { FilterChips } from '@/components/shared/FilterChips';
import { SignCard } from '@/components/interactive/SignCard';
import { ROAD_SIGNS_DATA } from '@/data/road-signs';
import { useSearch } from '@/hooks/useSearch';
import { RoadSign } from '@/types/road-sign';
import { AlertOctagon } from 'lucide-react';

const CATEGORY_CHIPS = [
  { id: 'all', label: 'All Signs' },
  { id: 'mandatory', label: 'Mandatory (Compulsory)' },
  { id: 'prohibitory', label: 'Prohibitory' },
  { id: 'cautionary', label: 'Cautionary (Warning)' },
  { id: 'informatory', label: 'Informatory' },
  { id: 'traffic-lights', label: 'Traffic Lights' },
  { id: 'road-markings', label: 'Road Markings' },
  { id: 'hand-signals', label: 'Hand Signals' },
];

export default function RoadSignsPage() {
  const {
    query,
    setQuery,
    selectedCategory,
    setSelectedCategory,
    filteredData,
    totalCount,
    filteredCount,
  } = useSearch<RoadSign>({
    data: ROAD_SIGNS_DATA,
    searchFields: ['name', 'meaning', 'details', 'whereFound'],
    categoryField: 'category',
    initialCategory: 'all',
  });

  return (
    <div className="space-y-8">
      <SectionHero
        title="Indian Road Signs Encyclopedia"
        description="Every official road sign, painted road marking, and traffic police hand signal codified under the Indian Motor Vehicles Act and Indian Roads Congress (IRC) standards."
        badge={`${totalCount} Total Visual Signs`}
        icon={<AlertOctagon className="w-8 h-8 text-brand-400" />}
      />

      {/* Search and Filters Bar */}
      <div className="space-y-4 bg-white p-4 sm:p-6 rounded-2xl border border-navy-100 shadow-sm">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search by sign name, hazard, speed limit, or keyword (e.g., 'Hospital', 'U-turn', '50', 'School')..."
        />

        <FilterChips
          options={CATEGORY_CHIPS.map((chip) => ({
            ...chip,
            count:
              chip.id === 'all'
                ? totalCount
                : ROAD_SIGNS_DATA.filter((s) => s.category === chip.id).length,
          }))}
          selectedId={selectedCategory}
          onChange={setSelectedCategory}
        />

        <div className="text-xs text-navy-500 font-medium pt-1">
          Showing {filteredCount} of {totalCount} signs
          {query && <span> for &ldquo;{query}&rdquo;</span>}
        </div>
      </div>

      {/* Signs Responsive Grid */}
      {filteredData.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-navy-100 p-8">
          <p className="text-base font-bold text-navy-900 mb-1">No signs match your search criteria</p>
          <p className="text-xs text-navy-500 mb-4">Try clearing the search term or switching categories</p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setSelectedCategory('all');
            }}
            className="text-xs text-brand-600 font-bold hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredData.map((sign) => (
            <SignCard key={sign.id} sign={sign} />
          ))}
        </div>
      )}
    </div>
  );
}
