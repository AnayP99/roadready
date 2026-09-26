'use client';

import React, { useState, useMemo } from 'react';
import { FuelType } from '@/types/calculator';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Card } from '@/components/ui/Card';
import { formatCurrency } from '@/lib/utils';
import { Calculator, TrendingDown, Calendar, Route } from 'lucide-react';

const DEFAULT_PRICES: Record<FuelType, number> = {
  petrol: 96.7,
  diesel: 89.6,
  cng: 79.0,
  ev: 8.0,
};

const DEFAULT_MILEAGE: Record<FuelType, number> = {
  petrol: 16.5,
  diesel: 20.0,
  cng: 26.0,
  ev: 7.0, // km per kWh
};

const FUEL_UNITS: Record<FuelType, string> = {
  petrol: 'litres',
  diesel: 'litres',
  cng: 'kg',
  ev: 'kWh',
};

export function FuelCalculator() {
  const [fuelType, setFuelType] = useState<FuelType>('petrol');
  const [tripDistance, setTripDistance] = useState<number>(150);
  const [mileage, setMileage] = useState<number>(DEFAULT_MILEAGE.petrol);
  const [fuelPrice, setFuelPrice] = useState<number>(DEFAULT_PRICES.petrol);

  // Commute inputs
  const [dailyCommute, setDailyCommute] = useState<number>(30);
  const [workingDays, setWorkingDays] = useState<number>(22);

  const handleFuelTypeChange = (type: FuelType) => {
    setFuelType(type);
    setMileage(DEFAULT_MILEAGE[type]);
    setFuelPrice(DEFAULT_PRICES[type]);
  };

  const results = useMemo(() => {
    const safeMileage = mileage > 0 ? mileage : 1;
    const safePrice = fuelPrice > 0 ? fuelPrice : 0;

    // Single Trip Calculations
    const fuelRequired = Number((tripDistance / safeMileage).toFixed(1));
    const tripCost = Math.round(fuelRequired * safePrice);
    const costPerKm = Number((safePrice / safeMileage).toFixed(2));

    // Daily & Monthly Commute
    const monthlyDistance = dailyCommute * workingDays;
    const monthlyFuelRequired = Number((monthlyDistance / safeMileage).toFixed(1));
    const monthlyCommuteCost = Math.round(monthlyFuelRequired * safePrice);
    const annualCommuteCost = monthlyCommuteCost * 12;

    return {
      fuelRequired,
      tripCost,
      costPerKm,
      monthlyDistance,
      monthlyCommuteCost,
      annualCommuteCost,
    };
  }, [tripDistance, mileage, fuelPrice, dailyCommute, workingDays]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Input Form */}
      <Card className="p-6 lg:col-span-7 bg-white">
        <div className="flex items-center gap-2.5 pb-4 border-b border-navy-100 mb-6">
          <div className="p-2 rounded-xl bg-brand-100 text-brand-900">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-navy-950 font-display">Enter Journey Details</h3>
            <p className="text-xs text-navy-500">Calculate single trip and monthly fuel expenditure</p>
          </div>
        </div>

        <div className="space-y-5">
          {/* Fuel Type selection */}
          <div>
            <label className="block text-sm font-medium text-navy-800 mb-2">Select Fuel / Powertrain Type</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(['petrol', 'diesel', 'cng', 'ev'] as FuelType[]).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleFuelTypeChange(type)}
                  className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold uppercase transition-all border ${
                    fuelType === type
                      ? 'bg-navy-900 text-white border-navy-900 shadow-sm'
                      : 'bg-white text-navy-700 border-navy-200 hover:bg-navy-50'
                  }`}
                >
                  {type === 'ev' ? 'Electric (EV)' : type}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Trip Distance (km)"
              type="number"
              min={1}
              value={tripDistance}
              onChange={(e) => setTripDistance(Math.max(1, Number(e.target.value)))}
              helperText="One-way or round-trip distance"
            />

            <Input
              label={`Vehicle Mileage (km / ${FUEL_UNITS[fuelType]})`}
              type="number"
              step="0.5"
              min={1}
              value={mileage}
              onChange={(e) => setMileage(Math.max(0.1, Number(e.target.value)))}
              helperText={`Average efficiency in km per ${FUEL_UNITS[fuelType]}`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label={`Fuel Price (₹ per ${FUEL_UNITS[fuelType]})`}
              type="number"
              step="0.1"
              value={fuelPrice}
              onChange={(e) => setFuelPrice(Math.max(0, Number(e.target.value)))}
              helperText="Current fuel price in your city"
            />

            <Input
              label="Daily Commute Distance (km)"
              type="number"
              min={0}
              value={dailyCommute}
              onChange={(e) => setDailyCommute(Math.max(0, Number(e.target.value)))}
              helperText="Round trip home-to-work distance"
            />
          </div>

          <div className="w-full sm:w-1/2">
            <Select
              label="Working Days per Month"
              value={workingDays}
              onChange={(e) => setWorkingDays(Number(e.target.value))}
            >
              <option value={20}>20 days (5 days/week)</option>
              <option value={22}>22 days (Standard month)</option>
              <option value={26}>26 days (6 days/week)</option>
              <option value={30}>30 days (Full month)</option>
            </Select>
          </div>
        </div>
      </Card>

      {/* Right Result Summary */}
      <div className="lg:col-span-5 space-y-4">
        {/* Trip Cost Banner */}
        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white rounded-2xl p-6 shadow-md border border-navy-800">
          <div className="flex items-center justify-between text-xs text-brand-400 font-semibold uppercase tracking-wider mb-2">
            <span className="flex items-center gap-1.5">
              <Route className="w-4 h-4" />
              <span>For Your {tripDistance} km Trip</span>
            </span>
            <span>{fuelType.toUpperCase()}</span>
          </div>

          <div className="text-3xl sm:text-4xl font-black font-display text-white mb-4">
            {formatCurrency(results.tripCost)}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-navy-800 text-xs">
            <div>
              <span className="text-navy-400 block mb-0.5">Fuel Needed</span>
              <span className="text-base font-bold text-white">
                {results.fuelRequired} {FUEL_UNITS[fuelType]}
              </span>
            </div>
            <div>
              <span className="text-navy-400 block mb-0.5">Running Cost</span>
              <span className="text-base font-bold text-brand-400">
                ₹{results.costPerKm} / km
              </span>
            </div>
          </div>
        </div>

        {/* Monthly & Annual Card */}
        <Card className="p-6 bg-white border border-navy-100">
          <div className="flex items-center gap-2 text-xs font-bold text-navy-500 uppercase tracking-wider mb-4">
            <Calendar className="w-4 h-4 text-brand-600" />
            <span>Monthly & Annual Office Commute</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-navy-50/70 border border-navy-100">
              <div>
                <span className="text-xs text-navy-500 block">Monthly Fuel Expense</span>
                <span className="text-xs text-navy-400 font-medium">({results.monthlyDistance} km total commute)</span>
              </div>
              <span className="text-xl font-bold font-display text-navy-950">
                {formatCurrency(results.monthlyCommuteCost)}
              </span>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl bg-navy-50/70 border border-navy-100">
              <div>
                <span className="text-xs text-navy-500 block">Estimated Annual Fuel Expense</span>
                <span className="text-xs text-navy-400 font-medium">(12 months projection)</span>
              </div>
              <span className="text-xl font-bold font-display text-navy-950">
                {formatCurrency(results.annualCommuteCost)}
              </span>
            </div>
          </div>

          <div className="mt-5 p-3 rounded-xl bg-brand-50 border border-brand-200 text-xs text-brand-950 flex items-start gap-2">
            <TrendingDown className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
            <span>
              <strong>Tip:</strong> Maintaining recommended tire pressure and keeping highway cruising speeds below 90 km/h can improve fuel mileage by up to 15%!
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
}
