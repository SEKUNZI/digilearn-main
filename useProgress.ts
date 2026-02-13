import { useState, useEffect, useCallback } from "react";

interface ProgressState {
  completedItems: string[];
  quizScores: Record<string, number>;
  onboardingDone: boolean;
  notificationsEnabled: boolean;
  darkMode: boolean;
}

const STORAGE_KEY = "digilearn-progress";

const defaultState: ProgressState = {
  completedItems: [],
  quizScores: {},
  onboardingDone: false,
  notificationsEnabled: true,
  darkMode: false,
};

function loadState(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...defaultState, ...JSON.parse(raw) };
  } catch {}
  return defaultState;
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(loadState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    if (state.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state]);

  const toggleItem = useCallback((itemId: string) => {
    setState((prev) => {
      const exists = prev.completedItems.includes(itemId);
      return {
        ...prev,
        completedItems: exists
          ? prev.completedItems.filter((id) => id !== itemId)
          : [...prev.completedItems, itemId],
      };
    });
  }, []);

  const saveQuizScore = useCallback((quizId: string, score: number) => {
    setState((prev) => ({
      ...prev,
      quizScores: { ...prev.quizScores, [quizId]: Math.max(prev.quizScores[quizId] || 0, score) },
    }));
  }, []);

  const setOnboardingDone = useCallback(() => {
    setState((prev) => ({ ...prev, onboardingDone: true }));
  }, []);

  const toggleNotifications = useCallback(() => {
    setState((prev) => ({ ...prev, notificationsEnabled: !prev.notificationsEnabled }));
  }, []);

  const toggleDarkMode = useCallback(() => {
    setState((prev) => ({ ...prev, darkMode: !prev.darkMode }));
  }, []);

  const totalLessons = 36;
  const completedCount = state.completedItems.length;
  const overallProgress = Math.round((completedCount / totalLessons) * 100);

  const avgScore =
    Object.keys(state.quizScores).length > 0
      ? Math.round(
          Object.values(state.quizScores).reduce((a, b) => a + b, 0) /
            Object.keys(state.quizScores).length
        )
      : 0;

  return {
    ...state,
    toggleItem,
    saveQuizScore,
    setOnboardingDone,
    toggleNotifications,
    toggleDarkMode,
    completedCount,
    overallProgress,
    totalLessons,
    avgScore,
  };
}
