import { useNavigate } from "react-router-dom";
import { ShoppingCart, Smartphone, Landmark, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/hooks/useProgress";

const floatingIcons = [
  { icon: ShoppingCart, top: "20%", left: "10%", delay: "0s" },
  { icon: Smartphone, top: "15%", right: "15%", delay: "0.5s" },
  { icon: Landmark, bottom: "30%", left: "8%", delay: "1s" },
  { icon: Shield, bottom: "25%", right: "10%", delay: "1.5s" },
];

export default function Onboarding() {
  const navigate = useNavigate();
  const { setOnboardingDone } = useProgress();

  const handleStart = () => {
    setOnboardingDone();
    navigate("/home");
  };

  return (
    <div className="min-h-screen gradient-primary flex flex-col items-center justify-center px-6 text-primary-foreground relative overflow-hidden">
      {floatingIcons.map(({ icon: Icon, delay, ...pos }, i) => (
        <div
          key={i}
          className="absolute opacity-20 animate-float"
          style={{ ...pos, animationDelay: delay } as React.CSSProperties}
        >
          <Icon size={40} />
        </div>
      ))}

      <div className="relative z-10 text-center space-y-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
            <Sparkles size={28} className="text-secondary-foreground" />
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight">DigiLearn Rwanda</h1>
          <p className="mt-3 text-primary-foreground/80 text-base leading-relaxed max-w-xs mx-auto">
            Your guide to digital services and online safety. Learn at your own pace, anytime.
          </p>
        </div>

        <Button
          onClick={handleStart}
          size="lg"
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-10 text-base font-semibold shadow-lg"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
