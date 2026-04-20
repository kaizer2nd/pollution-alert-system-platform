import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis
} from "recharts";
import { ArrowUpRight, BarChart3, MapPinned } from "lucide-react";
import {
  categoryData,
  dashboardStats,
  mapMarkers,
  recentReports,
  trendData
} from "../data/mockData";
import Reveal from "./Reveal";

const COLORS = ["#22c55e", "#3b82f6", "#f97316", "#8b5cf6"];

const SkeletonCard = () => (
  <div className="animate-pulse rounded-2xl bg-slate-200/70 dark:bg-slate-800/70 h-24" />
);

const DashboardPreview = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4">
      <Reveal>
        <div className="max-w-2xl">
          <h2 className="section-title">Authority dashboard preview</h2>
          <p className="section-subtitle mt-3">
            Monitor incident volume, response velocity, and live hotspots from a single control
            room.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            {loading
              ? Array.from({ length: 3 }).map((_, index) => <SkeletonCard key={index} />)
              : dashboardStats.map((stat) => (
                  <Reveal key={stat.label} delay={0.1}>
                    <div className="glass-card rounded-2xl p-5">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
                        <span className="rounded-full bg-brand-50 px-2 py-1 text-xs font-semibold text-brand-600">
                          {stat.trend}
                        </span>
                      </div>
                      <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
                        {stat.value}
                      </p>
                    </div>
                  </Reveal>
                ))}
          </div>

          <Reveal delay={0.15}>
            <div className="glass-card rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Pollution trend
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-300">
                    Reports vs resolved cases
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-600">
                  <ArrowUpRight className="h-4 w-4" />
                  24% growth
                </div>
              </div>
              <div className="mt-6 h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trendData}>
                    <defs>
                      <linearGradient id="colorReports" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.6} />
                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.5} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="reports"
                      stroke="#22c55e"
                      fillOpacity={1}
                      fill="url(#colorReports)"
                    />
                    <Area
                      type="monotone"
                      dataKey="resolved"
                      stroke="#3b82f6"
                      fillOpacity={1}
                      fill="url(#colorResolved)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="space-y-6">
          <Reveal delay={0.2}>
            <div className="glass-card rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Category distribution
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-300">
                    Reported pollution types
                  </p>
                </div>
                <BarChart3 className="h-5 w-5 text-brand-600" />
              </div>
              <div className="mt-6 h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={categoryData} dataKey="value" innerRadius={55} outerRadius={80}>
                      {categoryData.map((entry, index) => (
                        <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {categoryData.map((item, index) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      {item.name}
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="glass-card rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Live hotspots
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-300">
                    Priority zones flagged
                  </p>
                </div>
                <MapPinned className="h-5 w-5 text-brand-600" />
              </div>
              <div className="relative mt-6 overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                  alt="Map preview"
                  className="h-48 w-full object-cover"
                />
                {mapMarkers.map((marker) => (
                  <div
                    key={marker.id}
                    className="absolute flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-800 shadow-soft"
                    style={{ left: marker.x, top: marker.y }}
                  >
                    <span className="h-2 w-2 rounded-full bg-brand-600 animate-glow" />
                    {marker.label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Recent reports
              </h3>
              <div className="mt-4 space-y-3">
                {recentReports.map((report) => (
                  <div
                    key={report.id}
                    className="rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3 text-sm"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-slate-800">{report.title}</p>
                      <span className="rounded-full bg-slate-900 px-2 py-1 text-xs text-white">
                        {report.status}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">{report.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
