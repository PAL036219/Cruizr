import { createFileRoute } from "@tanstack/react-router";
import { Check, X, Globe, Crown, Siren, Map as MapIcon, Badge, Ticket, Rocket } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { StoreBadges } from "../components/StoreBadges";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "CRUIZR Pricing & Plans — Free Motorcycle App, Day Pass & Pro Features" },
      {
        name: "description",
        content: "Explore CRUIZR pricing plans. Enjoy free cellular walkie-talkie and live group tracking, or upgrade to Pro for unlimited offline P2P mesh intercom, crash SOS, and offline state maps.",
      },
      {
        name: "keywords",
        content: "motorcycle app pricing, free motorcycle intercom app, mesh intercom pro, motorcycle trip planner price, CRUIZR subscription, biker app plans India",
      },
      { property: "og:title", content: "CRUIZR Pricing & Plans — Free Biker App & Pro Upgrades" },
      {
        property: "og:description",
        content: "Start free with group tracking & cellular intercom. Upgrade for unlimited offline P2P mesh communication, crash SOS, and offline maps.",
      },
      { property: "og:url", content: "https://www.cruizr.in/pricing" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp" },
      { property: "og:image:alt", content: "CRUIZR App Pricing & Membership Plans" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "CRUIZR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@cruizrapp" },
      { name: "twitter:title", content: "CRUIZR Pricing & Plans — Free Biker App & Pro Upgrades" },
      { name: "twitter:description", content: "Start free with group tracking & cellular intercom. Upgrade for unlimited offline P2P mesh communication." },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp" },
    ],
    links: [{ rel: "canonical", href: "https://www.cruizr.in/pricing" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.cruizr.in/pricing#webpage",
              url: "https://www.cruizr.in/pricing",
              name: "CRUIZR Pricing & Plans — Free Motorcycle App & Pro Upgrades",
              description: "Compare free and pro plans for CRUIZR motorcycle companion app.",
              isPartOf: { "@id": "https://www.cruizr.in/#website" },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cruizr.in/" },
                  { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.cruizr.in/pricing" },
                ],
              },
            },
          ],
        }),
      },
    ],
  }),
  component: PricingPage,
});

const features = [
  {
    name: "Walkie-Talkie (4G Cellular)",
    free: { text: "5 Hours / month", icon: <Check size={18} className="text-emerald-500" /> },
    pass: { text: "7 Hours (24H Valid)", icon: <Check size={18} className="text-emerald-500" /> },
    pro: { text: "Unlimited Audio*", icon: <Crown size={18} className="text-[var(--orange)]" /> },
    expedition: { text: "Unlimited Audio*", icon: <Rocket size={18} className="text-purple-400" /> },
  },
  {
    name: "Offline P2P Mesh Intercom",
    free: { text: "No Signal = Off", icon: <X size={18} className="text-rose-500" /> },
    pass: { text: "24 Hours", icon: <Check size={18} className="text-emerald-500" /> },
    pro: { text: "Unlimited Always-On", icon: <Globe size={18} className="text-blue-400" /> },
    expedition: { text: "Unlimited Always-On", icon: <Globe size={18} className="text-blue-400" /> },
  },
  {
    name: "Host Unlocks Group Convoy",
    free: { text: "", icon: <X size={18} className="text-rose-500" /> },
    pass: { text: "", icon: <X size={18} className="text-rose-500" /> },
    pro: { text: "Unlocks for Whole Group", icon: <Crown size={18} className="text-[var(--orange)]" /> },
    expedition: { text: "Unlocks for Whole Group", icon: <Rocket size={18} className="text-purple-400" /> },
  },
  {
    name: "Intercom Priority Rank",
    free: { text: "Standard (Rank 10)", icon: null },
    pass: { text: "Standard (Rank 10)", icon: null },
    pro: { text: "Leader Priority (Rank 100)", icon: <Crown size={18} className="text-[var(--orange)]" /> },
    expedition: { text: "Admin Priority (Rank 999)", icon: <Rocket size={18} className="text-purple-400" /> },
  },
  {
    name: "Crash Detection & Mesh SOS",
    free: { text: "Basic Alarm", icon: null },
    pass: { text: "Basic Alarm", icon: null },
    pro: { text: "Automated Off-Grid SOS", icon: <Siren size={18} className="text-rose-400" /> },
    expedition: { text: "Automated Off-Grid SOS", icon: <Siren size={18} className="text-rose-400" /> },
  },
  {
    name: "Offline 3D Vector Maps",
    free: { text: "", icon: <X size={18} className="text-rose-500" /> },
    pass: { text: "", icon: <X size={18} className="text-rose-500" /> },
    pro: { text: "Full State Map Downloads", icon: <MapIcon size={18} className="text-emerald-400" /> },
    expedition: { text: "Full Country Downloads", icon: <MapIcon size={18} className="text-emerald-400" /> },
  },
  {
    name: "Rider Profile Badge",
    free: { text: "Standard Biker", icon: null },
    pass: { text: "Pass Holder", icon: <Ticket size={18} className="text-yellow-400" /> },
    pro: { text: "Gold PRO Crown Badge", icon: <Badge size={18} className="text-[var(--orange)]" /> },
    expedition: { text: "Diamond Expedition Badge", icon: <Badge size={18} className="text-purple-400" /> },
  },
];

