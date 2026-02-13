import { useNavigate } from "react-router-dom";
import { ShoppingCart, Smartphone, Landmark, Shield, BookOpen, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { modules } from "@/data/lessons";
import { useProgress } from "@/hooks/useProgress";

const moduleIcons: Record<string, React.ElementType> = {
  ShoppingCart, Smartphone, Landmark, Shield,
};

const moduleColors = [
  "bg-emerald/10 text-emerald",
  "bg-cyan/10 text-cyan",
  "bg-indigo/10 text-indigo",
  "bg-secondary/10 text-secondary",
];

export default function LearnPage() {
  const navigate = useNavigate();
  const { completedItems } = useProgress();

  return (
    <div className="animate-fade-in">
      <div className="gradient-primary px-5 pt-12 pb-6 rounded-b-3xl">
        <h1 className="text-xl font-bold text-primary-foreground">Learn</h1>
        <p className="text-primary-foreground/70 text-sm mt-1">Choose a module to start learning</p>
      </div>

      <div className="px-5 mt-5 space-y-3">
        {modules.map((mod, i) => {
          const Icon = moduleIcons[mod.icon] || BookOpen;
          const totalItems = mod.sections.reduce((a, s) => a + s.items.length, 0);
          const doneItems = mod.sections.reduce(
            (a, s) => a + s.items.filter((item) => completedItems.includes(item.id)).length,
            0
          );
          const pct = Math.round((doneItems / totalItems) * 100);

          return (
            <Card
              key={mod.id}
              className="cursor-pointer hover:shadow-md transition-shadow border-0 shadow-sm"
              onClick={() => navigate(`/learn/${mod.id}`)}
            >
              <CardContent className="p-4 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${moduleColors[i]}`}>
                  <Icon size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-card-foreground text-sm">{mod.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">{mod.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Progress value={pct} className="h-1.5 flex-1" />
                    <span className="text-[11px] text-muted-foreground font-medium">{pct}%</span>
                  </div>
                </div>
                <ChevronRight size={18} className="text-muted-foreground shrink-0" />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
