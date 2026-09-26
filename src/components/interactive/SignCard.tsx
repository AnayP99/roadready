'use client';

import React, { useState } from 'react';
import { RoadSign } from '@/types/road-sign';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDownLeft,
  ArrowDownRight,
  MoveUpLeft,
  MoveUpRight,
  Volume2,
  VolumeX,
  Bike,
  Undo2,
  Redo2,
  Car,
  Truck,
  CornerUpRight,
  CornerUpLeft,
  TrendingUp,
  TrendingDown,
  Minimize2,
  Columns,
  Footprints,
  Users,
  Activity,
  Wind,
  Mountain,
  RotateCw,
  RotateCcw,
  HardHat,
  Train,
  Split,
  Shield,
  ShieldAlert,
  Fuel,
  Utensils,
  Bed,
  Phone,
  Cross,
  Hand,
  Info,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SignCardProps {
  sign: RoadSign;
  className?: string;
}

// Icon mapping lookup
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDownLeft,
  ArrowDownRight,
  MoveUpLeft,
  MoveUpRight,
  Volume2,
  VolumeX,
  Bike,
  Undo2,
  Redo2,
  Car,
  Truck,
  CornerUpRight,
  CornerUpLeft,
  TrendingUp,
  TrendingDown,
  Minimize2,
  Columns,
  Footprints,
  Users,
  Activity,
  Wind,
  Mountain,
  RotateCw,
  RotateCcw,
  HardHat,
  Train,
  Split,
  Shield,
  ShieldAlert,
  Fuel,
  Utensils,
  Bed,
  Phone,
  Cross,
  Hand,
};

