import { Radar, Route, Smartphone, Sparkles } from "lucide-react";
import { roadmapItems } from "../data/mockData";
import Reveal from "./Reveal";

const iconMap = {
  Sparkles: Sparkles,
  Radar: Radar,
  Smartphone: Smartphone,
  Route: Route
};

const FutureScope = () => {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <Reveal>
        <div className="max-w-2xl">
          <h2 className="section-title">Future scope</h2>
          <p className="section-subtitle mt-3">
            A roadmap designed for scale, automation, and city-wide intelligence.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {roadmapItems.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <Reveal key={item.title} delay={0.1 + index * 0.05}>
              <div className="glass-card rounded-2xl p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-soft">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

export default FutureScope;
