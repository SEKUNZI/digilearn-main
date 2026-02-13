import { useNavigate } from "react-router-dom";
import { Bell, ShoppingCart, Smartphone, Landmark, Shield, BookOpen, Clock, Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { useProgress } from "@/hooks/useProgress";
import { modules } from "@/data/lessons";

const moduleIcons: Record<string, React.ElementType> = {
  ShoppingCart, Smartphone, Landmark, Shield,
};

const moduleColors = [
  "bg-emerald/10 text-emerald",
  "bg-cyan/10 text-cyan",
  "bg-indigo/10 text-indigo",
  "bg-secondary/10 text-secondary",
];

export default function HomePage() {
  const navigate = useNavigate();
  const { overallProgress, completedCount, avgScore } = useProgress();

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="gradient-primary px-5 pt-12 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-primary-foreground/70 text-sm">Welcome back!</p>
            <h1 className="text-xl font-bold text-primary-foreground">DigiLearn Rwanda</h1>
          </div>
          <button className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
            <Bell size={20} className="text-primary-foreground" />
          </button>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-primary-foreground/80 text-sm">
            <span>Overall Progress</span>
            <span className="font-semibold text-primary-foreground">{overallProgress}%</span>
          </div>
          <Progress value={overallProgress} className="h-2.5 bg-primary-foreground/20" />
        </div>
      </div>

      <div className="px-5 space-y-6 mt-6">
        {/* Module cards */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-3">Digital Services</h2>
          <div className="grid grid-cols-2 gap-3">
            {modules.map((mod, i) => {
              const Icon = moduleIcons[mod.icon] || BookOpen;
              return (
                <Card
                  key={mod.id}
                  className="cursor-pointer hover:shadow-md transition-shadow border-0 shadow-sm"
                  onClick={() => navigate(`/learn/${mod.id}`)}
                >
                  <CardContent className="p-4 flex flex-col items-center gap-3 text-center">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${moduleColors[i]}`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-sm font-medium text-card-foreground leading-tight">{mod.title}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-3">Your Stats</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: BookOpen, label: "Lessons", value: `${completedCount}/36`, color: "text-secondary" },
              { icon: Clock, label: "Hours", value: `${Math.max(1, Math.floor(completedCount * 0.3))}h`, color: "text-cyan" },
              { icon: Trophy, label: "Avg Score", value: `${avgScore}%`, color: "text-emerald" },
            ].map(({ icon: Icon, label, value, color }) => (
              <Card key={label} className="border-0 shadow-sm">
                <CardContent className="p-3 text-center space-y-1">
                  <Icon size={20} className={`mx-auto ${color}`} />
                  <p className="text-lg font-bold text-card-foreground">{value}</p>
                  <p className="text-[11px] text-muted-foreground">{label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
