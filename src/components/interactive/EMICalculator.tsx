'use client';

import React, { useState, useMemo } from 'react';
import { Card } from '@/components/ui/Card';
import { formatCurrency } from '@/lib/utils';
import { Coins } from 'lucide-react';

export function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(600000);
  const [interestRate, setInterestRate] = useState<number>(9.0);
  const [tenureYears, setTenureYears] = useState<number>(5);

  const results = useMemo(() => {
    const P = Math.max(1000, loanAmount);
    const annualR = Math.max(0.1, interestRate);
    const r = annualR / 12 / 100;
    const n = Math.max(1, tenureYears * 12);

    // EMI formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const emi = Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    const totalPayment = emi * n;
    const totalInterest = Math.max(0, totalPayment - P);
    const principalPercent = Math.round((P / totalPayment) * 100);
    const interestPercent = 100 - principalPercent;

    return {
      monthlyEMI: emi,
      totalInterest,
      totalPayment,
      principalPercent,
      interestPercent,
      months: n,
    };
  }, [loanAmount, interestRate, tenureYears]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Inputs */}
      <Card className="p-6 lg:col-span-7 bg-white">
        <div className="flex items-center gap-2.5 pb-4 border-b border-navy-100 mb-6">
          <div className="p-2 rounded-xl bg-brand-100 text-brand-900">
            <Coins className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-navy-950 font-display">Car Loan EMI Calculator</h3>
            <p className="text-xs text-navy-500">Calculate monthly repayments and total interest charges</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Loan Amount */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor="emi-loan-amount" className="text-sm font-medium text-navy-800">Loan Amount (Principal)</label>
              <span className="text-sm font-bold text-brand-700 font-display">{formatCurrency(loanAmount)}</span>
            </div>
            <input
              id="emi-loan-amount"
              type="range"
              min={50000}
              max={3000000}
              step={25000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-navy-100 rounded-lg appearance-none cursor-pointer accent-brand-500"
            />
            <div className="flex justify-between text-[11px] text-navy-400 mt-1">
              <span>₹50,000</span>
              <span>₹15 Lakh</span>
              <span>₹30 Lakh</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor="emi-interest-rate" className="text-sm font-medium text-navy-800">Annual Interest Rate (%)</label>
              <span className="text-sm font-bold text-brand-700 font-display">{interestRate}% p.a.</span>
            </div>
            <input
              id="emi-interest-rate"
              type="range"
              min={7.0}
              max={16.0}
              step={0.25}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-navy-100 rounded-lg appearance-none cursor-pointer accent-brand-500"
            />
            <div className="flex justify-between text-[11px] text-navy-400 mt-1">
              <span>7% (PSU Banks)</span>
              <span>9% (Avg Private)</span>
              <span>16% (Used Car)</span>
            </div>
          </div>

          {/* Tenure */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-sm font-medium text-navy-800">Loan Duration / Tenure</label>
              <span className="text-sm font-bold text-brand-700 font-display">{tenureYears} Years ({results.months} months)</span>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => setTenureYears(yr)}
                  className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                    tenureYears === yr
                      ? 'bg-navy-900 text-white border-navy-900 shadow-sm'
                      : 'bg-white text-navy-700 border-navy-200 hover:bg-navy-50'
                  }`}
                >
                  {yr} {yr === 1 ? 'Yr' : 'Yrs'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Results */}
      <div className="lg:col-span-5 space-y-4">
        <div className="bg-navy-950 text-white rounded-2xl p-6 shadow-md border border-navy-800">
          <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider block mb-1">
            Monthly Payable EMI
          </span>
          <div className="text-3xl sm:text-4xl font-black font-display text-white mb-5">
            {formatCurrency(results.monthlyEMI)}
            <span className="text-sm font-normal text-navy-400"> / month</span>
          </div>

          {/* Visual Ratio Bar */}
          <div className="space-y-2 mb-5">
            <div className="flex justify-between text-xs text-navy-300">
              <span>Principal: {results.principalPercent}%</span>
              <span>Interest: {results.interestPercent}%</span>
            </div>
            <div className="w-full h-3 rounded-full overflow-hidden flex bg-navy-800">
              <div style={{ width: `${results.principalPercent}%` }} className="bg-brand-500 h-full" />
              <div style={{ width: `${results.interestPercent}%` }} className="bg-amber-700 h-full" />
            </div>
          </div>

          <div className="space-y-2.5 pt-4 border-t border-navy-800 text-xs">
            <div className="flex justify-between py-1">
              <span className="text-navy-400">Principal Loan:</span>
              <span className="font-bold text-white">{formatCurrency(loanAmount)}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-navy-400">Total Interest to Pay:</span>
              <span className="font-bold text-brand-400">{formatCurrency(results.totalInterest)}</span>
            </div>
            <div className="flex justify-between py-1 border-t border-navy-800/60 pt-2">
              <span className="text-navy-300 font-semibold">Total Amount Payable:</span>
              <span className="font-extrabold text-white text-sm">{formatCurrency(results.totalPayment)}</span>
            </div>
          </div>
        </div>

        <Card className="p-4 bg-navy-50/70 border border-navy-100 text-xs text-navy-600 leading-relaxed">
          <p>
            💡 <strong>Smart Prepayment Tip:</strong> Paying just <strong>one extra EMI per year</strong> or increasing your monthly EMI by 5% each year can reduce your total interest payout by 20% to 30% and clear your loan 12-18 months early!
          </p>
        </Card>
      </div>
    </div>
  );
}
