import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
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
  Video,
} from "lucide-react";
import heroImg from "../assets/hero-riders.jpg";
import heroVideo from "../assets/hero-video.mp4";
import appMockup from "../assets/app-mockup.jpg";
import common from "../assets/commongallery.png";

import live from "../assets/live.png";
import women from "../assets/womens.png";
import clubs from "../assets/Clubs.png";
import intercom from "../assets/liveintercom.png"

import mapMockup from "../assets/Map.png";
import { StoreBadges } from "../components/StoreBadges";
import { WaitlistForm } from "../components/WaitlistForm";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CRUIZR — Best App for Motorbike Clubs, Offriding Rides & Bike Community" },
      {
        name: "description",
        content:
          "Looking for the best app for motorbike clubs, offriding rides, or group motorcycle rides? CRUIZR offers live GPS tracking, hands-free intercom, crash safety alerts, and a vibrant riding community in Bangalore, Mumbai, Pune, and India.",
      },
      {
        name: "keywords",
        content:
          "best app for motorbike club, best app for offriding rides, best app for group motorcycle rides, best app for bike riders, best app for motorcycle enthusiasts, best app for offroad riding, best motorcycle app India, bike riding app Bangalore, Pune, Mumbai, Hyderabad, Chennai, Delhi NCR, women motorcycle riders app India, women only bike rides, monsoon bike rides India, offroad rides monsoon, winter motorcycle rides India, motorcycle intercom app, motorcycle crash alert app, motorcycle GPS tracker",
      },
      { property: "og:title", content: "CRUIZR — Best App for Motorbike Clubs & Group Rides" },
      {
        property: "og:description",
        content: "CRUIZR is the ultimate motorcycle companion app. Join motorbike clubs, plan offroad/monsoon rides, track groups live with built-in intercom, safety crash alerts, and female-only rides in India.",
      },
      { property: "og:image", content: "https://cruizr.in/assets/hero-riders.jpg" },
      { property: "og:url", content: "https://cruizr.in/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CRUIZR — Best App for Motorbike Clubs & Offriding" },
      { name: "twitter:description", content: "Join motorbike clubs, plan offroad/monsoon rides, track groups live with built-in intercom, safety crash alerts, and female-only rides in India." },
      { name: "twitter:image", content: "https://cruizr.in/assets/hero-riders.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://cruizr.in/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MobileApplication",
              "name": "CRUIZR",
              "applicationCategory": "LifestyleApplication",
              "operatingSystem": "iOS, Android",
              "description": "The best app for motorbike clubs and offriding rides. Find local riding partners, use live tracking, and communicate hands-free.",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the best app for motorbike clubs and organizing group motorcycle rides?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "CRUIZR is the best app for motorbike clubs and group motorcycle rides. It replaces scattered WhatsApp groups with a unified platform offering built-in intercom voice communication, live GPS tracking for every member, and safety features like rider accountability."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can riders find offriding rides, offroad trails, and adventure rides?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "CRUIZR makes finding offriding rides and offroad trials simple. The app lets you filter rides by terrain, bike type (adventure, dirt, sport, cruiser), and pace. Whether you are searching for offroad trails in Pune, monsoon bike rides in Mumbai, or weekend trips in Bangalore, CRUIZR connects you with local riders."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes CRUIZR the best app for rider safety and group communication?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "CRUIZR focuses on safety with real-time GPS tracking so no one gets left behind, intercom voice communication, crash alerts, and one-tap emergency SOS features. Its OTP verification confirms rider presence at meetups, creating an accountable community."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is there a dedicated app for women motorcycle riders in India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, CRUIZR supports the female riding community. Women motorcycle riders in India can create and join women-only bike rides, connect with a dedicated female riders network, and plan secure trips in Bangalore, Mumbai, Pune, Chennai, Delhi NCR, and Hyderabad."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does CRUIZR support seasonal rides like monsoon, winter, and summer trips?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "CRUIZR organizes seasonal ride highlights, making it the perfect app for planning monsoon bike rides, winter motorcycle expeditions, and summer highway cruises. The community provides weather alerts, road reports, and safety updates."
                  }
                }
              ]
            }
          ]
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
  { quote: "CRUIZR transformed my weekend rides. I finally found my crew.", name: "Aryan", role: "Sport touring" },
  { quote: "Finally found riders who match my pace. No more hanging back or catching up.", name: "Priya S.", role: "Adventure" },
  { quote: "The in built intercom feature is a game-changer. Saved us $400 on intercoms.", name: "Abhishek", role: "Cruiser" },
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
              <WaitlistForm />
              {/* <div className="mt-6 flex items-center gap-4 text-sm text-white/60">
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
              </div> */}
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
          <Reveal delay={150} className="flex justify-center">
            <div className="relative flex gap-6 items-center">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--orange)]/20 to-[var(--cyan)]/20 blur-2xl" />
              <img
                src={appMockup}
                alt="CRUIZR matching interface"
                loading="lazy"
                width={300}
                height={300}
                className="relative rounded-3xl shadow-[var(--shadow-elegant)] max-w-full h-auto"
              />

            </div>
          </Reveal>

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
                  "Live interactive map with real-time updates",
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

        </div>
      </section>

      <section className="bg-muted/30 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <div>
              <SectionHeading
                center={false}
                eyebrow="Interact"
                title={
                  <>
                    Interact With <span className="text-gradient">Live Interactive Map</span>.
                  </>
                }
                subtitle="Track your entire crew in real-time — CRUIZR's live group map shows every rider's exact location the moment they join a ride, so no one gets left behind or lost on unfamiliar roads. Whether you're leading a 5-bike weekend run or a 50-rider club convoy, watch each member's position update live on a single shared map, keep tabs on speed and distance from the pack, and instantly spot if someone's fallen behind or taken a wrong turn. Built for Indian riders who ride in groups, not alone"
              />
              <ul className="mt-8 space-y-3">
                {[
                  "Live GPS tracking for every rider in your group",
                  "Real-time speed & distance monitoring from the pack",
                  "Instant route sharing with one tap",
                  "Emergency SOS alerts with location sharing"
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
          <Reveal delay={150} className="order-1 lg:order-2 flex justify-center">
            <div className="relative flex gap-6 items-center">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--orange)]/20 to-[var(--cyan)]/20 blur-2xl" />
              {/*  */}
              <img
                src={mapMockup}
                alt="CRUIZR map interface"
                loading="lazy"
                width={300}
                height={300}
                className="relative rounded-3xl shadow-[var(--shadow-elegant)] max-w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/30 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal delay={150} className="flex justify-center">
            <div className="relative flex gap-6 items-center">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--orange)]/20 to-[var(--cyan)]/20 blur-2xl" />
              <img
                src={clubs}
                alt="CRUIZR matching interface"
                loading="lazy"
                width={300}
                height={400}
                className="relative rounded-3xl shadow-[var(--shadow-elegant)] max-w-full h-auto"
              />

            </div>
          </Reveal>

          <Reveal>
            <div>
              <SectionHeading
                center={false}
                eyebrow="The solution"
                title={
                  <>
                    CRUIZR connects you with <span className="text-gradient">Club & Fellow riders</span>.
                  </>
                }
                subtitle="Find your riding tribe with CRUIZR's Clubs — create your own club or join one that matches your vibe, from cruiser crews to sportbike squads to weekend explorers. Every club gets its own dedicated chat, so you can plan the next ride, share route ideas, post breakdown alerts, or just talk bikes with people who get it. No more scattered WhatsApp groups — everything from club discussions to ride announcements lives in one place, built specifically for riders."
              />
              <ul className="mt-8 space-y-3">
                {[
                  "Create Your Own Club",
                  "Find your riding tribe",
                  "Dedicated club chat",
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

        </div>
      </section>

      <section className="bg-muted/30 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center">


          <Reveal className="order-2 lg:order-1">
            <div>
              <SectionHeading
                center={false}
                eyebrow="Talk to your crew, hands-free"
                title={
                  <>
                    Built-in intercom, <span className="text-gradient">no hardware needed</span>.
                  </>
                }
                subtitle="Skip the expensive Bluetooth intercom kits — CRUIZR has group voice communication built right in. Push and lock with your entire crew over the internet in cities, and stay connected through mesh networking even in dead zones with zero network coverage. One tap, and your whole group hears you, wherever the ride takes you."
              />
              <ul className="mt-8 space-y-3">
                {[
                  "Push and lock with your entire riding group, instantly",
                  "Works over internet in cities, mesh network in dead zones",
                  "No pairing, no extra hardware, just tap and talk",
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

          <Reveal delay={150} className="order-1 lg:order-2 flex justify-center">
            <div className="relative flex gap-6 items-center">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--orange)]/20 to-[var(--cyan)]/20 blur-2xl" />
              <img
                src={intercom}
                alt="CRUIZR matching interface"
                loading="lazy"
                width={300}
                height={400}
                className="relative rounded-3xl shadow-[var(--shadow-elegant)] max-w-full h-auto"
              />

            </div>
          </Reveal>

        </div>
      </section>

      <section className="bg-muted/30 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center">


          <Reveal delay={150} className="flex justify-center">
            <div className="relative flex gap-6 items-center">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--orange)]/20 to-[var(--cyan)]/20 blur-2xl" />
              <img
                src={live}
                alt="CRUIZR matching interface"
                loading="lazy"
                width={300}
                height={400}
                className="relative rounded-3xl shadow-[var(--shadow-elegant)] max-w-full h-auto"
              />

            </div>
          </Reveal>

          <Reveal>
            <div>
              <SectionHeading
                center={false}
                eyebrow="Ride live, share live"
                title={
                  <>
                    Go live from the saddle, <span className="text-gradient">let them ride with you</span>.
                  </>
                }
                subtitle="Turn every ride into a live show — stream your ride straight from CRUIZR with real-time chat, likes, and reactions from your followers, just like Instagram Live. Connect an external camera like a GoPro or DJI for pro-quality footage, or go live straight from your phone. Your crew back home gets the full ride, live, as it happens."
              />
              <ul className="mt-8 space-y-3">
                {[
                  "Live stream your ride with chat, likes, and reactions",
                  "Connect GoPro, DJI, and other external action cameras",
                  "Followers watch and comment in real time, just like Instagram",
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



        </div>
      </section>

      <section className="bg-muted/30 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center">




          <Reveal className="order-2 lg:order-1">
            <div>
              <SectionHeading
                center={false}
                eyebrow="Built for her safety"
                title={
                  <>
                    Queens-only rides, <span className="text-gradient">verified and protected</span>.
                  </>
                }
                subtitle="Every rider deserves to feel safe on the road. With CRUIZR, women can create rides open only to women — no men can join, request to join, or even see the ride's live location. Ride with a trusted circle of women riders, share routes freely, and build your own community without compromise."
              />
              <ul className="mt-8 space-y-3">
                {[
                  "Create women-only rides, invisible to male riders",
                  "Only verified women can request to join",
                  "Live location shared only within the group",
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

          <Reveal delay={150} className="order-1 lg:order-2 flex justify-center">
            <div className="relative flex gap-6 items-center">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--orange)]/20 to-[var(--cyan)]/20 blur-2xl" />
              <img
                src={women}
                alt="CRUIZR matching interface"
                loading="lazy"
                width={300}
                height={400}
                className="relative rounded-3xl shadow-[var(--shadow-elegant)] max-w-full h-auto"
              />

            </div>
          </Reveal>



        </div>
      </section>


 <section className="bg-muted/30 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center">


          <Reveal delay={150} className="flex justify-center">
            <div className="relative flex gap-6 items-center">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--orange)]/20 to-[var(--cyan)]/20 blur-2xl" />
              <img
                src={common}
                alt="CRUIZR matching interface"
                loading="lazy"
                width={300}
                height={400}
                className="relative rounded-3xl shadow-[var(--shadow-elegant)] max-w-full h-auto"
              />

            </div>
          </Reveal>

          <Reveal>
           <div>
              <SectionHeading
                center={false}
                eyebrow="Discover new routes"
                title={
                  <>
                    A shared gallery of every <span className="text-gradient">scenic spot riders find</span>.
                  </>
                }
                subtitle="Found a breathtaking viewpoint, a hidden pit stop, or the perfect sunset spot on your ride? Upload it to CRUIZR's community gallery so other riders can discover it too. Browse photos from riders across the country, tap any spot to see where it is, and turn your next ride into an adventure someone else already mapped out."
              />
              <ul className="mt-8 space-y-3">
                {[
                  "Upload photos from your rides to the community gallery",
                  "Browse scenic spots shared by riders near you",
                  "Tap a photo to see the exact location and route",
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



        </div>
      </section>
      

 


      {/* FEATURES */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Everything you need"
              title={<>Built for riders, by riders.</>}
              subtitle="Seven core features that turn strangers into your riding crew."
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
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
                >
                  <div className="font-heading text-6xl font-black text-gradient opacity-80">{s.n}</div>
                  <h3 className="mt-4 font-heading text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-white/60">{s.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF 
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
      */}

      {/* FAQ SECTION */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title={
                <>
                  Find Answers to <span className="text-gradient">Your Questions</span>
                </>
              }
              subtitle="Everything you need to know about the best companion app for motorbike clubs, offriding, safety, and rider networking."
            />
          </Reveal>
          
          <Reveal delay={150}>
            <div className="mt-16 rounded-2xl border border-border bg-card p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border-b border-border/50">
                  <AccordionTrigger className="text-base font-semibold hover:text-[var(--orange)] md:text-lg">
                    What is the best app for motorbike clubs and group motorcycle rides?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    CRUIZR is built to be the ultimate app for motorbike clubs and group rides. By replacing scattered WhatsApp chats, CRUIZR acts as a unified platform where communities can schedule events, monitor rider safety, enforce accountability, and use hands-free intercom communication on the go.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-border/50">
                  <AccordionTrigger className="text-base font-semibold hover:text-[var(--orange)] md:text-lg">
                    How do riders find offriding rides, offroad trails, and adventure rides?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    CRUIZR makes finding offriding rides and offroad trials simple. You can easily filter upcoming rides by terrain, pace, and bike type. Whether you are looking for dirt trails in Pune, weekend adventure trips in Bangalore, or monsoon bike rides in Mumbai, CRUIZR connects you to local enthusiasts who match your vibe.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-border/50">
                  <AccordionTrigger className="text-base font-semibold hover:text-[var(--orange)] md:text-lg">
                    How does CRUIZR ensure rider safety and group tracking?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    Rider safety and accountability are core to CRUIZR. The app features a live group GPS tracker to ensure no one gets lost, automatic crash alerts, emergency SOS triggers, and a unique meetup verification system. These tools help groups ride safely on highways, off-road trails, and city streets.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-border/50">
                  <AccordionTrigger className="text-base font-semibold hover:text-[var(--orange)] md:text-lg">
                    Is there an app feature specifically for women motorcycle riders in India?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    Yes. CRUIZR is dedicated to fostering a safe, inclusive environment. Female bikers can create and discover women-only bike rides, connect with local networks, and access enhanced safety features. It is the premier platform to meet and coordinate with women motorcycle rider communities in cities like Delhi NCR, Bangalore, Pune, Chennai, and Hyderabad.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-border/50">
                  <AccordionTrigger className="text-base font-semibold hover:text-[var(--orange)] md:text-lg">
                    How does the app support seasonal trips like monsoon or winter rides?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    CRUIZR is built for all seasons. Riders can list monsoon bike rides in India, find off-road runs in the rain, or organize winter tour routes. The community-sourced route planner alerts you to road hazards, water-logged tracks, and safe shelters, making seasonal exploration seamless.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-b-0">
                  <AccordionTrigger className="text-base font-semibold hover:text-[var(--orange)] md:text-lg">
                    Which major cities in India are supported by CRUIZR?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    CRUIZR supports riding communities nationwide, with active hubs in Bangalore, Mumbai, Pune, Hyderabad, Chennai, Delhi NCR, and Kolkata. Whether you want to plan weekend trips, discover urban biker hangouts, or run group safety audits, CRUIZR connects local riders near you.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </Reveal>
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
              Join thousands of riders finding their crew every week. CRUIZR is coming soon, get ready to never cruise alone again.
            </p>
            <div className="mt-10 flex justify-center">
              <WaitlistForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
