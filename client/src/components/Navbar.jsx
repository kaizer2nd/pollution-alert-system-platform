import { Leaf, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = ({ sections, activeSection, onToggleTheme, theme }) => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-950/70 border-b border-white/40 dark:border-slate-800/60"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white shadow-soft">
            <Leaf className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-600">Pollution Alert</p>
            <p className="text-base font-display font-semibold">System Platform</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-5 text-sm font-medium">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`transition ${
                activeSection === section.id
                  ? "text-brand-600"
                  : "text-slate-600 dark:text-slate-300 hover:text-brand-500"
              }`}
            >
              {section.label}
            </a>
          ))}
        </div>

        <button
          onClick={onToggleTheme}
          className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-brand-500 transition"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
