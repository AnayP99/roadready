'use client';

import { useReducer, useEffect, useCallback, useRef } from 'react';
import { QuizQuestion, QuizConfig, QuizResult, QuizState, QuizCategory } from '@/types/quiz';
import { STORAGE_KEYS } from '@/lib/constants';

type QuizAction =
  | { type: 'START_QUIZ'; payload: { questions: QuizQuestion[]; timeLimit?: number } }
  | { type: 'SELECT_ANSWER'; payload: { optionIndex: number } }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREV_QUESTION' }
  | { type: 'TICK' }
  | { type: 'FINISH_QUIZ' }
  | { type: 'SET_REVIEW' }
  | { type: 'RESET_QUIZ' };

const initialState: QuizState = {
  status: 'idle',
  questions: [],
  currentIndex: 0,
  answers: [],
  showingFeedback: false,
  timeRemaining: null,
  startTime: null,
  endTime: null,
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'START_QUIZ': {
      return {
        ...state,
        status: 'active',
        questions: action.payload.questions,
        currentIndex: 0,
        answers: new Array(action.payload.questions.length).fill(null),
        showingFeedback: false,
        timeRemaining: action.payload.timeLimit ?? null,
        startTime: new Date(),
        endTime: null,
      };
    }

    case 'SELECT_ANSWER': {
      if (state.status !== 'active' || state.showingFeedback) return state;
      const updatedAnswers = [...state.answers];
      updatedAnswers[state.currentIndex] = action.payload.optionIndex;
      return {
        ...state,
        answers: updatedAnswers,
        showingFeedback: true,
      };
    }

    case 'NEXT_QUESTION': {
      if (state.currentIndex + 1 >= state.questions.length) {
        return {
          ...state,
          status: 'completed',
          showingFeedback: false,
          endTime: new Date(),
        };
      }
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        showingFeedback: false,
      };
    }

    case 'PREV_QUESTION': {
      if (state.currentIndex <= 0) return state;
      return {
        ...state,
        currentIndex: state.currentIndex - 1,
      };
    }

    case 'TICK': {
      if (state.timeRemaining === null || state.timeRemaining <= 0) return state;
      const nextTime = state.timeRemaining - 1;
      if (nextTime <= 0) {
        return {
          ...state,
          timeRemaining: 0,
          status: 'completed',
          endTime: new Date(),
        };
      }
      return {
        ...state,
        timeRemaining: nextTime,
      };
    }

    case 'FINISH_QUIZ': {
      return {
        ...state,
        status: 'completed',
        showingFeedback: false,
        endTime: new Date(),
      };
    }

    case 'SET_REVIEW': {
      return {
        ...state,
        status: 'reviewing',
        currentIndex: 0,
      };
    }

    case 'RESET_QUIZ': {
      return initialState;
    }

    default:
      return state;
  }
}

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Shuffle question options and re-align correctIndex
function shuffleQuestionOptions(q: QuizQuestion): QuizQuestion {
  const correctOption = q.options[q.correctIndex];
  const shuffledOptions = shuffleArray(q.options);
  const newCorrectIndex = shuffledOptions.indexOf(correctOption);
  return {
    ...q,
    options: shuffledOptions,
    correctIndex: newCorrectIndex,
  };
}

