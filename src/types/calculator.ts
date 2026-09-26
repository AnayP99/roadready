export type FuelType = 'petrol' | 'diesel' | 'cng' | 'ev';

export interface FuelCalculatorInputs {
  tripDistance: number; // km
  mileage: number; // km/l or km/kg or km/kWh
  fuelType: FuelType;
  fuelPrice: number; // ₹ per unit
  dailyDistance: number; // km
  workingDays: number; // days per month
}

export interface FuelCalculatorResults {
  fuelRequired: number; // litres/units
  tripCost: number; // ₹
  costPerKm: number; // ₹
  monthlyCommuteCost: number; // ₹
  annualCommuteCost: number; // ₹
}

export interface EMICalculatorInputs {
  principal: number; // loan amount in ₹
  interestRate: number; // annual percentage rate %
  tenureYears: number; // duration in years
}

export interface EMICalculatorResults {
  monthlyEMI: number; // ₹
  totalInterest: number; // ₹
  totalPayment: number; // ₹ (principal + interest)
}

export interface BudgetCalculatorInputs {
  exShowroomPrice: number; // ₹
  stateRoadTaxRate: number; // % (default ~10%)
  insuranceCost: number; // ₹
  fastagRegistration: number; // ₹
  accessories: number; // ₹
  downPayment: number; // ₹
  loanInterestRate: number; // %
  loanTenureYears: number; // years
  monthlyFuelBudget: number; // ₹
  annualMaintenanceEst: number; // ₹
}

export interface BudgetCalculatorResults {
  onRoadPrice: number;
  loanAmount: number;
  monthlyEMI: number;
  totalInterest: number;
  monthlyTotalRunningCost: number; // EMI + Fuel + Maintenance/12 + Insurance/12
  fiveYearOwnershipCost: number;
}
