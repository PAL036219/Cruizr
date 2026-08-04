import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Users, HeartHandshake, Mountain, Rocket, Compass, Sparkles, Zap } from "lucide-react";
import aboutImg from "../assets/about-community.jpg";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { StoreBadges } from "../components/StoreBadges";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — CRUIZR: The Free Motorcycle Riding Community App" },
      {
        name: "description",
        content: "Discover why we built CRUIZR. We are building the ultimate Indian motorcycle community app and rider networking platform. Join us to find weekend bike rides near you.",
      },
      {
        name: "keywords",
        content:
          "free motorcycle riding community app, motorcycle rider networking app, best app to meet motorcycle riders, Indian motorcycle community app, motorcycle club app India, bike riders app Delhi",
      },
      { property: "og:title", content: "About CRUIZR — Indian Motorcycle Community & Biker Network" },
      { property: "og:description", content: "Discover why we built CRUIZR. We are building the ultimate Indian motorcycle community app and rider networking platform." },
      { property: "og:url", content: "https://cruizr.in/about" },
      { property: "og:image", content: "https://cruizr.in/assets/hero-riders.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About CRUIZR — Biker Social Network" },
      { name: "twitter:description", content: "Connecting motorcycle riders across India. Join the ultimate biker community." },
      { name: "twitter:image", content: "https://cruizr.in/assets/hero-riders.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://cruizr.in/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: ShieldCheck, title: "Safety", body: "Every feature is designed with rider safety first. Verified profiles, live tracking, and SOS built-in." },
  { icon: Users, title: "Community", body: "Riders are stronger together. We build tools that turn strangers into lifelong riding partners." },
  { icon: HeartHandshake, title: "Trust", body: "OTP verification, ratings, and privacy controls so you always know who you're riding with." },
  { icon: Mountain, title: "Adventure", body: "Every mile should be worth remembering. CRUIZR is built to unlock more of them." },
];

// ⭐ NEW: The CRUIZR Story - 4 milestones
const STORY_MILESTONES = [
  {
    icon: Rocket,
    title: "The Idea",
    body: "It started on a lonely Sunday ride. I had the perfect route, perfect weather, but no one to share it with. Texting five different friends, coordinating schedules, mismatched paces — it felt harder than it should be. That's when I realized: finding riding partners should be as easy as finding the road.",
  },
  {
    icon: Compass,
    title: "The Build",
    body: "I'm a full-stack Java developer who loves motorcycles. Instead of waiting for someone else to solve this problem, I started building. Spring Boot for the backend, React Native for the app, and a vision to create something that every rider would actually want to use. No shortcuts, just code and coffee.",
  },
  {
    icon: Sparkles,
    title: "The Launch",
    body: "What started as a solo project quickly became a community. The first 100 riders joined within the first month. They weren't just users — they became beta testers, feature requesters, and the heart of CRUIZR. Every bug report, every suggestion, every ride shared made the app better.",
  },
  {
    icon: Zap,
    title: "The Future",
    body: "Today, we're just getting started, and every rider who joins shapes what comes next. Offline mesh communication, AI route generation, group ride analytics — we're building the ultimate riding companion. Because no rider should ever have to cruise alone.",
  },
];

function AboutPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-dark py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <div className="mb-4 inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--orange)]">
            Our story
          </div>
          <h1 className="font-heading text-5xl font-black leading-tight text-white md:text-7xl">
            Built by riders. <span className="text-gradient">For riders.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            CRUIZR started with a simple frustration: it's too hard to find people to ride with.
          </p>
        </div>
      </section>

      {/* OUR STORY - Redesigned with vertical timeline */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Our journey"
              title="How CRUIZR came to life."
              subtitle="A story of passion, code, and the open road."
            />
          </Reveal>

          <div className="relative mt-16 space-y-12">
            {/* Vertical timeline line */}
            <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-[var(--orange)] via-[var(--cyan)] to-transparent md:left-1/2 md:-translate-x-1/2" />

            {STORY_MILESTONES.map((milestone, index) => (
              <Reveal key={milestone.title} delay={index * 150}>
                <div className={`relative flex flex-col md:flex-row md:items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-5 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-[var(--orange)] to-[var(--cyan)] text-white shadow-lg md:left-1/2">
                    <milestone.icon size={18} />
                  </div>

                  {/* Content */}
                  <div className={`ml-16 flex-1 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-16 md:pr-12 md:text-right" : "md:ml-16 md:pl-12"
                  }`}>
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md md:p-8">
                      <div className="flex items-center gap-3 md:block">
                        <span className="inline-block rounded-full bg-[var(--orange)]/10 px-3 py-0.5 text-xs font-semibold text-[var(--orange)]">
                          {index + 1}
                        </span>
                        <h3 className="font-heading text-xl font-bold">{milestone.title}</h3>
                      </div>
                      <p className="mt-3 text-muted-foreground leading-relaxed">
                        {milestone.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="bg-muted/30 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What we stand for"
              title="Our values."
              subtitle="Four principles that shape every decision we make."
            />
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-[var(--orange)]/40 hover:shadow-[var(--shadow-elegant)]">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--orange)] to-[var(--cyan)] text-white">
                    <v.icon size={22} />
                  </div>
                  <h3 className="font-heading text-xl font-bold">{v.title}</h3>
                  <p className="mt-2 text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-dark py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <h2 className="font-heading text-4xl font-black leading-tight text-white md:text-6xl">
            Come ride <span className="text-gradient">with us.</span>
          </h2>
          <div className="mt-10 flex justify-center">
            <StoreBadges dark />
          </div>
        </div>
      </section>
    </>
  );
}