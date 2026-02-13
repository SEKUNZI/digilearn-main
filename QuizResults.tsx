import { useNavigate, useSearchParams } from "react-router-dom";
import { Trophy, Award, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function QuizResults() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const score = Number(params.get("score") || 0);
  const total = Number(params.get("total") || 10);
  const quizId = params.get("quiz") || "";
  const pct = Math.round((score / total) * 100);

  const getMessage = () => {
    if (pct >= 90) return "Outstanding! You're a digital expert! 🌟";
    if (pct >= 70) return "Great job! You know your stuff! 🎉";
    if (pct >= 50) return "Good effort! Keep learning! 💪";
    return "Don't give up! Try again to improve! 📚";
  };

  return (
    <div className="min-h-screen gradient-primary flex flex-col items-center justify-center px-6 text-primary-foreground animate-fade-in">
      <Trophy size={64} className="text-secondary mb-4" />

      {/* Circular Score */}
      <div className="relative w-36 h-36 my-4">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="8" className="opacity-20" />
          <circle
            cx="60" cy="60" r="52" fill="none" stroke="hsl(160 84% 39%)"
            strokeWidth="8" strokeLinecap="round"
            strokeDasharray={`${pct * 3.27} 327`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold">{score}/{total}</span>
          <span className="text-sm opacity-80">{pct}%</span>
        </div>
      </div>

      <p className="text-center text-lg font-medium mt-2 mb-4 max-w-xs">{getMessage()}</p>

      <div className="flex gap-2 mb-8">
        {pct >= 70 && <Badge className="bg-secondary text-secondary-foreground border-0"><Award size={14} className="mr-1" /> Certified</Badge>}
        <Badge className="bg-primary-foreground/20 text-primary-foreground border-0">Complete</Badge>
      </div>

      <div className="flex gap-3 w-full max-w-xs">
        <Button
          variant="outline"
          className="flex-1 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl"
          onClick={() => navigate("/quiz")}
        >
          <RotateCcw size={16} className="mr-1" /> Retry
        </Button>
        <Button
          className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-xl"
          onClick={() => navigate("/home")}
        >
          <Home size={16} className="mr-1" /> Home
        </Button>
      </div>
    </div>
  );
}
