import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-soft">
            <Leaf className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">
              Pollution Alert System Platform
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-300">
              College mini-project demo • Team placeholder
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-300">
          <a href="#report" className="hover:text-brand-600">
            Report
          </a>
          <a href="#dashboard" className="hover:text-brand-600">
            Dashboard
          </a>
          <a href="#impact" className="hover:text-brand-600">
            Impact
          </a>
          <a href="#future" className="hover:text-brand-600">
            Future
          </a>
        </div>
        <a href="#report" className="btn-primary">
          Get started
        </a>
      </div>
    </footer>
  );
};

export default Footer;
