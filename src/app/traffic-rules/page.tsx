'use client';

import React from 'react';
import { SectionHero } from '@/components/shared/SectionHero';
import { SearchBar } from '@/components/ui/SearchBar';
import { FilterChips } from '@/components/shared/FilterChips';
import { DataTable, Column } from '@/components/shared/DataTable';
import { Badge } from '@/components/ui/Badge';
import { TRAFFIC_FINES_DATA } from '@/data/traffic-fines';
import { useSearch } from '@/hooks/useSearch';
import { TrafficFine } from '@/types/content';
import { Scale, ShieldCheck } from 'lucide-react';

const CATEGORY_CHIPS = [
  { id: 'all', label: 'All Violations' },
  { id: 'documents', label: 'Documents & License' },
  { id: 'speeding', label: 'Speeding & Racing' },
  { id: 'dangerous-driving', label: 'Dangerous Driving' },
  { id: 'drunk-driving', label: 'Drunk Driving' },
  { id: 'two-wheeler', label: 'Two-Wheeler & Helmet' },
  { id: 'vehicle-condition', label: 'Overloading & Condition' },
  { id: 'parking', label: 'Parking & Obstruction' },
  { id: 'general', label: 'General Rules' },
];

export default function TrafficRulesPage() {
  const {
    query,
    setQuery,
    selectedCategory,
    setSelectedCategory,
    filteredData,
    totalCount,
    filteredCount,
  } = useSearch<TrafficFine>({
    data: TRAFFIC_FINES_DATA,
    searchFields: ['violation', 'section', 'description', 'firstOffense'],
    categoryField: 'category',
    initialCategory: 'all',
  });

  const columns: Column<TrafficFine>[] = [
    {
      key: 'violation',
      header: 'Traffic Violation & MV Act Section',
      sortable: true,
      className: 'min-w-[280px]',
      render: (item) => (
        <div>
          <div className="font-bold text-navy-950 font-display text-sm sm:text-base">
            {item.violation}
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs font-mono font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
              {item.section}
            </span>
          </div>
          <p className="text-xs text-navy-500 mt-1 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>
      ),
    },
    {
      key: 'category',
      header: 'Category',
      sortable: true,
      className: 'hidden md:table-cell',
      render: (item) => (
        <Badge variant="outline" size="sm">
          {item.category.replace(/-/g, ' ')}
        </Badge>
      ),
    },
    {
      key: 'firstOffense',
      header: '1st Offense Penalty',
      sortable: true,
      render: (item) => (
        <div>
          <span className="font-black text-danger-600 font-display text-base">
            {item.firstOffense}
          </span>
          {item.imprisonment && (
            <span className="block text-[11px] text-danger-700 font-medium mt-0.5">
              + {item.imprisonment}
            </span>
          )}
        </div>
      ),
    },
    {
      key: 'repeatOffense',
      header: 'Repeat Offense',
      sortable: true,
      className: 'hidden sm:table-cell',
      render: (item) => (
        <span className="font-bold text-navy-900 font-display">
          {item.repeatOffense}
        </span>
      ),
    },
    {
      key: 'additionalPenalties',
      header: 'Additional Actions',
      className: 'hidden lg:table-cell',
      render: (item) =>
        item.additionalPenalties && item.additionalPenalties.length > 0 ? (
          <ul className="text-xs text-navy-600 space-y-0.5">
            {item.additionalPenalties.map((pen, i) => (
              <li key={i} className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-brand-500" />
                <span>{pen}</span>
              </li>
            ))}
          </ul>
        ) : (
          <span className="text-xs text-navy-400">—</span>
        ),
    },
  ];

  return (
    <div className="space-y-8">
      <SectionHero
        title="Traffic Rules & Fines Directory"
        description="Comprehensive, searchable reference for updated traffic penalties and court challans under the amended Motor Vehicles Act. Know your rights and obligations as an Indian driver."
        badge="Motor Vehicles (Amendment) Act 2019"
        icon={<Scale className="w-8 h-8 text-brand-400" />}
      />

      {/* Search and Filters Card */}
      <div className="space-y-4 bg-white p-4 sm:p-6 rounded-2xl border border-navy-100 shadow-sm">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search by offense, section (e.g., '185', '181'), fine amount, or keyword ('helmet', 'alcohol', 'signal')..."
        />

        <FilterChips
          options={CATEGORY_CHIPS.map((chip) => ({
            ...chip,
            count:
              chip.id === 'all'
                ? totalCount
                : TRAFFIC_FINES_DATA.filter((f) => f.category === chip.id).length,
          }))}
          selectedId={selectedCategory}
          onChange={setSelectedCategory}
        />

        <div className="text-xs text-navy-500 font-medium pt-1">
          Showing {filteredCount} of {totalCount} traffic violations
          {query && <span> for &ldquo;{query}&rdquo;</span>}
        </div>
      </div>

      {/* Main Sortable Data Table */}
      <DataTable
        data={filteredData}
        columns={columns}
        keyExtractor={(item) => item.id}
        defaultSortKey="violation"
        emptyMessage="No traffic violations match your search."
      />

      {/* Key Legal Notice Card */}
      <div className="space-y-3">
        <div className="bg-navy-950 text-white p-6 rounded-2xl border border-navy-800 flex items-start gap-4 shadow-sm">
          <ShieldCheck className="w-6 h-6 text-brand-400 shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed text-navy-200">
            <strong className="text-white font-semibold block mb-1">
              Digital Document Verification Legal Standing:
            </strong>
            Under Rule 139 of the Central Motor Vehicles Rules, traffic police officers are legally mandated to accept digital driving licenses and vehicle registration certificates presented via the official <strong>DigiLocker</strong> or <strong>mParivahan</strong> mobile apps. You are NOT required to surrender physical original cards unless an impounding offense has occurred.
          </div>
        </div>
        <p className="text-[11px] text-navy-500 italic px-2">
          * Fines shown represent statutory central provisions under the Motor Vehicles (Amendment) Act 2019. Respective State Governments hold compounding powers under Section 200 to notify state-specific spot challan schedules.
        </p>
      </div>
    </div>
  );
}
