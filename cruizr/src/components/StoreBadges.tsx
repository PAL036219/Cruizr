import { Apple, Play } from "lucide-react";

const APP_STORE = "https://apps.apple.com/app/cruizr";
const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.cruizr";

export function StoreBadges({ dark = false }: { dark?: boolean }) {
  const base =
    "inline-flex items-center gap-3 rounded-xl px-5 py-3 font-medium transition-all hover:scale-[1.03] hover:shadow-lg";
  const light = "bg-black text-white hover:bg-black/90";
  const onDark = "bg-white text-black hover:bg-white/90";
  const cls = `${base} ${dark ? onDark : light}`;

  return (
    <div id="download" className="flex flex-wrap gap-3">
      <a href={APP_STORE} className={cls} aria-label="Download on the App Store">
        <Apple size={24} />
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[10px] uppercase opacity-80">Download on the</span>
          <span className="font-heading text-base font-bold">App Store</span>
        </span>
      </a>
      <a href={PLAY_STORE} className={cls} aria-label="Get it on Google Play">
        <Play size={24} fill="currentColor" />
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[10px] uppercase opacity-80">Get it on</span>
          <span className="font-heading text-base font-bold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
