import React from 'react';
import { SectionHero } from '@/components/shared/SectionHero';
import { ContentCard } from '@/components/shared/ContentCard';
import { CAR_SYSTEMS_DATA } from '@/data/car-systems';
import {
  Wrench,
  Cpu,
  Disc,
  Compass,
  Settings,
  Zap,
  CircleDot,
  AlertOctagon,
  Shield,
  Wind,
  Flame,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6" />,
  Disc: <Disc className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
  Settings: <Settings className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  CircleDot: <CircleDot className="w-6 h-6" />,
  AlertOctagon: <AlertOctagon className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Wind: <Wind className="w-6 h-6" />,
  Flame: <Flame className="w-6 h-6" />,
};

export default function KnowYourCarHubPage() {
  return (
    <div className="space-y-8">
      <SectionHero
        title="Know Your Car: Interactive Anatomy"
        description="Demystifying automotive engineering. Understand how your engine, brakes, gearbox, and safety electronics work — explained in plain English with analogies, maintenance tips, and diagnostic warning signs."
        badge="Car Mechanics Explained"
        icon={<Wrench className="w-8 h-8 text-brand-400" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CAR_SYSTEMS_DATA.map((sys) => (
          <ContentCard
            key={sys.id}
            title={sys.name}
            description={sys.shortDescription}
            href={`/know-your-car/${sys.slug}`}
            icon={ICON_MAP[sys.icon] || <Wrench className="w-6 h-6" />}
            badge={`${sys.components.length} Components`}
            category="System Guide"
          />
        ))}
      </div>
    </div>
  );
}
