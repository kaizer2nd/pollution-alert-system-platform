import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { heroStats } from "../data/mockData";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

const StatCard = ({ label, value }) => {
  const suffix = label.includes("Rate") ? "%" : "+";

  return (
    <div className="glass-card rounded-2xl px-5 py-4">
      <p className="text-2xl font-semibold text-slate-900 dark:text-white">
        <CountUp value={value} suffix={suffix} />
      </p>
      <p className="text-sm text-slate-600 dark:text-slate-300">{label}</p>
    </div>
  );
};

const Hero = () => (
  <div className="relative overflow-hidden bg-ambient">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
              <ShieldCheck className="h-4 w-4" />
              Real-time Pollution Intelligence
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-display font-semibold leading-tight text-slate-900 dark:text-white">
              Pollution Alert System Platform
              <span className="block text-brand-600">Smart reporting. Faster action.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300">
              Empower communities to report air, water, and waste incidents in seconds while
              authorities monitor analytics, response times, and impact.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap gap-3">
            <a href="#report" className="btn-primary">
              Report Pollution <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#dashboard" className="btn-secondary">
              View Dashboard
            </a>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.1 + index * 0.1}>
                <StatCard label={stat.label} value={stat.value} />
              </Reveal>
            ))}
          </div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card relative overflow-hidden rounded-3xl p-4">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
              alt="Clean city environmental monitoring"
              className="h-[380px] w-full rounded-2xl object-cover"
            />
            <motion.div
              className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 shadow-soft"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <MapPin className="h-4 w-4 text-brand-600" />
              Live Incident Map
            </motion.div>
            <motion.div
              className="absolute bottom-6 right-6 rounded-2xl bg-slate-900/80 px-4 py-3 text-sm text-white"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              +24% faster response
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
);

export default Hero;
