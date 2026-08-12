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
  Bike,
  Coffee,
  Compass,
  Zap,
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
            {
              "@type": "ItemList",
              name: "CRUIZR Motorcycle App Features",
              description: "Complete list of features in India's #1 motorcycle companion app CRUIZR.",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Smart Rider Matching", url: "https://www.cruizr.in/features#smart-matching" },
                { "@type": "ListItem", position: 2, name: "Live GPS Group Tracking", url: "https://www.cruizr.in/features#live-tracking" },
                { "@type": "ListItem", position: 3, name: "Free Built-in Motorcycle Intercom", url: "https://www.cruizr.in/features#walkie-talkie" },
                { "@type": "ListItem", position: 4, name: "OTP Rider Verification", url: "https://www.cruizr.in/features#otp-verification" },
                { "@type": "ListItem", position: 5, name: "Private & Invite-Only Rides", url: "https://www.cruizr.in/features#private-rides" },
                { "@type": "ListItem", position: 6, name: "Motorcycle Club Management", url: "https://www.cruizr.in/features#clubs" },
                { "@type": "ListItem", position: 7, name: "Community Feed & Route Sharing", url: "https://www.cruizr.in/features#community-feed" },
                { "@type": "ListItem", position: 8, name: "Ride History & Stats", url: "https://www.cruizr.in/features#ride-history" },
                { "@type": "ListItem", position: 9, name: "Crash Detection & Emergency SOS", url: "https://www.cruizr.in/features#safety" },
                { "@type": "ListItem", position: 10, name: "Direct & Group Chat", url: "https://www.cruizr.in/features#group-chat" },
                { "@type": "ListItem", position: 11, name: "Live Ride Broadcasting", url: "https://www.cruizr.in/features#live-broadcasting" },
                { "@type": "ListItem", position: 12, name: "Daily Rider Challenges", url: "https://www.cruizr.in/features#challenges" },
              ],
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

// ⭐ NEW: Quick Stats Section
const STATS = [
  { number: "50K+", label: "Rides Created" },
  { number: "10K+", label: "Active Riders" },
  { number: "98%", label: "Match Rate" },
  { number: "4.9⭐", label: "Average Rating" },
];

// ⭐ NEW: Testimonial
const TESTIMONIAL = {
  quote: "CRUIZR completely changed how I ride. I went from riding solo every weekend to having a crew of 8 regular riding partners. The matching is unreal.",
  author: "Rahul S.",
  role: "Interceptor 650 Rider, Bangalore",
};

function FeaturesPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-dark py-24 md:py-32">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-radial)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
          <div className="mb-4 inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--orange)]">
            Features
          </div>
          <h1 className="font-heading text-5xl font-black leading-tight text-white md:text-7xl">
            Every tool a rider <span className="text-gradient">actually needs.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Built ground-up for motorcycle and bicycle riders — not adapted from some generic social app.
          </p>
        </div>
      </section>

      {/* ⭐ STATS SECTION - NEW 
      <section className="bg-background border-b border-border py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <div className="font-heading text-3xl font-black text-[var(--orange)] md:text-4xl">
                    {stat.number}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* FEATURES LIST */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-6xl space-y-16 px-4 md:px-8 md:space-y-24">
          {ALL.map((f, i) => (
            <Reveal key={f.title} direction={i % 2 === 0 ? "left" : "right"}>
              <article
                className={`grid gap-10 md:grid-cols-2 md:items-center ${
                  i % 2 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[var(--orange)] to-[var(--cyan)] text-white">
                    <f.icon size={26} />
                  </div>
                  <h2 className="font-heading text-3xl font-extrabold md:text-4xl">{f.title}</h2>
                  <p className="mt-4 text-lg text-muted-foreground">{f.body}</p>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl border border-border bg-gradient-to-br from-[var(--orange)]/10 via-background to-[var(--cyan)]/10 p-8">
                    <div className="grid h-full place-items-center">
                      <f.icon size={96} className="text-[var(--orange)] opacity-60" />
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ⭐ TESTIMONIAL SECTION - NEW 
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
              <div className="mb-4 text-6xl text-[var(--orange)]">"</div>
              <p className="text-xl font-medium leading-relaxed md:text-2xl">
                {TESTIMONIAL.quote}
              </p>
              <div className="mt-6">
                <div className="font-heading text-lg font-bold">{TESTIMONIAL.author}</div>
                <div className="text-sm text-muted-foreground">{TESTIMONIAL.role}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      */}

      {/* CTA SECTION */}
      <section className="bg-dark py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <SectionHeading 
            invert 
            title={<span className="text-white">Try every feature free.</span>} 
            subtitle={<span className="text-white/70">CRUIZR is coming soon. Get ready to start riding with your crew.</span>} 
          />
          <div className="mt-10 flex justify-center">
            <StoreBadges dark />
          </div>
        </div>
      </section>
    </>
  );
}