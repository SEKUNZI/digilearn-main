import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useProgress } from "@/hooks/useProgress";
import AppLayout from "@/components/AppLayout";
import Onboarding from "@/pages/Onboarding";
import HomePage from "@/pages/HomePage";
import LearnPage from "@/pages/LearnPage";
import LessonDetail from "@/pages/LessonDetail";
import VideosPage from "@/pages/VideosPage";
import QuizPage from "@/pages/QuizPage";
import QuizResults from "@/pages/QuizResults";
import ProfilePage from "@/pages/ProfilePage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function AppRoutes() {
  const { onboardingDone } = useProgress();

  return (
    <Routes>
      <Route path="/" element={onboardingDone ? <Navigate to="/home" replace /> : <Onboarding />} />
      <Route element={<AppLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/learn/:moduleId" element={<LessonDetail />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="/quiz/results" element={<QuizResults />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
