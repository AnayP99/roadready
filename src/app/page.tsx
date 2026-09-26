'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SectionHero } from '@/components/shared/SectionHero';
import { StatCard } from '@/components/shared/StatCard';
import { ContentCard } from '@/components/shared/ContentCard';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { DID_YOU_KNOW_FACTS } from '@/data/did-you-know';
import { EXTERNAL_LINKS } from '@/lib/constants';
import {
  FileCheck2,
  AlertTriangle,
  Compass,
  FileText,
  ShieldAlert,
  Wrench,
  Car,
  Gauge,
  ShieldCheck,
  Fuel,
  ArrowRight,
  ExternalLink,
  Lightbulb,
  RefreshCw,
  BookOpen,
  Sparkles,
} from 'lucide-react';

export default function HomePage() {
  const [factIndex, setFactIndex] = useState(0);

  const nextFact = () => {
    setFactIndex((prev) => (prev + 1) % DID_YOU_KNOW_FACTS.length);
  };

  const currentFact = DID_YOU_KNOW_FACTS[factIndex];

  return (
    <div className="space-y-10 md:space-y-14">
      {/* Hero Banner */}
      <SectionHero
        title="Everything You Need to Be Road Ready 🚗🇮🇳"
        description="India's interactive, zero-backend platform for RTO learner's license exam prep, official road signs, step-by-step driving lessons, citizen RTO paperwork, traffic fines, and vehicle ownership calculators."
        badge="100% Client-Side"
        icon={<Car className="w-8 h-8 text-brand-400 stroke-[2.5]" />}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link href="/mock-test">
            <Button variant="primary" size="md" className="flex items-center gap-2">
              <span>Start LL Mock Test</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/road-signs">
            <Button variant="secondary" size="md" className="flex items-center gap-2 border border-white/10">
              <AlertTriangle className="w-4 h-4 text-brand-400" />
              <span>Explore 65+ Road Signs</span>
            </Button>
          </Link>
          <Link href="/rto-guide">
            <Button variant="outline" size="md" className="text-white border-white/20 hover:bg-white/10">
              <span>RTO Guides</span>
            </Button>
          </Link>
        </div>
      </SectionHero>

      {/* Quick Stats Grid */}
      <section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StatCard
            label="Mock Test Questions"
            value="90+"
            subtext="Official Sarathi exam bank with timer & scoring"
            icon={<FileCheck2 className="w-5 h-5 text-brand-600" />}
          />
          <StatCard
            label="Visual Road Signs"
            value="65+"
            subtext="Mandatory, cautionary & informatory CSS signs"
            icon={<AlertTriangle className="w-5 h-5 text-brand-600" />}
          />
          <StatCard
            label="Driving Lessons"
            value="14"
            subtext="Pedals to hill starts, parallel parking & highways"
            icon={<Compass className="w-5 h-5 text-brand-600" />}
          />
          <StatCard
            label="Traffic Fines Catalog"
            value="30+"
            subtext="Updated penalties under MV Amendment Act 2019"
            icon={<ShieldAlert className="w-5 h-5 text-brand-600" />}
          />
        </div>
      </section>

      {/* Did You Know / Traffic Rule Trivia Banner */}
      <section>
        <Card className="bg-gradient-to-r from-brand-50 via-white to-brand-50/50 border-brand-200 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-500 text-navy-950 rounded-2xl shadow-sm shrink-0">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-brand-900 uppercase tracking-wider font-display">
                    Indian Traffic Rule & Law Trivia
                  </span>
                  <Badge variant="outline" size="sm" className="text-[10px] bg-white">
                    Fact #{factIndex + 1} of {DID_YOU_KNOW_FACTS.length}
                  </Badge>
                </div>
                <p className="text-sm sm:text-base font-semibold text-navy-900 leading-relaxed max-w-3xl">
                  &ldquo;{currentFact.fact}&rdquo;
                </p>
                <div className="text-xs text-navy-500 pt-0.5">
                  <strong className="text-navy-700">Source:</strong> {currentFact.source}
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextFact}
              className="shrink-0 self-start md:self-center flex items-center gap-1.5 bg-white hover:bg-brand-50 border-brand-300 text-brand-950 font-semibold"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Next Rule</span>
            </Button>
          </div>
        </Card>
      </section>

      {/* Core Learning Pillars */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-navy-100 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-brand-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 font-display">
                Core Curriculum
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-display">
              Learner&apos;s License & Driving Mastery
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-navy-500 max-w-md">
            Interactive learning tools structured around Indian road regulations and driving school curriculums.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContentCard
            title="RTO Mock Test Simulator"
            description="Practice 20-minute timed mock tests matching real Sarathi RTO exams. Features instant scoring, Fisher-Yates question shuffling, and mistake review."
            href="/mock-test"
            category="Interactive Quiz"
            badge="Popular"
            readTime={20}
            icon={<FileCheck2 className="w-6 h-6 text-brand-600" />}
          />

          <ContentCard
            title="Road Signs Encyclopedia"
            description="Browse 65+ official Indian road signs rendered via dynamic CSS shapes. Search by name, speed limit, or regulatory category with instant modal deep-dives."
            href="/road-signs"
            category="Encyclopedia"
            badge="65+ Signs"
            readTime={10}
            icon={<AlertTriangle className="w-6 h-6 text-brand-600" />}
          />

          <ContentCard
            title="Step-by-Step Driving Tutorials"
            description="Master driving from day zero: cockpit drill, clutch biting point, gear shifting, parallel parking, roundabout etiquette, and monsoon hydroplaning avoidance."
            href="/learn-driving"
            category="Masterclass"
            badge="14 Lessons"
            readTime={15}
            icon={<Compass className="w-6 h-6 text-brand-600" />}
          />

          <ContentCard
            title="Citizen RTO Procedures Guide"
            description="Complete paperwork walkthroughs for Learner's License, Permanent License, Renewal, Duplicate DL, and Registration without paying touts or agents."
            href="/rto-guide"
            category="Direct Citizen Guide"
            badge="Checklists"
            readTime={8}
            icon={<FileText className="w-6 h-6 text-brand-600" />}
          />

          <ContentCard
            title="Traffic Rules & Penalties Directory"
            description="Searchable database of updated traffic fines under the Motor Vehicles (Amendment) Act 2019, including court challan amounts, repeat offense penalties, and legal sections."
            href="/traffic-rules"
            category="Legal Directory"
            badge="MV Act 2019"
            readTime={5}
            icon={<ShieldAlert className="w-6 h-6 text-brand-600" />}
          />

          <ContentCard
            title="Know Your Car (Vehicle Anatomy)"
            description="Understand how your vehicle works in plain English: engine, transmission (MT, AMT, CVT, AT, DCT), brakes, suspension, warning lamps, and debunked automotive myths."
            href="/know-your-car"
            category="Mechanics"
            badge="10 Systems"
            readTime={12}
            icon={<Wrench className="w-6 h-6 text-brand-600" />}
          />
        </div>
      </section>

      {/* Interactive Calculators & Tools */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-navy-100 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <BookOpen className="w-4 h-4 text-brand-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 font-display">
                Calculators & Ownership
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-display">
              Smart Vehicle Ownership Tools
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-navy-500 max-w-md">
            Interactive financial calculators, pre-purchase checklists, and routine maintenance planners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContentCard
            title="Car Buying Guide"
            description="New vs used comparisons, 50-point inspection checklist, Loan EMI calculator, and 5-year True Cost of Ownership projections."
            href="/car-buying"
            category="Buyer Guide"
            badge="EMI & TCO"
            icon={<Car className="w-6 h-6 text-navy-800" />}
          />

          <ContentCard
            title="Fuel & Commute Calculator"
            description="Calculate trip and monthly commute expenses across Petrol, Diesel, CNG, and EV powertrains with proven efficiency tips."
            href="/fuel-calculator"
            category="Calculator"
            badge="Multi-Fuel"
            icon={<Fuel className="w-6 h-6 text-navy-800" />}
          />

          <ContentCard
            title="Maintenance & Service Schedule"
            description="Kilometer-based service intervals, engine oil viscosity guidelines, tire health, and DIY safety checks you can do at home."
            href="/maintenance"
            category="Vehicle Care"
            badge="DIY Checklist"
            icon={<Gauge className="w-6 h-6 text-navy-800" />}
          />

          <ContentCard
            title="Defensive Driving & Safety"
            description="Emergency helpline directory (112, 1033, 108), Good Samaritan legal rights, child seats (ISOFIX), and space cushioning habits."
            href="/safety-tips"
            category="Road Safety"
            badge="Emergency 112"
            icon={<ShieldCheck className="w-6 h-6 text-navy-800" />}
          />
        </div>
      </section>

      {/* Official Government Portals Quick Launch */}
      <section className="bg-navy-950 text-white rounded-3xl p-6 sm:p-10 border border-navy-800 shadow-lg">
        <div className="max-w-3xl space-y-3 mb-8">
          <Badge variant="brand" size="md">
            Official Citizen Portals
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Direct Access to Government Transport Services
          </h2>
          <p className="text-navy-200 text-sm sm:text-base leading-relaxed">
            Access statutory portals launched by the Ministry of Road Transport and Highways (MoRTH) without intermediaries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href={EXTERNAL_LINKS.SARATHI}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white text-base font-display">Sarathi Parivahan</span>
                <ExternalLink className="w-4 h-4 text-brand-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="text-xs text-navy-300 leading-relaxed mb-4">
                Learner&apos;s license applications, permanent driving license appointments, test slot booking, and online LL exams.
              </p>
            </div>
            <span className="text-xs font-semibold text-brand-400">Launch sarathi.parivahan.gov.in →</span>
          </a>

          <a
            href={EXTERNAL_LINKS.PARIVAHAN}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white text-base font-display">Vahan Parivahan</span>
                <ExternalLink className="w-4 h-4 text-brand-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="text-xs text-navy-300 leading-relaxed mb-4">
                Vehicle registration certificates (RC), road tax payments, hypothecation termination, and ownership transfers.
              </p>
            </div>
            <span className="text-xs font-semibold text-brand-400">Launch vahan.parivahan.gov.in →</span>
          </a>

          <a
            href="https://echallan.parivahan.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white text-base font-display">e-Challan Portal</span>
                <ExternalLink className="w-4 h-4 text-brand-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="text-xs text-navy-300 leading-relaxed mb-4">
                Verify pending electronic traffic challans against vehicle registration numbers or driving license numbers.
              </p>
            </div>
            <span className="text-xs font-semibold text-brand-400">Launch echallan.parivahan.gov.in →</span>
          </a>
        </div>
      </section>
    </div>
  );
}
