import { createFileRoute } from "@tanstack/react-router";
import { Check, X, Globe, Crown, Siren, Video, Map as MapIcon, Badge, Star, Ticket } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { StoreBadges } from "../components/StoreBadges";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | CRUIZR" },
      { name: "description", content: "Choose the perfect CRUIZR plan for your rides." },
    ],
  }),
  component: PricingPage,
});

const features = [
  {
    name: "Walkie-Talkie (4G Cellular)",
    free: { text: "Included", icon: <Check size={18} className="text-emerald-500" /> },
    pass: { text: "Included", icon: <Check size={18} className="text-emerald-500" /> },
    pro: { text: "Included", icon: <Check size={18} className="text-emerald-500" /> },
  },
  {
    name: "Offline P2P Mesh Intercom (0 Data)",
    free: { text: "No Signal = Off", icon: <X size={18} className="text-rose-500" /> },
    pass: { text: "24 Hours", icon: <Check size={18} className="text-emerald-500" /> },
    pro: { text: "Unlimited Always-On", icon: <Globe size={18} className="text-blue-400" /> },
  },
  {
    name: "Host Unlocks Group Convoy",
    free: { text: "", icon: <X size={18} className="text-rose-500" /> },
    pass: { text: "", icon: <X size={18} className="text-rose-500" /> },
    pro: { text: "Unlocks Mesh for Whole Group", icon: <Crown size={18} className="text-[var(--orange)]" /> },
  },
  {
    name: "Intercom Priority Rank",
    free: { text: "Standard (Rank 10)", icon: null },
    pass: { text: "Standard (Rank 10)", icon: null },
    pro: { text: "Leader Priority (Rank 100)", icon: <Crown size={18} className="text-[var(--orange)]" /> },
  },
  {
    name: "Crash Detection & Mesh SOS",
    free: { text: "Basic Alarm", icon: null },
    pass: { text: "Basic Alarm", icon: null },
    pro: { text: "Automated Off-Grid Mesh SOS", icon: <Siren size={18} className="text-rose-400" /> },
  },
  // {
  //   name: "GoPro Telemetry Video Overlays",
  //   free: { text: "", icon: <X size={18} className="text-rose-500" /> },
  //   pass: { text: "", icon: <X size={18} className="text-rose-500" /> },
  //   pro: { text: "Unlimited Video Exports", icon: <Video size={18} className="text-purple-400" /> },
  // },
  {
    name: "Offline 3D Vector Maps",
    free: { text: "", icon: <X size={18} className="text-rose-500" /> },
    pass: { text: "", icon: <X size={18} className="text-rose-500" /> },
    pro: { text: "Full State Map Downloads", icon: <MapIcon size={18} className="text-emerald-400" /> },
  },
  {
    name: "Rider Profile Badge",
    free: { text: "Standard Biker", icon: null },
    pass: { text: "Pass Holder", icon: <Ticket size={18} className="text-yellow-400" /> },
    pro: { text: "Gold PRO Crown Badge", icon: <Badge size={18} className="text-[var(--orange)]" /> },
  },
  
];

function PricingPage() {
  return (
    <div className="relative overflow-hidden bg-background pt-24 md:pt-32">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--navy)] via-background to-background" />
      <div className="absolute -top-[30%] -right-[10%] h-[600px] w-[600px] rounded-full bg-[var(--orange)]/5 blur-[120px]" />
      <div className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[var(--cyan)]/5 blur-[120px]" />

      <main className="relative mx-auto max-w-6xl px-4 md:px-8 pb-32">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title={
              <>
                Ride with <span className="text-gradient">CRUIZR PRO</span>
              </>
            }
            subtitle="Choose the perfect plan to keep you and your crew connected, on-grid and off-grid. Upgrade to unlock powerful mesh networking and premium safety features."
          />
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-16 rounded-3xl border border-border/50 bg-card/40 shadow-2xl backdrop-blur-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="p-6 text-lg font-semibold text-foreground w-1/4">Feature</th>
                    <th className="p-6 text-center w-1/4 border-l border-border/20">
                      <div className="text-lg font-semibold text-foreground">FREE Plan</div>
                      <div className="text-sm font-medium text-muted-foreground mt-1">₹0</div>
                    </th>
                    <th className="p-6 text-center w-1/4 border-l border-border/20">
                      <div className="text-lg font-semibold text-foreground">Single Ride Pass</div>
                      <div className="text-sm font-medium text-muted-foreground mt-1">₹29</div>
                    </th>
                    <th className="p-6 text-center w-1/4 bg-[var(--orange)]/5 border-l border-[var(--orange)]/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--orange)]/10 to-transparent pointer-events-none" />
                      <div className="relative z-10">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--orange)]/20 px-3 py-1 text-xs font-bold text-[var(--orange)] uppercase tracking-wider mb-2">
                          <Crown size={12} /> Most Popular
                        </div>
                        <div className="text-lg font-bold text-foreground">CRUIZR PRO</div>
                        <div className="text-sm font-medium text-[var(--orange)] mt-1">
                          ₹99/mo <span className="text-muted-foreground">or</span> ₹899/yr
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {features.map((feature, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors duration-200">
                      <td className="p-4 px-6 font-medium text-foreground">{feature.name}</td>
                      
                      <td className="p-4 px-6 text-center border-l border-border/20">
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                          {feature.free.icon}
                          <span className={feature.free.icon?.type === X ? "" : "font-medium text-foreground"}>
                            {feature.free.text}
                          </span>
                        </div>
                      </td>
                      
                      <td className="p-4 px-6 text-center border-l border-border/20">
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                          {feature.pass.icon}
                          <span className={feature.pass.icon?.type === X ? "" : "font-medium text-foreground"}>
                            {feature.pass.text}
                          </span>
                        </div>
                      </td>
                      
                      <td className="p-4 px-6 text-center bg-[var(--orange)]/5 border-l border-[var(--orange)]/20 relative">
                        <div className="relative z-10 flex items-center justify-center gap-2 text-sm">
                          {feature.pro.icon}
                          <span className="font-semibold text-foreground">{feature.pro.text}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={300} className="mt-16 text-center">
          <p className="text-lg font-medium text-foreground mb-8">
            Ready to upgrade your ride?
          </p>
          <div className="flex justify-center">
            <StoreBadges />
          </div>
        </Reveal>
      </main>
    </div>
  );
}
