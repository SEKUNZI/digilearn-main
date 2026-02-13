import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Circle, ShoppingCart, Smartphone, Landmark, Shield, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { modules } from "@/data/lessons";
import { useProgress } from "@/hooks/useProgress";

const moduleIcons: Record<string, React.ElementType> = {
  ShoppingCart, Smartphone, Landmark, Shield,
};

export default function LessonDetail() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { completedItems, toggleItem } = useProgress();

  const mod = modules.find((m) => m.id === moduleId);
  if (!mod) return <div className="p-5">Module not found</div>;

  const Icon = moduleIcons[mod.icon] || BookOpen;
  const totalItems = mod.sections.reduce((a, s) => a + s.items.length, 0);
  const doneItems = mod.sections.reduce(
    (a, s) => a + s.items.filter((item) => completedItems.includes(item.id)).length,
    0
  );
  const pct = Math.round((doneItems / totalItems) * 100);

  return (
    <div className="animate-fade-in">
      <div className="gradient-primary px-5 pt-12 pb-6 rounded-b-3xl">
        <button onClick={() => navigate(-1)} className="text-primary-foreground/70 mb-3 flex items-center gap-1">
          <ArrowLeft size={18} /> Back
        </button>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
            <Icon size={24} className="text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-primary-foreground">{mod.title}</h1>
            <p className="text-primary-foreground/70 text-xs">{doneItems}/{totalItems} completed</p>
          </div>
        </div>
        <Progress value={pct} className="h-2 mt-4 bg-primary-foreground/20" />
      </div>

      <div className="px-5 mt-5 space-y-5 pb-4">
        {mod.sections.map((section) => {
          const sectionDone = section.items.filter((i) => completedItems.includes(i.id)).length;
          return (
            <div key={section.id}>
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-semibold text-foreground text-sm">{section.title}</h2>
                <span className="text-xs text-muted-foreground">{sectionDone}/{section.items.length}</span>
              </div>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-0 divide-y divide-border">
                  {section.items.map((item) => {
                    const done = completedItems.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleItem(item.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-muted/50 transition-colors"
                      >
                        {done ? (
                          <CheckCircle2 size={20} className="text-secondary shrink-0" />
                        ) : (
                          <Circle size={20} className="text-muted-foreground shrink-0" />
                        )}
                        <span className={`text-sm ${done ? "text-muted-foreground line-through" : "text-card-foreground"}`}>
                          {item.title}
                        </span>
                      </button>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          );
        })}

        <Button
          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-xl"
          onClick={() => navigate("/learn")}
        >
          Continue Learning
        </Button>
      </div>
    </div>
  );
}