export function SignCard({ sign, className }: SignCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  // Render the visual sign representation using pure CSS/SVG
  const renderVisualSign = (size: 'card' | 'modal' = 'card') => {
    const isModal = size === 'modal';
    const dim = isModal ? 'w-36 h-36' : 'w-24 h-24';

    // 1. Mandatory - Blue Circle
    if (sign.category === 'mandatory') {
      const IconComponent = sign.iconName ? ICON_MAP[sign.iconName] : null;

      return (
        <div
          className={cn(
            dim,
            'rounded-full bg-blue-600 border-2 border-white shadow-md flex items-center justify-center text-white shrink-0'
          )}
        >
          {IconComponent ? (
            <IconComponent className={isModal ? 'w-20 h-20 stroke-[2.5]' : 'w-12 h-12 stroke-[2.5]'} />
          ) : sign.textOverlay ? (
            <span className={cn('font-display font-black text-white', isModal ? 'text-4xl' : 'text-2xl')}>
              {sign.textOverlay}
            </span>
          ) : (
            <ArrowUp className={isModal ? 'w-16 h-16' : 'w-10 h-10'} />
          )}
        </div>
      );
    }

    // 2. Stop Sign - Octagon
    if (sign.shape === 'octagon') {
      return (
        <div
          className={cn(
            dim,
            'bg-red-600 text-white font-black font-display flex items-center justify-center shadow-md shrink-0 border-2 border-white',
            isModal ? 'text-3xl tracking-wider' : 'text-xl tracking-wide'
          )}
          style={{
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          }}
        >
          STOP
        </div>
      );
    }

    // 3. Give Way - Inverted Triangle
    if (sign.shape === 'inverted-triangle') {
      return (
        <div className={cn(dim, 'relative flex items-center justify-center shrink-0')}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <polygon points="10,15 90,15 50,88" fill="white" stroke="#dc2626" strokeWidth="12" />
          </svg>
        </div>
      );
    }

    // 4. Prohibitory - Red Circle with white center / blue center
    if (sign.category === 'prohibitory') {
      const isBlueBg = sign.id.includes('no-parking') || sign.id.includes('no-stopping');
      const IconComponent = sign.iconName ? ICON_MAP[sign.iconName] : null;

      return (
        <div
          className={cn(
            dim,
            'rounded-full border-4 border-red-600 shadow-md flex items-center justify-center relative overflow-hidden shrink-0',
            isBlueBg ? 'bg-blue-600' : 'bg-white'
          )}
        >
          {/* No Entry Horizontal Bar */}
          {sign.id === 'sign-prohib-no-entry' && (
            <div className="w-4/5 h-2.5 bg-white rounded-full shadow-sm" />
          )}

          {/* Speed Limit Numbers */}
          {sign.textOverlay && !isBlueBg && (
            <span className={cn('font-display font-extrabold text-navy-950', isModal ? 'text-4xl' : 'text-2xl')}>
              {sign.textOverlay}
            </span>
          )}

          {/* No Parking single diagonal slash */}
          {sign.id === 'sign-prohib-no-parking' && (
            <>
              <span className={cn('font-display font-black text-white z-0', isModal ? 'text-5xl' : 'text-3xl')}>P</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-2 bg-red-600 -rotate-45" />
              </div>
            </>
          )}

          {/* No Stopping double red cross */}
          {sign.id === 'sign-prohib-no-stopping' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-2 bg-red-600 rotate-45 absolute" />
              <div className="w-full h-2 bg-red-600 -rotate-45 absolute" />
            </div>
          )}

          {/* Icon with diagonal red strike */}
          {IconComponent && (
            <>
              <IconComponent className={cn(isModal ? 'w-16 h-16' : 'w-10 h-10', 'text-navy-900')} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-2 bg-red-600 -rotate-45" />
              </div>
            </>
          )}
        </div>
      );
    }

    // 5. Cautionary / Warning - Triangle pointing up
    if (sign.category === 'cautionary' || sign.shape === 'triangle') {
      const IconComponent = sign.iconName ? ICON_MAP[sign.iconName] : null;

      return (
        <div className={cn(dim, 'relative flex items-center justify-center shrink-0')}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <polygon points="50,12 90,85 10,85" fill="white" stroke="#dc2626" strokeWidth="10" strokeLinejoin="round" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center pt-3 text-navy-950">
            {IconComponent ? (
              <IconComponent className={isModal ? 'w-12 h-12 stroke-[2.5]' : 'w-7 h-7 stroke-[2.5]'} />
            ) : sign.textOverlay ? (
              <span className={cn('font-bold font-display', isModal ? 'text-xl' : 'text-sm')}>{sign.textOverlay}</span>
            ) : (
              <Info className={isModal ? 'w-10 h-10' : 'w-6 h-6'} />
            )}
          </div>
        </div>
      );
    }

    // 6. Informatory - Blue or Green Rectangle
    if (sign.category === 'informatory') {
      const IconComponent = sign.iconName ? ICON_MAP[sign.iconName] : null;

      return (
        <div
          className={cn(
            isModal ? 'w-36 h-28' : 'w-24 h-20',
            'rounded-xl bg-blue-600 border-2 border-white shadow-md flex flex-col items-center justify-center text-white shrink-0 p-1'
          )}
        >
          {sign.textOverlay ? (
            <span className={cn('font-display font-black tracking-wider', isModal ? 'text-4xl' : 'text-2xl')}>
              {sign.textOverlay}
            </span>
          ) : IconComponent ? (
            <IconComponent className={isModal ? 'w-16 h-16' : 'w-10 h-10'} />
          ) : (
            <Info className={isModal ? 'w-12 h-12' : 'w-8 h-8'} />
          )}
        </div>
      );
    }

    // 7. Traffic Lights
    if (sign.category === 'traffic-lights') {
      const isRed = sign.primaryColor === 'red';
      const isYellow = sign.primaryColor === 'yellow';
      const isGreen = sign.primaryColor === 'green';

      return (
        <div
          className={cn(
            isModal ? 'w-24 h-40' : 'w-16 h-28',
            'bg-navy-950 border-2 border-navy-700 rounded-2xl shadow-md p-2 flex flex-col justify-between items-center shrink-0'
          )}
        >
          <div className={cn('w-6 h-6 rounded-full border border-black/40', isRed ? 'bg-red-500 shadow-lg shadow-red-500/50' : 'bg-red-950/60')} />
          <div className={cn('w-6 h-6 rounded-full border border-black/40', isYellow ? 'bg-amber-400 shadow-lg shadow-amber-400/50' : 'bg-amber-950/60')} />
          <div className={cn('w-6 h-6 rounded-full border border-black/40', isGreen ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50' : 'bg-emerald-950/60')} />
        </div>
      );
    }

    // 8. Road Markings & Hand Signals (Default fallback)
    const IconComponent = sign.iconName ? ICON_MAP[sign.iconName] : null;
    return (
      <div
        className={cn(
          isModal ? 'w-36 h-28' : 'w-24 h-20',
          'rounded-xl bg-navy-900 border border-navy-700 shadow-md flex items-center justify-center text-white shrink-0 p-2'
        )}
      >
        {IconComponent ? (
          <IconComponent className={isModal ? 'w-16 h-16 text-brand-400' : 'w-10 h-10 text-brand-400'} />
        ) : (
          <div className="w-full h-1.5 border-t-2 border-dashed border-white" />
        )}
      </div>
    );
  };

  const getCategoryBadgeVariant = (cat: RoadSign['category']) => {
    switch (cat) {
      case 'mandatory':
        return 'navy';
      case 'prohibitory':
        return 'danger';
      case 'cautionary':
        return 'brand';
      case 'informatory':
        return 'outline';
      default:
        return 'navy';
    }
  };

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className={cn(
          'group relative bg-white rounded-2xl border border-navy-100 p-5 shadow-sm hover:shadow-md hover:border-brand-300 transition-all duration-200 cursor-pointer flex flex-col justify-between items-center text-center',
          className
        )}
      >
        <div className="mb-3">
          <Badge variant={getCategoryBadgeVariant(sign.category)} size="sm">
            {sign.category.replace(/-/g, ' ').toUpperCase()}
          </Badge>
        </div>

        {/* Visual Sign */}
        <div className="my-2 group-hover:scale-105 transition-transform duration-200">
          {renderVisualSign('card')}
        </div>

        <div className="mt-3 w-full">
          <h4 className="font-bold text-sm font-display text-navy-950 group-hover:text-brand-600 transition-colors line-clamp-1">
            {sign.name}
          </h4>
          <p className="text-xs text-navy-500 line-clamp-2 mt-1 leading-snug">
            {sign.meaning}
          </p>
        </div>
      </div>

      {/* Detail Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={sign.name} maxWidth="md">
        <div className="flex flex-col items-center text-center">
          <div className="my-4">{renderVisualSign('modal')}</div>

          <Badge variant={getCategoryBadgeVariant(sign.category)} size="md" className="mb-3">
            {sign.category.replace(/-/g, ' ').toUpperCase()} SIGN
          </Badge>

          <div className="text-left w-full space-y-4 mt-2">
            <div className="bg-navy-50/70 p-4 rounded-xl border border-navy-100">
              <h5 className="text-xs font-bold text-navy-400 uppercase tracking-wider mb-1">
                What It Means
              </h5>
              <p className="text-sm font-medium text-navy-900 leading-relaxed">{sign.meaning}</p>
            </div>

            <div>
              <h5 className="text-xs font-bold text-navy-400 uppercase tracking-wider mb-1">
                Detailed Regulatory Context
              </h5>
              <p className="text-sm text-navy-700 leading-relaxed">{sign.details}</p>
            </div>

            <div>
              <h5 className="text-xs font-bold text-navy-400 uppercase tracking-wider mb-1">
                Where Typically Encountered
              </h5>
              <p className="text-sm text-navy-700 leading-relaxed">{sign.whereFound}</p>
            </div>

            {sign.funFact && (
              <div className="bg-brand-50 border border-brand-200 p-3.5 rounded-xl">
                <span className="text-xs font-bold text-brand-900 block mb-0.5">
                  Did You Know?
                </span>
                <p className="text-xs text-brand-950 leading-relaxed">{sign.funFact}</p>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
