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
} from "lucide-react";
import { StoreBadges } from "../components/StoreBadges";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — CRUIZR" },
      {
        name: "description",
        content:
          "Explore every CRUIZR feature: smart matching, live GPS, walkie-talkie, OTP verification, private rides, clubs, community feed, and safety.",
      },
      { property: "og:title", content: "Features — CRUIZR" },
      { property: "og:description", content: "Every feature that makes CRUIZR the ride-partner app for serious riders." },
      { property: "og:url", content: "/features" },
    ],
    links: [{ rel: "canonical", href: "/features" }],
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

      {/* ⭐ STATS SECTION - NEW */}
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

      {/* FEATURES LIST */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-6xl space-y-16 px-4 md:px-8 md:space-y-24">
          {ALL.map((f, i) => (
            <Reveal key={f.title}>
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

      {/* ⭐ TESTIMONIAL SECTION - NEW */}
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

      {/* CTA SECTION */}
      <section className="bg-dark py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <SectionHeading 
            invert 
            title={<span className="text-white">Try every feature free.</span>} 
            subtitle={<span className="text-white/70">Download CRUIZR and start riding with your crew today.</span>} 
          />
          <div className="mt-10 flex justify-center">
            <StoreBadges dark />
          </div>
        </div>
      </section>
    </>
  );
}