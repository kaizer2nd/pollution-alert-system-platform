import { Image, MapPin, ShieldCheck, Users } from "lucide-react";
import { howItWorks } from "../data/mockData";
import Reveal from "./Reveal";

const iconMap = {
  Users: Users,
  Image: Image,
  MapPin: MapPin,
  ShieldCheck: ShieldCheck
};

const HowItWorks = () => {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <Reveal>
        <div className="max-w-2xl">
          <h2 className="section-title">How it works</h2>
          <p className="section-subtitle mt-3">
            A smooth, guided flow that turns citizen input into actionable intelligence.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {howItWorks.map((step, index) => {
          const Icon = iconMap[step.icon];
          return (
            <Reveal key={step.title} delay={0.1 + index * 0.1}>
              <div className="glass-card relative rounded-2xl p-6">
                <div className="absolute -top-4 left-6 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white shadow-soft">
                  Step {index + 1}
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
