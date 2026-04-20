import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";
import { impactStats } from "../data/mockData";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

const ringData = [
  { name: "Response", value: 74, fill: "#22c55e" },
  { name: "Awareness", value: 86, fill: "#3b82f6" }
];

const Impact = () => {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <Reveal>
        <div className="max-w-2xl">
          <h2 className="section-title">Impact at a glance</h2>
          <p className="section-subtitle mt-3">
            Stronger citizen participation creates measurable improvements across neighborhoods.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 sm:grid-cols-3">
          {impactStats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.1 + index * 0.1}>
              <div className="glass-card rounded-2xl p-5">
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="glass-card rounded-3xl p-6 h-full">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Impact pulse</h3>
            <p className="text-sm text-slate-500 dark:text-slate-300">
              Combined response and awareness index
            </p>
            <div className="mt-6 h-52">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  innerRadius="60%"
                  outerRadius="90%"
                  data={ringData}
                  startAngle={90}
                  endAngle={-270}
                >
                  <RadialBar dataKey="value" cornerRadius={10} />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              {ringData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ background: item.fill }} />
                    <span className="text-slate-600 dark:text-slate-300">{item.name}</span>
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Impact;
