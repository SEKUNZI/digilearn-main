import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Smartphone, Landmark, Shield, BookOpen, Timer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { quizzes } from "@/data/quizzes";
import { useProgress } from "@/hooks/useProgress";

const quizIcons: Record<string, React.ElementType> = {
  ShoppingCart, Smartphone, Landmark, Shield,
};

const iconColors = [
  "bg-emerald/10 text-emerald",
  "bg-cyan/10 text-cyan",
  "bg-indigo/10 text-indigo",
  "bg-secondary/10 text-secondary",
];

export default function QuizPage() {
  const navigate = useNavigate();
  const { saveQuizScore, quizScores } = useProgress();
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [answered, setAnswered] = useState(false);

  const quiz = quizzes.find((q) => q.id === activeQuiz);

  useEffect(() => {
    if (!activeQuiz || answered) return;
    setTimer(30);
    const interval = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          clearInterval(interval);
          handleNext();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [activeQuiz, currentQ, answered]);

  const handleAnswer = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (quiz && idx === quiz.questions[currentQ].correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = useCallback(() => {
    if (!quiz) return;
    if (currentQ >= quiz.questions.length - 1) {
      const finalScore = score + (selected === quiz.questions[currentQ]?.correctAnswer ? 1 : 0);
      saveQuizScore(quiz.id, finalScore);
      navigate(`/quiz/results?quiz=${quiz.id}&score=${answered ? finalScore : score}&total=${quiz.questions.length}`);
    } else {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  }, [quiz, currentQ, score, selected, answered, navigate, saveQuizScore]);

  // Quiz selection
  if (!activeQuiz) {
    return (
      <div className="animate-fade-in">
        <div className="gradient-primary px-5 pt-12 pb-6 rounded-b-3xl">
          <h1 className="text-xl font-bold text-primary-foreground">Quiz</h1>
          <p className="text-primary-foreground/70 text-sm mt-1">Test your knowledge</p>
        </div>
        <div className="px-5 mt-5 space-y-3">
          {quizzes.map((q, i) => {
            const Icon = quizIcons[q.icon] || BookOpen;
            const prevScore = quizScores[q.id];
            return (
              <Card
                key={q.id}
                className="cursor-pointer hover:shadow-md transition-shadow border-0 shadow-sm"
                onClick={() => {
                  setActiveQuiz(q.id);
                  setCurrentQ(0);
                  setScore(0);
                  setSelected(null);
                  setAnswered(false);
                }}
              >
                <CardContent className="p-4 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${iconColors[i]}`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground text-sm">{q.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{q.questions.length} questions</p>
                  </div>
                  {prevScore !== undefined && (
                    <span className="text-xs font-semibold text-secondary">{prevScore}/{q.questions.length}</span>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  if (!quiz) return null;
  const question = quiz.questions[currentQ];
  const labels = ["A", "B", "C", "D"];
  const pct = ((currentQ + 1) / quiz.questions.length) * 100;

  return (
    <div className="animate-fade-in">
      <div className="gradient-primary px-5 pt-12 pb-6 rounded-b-3xl">
        <button onClick={() => setActiveQuiz(null)} className="text-primary-foreground/70 text-sm mb-3">
          ← Back
        </button>
        <h1 className="text-lg font-bold text-primary-foreground">{quiz.title} Quiz</h1>
        <div className="flex items-center gap-3 mt-3">
          <Progress value={pct} className="h-2 flex-1 bg-primary-foreground/20" />
          <span className="text-primary-foreground/80 text-xs font-medium">
            {currentQ + 1}/{quiz.questions.length}
          </span>
        </div>
      </div>

      <div className="px-5 mt-5 space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">Question {currentQ + 1} of {quiz.questions.length}</span>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Timer size={16} />
            <span className={`text-sm font-mono font-semibold ${timer <= 10 ? "text-destructive" : ""}`}>{timer}s</span>
          </div>
        </div>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-5">
            <p className="font-semibold text-card-foreground text-base leading-relaxed">{question.question}</p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {question.options.map((opt, idx) => {
            let style = "bg-card border border-border hover:border-secondary";
            if (answered) {
              if (idx === question.correctAnswer) style = "bg-secondary/10 border-2 border-secondary";
              else if (idx === selected) style = "bg-destructive/10 border-2 border-destructive";
            } else if (idx === selected) {
              style = "bg-secondary/10 border-2 border-secondary";
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={answered}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all text-left ${style}`}
              >
                <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground shrink-0">
                  {labels[idx]}
                </span>
                <span className="text-sm text-card-foreground">{opt}</span>
              </button>
            );
          })}
        </div>

        {answered && (
          <Button
            className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-xl"
            onClick={handleNext}
          >
            {currentQ >= quiz.questions.length - 1 ? "See Results" : "Next Question"}
          </Button>
        )}
      </div>
    </div>
  );
}
