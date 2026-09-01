import { createFileRoute } from "@tanstack/react-router";
import {
  Users,
  MapPin,
  Radio,
  ShieldCheck,
  Lock,
  Trophy,
  MessageSquare,
  BarChart3,
  HeartHandshake,
  Video,
  MessageCircle,
  Target,
} from "lucide-react";
import { StoreBadges } from "../components/StoreBadges";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "CRUIZR Features — Free Motorcycle Intercom, Live GPS Tracker, Club Manager & Crash Alerts" },
      {
        name: "description",
        content:
          "Explore all CRUIZR features: free built-in motorcycle intercom, real-time group GPS tracking, motorbike club management, crash detection & SOS alerts, women-only ride mode, live ride streaming, and smart rider matching. India's most complete motorcycle app.",
      },
      {
        name: "keywords",
        content:
          "motorcycle ride tracking app, free motorcycle intercom app India, group motorcycle GPS tracking, motorcycle club management app, motorcycle crash detection app, women only bike ride app India, motorcycle live streaming app, offline motorcycle maps app, motorcycle GPS tracker India, smart rider matching app, motorcycle safety app India, download motorcycle riders app free",
      },
      { property: "og:title", content: "CRUIZR Features — Free Intercom, GPS Tracker, Club Manager & Crash Alerts" },
      { property: "og:description", content: "India's most complete motorcycle app: free intercom, live GPS group tracking, club management, crash detection & SOS, women-only rides, and live streaming." },
      { property: "og:url", content: "https://www.cruizr.in/features" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp" },
      { property: "og:image:alt", content: "CRUIZR Features — India's Most Complete Motorcycle App" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CRUIZR Features — Free Intercom, GPS & Club Manager" },
      { name: "twitter:description", content: "Free intercom, live group tracking, SOS crash alerts, club management, women-only rides, and live streaming — India's most complete motorcycle companion app." },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp" },
    ],
    links: [{ rel: "canonical", href: "https://www.cruizr.in/features" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.cruizr.in/features#webpage",
              url: "https://www.cruizr.in/features",
              name: "CRUIZR Features — Free Motorcycle Intercom, Live GPS, Club Manager & Crash Alerts",
              description: "Explore all features of India's #1 motorcycle companion app: free intercom, group GPS tracking, club management, crash alerts, and more.",
              isPartOf: { "@id": "https://www.cruizr.in/#website" },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cruizr.in/" },
                  { "@type": "ListItem", position: 2, name: "Features", item: "https://www.cruizr.in/features" },
                ],
              },
            },
          ],
        }),
      },
    ],
  }),
  component: FeaturesPage,
});

const ALL = [
  { 
    icon: Users, 
    title: "Smart Matching", 
    body: "Our matching engine considers your bike type, experience level, preferred pace, and riding style to pair you with riders who genuinely fit. No more mismatched groups." 
  },
  { 
    icon: MapPin, 
    title: "Live GPS Tracking", 
    body: "See your entire group on an interactive real-time map. Know who's ahead, who's behind, and never worry about losing a rider on the route again." 
  },
  { 
    icon: Radio, 
    title: "Walkie-Talkie", 
    body: "Free push-to-talk voice communication built right into the app. Replace $200+ intercoms with your phone and a bluetooth headset." 
  },
  { 
    icon: ShieldCheck, 
    title: "OTP Verification", 
    body: "Every rider gets a one-time code that confirms they're physically at the meeting point. No ghosting, no confusion — everyone accounted for." 
  },
  { 
    icon: Lock, 
    title: "Private & Invite-Only Rides", 
    body: "Ride only with your trusted crew. Create private rides visible to invitees only, with full control over who joins." 
  },
  { 
    icon: Trophy, 
    title: "Groups & Clubs", 
    body: "Build permanent riding communities. Clubs give members recurring rides, shared history, and a place to belong." 
  },
  { 
    icon: MessageSquare, 
    title: "Community Feed", 
    body: "Share photos, routes, and stories from your rides. Follow other riders, discover routes, and stay plugged into the culture." 
  },
  { 
    icon: BarChart3, 
    title: "Ride History & Stats", 
    body: "Every ride is logged — distance, duration, elevation, partners. Watch your riding story build over time." 
  },
  { 
    icon: HeartHandshake, 
    title: "Safety & Trust", 
    body: "Verified profiles, rider ratings, emergency SOS, and check-in reminders. Built with rider safety at the core." 
  },
  {
    icon: MessageCircle,
    title: "Direct & Group Chat",
    body: "Connect with other riders through direct messaging, or coordinate your next trip in dedicated ride and club group chats."
  },
  {
    icon: Video,
    title: "Live Ride Broadcasting",
    body: "Stream your ride live to your followers or club members. Let viewers join your journey in real-time, right from their screens."
  },
  {
    icon: Target,
    title: "Daily Rider Challenges",
    body: "Push your limits and keep the rubber on the road. Complete daily riding challenges, earn badges, and compete with the community."
  },
];

function FeaturesPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-dark py-16 sm:py-20 md:py-32">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-radial)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 md:px-8">
          <div className="mb-4 inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--orange)] md:text-sm">
            Features
          </div>
          <h1 className="font-heading text-4xl font-black leading-tight text-white sm:text-5xl md:text-7xl">
            Every tool a rider <span className="text-gradient block sm:inline">actually needs.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            Built ground-up for motorcycle and bicycle riders — not adapted from some generic social app.
          </p>
        </div>
      </section>

      {/* FEATURES LIST */}
      <section className="bg-background py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-6xl space-y-12 px-4 sm:space-y-16 sm:px-6 md:px-8 md:space-y-24">
          {ALL.map((f, i) => (
            <Reveal key={f.title} direction={i % 2 === 0 ? "left" : "right"}>
              <article
                className={`flex flex-col gap-6 sm:gap-8 md:grid md:grid-cols-2 md:items-center md:gap-12 ${
                  i % 2 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="flex flex-col md:block">
                  {/* Icon & Title Row on Mobile */}
                  <div className="flex items-center gap-4 md:block">
                    <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[var(--orange)] to-[var(--cyan)] text-white sm:h-14 sm:w-14 md:mb-6">
                      <f.icon size={24} className="sm:h-7 sm:w-7" />
                    </div>
                    <h2 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl md:text-4xl">
                      {f.title}
                    </h2>
                  </div>
                  
                  {/* Body Text */}
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg md:mt-5">
                    {f.body}
                  </p>
                </div>

                {/* Decorative Box / Placeholder */}
                <div className="relative mt-4 md:mt-0">
                  <div className="aspect-video w-full rounded-3xl border border-border bg-gradient-to-br from-[var(--orange)]/10 via-background to-[var(--cyan)]/10 p-4 sm:p-6 md:aspect-[4/3] md:p-8">
                    <div className="grid h-full place-items-center rounded-2xl bg-background/40 backdrop-blur-sm border border-white/5 transition-all duration-300 hover:bg-background/20 hover:scale-[1.02]">
                      <f.icon size={64} className="text-[var(--orange)] opacity-40 transition-opacity duration-300 hover:opacity-70 md:h-[96px] md:w-[96px]" />
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-dark py-16 sm:py-20 md:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 md:px-8">
          <SectionHeading 
            invert 
            title={<span className="text-white">Try every feature free.</span>} 
            subtitle={<span className="text-white/70">CRUIZR is coming soon. Get ready to start riding with your crew.</span>} 
          />
          <div className="mt-8 flex justify-center sm:mt-10">
            <StoreBadges dark />
          </div>
        </div>
      </section>
    </>
  );
}