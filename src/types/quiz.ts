export type QuizCategory =
  | 'road-signs'
  | 'traffic-rules'
  | 'vehicle-knowledge'
  | 'first-aid'
  | 'driving-basics'
  | 'documents-insurance'
  | 'right-of-way'
  | 'general-knowledge';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[]; // Always exactly 4
  correctIndex: number; // 0-3
  explanation: string; // Why this answer is correct
  category: QuizCategory;
  difficulty: 'easy' | 'medium' | 'hard';
  imageUrl?: string; // Optional reference to sign image or CSS sign
  signId?: string; // If question relates to a specific road sign
}

export interface QuizConfig {
  type: 'full' | 'quick' | 'category' | 'mistakes';
  category?: QuizCategory;
  timed: boolean;
  timeLimit?: number; // seconds
  questionCount: number;
}

export interface QuizResult {
  id: string; // UUID generated at quiz start
  testType: QuizConfig['type'];
  category?: QuizCategory;
  date: string; // ISO 8601
  totalQuestions: number;
  correctAnswers: number;
  score: number; // percentage (0-100)
  passed: boolean; // score >= 60
  timeTaken: number; // seconds
  answers: {
    questionId: string;
    selectedIndex: number | null; // null = unanswered
    correct: boolean;
  }[];
  categoryBreakdown: Partial<Record<QuizCategory, { total: number; correct: number }>>;
}

export interface QuizState {
  status: 'idle' | 'active' | 'reviewing' | 'completed';
  questions: QuizQuestion[];
  currentIndex: number;
  answers: (number | null)[];
  showingFeedback: boolean; // true after answer selected, before "Next"
  timeRemaining: number | null;
  startTime: Date | null;
  endTime: Date | null;
}

export interface QuizActions {
  startQuiz: (config: QuizConfig) => void;
  selectAnswer: (optionIndex: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void; // Only in 'reviewing' status
  finishQuiz: () => void;
  resetQuiz: () => void;
}
