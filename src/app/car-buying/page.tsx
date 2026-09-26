'use client';

import React, { useState } from 'react';
import { SectionHero } from '@/components/shared/SectionHero';
import { Tabs } from '@/components/ui/Tabs';
import { Checklist } from '@/components/interactive/Checklist';
import { BudgetCalculator } from '@/components/interactive/BudgetCalculator';
import { EMICalculator } from '@/components/interactive/EMICalculator';
import { MarkdownRenderer } from '@/components/shared/MarkdownRenderer';
import { CAR_BUYING_DATA, USED_CAR_CHECKLIST } from '@/data/car-buying-data';
import { Car } from 'lucide-react';

const TABS = [
  { id: 'guides', label: 'Buyer Guides' },
  { id: 'checklist', label: 'Used Car 50-Pt Checklist' },
  { id: 'budget', label: 'Total Cost Calculator' },
  { id: 'emi', label: 'Loan EMI Calculator' },
];

export default function CarBuyingPage() {
  const [activeTab, setActiveTab] = useState('guides');
  const [selectedGuideId, setSelectedGuideId] = useState(CAR_BUYING_DATA[0].id);

  const currentGuide =
    CAR_BUYING_DATA.find((g) => g.id === selectedGuideId) || CAR_BUYING_DATA[0];

  // Flatten used car checklist items
  const flattenedChecklist = USED_CAR_CHECKLIST.flatMap((group, gIdx) =>
    group.items.map((item, idx) => ({
      id: `used_car_${gIdx}_${idx}`,
      name: item,
      description: `Category: ${group.category}`,
    }))
  );

  return (
    <div className="space-y-8">
      <SectionHero
        title="First-Time Car Buyer's Guide"
        description="Navigate car buying in India with total confidence. Compare new vs. used, decode fuel and transmission types, run true ownership cost calculators, and use our 50-point pre-owned inspection checklist."
        badge="Independent Buyer Handbook"
        icon={<Car className="w-8 h-8 text-brand-400" />}
      />

      {/* Main Tab Bar */}
      <div className="bg-white p-3 sm:p-4 rounded-2xl border border-navy-100 shadow-sm overflow-x-auto">
        <Tabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {/* Tab 1: Buyer Guides */}
      {activeTab === 'guides' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Guide Selector Sidebar */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-bold text-navy-400 uppercase tracking-wider block px-1 mb-2">
              Select Topic
            </span>
            {CAR_BUYING_DATA.map((guide) => (
              <button
                key={guide.id}
                type="button"
                onClick={() => setSelectedGuideId(guide.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                  selectedGuideId === guide.id
                    ? 'bg-navy-900 text-white border-navy-900 shadow-sm font-semibold'
                    : 'bg-white text-navy-800 border-navy-100 hover:bg-navy-50'
                }`}
              >
                <div className="text-sm font-bold font-display">{guide.title}</div>
                <div className={`text-xs mt-1 line-clamp-1 ${selectedGuideId === guide.id ? 'text-navy-300' : 'text-navy-500'}`}>
                  {guide.summary}
                </div>
              </button>
            ))}
          </div>

          {/* Guide Content Reader */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-navy-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold font-display text-navy-950 mb-2">
              {currentGuide.title}
            </h2>
            <p className="text-xs sm:text-sm text-navy-500 mb-6 pb-4 border-b border-navy-100">
              {currentGuide.summary}
            </p>
            <MarkdownRenderer content={currentGuide.content} />
          </div>
        </div>
      )}

      {/* Tab 2: Used Car 50-Point Checklist */}
      {activeTab === 'checklist' && (
        <div className="space-y-6">
          <div className="bg-brand-50 border border-brand-200 p-4 sm:p-6 rounded-2xl">
            <h3 className="font-bold text-brand-950 text-base mb-1">
              Saveable 50-Point Used Car Inspection Checklist
            </h3>
            <p className="text-xs sm:text-sm text-brand-900 leading-relaxed">
              Take this checklist along on your smartphone when inspecting a pre-owned car. Tick off items as you verify them; your progress automatically saves in your browser.
            </p>
          </div>

          <Checklist
            storageKey="roadready_used_car_inspection"
            items={flattenedChecklist}
            title="Pre-Owned Vehicle Comprehensive Inspection"
          />
        </div>
      )}

      {/* Tab 3: Total Cost of Ownership Calculator */}
      {activeTab === 'budget' && (
        <div className="space-y-6">
          <div className="bg-navy-50 p-4 sm:p-6 rounded-2xl border border-navy-200">
            <h3 className="font-bold text-navy-950 text-base mb-1">
              True Cost of Ownership Calculator (TCO)
            </h3>
            <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
              Don&apos;t just look at the ex-showroom sticker price. Calculate full on-road costs (RTO road tax, insurance, FASTag), monthly EMI, and 5-year running expenses.
            </p>
          </div>

          <BudgetCalculator />
        </div>
      )}

      {/* Tab 4: Car Loan EMI Calculator */}
      {activeTab === 'emi' && (
        <div className="space-y-6">
          <div className="bg-navy-50 p-4 sm:p-6 rounded-2xl border border-navy-200">
            <h3 className="font-bold text-navy-950 text-base mb-1">
              Car Loan Monthly EMI & Interest Calculator
            </h3>
            <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
              Simulate loan amounts, annual interest rates, and loan tenure to optimize your monthly repayments.
            </p>
          </div>

          <EMICalculator />
        </div>
      )}
    </div>
  );
}
