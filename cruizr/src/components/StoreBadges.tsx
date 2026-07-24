import { Apple, Play } from "lucide-react";
import { motion } from "framer-motion";

const APP_STORE = "https://apps.apple.com/app/cruizr";
const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.cruizr";

export function StoreBadges({ dark = false }: { dark?: boolean }) {
  const base =
    "inline-flex items-center gap-3 rounded-xl px-5 py-3 font-medium shadow-sm";
  const light = "bg-black text-white hover:bg-black/90";
  const onDark = "bg-white text-black hover:bg-white/90";
  const cls = `${base} ${dark ? onDark : light}`;

  return (
    <div id="download" className="flex flex-wrap gap-3">
      <motion.a 
        href={APP_STORE} 
        className={cls} 
        aria-label="Download on the App Store"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Apple size={24} />
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[10px] uppercase opacity-80">Coming soon to the</span>
          <span className="font-heading text-base font-bold">App Store</span>
        </span>
      </motion.a>
      <motion.a 
        href={PLAY_STORE} 
        className={cls} 
        aria-label="Get it on Google Play"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Play size={24} fill="currentColor" />
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[10px] uppercase opacity-80">Coming soon to</span>
          <span className="font-heading text-base font-bold">Google Play</span>
        </span>
      </motion.a>
    </div>
  );
}
