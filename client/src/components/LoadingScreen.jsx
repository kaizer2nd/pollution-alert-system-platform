import { motion, AnimatePresence } from "framer-motion";
import { Leaf, LoaderCircle } from "lucide-react";

const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950 text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 shadow-glow">
              <Leaf className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-brand-200">
                Pollution Alert
              </p>
              <p className="text-xl font-display font-semibold">System Platform</p>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-brand-100">
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Loading experience...
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
