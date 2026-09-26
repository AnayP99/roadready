'use client';

import React, { useState, useMemo } from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { formatCurrency } from '@/lib/utils';
import { Wallet, Car, Layers } from 'lucide-react';

export function BudgetCalculator() {
  const [exShowroom, setExShowroom] = useState<number>(850000);
  const [roadTaxPercent, setRoadTaxPercent] = useState<number>(10);
  const [insurance, setInsurance] = useState<number>(35000);
  const [fastagAccessories, setFastagAccessories] = useState<number>(15000);

  // Loan inputs
  const [downPayment, setDownPayment] = useState<number>(200000);
  const [interestRate, setInterestRate] = useState<number>(9.0);
  const [tenureYears] = useState<number>(5);

  // Ongoing running inputs
  const [monthlyFuel, setMonthlyFuel] = useState<number>(4500);
  const [annualMaintenance, setAnnualMaintenance] = useState<number>(8000);

  const results = useMemo(() => {
    // 1. On-Road Price
    const rtoTax = Math.round((exShowroom * roadTaxPercent) / 100);
    const onRoadPrice = exShowroom + rtoTax + insurance + fastagAccessories;

    // 2. Loan & EMI
    const loanPrincipal = Math.max(0, onRoadPrice - downPayment);
    let monthlyEMI = 0;
    let totalInterest = 0;

    if (loanPrincipal > 0) {
      const r = interestRate / 12 / 100;
      const n = tenureYears * 12;
      monthlyEMI = Math.round((loanPrincipal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
      totalInterest = Math.max(0, monthlyEMI * n - loanPrincipal);
    }

    // 3. Ongoing Running Cost
    const monthlyMaintenance = Math.round(annualMaintenance / 12);
    const monthlyInsuranceAvg = Math.round(insurance / 12);
    const totalMonthlyExpense = monthlyEMI + monthlyFuel + monthlyMaintenance + monthlyInsuranceAvg;

    // 4. 5-Year Ownership Cost
    // Down payment + (EMI * 12 * 5) + (Fuel * 60) + (Maintenance * 5) + (Insurance * 5)
    const fiveYearFuel = monthlyFuel * 60;
    const fiveYearMaintenance = annualMaintenance * 5;
    const fiveYearInsurance = insurance * 5;
    const fiveYearEMI = monthlyEMI * Math.min(60, tenureYears * 12);
    const fiveYearOwnership = downPayment + fiveYearEMI + fiveYearFuel + fiveYearMaintenance + fiveYearInsurance;

    return {
      rtoTax,
      onRoadPrice,
      loanPrincipal,
      monthlyEMI,
      totalInterest,
      totalMonthlyExpense,
      fiveYearOwnership,
    };
  }, [
    exShowroom,
    roadTaxPercent,
    insurance,
    fastagAccessories,
    downPayment,
    interestRate,
    tenureYears,
    monthlyFuel,
    annualMaintenance,
  ]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Inputs Column */}
      <div className="lg:col-span-7 space-y-6">
        <Card className="p-6 bg-white">
          <div className="flex items-center gap-2.5 pb-4 border-b border-navy-100 mb-5">
            <div className="p-2 rounded-xl bg-brand-100 text-brand-900">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy-950 font-display">1. On-Road Price Estimation</h3>
              <p className="text-xs text-navy-500">Calculate showroom, state tax, and mandatory registration</p>
            </div>
          </div>

          <div className="space-y-4">
            <Input
              label="Ex-Showroom Price (₹)"
              type="number"
              step={10000}
              value={exShowroom}
              onChange={(e) => setExShowroom(Math.max(100000, Number(e.target.value)))}
              helperText="Sticker price announced by manufacturer"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy-800 mb-1.5">
                  State Road Tax / RTO ({roadTaxPercent}%)
                </label>
                <input
                  type="range"
                  min={6}
                  max={18}
                  step={1}
                  value={roadTaxPercent}
                  onChange={(e) => setRoadTaxPercent(Number(e.target.value))}
                  className="w-full h-2 bg-navy-100 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div className="flex justify-between text-[11px] text-navy-400 mt-1">
                  <span>6% (Low tax states)</span>
                  <span>10% (Avg)</span>
                  <span>18% (High tax)</span>
                </div>
              </div>

              <Input
                label="1st Year Insurance (₹)"
                type="number"
                step={2000}
                value={insurance}
                onChange={(e) => setInsurance(Math.max(0, Number(e.target.value)))}
              />
            </div>

            <Input
              label="FASTag, High Security Plates, Accessories (₹)"
              type="number"
              value={fastagAccessories}
              onChange={(e) => setFastagAccessories(Math.max(0, Number(e.target.value)))}
            />
          </div>
        </Card>

        {/* Loan & Monthly Costs */}
        <Card className="p-6 bg-white">
          <div className="flex items-center gap-2.5 pb-4 border-b border-navy-100 mb-5">
            <div className="p-2 rounded-xl bg-brand-100 text-brand-900">
              <Wallet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy-950 font-display">2. Down Payment & Ongoing Running</h3>
              <p className="text-xs text-navy-500">Plan monthly budget for fuel, servicing, and repayments</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Down Payment (₹)"
                type="number"
                step={25000}
                value={downPayment}
                onChange={(e) => setDownPayment(Math.max(0, Number(e.target.value)))}
                helperText="Cash paid upfront from savings"
              />

              <Input
                label="Loan Interest Rate (%)"
                type="number"
                step={0.25}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                helperText="Typical car loan: 8.5% - 9.5%"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Estimated Monthly Fuel Cost (₹)"
                type="number"
                step={500}
                value={monthlyFuel}
                onChange={(e) => setMonthlyFuel(Math.max(0, Number(e.target.value)))}
              />

              <Input
                label="Estimated Annual Service / Maintenance (₹)"
                type="number"
                step={1000}
                value={annualMaintenance}
                onChange={(e) => setAnnualMaintenance(Math.max(0, Number(e.target.value)))}
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Results Column */}
      <div className="lg:col-span-5 space-y-4">
        {/* On-Road Price Box */}
        <div className="bg-navy-950 text-white rounded-2xl p-6 shadow-md border border-navy-800">
          <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider block mb-1">
            Total Estimated On-Road Price
          </span>
          <div className="text-3xl sm:text-4xl font-black font-display text-white mb-4">
            {formatCurrency(results.onRoadPrice)}
          </div>

          <div className="space-y-2 pt-3 border-t border-navy-800 text-xs text-navy-300">
            <div className="flex justify-between">
              <span>Ex-Showroom:</span>
              <span className="text-white font-medium">{formatCurrency(exShowroom)}</span>
            </div>
            <div className="flex justify-between">
              <span>RTO Registration & Road Tax:</span>
              <span className="text-white font-medium">{formatCurrency(results.rtoTax)}</span>
            </div>
            <div className="flex justify-between">
              <span>Comprehensive 1st Yr Insurance:</span>
              <span className="text-white font-medium">{formatCurrency(insurance)}</span>
            </div>
            <div className="flex justify-between">
              <span>FASTag & Dealer Kits:</span>
              <span className="text-white font-medium">{formatCurrency(fastagAccessories)}</span>
            </div>
          </div>
        </div>

        {/* Monthly Pocket Impact */}
        <Card className="p-6 bg-white border border-navy-100">
          <div className="flex items-center gap-2 text-xs font-bold text-navy-500 uppercase tracking-wider mb-4">
            <Layers className="w-4 h-4 text-brand-600" />
            <span>Monthly Cash Outflow (Real Cost)</span>
          </div>

          <div className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-display mb-4">
            {formatCurrency(results.totalMonthlyExpense)}
            <span className="text-xs font-normal text-navy-500"> / month</span>
          </div>

          <div className="space-y-2 text-xs text-navy-700 bg-navy-50 p-4 rounded-xl border border-navy-100 mb-4">
            <div className="flex justify-between">
              <span>Loan Monthly EMI:</span>
              <span className="font-bold text-navy-950">{formatCurrency(results.monthlyEMI)}</span>
            </div>
            <div className="flex justify-between">
              <span>Fuel Budget:</span>
              <span className="font-bold text-navy-950">{formatCurrency(monthlyFuel)}</span>
            </div>
            <div className="flex justify-between">
              <span>Maintenance Buffer (monthly):</span>
              <span className="font-bold text-navy-950">{formatCurrency(Math.round(annualMaintenance / 12))}</span>
            </div>
            <div className="flex justify-between">
              <span>Future Insurance Reserve:</span>
              <span className="font-bold text-navy-950">{formatCurrency(Math.round(insurance / 12))}</span>
            </div>
          </div>

          {/* 5-Year Ownership Projection */}
          <div className="pt-3 border-t border-navy-100">
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-navy-500 font-semibold">5-Year Total Cost of Ownership:</span>
              <span className="text-base font-bold text-brand-700 font-display">
                {formatCurrency(results.fiveYearOwnership)}
              </span>
            </div>
            <p className="text-[11px] text-navy-400 mt-1 leading-snug">
              Includes down payment, 5 years of loan repayments, fuel, insurance renewals, and periodic servicing.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
