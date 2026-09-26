import React from 'react';
import { SectionHero } from '@/components/shared/SectionHero';
import { FuelCalculator } from '@/components/interactive/FuelCalculator';
import { Card } from '@/components/ui/Card';
import { Fuel, Lightbulb } from 'lucide-react';

export default function FuelCalculatorPage() {
  return (
    <div className="space-y-8">
      <SectionHero
        title="Fuel Economy & Trip Cost Calculator"
        description="Calculate the exact fuel expenditure for your outstation road trips and daily office commutes. Compare petrol, diesel, CNG, and electric vehicle (EV) running costs per kilometer."
        badge="Interactive Commute Calculator"
        icon={<Fuel className="w-8 h-8 text-brand-400" />}
      />

      {/* Main Interactive Tool */}
      <FuelCalculator />

      {/* Proven Fuel Economy Tips */}
      <Card className="p-6 sm:p-8 bg-white border border-navy-100 shadow-sm space-y-4">
        <h3 className="text-xl font-bold font-display text-navy-950 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-brand-600" />
          <span>7 Proven Habits to Boost Fuel Mileage by 15-20%</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100 text-xs sm:text-sm space-y-1">
            <strong className="text-navy-950 block">1. Maintain Cold Tire Pressure</strong>
            <p className="text-navy-600 leading-relaxed">
              Under-inflated tires by just 5 PSI increase rolling resistance and burn up to 3-5% more fuel. Check pressure every two weeks.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100 text-xs sm:text-sm space-y-1">
            <strong className="text-navy-950 block">2. Smooth Throttle Modulation</strong>
            <p className="text-navy-600 leading-relaxed">
              Aggressive jackrabbit starts and rapid braking waste up to 30% of fuel. Accelerate gently and anticipate red lights early.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100 text-xs sm:text-sm space-y-1">
            <strong className="text-navy-950 block">3. The 80-90 km/h Highway Sweet Spot</strong>
            <p className="text-navy-600 leading-relaxed">
              Aerodynamic drag increases with the square of speed. Driving at 120 km/h burns roughly 25% more fuel than cruising smoothly at 90 km/h.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100 text-xs sm:text-sm space-y-1">
            <strong className="text-navy-950 block">4. Windows vs. Air Conditioning</strong>
            <p className="text-navy-600 leading-relaxed">
              At city speeds under 50 km/h, rolled-down windows use less fuel than AC. At highway speeds above 75 km/h, closed windows with AC are more aerodynamic and fuel-efficient.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100 text-xs sm:text-sm space-y-1">
            <strong className="text-navy-950 block">5. Avoid Excessive Morning Idling</strong>
            <p className="text-navy-600 leading-relaxed">
              Modern fuel-injected engines require only 20 seconds before driving off gently. Prolonged idling wastes fuel and builds carbon.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100 text-xs sm:text-sm space-y-1">
            <strong className="text-navy-950 block">6. Clean Air Filter Replacements</strong>
            <p className="text-navy-600 leading-relaxed">
              A dust-choked air filter starves the engine of oxygen, forcing the ECU to inject extra fuel to maintain combustion.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
