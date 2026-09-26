'use client';

import React, { useState } from 'react';
import { SectionHero } from '@/components/shared/SectionHero';
import { Tabs } from '@/components/ui/Tabs';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { DataTable, Column } from '@/components/shared/DataTable';
import {
  MAINTENANCE_SCHEDULE,
  TIRE_CARE_GUIDE,
  FLUIDS_GUIDE,
  DIY_MAINTENANCE_GUIDES,
  ScheduleItem,
} from '@/data/maintenance-data';
import { formatCurrency } from '@/lib/utils';
import { Wrench, CircleDot, Droplets, Hammer, CheckCircle2, Clock } from 'lucide-react';

const TABS = [
  { id: 'schedule', label: 'Service Schedule' },
  { id: 'tires', label: 'Tire Care & Sizing' },
  { id: 'fluids', label: 'Fluids & Engine Oil' },
  { id: 'diy', label: 'DIY Emergency Guides' },
];

export default function MaintenancePage() {
  const [activeTab, setActiveTab] = useState('schedule');

  const scheduleColumns: Column<ScheduleItem>[] = [
    {
      key: 'interval',
      header: 'Service Interval',
      sortable: true,
      className: 'min-w-[160px]',
      render: (item) => (
        <div>
          <span className="font-bold text-navy-950 font-display block text-sm sm:text-base">
            {item.interval}
          </span>
          <span className="text-xs text-navy-500">{item.timePeriod}</span>
        </div>
      ),
    },
    {
      key: 'tasks',
      header: 'Service Tasks & Inspections',
      className: 'min-w-[300px]',
      render: (item) => (
        <ul className="text-xs sm:text-sm text-navy-700 space-y-1.5 list-disc pl-4">
          {item.tasks.map((task, idx) => (
            <li key={idx} className="leading-snug">
              {task}
            </li>
          ))}
        </ul>
      ),
    },
    {
      key: 'partsToReplace',
      header: 'Parts & Consumables Replaced',
      className: 'hidden md:table-cell min-w-[200px]',
      render: (item) => (
        <div className="space-y-1">
          {item.partsToReplace.map((part, idx) => (
            <span
              key={idx}
              className="inline-block text-[11px] font-semibold bg-navy-100 text-navy-800 px-2 py-0.5 rounded-md mr-1 mb-1"
            >
              {part}
            </span>
          ))}
        </div>
      ),
    },
    {
      key: 'estimatedCostMin',
      header: 'Estimated Cost (₹)',
      sortable: true,
      render: (item) => (
        <div className="font-bold text-navy-950 font-display text-sm whitespace-nowrap">
          {formatCurrency(item.estimatedCostMin)} – {formatCurrency(item.estimatedCostMax)}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <SectionHero
        title="Vehicle Maintenance & Care Guide"
        description="Keep your car running in factory-fresh condition. Master periodic service schedules, fluid grades, tire maintenance, and step-by-step DIY emergency repairs."
        badge="Preventative Car Care"
        icon={<Wrench className="w-8 h-8 text-brand-400" />}
      />

      {/* Tab Switcher */}
      <div className="bg-white p-3 sm:p-4 rounded-2xl border border-navy-100 shadow-sm overflow-x-auto">
        <Tabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {/* Tab 1: Service Schedule Table */}
      {activeTab === 'schedule' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold font-display text-navy-950">
                Recommended Kilometre-Based Service Intervals
              </h3>
              <p className="text-xs text-navy-500">
                Cost estimates are representative for Indian hatchbacks and compact SUVs.
              </p>
            </div>
          </div>

          <DataTable
            data={MAINTENANCE_SCHEDULE}
            columns={scheduleColumns}
            keyExtractor={(item) => item.interval}
            defaultSortKey="intervalKm"
          />
        </div>
      )}

      {/* Tab 2: Tire Care & Sizing Guide */}
      {activeTab === 'tires' && (
        <div className="space-y-8">
          {/* Decoding Tire Size Box */}
          <div className="bg-white rounded-2xl border border-navy-100 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold font-display text-navy-950 mb-2">
              How to Read Your Tire Size Markings
            </h3>
            <p className="text-xs sm:text-sm text-navy-600 mb-6">
              Every passenger car tire has standardized international codes stamped into its rubber sidewall.
            </p>

            <div className="bg-navy-950 text-white rounded-2xl p-6 text-center mb-6">
              <span className="text-xs text-brand-400 font-mono font-bold tracking-widest block mb-2 uppercase">
                Example Tire Sidewall Stamp
              </span>
              <span className="text-2xl sm:text-4xl font-mono font-black tracking-wider text-white">
                {TIRE_CARE_GUIDE.readingSize.example}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TIRE_CARE_GUIDE.readingSize.explanation.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-navy-50/70 border border-navy-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-8 h-8 rounded-lg bg-brand-500 text-navy-950 font-bold font-mono text-sm flex items-center justify-center">
                      {item.part}
                    </span>
                    <span className="font-bold text-sm text-navy-900">{item.label}</span>
                  </div>
                  <p className="text-xs text-navy-600 leading-relaxed mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pressure & Rotation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white border border-navy-100">
              <h4 className="text-base font-bold font-display text-navy-950 flex items-center gap-2 mb-4">
                <CircleDot className="w-5 h-5 text-brand-600" />
                <span>Cold Tire Pressure Golden Rules</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-navy-700 list-disc pl-4">
                {TIRE_CARE_GUIDE.pressureGuidelines.map((rule, idx) => (
                  <li key={idx} className="leading-relaxed">{rule}</li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-white border border-navy-100">
              <h4 className="text-base font-bold font-display text-navy-950 flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-success-600" />
                <span>Tire Rotation & Alignment Schedule</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-navy-700 list-disc pl-4">
                {TIRE_CARE_GUIDE.rotationPatterns.map((pat, idx) => (
                  <li key={idx} className="leading-relaxed">{pat}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      )}

      {/* Tab 3: Fluids Guide */}
      {activeTab === 'fluids' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FLUIDS_GUIDE.map((fluid, idx) => (
            <Card key={idx} className="p-6 bg-white border border-navy-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold font-display text-navy-950 flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-brand-600" />
                    <span>{fluid.name}</span>
                  </h3>
                  <Badge variant="outline">{fluid.checkFrequency}</Badge>
                </div>

                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed mb-4">
                  {fluid.purpose}
                </p>

                <div className="space-y-2 bg-navy-50/70 p-3.5 rounded-xl border border-navy-100 text-xs">
                  <div>
                    <strong className="text-navy-900">Recommended Grades:</strong> {fluid.grades}
                  </div>
                  <div>
                    <strong className="text-navy-900">Change Interval:</strong> {fluid.changeInterval}
                  </div>
                  <div>
                    <strong className="text-success-700">Healthy Color:</strong> {fluid.colorHealthy}
                  </div>
                  <div>
                    <strong className="text-danger-700">Bad / Contaminated:</strong> {fluid.colorBad}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Tab 4: DIY Emergency Guides */}
      {activeTab === 'diy' && (
        <div className="space-y-8">
          {DIY_MAINTENANCE_GUIDES.map((guide) => (
            <Card key={guide.id} className="p-6 sm:p-8 bg-white border border-navy-100 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-navy-100 mb-6">
                <div>
                  <h3 className="text-xl font-bold font-display text-navy-950 flex items-center gap-2">
                    <Hammer className="w-5 h-5 text-brand-600" />
                    <span>{guide.title}</span>
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-navy-500 mt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {guide.estimatedTime}
                    </span>
                    <span>• Difficulty: {guide.difficulty}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {guide.toolsRequired.map((t, idx) => (
                    <span key={idx} className="text-[10px] bg-navy-100 text-navy-800 px-2 py-0.5 rounded font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Steps list */}
              <div className="space-y-4">
                {guide.steps.map((step) => (
                  <div key={step.step} className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-full bg-brand-500 text-navy-950 font-bold font-display text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {step.step}
                    </div>
                    <div className="text-xs sm:text-sm">
                      <h4 className="font-bold text-navy-950 mb-0.5">{step.title}</h4>
                      <p className="text-navy-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
