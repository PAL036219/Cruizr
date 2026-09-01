import { createFileRoute } from "@tanstack/react-router";
import { 
  WifiOff, 
  Video, 
  Trophy, 
  CreditCard, 
  Ambulance,
  Rocket
} from "lucide-react";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/roadmap")({
  component: Roadmap,
});

function Roadmap() {
  const features = [
    {
      icon: WifiOff,
      title: "The Offline P2P Mesh Network",
      subtitle: "(No Internet Required)",
      description: "The holy grail for adventure riders. Activate the true NearbyP2PDriver using Bluetooth/Wi-Fi Direct so that when riders are in the mountains with zero cell service, phones connect to each other in a chain.",
      bullets: [
        "Offline Walkie-Talkie: Voice packets are sent from phone-to-phone via the mesh.",
        "Offline Radar: See your convoy's GPS blips on the map even without 4G, coordinates bounce across the mesh."
      ],
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "hover:border-blue-500/30",
      glow: "group-hover:shadow-blue-500/10"
    },
    {
      icon: Video,
      title: "GoPro Telemetry Render Studio 📹",
      subtitle: "Professional video overlays",
      description: "Connect your GoPro and CRUIZR will extract the .gpmf metadata (speed, GPS, G-force) from the raw video files.",
      bullets: [
        "Custom Overlays: Add MotoGP-style HUDs (Speedometers, RPM, Lean Angles) onto your videos right inside the app.",
        "Social Export: One-click export to Instagram Reels or TikTok with the CRUIZR watermark."
      ],
      color: "text-red-500",
      bg: "bg-red-500/10",
      border: "hover:border-red-500/30",
      glow: "group-hover:shadow-red-500/10"
    },
    {
      icon: Trophy,
      title: "The Global & Club Leaderboards 🏆",
      subtitle: "Build your legacy",
      description: "Compete with other riders locally and globally. The foundation is built, we're just waiting to flip the switch.",
      bullets: [
        "Top Riders: Ranking based on distance covered and rides completed (Daily/Weekly/Monthly).",
        "Profile Integration: The daily top rider gets their profile picture featured on the main leaderboard button."
      ],
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      border: "hover:border-yellow-500/30",
      glow: "group-hover:shadow-yellow-500/10"
    },
    {
      icon: CreditCard,
      title: "CRUIZR PRO Subscription Tier 💰",
      subtitle: "Unlock your full potential",
      description: "Phase 2 integrates premium features for hardcore riders who want the ultimate experience.",
      bullets: [
        "Unlimited Mesh Range: Free users get 2 riders in a mesh; PRO users can chain unlimited riders.",
        "Custom Themes: Dark mode, topographic maps, and premium HUD themes.",
        "Advanced Analytics: Lean angle history, top speeds, and GPX route exports."
      ],
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "hover:border-green-500/30",
      glow: "group-hover:shadow-green-500/10"
    },
    {
      icon: Ambulance,
      title: "Crash Detection & Emergency SOS 🚑",
      subtitle: "Enhanced safety features",
      description: "Using the phone's accelerometer and gyroscope, we detect sudden impacts or unnatural phone orientations.",
      bullets: [
        "If a crash is detected, the app gives a 10-second countdown.",
        "If not cancelled, it automatically texts your emergency contacts with exact GPS coordinates and alerts the convoy."
      ],
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "hover:border-orange-500/30",
      glow: "group-hover:shadow-orange-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
      {/* Background gradients for extra polish */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--orange)]/10 via-background to-background -z-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <Reveal>
          <div className="text-center">
            <a 
              href="https://groups.google.com/g/cruizr-beta-testers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--orange)]/30 bg-[var(--orange)]/10 px-4 py-2 text-sm font-bold text-[var(--orange)] shadow-sm transition-all hover:scale-105 hover:bg-[var(--orange)]/20 hover:shadow-[0_0_15px_rgba(255,107,43,0.3)] md:px-5"
            >
              <Rocket size={16} className="animate-pulse" />
              <span>Join Early Access</span>
            </a>
            <h1 className="mt-5 font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4rem]">
              The <span className="text-gradient">Roadmap</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Here is a sneak peek at the game-changing features we are building for the CRUIZR community. 
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-6 sm:space-y-8 md:mt-20">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className={`group relative flex flex-col gap-4 rounded-3xl border border-border bg-card p-5 sm:p-6 md:flex-row md:gap-8 md:p-8 transition-all duration-300 hover:-translate-y-1 ${feature.border} shadow-lg ${feature.glow}`}>
                
                {/* Mobile: Icon + Title inline row | Desktop: Icon column */}
                <div className="flex flex-row items-center gap-4 md:flex-col md:items-start md:flex-shrink-0">
                  <div className={`grid h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${feature.bg} ${feature.color}`}>
                    <feature.icon size={28} className="sm:h-8 sm:w-8" />
                  </div>
                  
                  {/* Title only shows here on mobile */}
                  <div className="md:hidden">
                    <h3 className="font-heading text-xl font-bold leading-tight text-foreground sm:text-2xl">
                      {feature.title}
                    </h3>
                    <p className={`mt-1 text-xs font-semibold uppercase tracking-wider ${feature.color}`}>
                      {feature.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  {/* Title only shows here on desktop */}
                  <div className="hidden md:block">
                    <h3 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
                      {feature.title}
                    </h3>
                    <p className={`mt-1 text-sm font-semibold uppercase tracking-wider ${feature.color}`}>
                      {feature.subtitle}
                    </p>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base md:mt-4">
                    {feature.description}
                  </p>
                  
                  <div className="mt-5 h-px w-full bg-border/50" />
                  
                  <ul className="mt-5 space-y-3">
                    {feature.bullets.map((bullet, i) => {
                      const [boldPart, ...rest] = bullet.split(': ');
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <span className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current ${feature.color}`} />
                          <span className="text-sm leading-relaxed text-foreground/80 sm:text-base">
                            {rest.length > 0 ? (
                              <>
                                <strong className="font-semibold text-foreground">{boldPart}:</strong> {rest.join(': ')}
                              </>
                            ) : (
                              bullet
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
