import { useMemo, useState } from "react";
import { CheckCircle2, Clock3, Eye } from "lucide-react";
import { authorityReports } from "../data/mockData";
import Reveal from "./Reveal";

const statusStyles = {
  Pending: "bg-amber-100 text-amber-700",
  "Under Review": "bg-blue-100 text-blue-700",
  Resolved: "bg-emerald-100 text-emerald-700"
};

const AuthorityResponse = () => {
  const [filter, setFilter] = useState("All");

  const filteredReports = useMemo(() => {
    if (filter === "All") return authorityReports;
    return authorityReports.filter((report) => report.status === filter);
  }, [filter]);

  const filters = ["All", "Pending", "Under Review", "Resolved"];

  return (
    <div className="mx-auto max-w-6xl px-4">
      <Reveal>
        <div className="max-w-2xl">
          <h2 className="section-title">Authority response flow</h2>
          <p className="section-subtitle mt-3">
            Track case progress with clear status indicators and priority labeling.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`chip transition ${
              filter === item ? "border-brand-500 text-brand-600 bg-brand-50/60" : ""
            }`}
          >
            {item}
          </button>
        ))}
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filteredReports.map((report, index) => (
          <Reveal key={report.id} delay={0.1 + index * 0.05}>
            <div className="glass-card rounded-3xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[report.status]}`}
                >
                  {report.status}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {report.priority} priority
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {report.title}
                </h3>
                <p className="text-sm text-slate-500">{report.location}</p>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-amber-500" />
                  <span>ETA 3-6 hrs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-blue-500" />
                  <span>12 watchers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Auto-verified</span>
                </div>
              </div>
              <div className="h-2 rounded-full bg-slate-200/80">
                <div
                  className="h-2 rounded-full bg-brand-600"
                  style={{
                    width:
                      report.status === "Resolved"
                        ? "100%"
                        : report.status === "Under Review"
                        ? "65%"
                        : "35%"
                  }}
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default AuthorityResponse;