export function useQuiz(allQuestions: QuizQuestion[]) {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const currentConfigRef = useRef<QuizConfig | null>(null);

  // Timer countdown
  useEffect(() => {
    if (state.status !== 'active' || state.timeRemaining === null) return;
    if (state.timeRemaining <= 0) {
      dispatch({ type: 'FINISH_QUIZ' });
      return;
    }

    const interval = setInterval(() => {
      dispatch({ type: 'TICK' });
    }, 1000);

    return () => clearInterval(interval);
  }, [state.status, state.timeRemaining]);

  // Persist result and wrong questions when test completes
  useEffect(() => {
    if (state.status !== 'completed' || !currentConfigRef.current || state.questions.length === 0) return;

    try {
      const config = currentConfigRef.current;
      const totalQuestions = state.questions.length;
      let correctAnswers = 0;
      const wrongIds: string[] = [];

      const answersDetail = state.questions.map((q, idx) => {
        const userChoice = state.answers[idx];
        const isCorrect = userChoice === q.correctIndex;
        if (isCorrect) {
          correctAnswers++;
        } else {
          wrongIds.push(q.id);
        }
        return {
          questionId: q.id,
          selectedIndex: userChoice,
          correct: isCorrect,
        };
      });

      const scorePercent = Math.round((correctAnswers / totalQuestions) * 100);
      const startTimeMs = state.startTime ? new Date(state.startTime).getTime() : Date.now();
      const endTimeMs = state.endTime ? new Date(state.endTime).getTime() : Date.now();
      const timeTakenSec = Math.max(1, Math.round((endTimeMs - startTimeMs) / 1000));

      // Category breakdown
      const categoryBreakdown: Partial<Record<QuizCategory, { total: number; correct: number }>> = {};
      state.questions.forEach((q, idx) => {
        if (!categoryBreakdown[q.category]) {
          categoryBreakdown[q.category] = { total: 0, correct: 0 };
        }
        categoryBreakdown[q.category]!.total += 1;
        if (state.answers[idx] === q.correctIndex) {
          categoryBreakdown[q.category]!.correct += 1;
        }
      });

      const result: QuizResult = {
        id: 'test_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        testType: config.type,
        category: config.category,
        date: new Date().toISOString(),
        totalQuestions,
        correctAnswers,
        score: scorePercent,
        passed: scorePercent >= 60,
        timeTaken: timeTakenSec,
        answers: answersDetail,
        categoryBreakdown,
      };

      if (typeof window !== 'undefined') {
        // Save to quiz history
        const existingHistory = JSON.parse(localStorage.getItem(STORAGE_KEYS.QUIZ_HISTORY) || '[]');
        localStorage.setItem(STORAGE_KEYS.QUIZ_HISTORY, JSON.stringify([result, ...existingHistory.slice(0, 49)]));

        // Update wrong questions pool
        const existingWrong: string[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.WRONG_QUESTIONS) || '[]');
        if (config.type === 'mistakes') {
          // In mistake review mode: remove newly-correct questions, keep still-wrong questions
          const newlyCorrectIds = state.questions
            .filter((q, idx) => state.answers[idx] === q.correctIndex)
            .map((q) => q.id);
          const remainingWrong = existingWrong.filter((id) => !newlyCorrectIds.includes(id));
          localStorage.setItem(STORAGE_KEYS.WRONG_QUESTIONS, JSON.stringify(remainingWrong));
        } else {
          // Add new wrong IDs without duplicates
          const updatedWrong = Array.from(new Set([...existingWrong, ...wrongIds]));
          localStorage.setItem(STORAGE_KEYS.WRONG_QUESTIONS, JSON.stringify(updatedWrong));
        }

        // Update user stats
        const userStats = JSON.parse(
          localStorage.getItem(STORAGE_KEYS.USER_STATS) ||
            '{"totalTestsTaken":0,"bestScore":0,"averageScore":0,"totalCorrectAnswers":0,"totalQuestionsAttempted":0,"signsViewed":[],"lastTestDate":null}'
        );
        userStats.totalTestsTaken += 1;
        userStats.bestScore = Math.max(userStats.bestScore, scorePercent);
        userStats.totalQuestionsAttempted += totalQuestions;
        userStats.totalCorrectAnswers += correctAnswers;
        userStats.averageScore = Math.round((userStats.totalCorrectAnswers / userStats.totalQuestionsAttempted) * 100);
        userStats.lastTestDate = new Date().toISOString();
        localStorage.setItem(STORAGE_KEYS.USER_STATS, JSON.stringify(userStats));
      }
    } catch (e) {
      console.error('Error recording quiz results:', e);
    }
  }, [state.status, state.questions, state.answers, state.startTime, state.endTime]);

  const startQuiz = useCallback(
    (config: QuizConfig) => {
      currentConfigRef.current = config;
      let pool = [...allQuestions];

      if (config.type === 'category' && config.category) {
        pool = pool.filter((q) => q.category === config.category);
      } else if (config.type === 'mistakes') {
        if (typeof window !== 'undefined') {
          const wrongIds: string[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.WRONG_QUESTIONS) || '[]');
          pool = pool.filter((q) => wrongIds.includes(q.id));
        }
      }

      // If pool is empty (e.g., no mistakes), fall back to all questions
      if (pool.length === 0) {
        pool = [...allQuestions];
      }

      // Shuffle pool and slice questionCount
      const shuffledPool = shuffleArray(pool)
        .slice(0, Math.min(config.questionCount, pool.length))
        .map(shuffleQuestionOptions);

      dispatch({
        type: 'START_QUIZ',
        payload: {
          questions: shuffledPool,
          timeLimit: config.timed ? config.timeLimit ?? 20 * 60 : undefined,
        },
      });
    },
    [allQuestions]
  );

  const selectAnswer = useCallback((optionIndex: number) => {
    dispatch({ type: 'SELECT_ANSWER', payload: { optionIndex } });
  }, []);

  const nextQuestion = useCallback(() => {
    dispatch({ type: 'NEXT_QUESTION' });
  }, []);

  const previousQuestion = useCallback(() => {
    dispatch({ type: 'PREV_QUESTION' });
  }, []);

  const finishQuiz = useCallback(() => {
    dispatch({ type: 'FINISH_QUIZ' });
  }, []);

  const setReview = useCallback(() => {
    dispatch({ type: 'SET_REVIEW' });
  }, []);

  const resetQuiz = useCallback(() => {
    currentConfigRef.current = null;
    dispatch({ type: 'RESET_QUIZ' });
  }, []);

  return {
    state,
    config: currentConfigRef.current,
    startQuiz,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    finishQuiz,
    setReview,
    resetQuiz,
  };
}
