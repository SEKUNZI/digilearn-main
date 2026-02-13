import { BookOpen, Trophy, Clock, Bell, Moon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/hooks/useProgress";
import { modules } from "@/data/lessons";

export default function ProfilePage() {
  const {
    completedCount, overallProgress, avgScore, totalLessons,
    notificationsEnabled, darkMode, toggleNotifications, toggleDarkMode,
    completedItems,
  } = useProgress();

  const completedModules = modules.filter((m) =>
    m.sections.every((s) => s.items.every((i) => completedItems.includes(i.id)))
  );

  return (
    <div className="animate-fade-in">
      <div className="gradient-primary px-5 pt-12 pb-8 rounded-b-3xl flex flex-col items-center">
        <Avatar className="w-20 h-20 border-4 border-primary-foreground/20">
          <AvatarFallback className="bg-secondary text-secondary-foreground text-2xl font-bold">
            DL
          </AvatarFallback>
        </Avatar>
        <h1 className="text-lg font-bold text-primary-foreground mt-3">DigiLearner</h1>
        <p className="text-primary-foreground/70 text-sm">Beginner</p>
      </div>

      <div className="px-5 mt-5 space-y-5 pb-4">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: BookOpen, label: "Lessons", value: `${completedCount}/${totalLessons}`, color: "text-secondary" },
            { icon: Trophy, label: "Avg Score", value: `${avgScore}%`, color: "text-emerald" },
            { icon: Clock, label: "Hours", value: `${Math.max(1, Math.floor(completedCount * 0.3))}h`, color: "text-cyan" },
          ].map(({ icon: Icon, label, value, color }) => (
            <Card key={label} className="border-0 shadow-sm">
              <CardContent className="p-3 text-center space-y-1">
                <Icon size={20} className={`mx-auto ${color}`} />
                <p className="text-base font-bold text-card-foreground">{value}</p>
                <p className="text-[11px] text-muted-foreground">{label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-card-foreground">Overall Progress</span>
              <span className="text-muted-foreground">{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="h-2" />
          </CardContent>
        </Card>

        {/* Settings */}
        <div>
          <h2 className="font-semibold text-foreground text-sm mb-3">Settings</h2>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-0 divide-y divide-border">
              <div className="flex items-center justify-between px-4 py-3.5">
                <div className="flex items-center gap-3">
                  <Bell size={18} className="text-muted-foreground" />
                  <span className="text-sm text-card-foreground">Notifications</span>
                </div>
                <Switch checked={notificationsEnabled} onCheckedChange={toggleNotifications} />
              </div>
              <div className="flex items-center justify-between px-4 py-3.5">
                <div className="flex items-center gap-3">
                  <Moon size={18} className="text-muted-foreground" />
                  <span className="text-sm text-card-foreground">Dark Mode</span>
                </div>
                <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Completed */}
        {completedModules.length > 0 && (
          <div>
            <h2 className="font-semibold text-foreground text-sm mb-3">Completed Modules</h2>
            {completedModules.map((m) => (
              <Card key={m.id} className="border-0 shadow-sm mb-2">
                <CardContent className="p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Trophy size={16} className="text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-card-foreground">{m.title}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
