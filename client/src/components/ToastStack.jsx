import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Info } from "lucide-react";

const ToastStack = ({ toasts }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="glass-card flex items-start gap-3 rounded-2xl px-4 py-3 shadow-soft"
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="h-5 w-5 text-brand-600" />
            ) : (
              <Info className="h-5 w-5 text-ocean-500" />
            )}
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{toast.title}</p>
              <p className="text-xs text-slate-500 dark:text-slate-300">{toast.description}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastStack;
