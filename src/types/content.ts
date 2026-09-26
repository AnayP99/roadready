// --- RTO Process ---
export interface DocumentItem {
  name: string;
  description: string;
  required: boolean;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  substeps?: string[];
  tip?: string;
}

export interface FeeItem {
  item: string;
  amount: string;
  notes?: string;
}

export interface RTOProcess {
  id: string;
  title: string;
  slug: string;
  description: string;
  eligibility: string[];
  documents: DocumentItem[];
  steps: ProcessStep[];
  fees: FeeItem[];
  timeline: string;
  tips: string[];
  commonMistakes: string[];
  onlinePortalUrl?: string;
}

// --- Traffic Fine ---
export type FineCategory =
  | 'general'
  | 'speeding'
  | 'documents'
  | 'dangerous-driving'
  | 'vehicle-condition'
  | 'parking'
  | 'pedestrian'
  | 'two-wheeler'
  | 'drunk-driving';

export interface TrafficFine {
  id: string;
  violation: string;
  section: string;
  category: FineCategory;
  firstOffense: string;
  repeatOffense: string;
  imprisonment?: string;
  description: string;
  additionalPenalties?: string[];
}

// --- Car System ---
export interface CarComponent {
  name: string;
  description: string;
  importance: 'critical' | 'important' | 'supplementary';
}

export interface WarningSign {
  sign: string;
  possibleCause: string;
  severity: 'high' | 'medium' | 'low';
  action: string;
}

export interface Myth {
  myth: string;
  reality: string;
}

export interface CarSystem {
  id: string;
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
  howItWorks: string; // Markdown content
  components: CarComponent[];
  warningSigns: WarningSign[];
  maintenanceTips: string[];
  commonMyths: Myth[];
}

// --- Driving Tutorial ---
export type TutorialCategory =
  | 'before-you-start'
  | 'basic-manual'
  | 'basic-automatic'
  | 'essential-maneuvers'
  | 'road-driving'
  | 'highway-driving'
  | 'night-driving'
  | 'adverse-conditions';

export interface DrivingTutorial {
  id: string;
  title: string;
  slug: string;
  category: TutorialCategory;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedReadTime: number; // minutes
  content: string; // Markdown
  keyTakeaways: string[];
  tips: string[];
  warnings: string[];
  commonMistakes: string[];
  practiceExercises?: string[];
}

// --- Safety Topic ---
export interface EmergencyNumber {
  service: string;
  number: string;
  description: string;
}

export interface SafetyTopic {
  id: string;
  title: string;
  slug: string;
  icon: string;
  severity: 'critical' | 'important' | 'informational';
  summary: string;
  content: string; // Markdown
  dos: string[];
  donts: string[];
  emergencyNumbers?: EmergencyNumber[];
}

// --- Dashboard / Home ---
export interface DashboardFact {
  id: string;
  fact: string;
  source?: string;
}

// --- User Stats (localStorage) ---
export interface UserStats {
  totalTestsTaken: number;
  bestScore: number; // percentage
  averageScore: number;
  totalCorrectAnswers: number;
  totalQuestionsAttempted: number;
  signsViewed: string[]; // sign IDs
  lastTestDate: string | null; // ISO 8601
}

// --- Checklists & Guides ---
export interface ChecklistCategory {
  category: string;
  items: string[];
}

export interface TireCareGuide {
  readingSize: {
    example: string;
    explanation: Array<{ part: string; label: string; desc: string }>;
  };
  pressureGuidelines: string[];
  rotationPatterns: string[];
}

export interface FluidGuideItem {
  name: string;
  purpose: string;
  grades: string;
  checkFrequency: string;
  changeInterval: string;
  colorHealthy: string;
  colorBad: string;
}

export interface DIYMaintenanceStep {
  step: number;
  title: string;
  desc: string;
}

export interface DIYMaintenanceGuide {
  id: string;
  title: string;
  estimatedTime: string;
  difficulty: string;
  toolsRequired: string[];
  steps: DIYMaintenanceStep[];
}
