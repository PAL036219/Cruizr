import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function WaitlistForm() {
  return (
    <div className="w-full max-w-md flex flex-col items-start sm:items-center">
      <motion.a
        href="https://play.google.com/store/apps/details?id=com.cruizr.app&hl=en"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-8 font-semibold text-white transition-all sm:w-auto btn-glow shadow-[0_8px_24px_oklch(0.7_0.19_40/0.35)]"
      >
        Pre-register now
        <ArrowRight size={18} />
      </motion.a>
      <p className="mt-4 text-xs text-white/60 text-center">
        Pre-register early to get exclusive beta access.
      </p>
    </div>
  );
}
