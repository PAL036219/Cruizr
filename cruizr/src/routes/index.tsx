import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  MapPin,
  Radio,
  ShieldCheck,
  Lock,
  Trophy,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";
import heroImg from "../assets/hero-riders.jpg";
import heroVideo from "../assets/hero-video.mp4";
import appMockup from "../assets/app-mockup.jpg";
import { StoreBadges } from "../components/StoreBadges";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CRUIZR — Never Cruise Alone. Find Your Riding Partner." },
      {
        name: "description",
        content:
          "CRUIZR matches solo riders with compatible partners by bike, pace, and style. Live tracking, in built intercom, private rides, and clubs.",
      },
      { property: "og:title", content: "CRUIZR — Never Cruise Alone. Find Your Riding Partner." },
      {
        property: "og:description",
        content: "CRUIZR matches solo riders with compatible partners by bike, pace, and style. Live tracking, in built intercom, private rides, and clubs.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          name: "CRUIZR",
          applicationCategory: "LifestyleApplication",
          operatingSystem: "iOS, Android",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],
  }),
  component: Home,
});

const FEATURES = [
  { icon: Users, title: "Smart Matching", desc: "Find riders with similar pace, bike type, and riding style." },
  { icon: MapPin, title: "Live Tracking", desc: "See your entire group in real-time on an interactive map." },
  { icon: Radio, title: "In Built Intercom", desc: "Free voice comms. No expensive intercoms required." },
  { icon: ShieldCheck, title: "OTP Verification", desc: "Confirm every rider is actually at the meeting point." },
  { icon: Lock, title: "Private Rides", desc: "Invite-only rides for your trusted crew of riders." },
  { icon: Trophy, title: "Clubs", desc: "Join permanent riding communities and build your legacy." },
];

const STEPS = [
  { n: "01", title: "Create or discover", desc: "Post a ride or browse open rides near you." },
  { n: "02", title: "Match & join", desc: "Get paired with riders that fit your pace and vibe." },
  { n: "03", title: "Ride together", desc: "Track live, talk over in built intercom, stay connected." },
];

const TESTIMONIALS = [
  { quote: "CRUIZR transformed my weekend rides. I finally found my crew.", name: "Marco R.", role: "Sport touring" },
  { quote: "Finally found riders who match my pace. No more hanging back or catching up.", name: "Priya S.", role: "Adventure" },
  { quote: "The in built intercom feature is a game-changer. Saved us $400 on intercoms.", name: "Diego M.", role: "Cruiser" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-dark">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          poster={heroImg}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(26,26,46,0.55) 0%, rgba(18,18,31,0.9) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-radial)" }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:py-40">
          <div className="lg:col-span-7">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur"
              style={{ animation: "fade-in 0.8s ease-out both" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" />
              Ride-partner discovery
            </div>
            <h1
              className="mt-6 font-heading text-5xl font-black leading-[1.05] text-white md:text-7xl lg:text-8xl"
              style={{ animation: "fade-up 0.9s ease-out 0.1s both" }}
            >
              Never{" "}
              <span className="text-gradient">Cruise</span>
              <br />
              Alone.
            </h1>
            <p
              className="mt-6 max-w-xl text-lg text-white/70 md:text-xl"
              style={{ animation: "fade-up 0.9s ease-out 0.25s both" }}
            >
              Find your perfect riding partner. Match on bike, pace, and style. Ride together. Stay connected on every mile.
            </p>
            <div
              className="mt-10"
              style={{ animation: "fade-up 0.9s ease-out 0.4s both" }}
            >
              <StoreBadges dark />
              <div className="mt-6 flex items-center gap-4 text-sm text-white/60">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-[var(--navy)] bg-gradient-to-br from-[var(--orange)] to-[var(--cyan)]"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={14} className="fill-[var(--orange)] text-[var(--orange)]" />
                  ))}
                  <span className="ml-2">Trusted by 10,000+ riders</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="The problem"
              title={
                <>
                  Riding solo is <span className="text-gradient">boring, unsafe, and lonely.</span>
                </>
              }
              subtitle="Every rider knows the feeling. You want to ride, but no one's around. Or worse — you ride with people who don't match your pace, and it ruins the trip."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { stat: "68%", label: "of riders quit early because they had no partner to ride with." },
              { stat: "3.2×", label: "safer riding in a group of 3+ vs. riding solo (industry study)." },
              { stat: "82%", label: "of riders want a way to find compatible partners nearby." },
            ].map((s, i) => (
              <Reveal key={s.stat} delay={i * 120}>
                <div className="rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-[var(--orange)]/40 hover:shadow-[var(--shadow-elegant)]">
                  <div className="font-heading text-5xl font-black text-gradient">{s.stat}</div>
                  <p className="mt-4 text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-muted/30 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <SectionHeading
                center={false}
                eyebrow="The solution"
                title={
                  <>
                    CRUIZR connects you with <span className="text-gradient">compatible riders</span> in your area.
                  </>
                }
                subtitle="Post a ride or browse rides near you. Our matching engine pairs you with riders that share your bike type, experience, and pace — so every ride feels like it was made for you."
              />
              <ul className="mt-8 space-y-3">
                {[
                  "Filter by bike type, pace, and experience",
                  "Verified riders only — OTP-checked at meetup",
                  "Chat, plan, and coordinate in-app",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-foreground">
                    <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-[var(--orange)] text-white">
                      <ArrowRight size={12} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--orange)]/20 to-[var(--cyan)]/20 blur-2xl" />
              <img
                src={appMockup}
                alt="CRUIZR matching interface"
                loading="lazy"
                width={1200}
                height={1200}
                className="relative rounded-3xl shadow-[var(--shadow-elegant)]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Everything you need"
              title={<>Built for riders, by riders.</>}
              subtitle="Six core features that turn strangers into your riding crew."
            />
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-[var(--orange)]/40 hover:shadow-[var(--shadow-elegant)]">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--orange)] to-[var(--cyan)] text-white transition-transform group-hover:scale-110">
                    <f.icon size={22} />
                  </div>
                  <h3 className="font-heading text-xl font-bold">{f.title}</h3>
                  <p className="mt-2 text-muted-foreground">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/features"
              className="inline-flex items-center gap-2 font-semibold text-[var(--orange)] hover:underline"
            >
              See all features <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-dark py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <SectionHeading
              invert
              eyebrow="How it works"
              title={<span className="text-white">Three steps to your next ride.</span>}
            />
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 150}>
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                  <div className="font-heading text-6xl font-black text-gradient opacity-80">{s.n}</div>
                  <h3 className="mt-4 font-heading text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-white/60">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Loved by riders"
              title="Real stories from real rides."
            />
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                  <Quote className="text-[var(--orange)]" size={28} />
                  <blockquote className="mt-4 flex-1 text-lg leading-relaxed">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-4">
                    <div className="font-heading font-bold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-dark py-24 md:py-32">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-radial)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
          <Reveal>
            <h2 className="font-heading text-4xl font-black leading-tight text-white md:text-6xl">
              Ready to stop <span className="text-gradient">riding alone?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Join thousands of riders finding their crew every week. Download CRUIZR and never cruise alone again.
            </p>
            <div className="mt-10 flex justify-center">
              <StoreBadges dark />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