function PricingPage() {
  return (

    
    <div className="relative overflow-hidden bg-background pt-24 md:pt-32">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--navy)] via-background to-background" />
      <div className="absolute -top-[30%] -right-[10%] h-[600px] w-[600px] rounded-full bg-[var(--orange)]/5 blur-[120px]" />
      <div className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[var(--cyan)]/5 blur-[120px]" />

      <main className="relative mx-auto max-w-7xl px-4 md:px-8 pb-32">
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

                {/* COMING SOON BANNER */}
        <Reveal delay={200} className="mt-14 max-w-3xl mx-auto text-center">
          <div className="relative rounded-3xl border border-[var(--orange)]/30 bg-gradient-to-b from-[var(--orange)]/10 via-card/50 to-background/80 p-8 md:p-14 shadow-2xl backdrop-blur-xl overflow-hidden">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-[var(--orange)]/20 blur-3xl pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--orange)]/40 bg-[var(--orange)]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--orange)] mb-6">
              <span className="h-2 w-2 rounded-full bg-[var(--orange)] animate-ping" />
              <span>Plans Launching Soon</span>
            </div>

            <h3 className="font-heading text-3xl md:text-5xl font-black text-foreground tracking-tight">
              CRUIZR is Currently <span className="text-gradient">100% Free</span>
            </h3>

            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              We are offering all rider tools, live convoy GPS tracking, and hands-free group intercom completely free for riders and motorcycle clubs across India during our community launch phase.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur">
                <Crown className="h-6 w-6 text-[var(--orange)] mb-2" />
                <h4 className="font-semibold text-sm text-foreground">PRO Features</h4>
                <p className="text-xs text-muted-foreground mt-1">Advanced mesh intercom & convoy unlock coming soon.</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur">
                <Globe className="h-6 w-6 text-blue-400 mb-2" />
                <h4 className="font-semibold text-sm text-foreground">Offline Mesh</h4>
                <p className="text-xs text-muted-foreground mt-1">Zero-signal P2P radio for high-altitude passes.</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur">
                <Rocket className="h-6 w-6 text-purple-400 mb-2" />
                <h4 className="font-semibold text-sm text-foreground">Expedition Tier</h4>
                <p className="text-xs text-muted-foreground mt-1">Dedicated long-haul touring tools & priority rank.</p>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="text-sm font-medium text-foreground">Get started on the road today:</span>
              <StoreBadges />
            </div>
          </div>
        </Reveal>

        {/* =========================================================================
            PRICING PLANS & COMPARISON (COMMENTED OUT - PRESERVED FOR LAUNCH)
           ========================================================================= */}
        {/*
        <Reveal delay={250} className="mt-20 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-[var(--orange)]/30 bg-gradient-to-br from-[var(--orange)]/5 to-transparent p-8 md:p-12 shadow-2xl backdrop-blur-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
              Why spend <span className="text-rose-400 line-through decoration-rose-500/50">₹25,000</span> on a Hardware Intercom?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card/40 rounded-2xl p-6 md:p-8 border border-border/50">
                <h4 className="text-xl font-bold text-muted-foreground mb-4 flex items-center gap-2">
                  <X size={24} className="text-rose-500" /> Physical Intercoms
                </h4>
                <div className="text-3xl font-bold text-foreground mb-6">₹25,000+ <span className="text-lg text-muted-foreground font-medium text-rose-500/80">/rider</span></div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <X size={18} className="text-rose-500 shrink-0 mt-1" />
                    <span>Massive upfront cost for every rider</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <X size={18} className="text-rose-500 shrink-0 mt-1" />
                    <span>Range drops dead after 1 to 2 kilometers</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <X size={18} className="text-rose-500 shrink-0 mt-1" />
                    <span>Audio disconnects completely around mountain curves</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <X size={18} className="text-rose-500 shrink-0 mt-1" />
                    <span>Strict hardware limits on group size (usually 4 to 8)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[var(--orange)]/10 rounded-2xl p-6 md:p-8 border border-[var(--orange)]/40 relative overflow-hidden shadow-[0_0_40px_rgba(255,100,0,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--orange)]/20 to-transparent pointer-events-none" />
                <h4 className="relative z-10 text-xl font-bold text-[var(--orange)] mb-4 flex items-center gap-2">
                  <Check size={24} /> CRUIZR PRO
                </h4>
                <div className="relative z-10 text-3xl font-bold text-foreground mb-6">₹159<span className="text-lg text-[var(--orange)] font-medium"> /mo</span></div>
                <ul className="relative z-10 space-y-4">
                  <li className="flex items-start gap-3 text-foreground font-medium">
                    <Check size={18} className="text-emerald-500 shrink-0 mt-1" />
                    <span>Costs less than a cup of coffee</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground font-medium">
                    <Globe size={18} className="text-blue-400 shrink-0 mt-1" />
                    <span>Infinite range over 4G/5G mobile networks</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground font-medium">
                    <Check size={18} className="text-emerald-500 shrink-0 mt-1" />
                    <span>Crystal clear audio, even around mountains and cities</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground font-medium">
                    <Crown size={18} className="text-[var(--orange)] shrink-0 mt-1" />
                    <span>Uses the phone and earphones you already own</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-16 rounded-3xl border border-border/50 bg-card/40 shadow-2xl backdrop-blur-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="p-6 text-lg font-semibold text-foreground w-[20%]">Feature</th>
                    
                    <th className="p-6 text-center w-[20%] border-l border-border/20">
                      <div className="text-lg font-semibold text-foreground">FREE Plan</div>
                      <div className="text-sm font-medium text-muted-foreground mt-1">₹0</div>
                    </th>
                    
                    <th className="p-6 text-center w-[20%] border-l border-border/20">
                      <div className="text-lg font-semibold text-foreground">Single Ride Pass</div>
                      <div className="text-sm font-medium text-muted-foreground mt-1">₹49</div>
                    </th>
                    
                    <th className="p-6 text-center w-[20%] bg-[var(--orange)]/5 border-l border-[var(--orange)]/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--orange)]/10 to-transparent pointer-events-none" />
                      <div className="relative z-10">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--orange)]/20 px-3 py-1 text-xs font-bold text-[var(--orange)] uppercase tracking-wider mb-2">
                          <Crown size={12} /> Most Popular
                        </div>
                        <div className="text-lg font-bold text-foreground">CRUIZR PRO</div>
                        <div className="text-sm font-medium text-[var(--orange)] mt-1">
                          ₹159/mo <span className="text-muted-foreground">or</span> ₹1,699/yr
                        </div>
                      </div>
                    </th>

                    <th className="p-6 text-center w-[20%] bg-purple-500/5 border-l border-purple-500/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none" />
                      <div className="relative z-10">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/20 px-3 py-1 text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
                          <Rocket size={12} /> Hardcore Touring
                        </div>
                        <div className="text-lg font-bold text-foreground">EXPEDITION</div>
                        <div className="text-sm font-medium text-purple-400 mt-1">
                          ₹399/mo <span className="text-muted-foreground">or</span> ₹3,999/yr
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

                      <td className="p-4 px-6 text-center bg-purple-500/5 border-l border-purple-500/20 relative">
                        <div className="relative z-10 flex items-center justify-center gap-2 text-sm">
                          {feature.expedition.icon}
                          <span className="font-semibold text-foreground">{feature.expedition.text}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-6 text-center px-4">
          <p className="text-xs text-muted-foreground max-w-3xl mx-auto italic opacity-80">
            *Fair Usage Policy (FUP): To ensure crystal clear audio quality on 4G Cellular networks, the Free plan is capped at 5 active hours, Cruizr Pro is capped at 25 active hours, and the Expedition plan is capped at 65 active hours per month. Offline P2P Mesh usage is completely unlimited and does not count toward your FUP.
          </p>
        </Reveal>
        */}

        

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
