import { Droplets, Factory, Trash2, Wind } from "lucide-react";
import { problemCards, problemMetrics } from "../data/mockData";
import Reveal from "./Reveal";

const iconMap = {
  Wind: Wind,
  Droplets: Droplets,
  Trash2: Trash2,
  Factory: Factory
};

const ProblemCards = () => {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <Reveal>
        <div className="max-w-2xl">
          <h2 className="section-title">Why it matters</h2>
          <p className="section-subtitle mt-3">
            Pollution incidents often go unreported. A clear, citizen-first platform turns every
            alert into action with verified data and rapid response coordination.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {problemCards.map((card, index) => {
          const Icon = iconMap[card.icon];
          return (
            <Reveal key={card.title} delay={0.1 + index * 0.05}>
              <div className="glass-card rounded-2xl p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {card.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2} className="mt-12">
        <div className="glass-card rounded-3xl p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Live impact indicators
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Signals aggregated from citizen reports and city sensors.
              </p>
            </div>
            <div className="flex gap-4 text-sm text-slate-600 dark:text-slate-300">
              <span className="chip">Updated hourly</span>
              <span className="chip">Verified sources</span>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {problemMetrics.map((metric) => (
              <div key={metric.label}>
                <div className="flex justify-between text-sm font-medium text-slate-700 dark:text-slate-200">
                  <span>{metric.label}</span>
                  <span>{metric.value}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-200/70 dark:bg-slate-800">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-brand-500 via-ocean-500 to-brand-400"
                    style={{ width: `${metric.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default ProblemCards;
