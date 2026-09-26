export interface NavItem {
  label: string;
  href: string;
  description: string;
  iconName: string;
  badge?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    label: 'Mock Test',
    href: '/mock-test',
    description: "Official-pattern RTO learner's license mock test with timer and scoring",
    iconName: 'FileCheck2',
    badge: 'Popular',
  },
  {
    label: 'Road Signs',
    href: '/road-signs',
    description: 'Mandatory, cautionary, informatory signs, markings, and hand signals',
    iconName: 'AlertTriangle',
  },
  {
    label: 'Learn Driving',
    href: '/learn-driving',
    description: 'Step-by-step tutorials from pedal control to highway and mountain driving',
    iconName: 'Compass',
  },
  {
    label: 'RTO Guide',
    href: '/rto-guide',
    description: 'Learner & permanent license, renewal, registration, fees, and checklists',
    iconName: 'FileText',
  },
  {
    label: 'Traffic Rules',
    href: '/traffic-rules',
    description: 'Updated Indian traffic penalties under Motor Vehicles Amendment Act',
    iconName: 'ShieldAlert',
  },
  {
    label: 'Know Your Car',
    href: '/know-your-car',
    description: 'Interactive anatomy of engine, brakes, gearbox, and dashboard warnings',
    iconName: 'Wrench',
  },
];

export const MORE_NAV_ITEMS: NavItem[] = [
  {
    label: 'Car Buying Guide',
    href: '/car-buying',
    description: 'New vs used, 50-point inspection checklist, and true ownership cost calculator',
    iconName: 'Car',
  },
  {
    label: 'Maintenance',
    href: '/maintenance',
    description: 'Kilometer-based service schedules, fluid guides, and DIY maintenance checks',
    iconName: 'Gauge',
  },
  {
    label: 'Safety Tips',
    href: '/safety-tips',
    description: 'Defensive driving, monsoon & fog safety, emergency numbers, and first aid',
    iconName: 'ShieldCheck',
  },
  {
    label: 'Fuel Calculator',
    href: '/fuel-calculator',
    description: 'Trip cost estimation, daily commute fuel calculator, and efficiency tips',
    iconName: 'Fuel',
  },
];

export const ALL_NAV_ITEMS: NavItem[] = [...MAIN_NAV_ITEMS, ...MORE_NAV_ITEMS];
