import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  MapPin,
  Radio,
  ShieldCheck,
  Trophy,
  ArrowRight,
  Check,
  Navigation,
  HeartHandshake,
  MessageCircle,
  Download,
  Flag,
  KeyRound,
  Mic,
  Volume2,
  WifiOff,
  Sun,
} from "lucide-react";
import heroImg from "../assets/hero-riders.jpg";
import heroVideo from "../assets/hero-video.mp4";
import appMockup from "../assets/app-mockup.jpg";
import communityGallery from "../assets/commongallery.png";
import liveRide from "../assets/live.png";
import intercomScreen from "../assets/liveintercom.png";
import offlineSupport from "../assets/OfflineAppsupport.png";
import women from "../assets/womens.png";
import clubs from "../assets/Clubs.png";
import mapMockup from "../assets/Map.png";
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
      { title: "CRUIZR — India's #1 Motorcycle App & Trip Planner | Group Rides, GPS & Free Intercom" },
      {
        name: "description",
        content:
          "CRUIZR is India's #1 motorcycle companion app & trip planner. Find riding partners, join motorbike clubs, plan offroad & monsoon group rides, use free built-in intercom, live GPS tracking, and crash SOS alerts. Available across India.",
      },
      {
        name: "keywords",
        content:
          "cruizr, cruisz, cruizer, criozr, crisere, cuizer, cruizzer, cruizers, cruiz, cruister, cruizy, cruzr e bike, scruiser, crusit, motorcycle trip planner, cruzr military discount, cruzr ebike, cruiser site, crossrider, cruzrs, web cruising, best app for motorbike club, motorcycle ride planning app, free motorcycle intercom app, motorcycle GPS tracker India",
      },
      { property: "og:title", content: "CRUIZR — India's #1 Motorcycle App & Trip Planner | Group Rides, GPS & Free Intercom" },
      {
        property: "og:description",
        content: "CRUIZR is the ultimate motorcycle companion app & trip planner. Find riding partners, join motorbike clubs, plan group rides, use free intercom & live GPS tracking.",
      },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp" },
      { property: "og:image:alt", content: "CRUIZR Motorcycle App — India's #1 Group Ride Platform & Trip Planner" },
      { property: "og:url", content: "https://www.cruizr.in/" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CRUIZR — India's #1 Motorcycle App & Trip Planner | Group Rides & Free Intercom" },
      { name: "twitter:description", content: "Find riding partners, join motorbike clubs, plan offroad & monsoon rides, use free built-in intercom and live GPS tracking across India." },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp" },
    ],
    links: [{ rel: "canonical", href: "https://www.cruizr.in/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.cruizr.in/#webpage",
              url: "https://www.cruizr.in/",
              name: "CRUIZR — India's #1 Motorcycle App & Trip Planner | Group Rides, GPS & Free Intercom",
              description: "India's #1 motorcycle companion app & trip planner. Find riding partners, join motorbike clubs, plan group rides, use free intercom and live GPS tracking across India.",
              isPartOf: { "@id": "https://www.cruizr.in/#website" },
              about: { "@id": "https://www.cruizr.in/#app" },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp",
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is the best app for motorbike clubs and organizing group motorcycle rides?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "CRUIZR is the best app for motorbike clubs and group motorcycle rides in India. It replaces scattered WhatsApp groups with a unified platform offering built-in intercom voice communication, live GPS tracking for every member, OTP rider verification, and safety features like crash alerts and emergency SOS.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can riders find offriding rides, offroad trails, and adventure rides near me?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "CRUIZR makes finding motorcycle rides near you and offroad adventures simple. Filter rides by terrain, bike type (adventure, dirt, sport, cruiser), and pace. Whether you are searching for offroad trails in Pune, monsoon bike rides in Mumbai, weekend trips in Bangalore, or Ladakh expeditions, CRUIZR connects you with local riders instantly.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What makes CRUIZR the best app for rider safety and group communication?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "CRUIZR prioritizes safety with real-time GPS tracking so no one gets left behind, free built-in intercom voice communication (no hardware needed), automatic crash detection alerts, one-tap emergency SOS with location sharing, and OTP verification that confirms rider presence at meetups.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is there a dedicated app for women motorcycle riders in India?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, CRUIZR has a dedicated women-only ride mode. Women motorcycle riders in India can create rides visible only to other women — men cannot join, request, or see the live location. Connect with India's female riders network in Bangalore, Mumbai, Pune, Chennai, Delhi NCR, and Hyderabad.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does CRUIZR support seasonal rides like monsoon, winter, and Ladakh expeditions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "CRUIZR organizes seasonal ride categories including monsoon bike rides, Ladakh motorcycle expeditions, Himachal Pradesh tours, winter cruises, and summer highway runs. The community provides weather alerts, road hazard reports, and live safety updates for all conditions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is there a free motorcycle intercom app that works without expensive hardware?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! CRUIZR includes a completely free built-in motorcycle intercom. Unlike expensive Bluetooth Cardo or Sena headsets, CRUIZR lets your entire group communicate hands-free using just your phone and standard earbuds. It works over internet in cities and uses mesh networking in dead zones.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does CRUIZR work as a motorcycle trip planner app?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "CRUIZR is the ultimate motorcycle trip planner app for long-distance highway tours, offroad trails, and weekend group rides. It helps you design detailed route itineraries, mark fuel & rest stops, share maps instantly with your group, and monitor live GPS positions so no rider gets lost.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is CRUIZR also known as Cruizer, Cruzr, or Cruiz?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Whether you spell it CRUIZR, Cruizer, Cruzr, Cruiz, or Cruzrs, CRUIZR is the official motorcycle trip planner and group ride app built for Indian riders and global motorbike clubs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can CRUIZR be used for e-bikes, electric motorcycles, and club discounts?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! CRUIZR supports all two-wheeler enthusiasts including e-bikes, electric motorcycles, dirt bikes, and classic cruisers. CRUIZR is free for individual riders, e-bike groups, and offers special verified club features and military community recognition.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which major cities and states in India are supported by CRUIZR?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "CRUIZR supports riding communities nationwide across Bangalore, Mumbai, Pune, Hyderabad, Chennai, Delhi NCR, Kolkata, Goa, Jaipur, and states including Karnataka, Maharashtra, Telangana, Tamil Nadu, Rajasthan, Kerala, Goa, Himachal Pradesh, Uttarakhand, and Jammu & Kashmir for Ladakh riders.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const FEATURE_GROUPS = [
  {
    title: "Map & Convoy Tracking",
    icon: MapPin,
    features: [
      { icon: MapPin, title: "Live Convoy Map", desc: "See every rider’s real-time GPS location on one map with buttery-smooth marker animations." },
      { icon: Download, title: "Offline Map Downloads", desc: "Download map regions over Wi-Fi so your route stays with you when the signal disappears." },
      { icon: Flag, title: "Ride Roles", desc: "Assign a Ride Lead, Tail Sweeper, or Rider role and see the whole convoy at a glance." },
      { icon: KeyRound, title: "Instant Group Joins", desc: "Create a private ride and share a simple 6-digit code to bring friends straight onto the map." },
    ],
  },
  {
    title: "Advanced Audio & Intercom",
    icon: Radio,
    features: [
      { icon: Mic, title: "Hands-Free VOX", desc: "Voice activation opens the mic when you speak and mutes it when you stop, reducing wind noise." },
      { icon: Volume2, title: "Priority Override", desc: "Safety calls from the Ride Lead take priority, so critical warnings always cut through." },
      { icon: Radio, title: "Multi-Channel Support", desc: "Switch between CH1, CH2, and CH3 to split a large convoy into smaller conversations." },
    ],
  },
  {
    title: "Community & Social",
    icon: Users,
    features: [
      { icon: Users, title: "Riding Clubs", desc: "Start a public or private motorcycle club, welcome members, organise rides, and keep the chat moving." },
      { icon: MessageCircle, title: "Bike Q&A Forums", desc: "Ask mechanical questions, share gear recommendations, and trade riding knowledge with the community." },
      { icon: Trophy, title: "Daily & Weekly Leaderboards", desc: "Compete on distance covered and rides completed when leaderboards arrive in Phase 2." },
    ],
  },
  {
    title: "Safety & Ride Dashboard",
    icon: ShieldCheck,
    features: [
      { icon: Sun, title: "Glove Mode UI", desc: "A high-contrast dashboard with large controls, dark themes, and glass overlays built for sunlight and gloves." },
      { icon: WifiOff, title: "Status Monitoring", desc: "Get an instant alert when a rider goes offline or loses GPS, so no one gets left behind." },
    ],
  },
];

function Home() {
  return (
    <>
      <section className="relative min-h-[780px] overflow-hidden bg-dark md:min-h-[820px]">
        <video
          className="absolute inset-0 h-full w-full scale-105 object-cover"
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
          style={{ background: "linear-gradient(90deg, rgba(10,10,20,.94) 0%, rgba(10,10,20,.68) 48%, rgba(10,10,20,.28) 100%), linear-gradient(0deg, rgba(10,10,20,.95) 0%, transparent 48%)" }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-radial)" }}
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[780px] max-w-7xl items-center px-5 pb-20 pt-28 md:min-h-[820px] md:px-8 md:pt-24">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md"
              style={{ animation: "fade-in 0.8s ease-out both" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" />
              Built for Indian riders
            </div>
            <h1
              className="mt-7 font-heading text-5xl font-black leading-[.95] tracking-[-.06em] text-white sm:text-6xl md:text-8xl lg:text-[6.7rem]"
              style={{ animation: "fade-up 0.9s ease-out 0.1s both" }}
            >
              Find your <span className="text-gradient">ride</span>.<br />
              Find your people.
            </h1>
            <p
              className="mt-7 max-w-xl text-base leading-relaxed text-white/70 md:text-lg lg:text-xl"
              style={{ animation: "fade-up 0.9s ease-out 0.25s both" }}
            >
              The all-in-one home for rides, real-time maps, and the people who make every kilometre worth it.
            </p>
            <div
              className="mt-10"
              style={{ animation: "fade-up 0.9s ease-out 0.4s both" }}
            >
              <WaitlistForm />
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-white/55">
              {["Ride matching", "Live group tracking", "Free group intercom"].map((item) => <span key={item} className="flex items-center gap-2"><Check size={14} className="text-[var(--orange)]" />{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-20 md:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--orange)]/40 to-transparent" />
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="One app. Every ride."
              title={
                <>
                  The road is better <span className="text-gradient">together.</span>
                </>
              }
              subtitle="From the first “where are you?” to the last chai stop, CRUIZR keeps your crew in sync without the chaos."
            />
          </Reveal>
          <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-border bg-[#f7f7fb] md:grid-cols-3">
            {[
              { icon: HeartHandshake, title: "A crew that fits", desc: "Match by bike, pace, experience, and the way you like to ride." },
              { icon: Navigation, title: "A ride that stays together", desc: "See the full pack live, share routes, and know no one is left behind." },
              { icon: Radio, title: "A group that stays close", desc: "Talk to your whole crew with built-in voice — no pricey hardware needed." },
            ].map((item, i) => <Reveal key={item.title} delay={i * 100} className="border-b border-border last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"><div className="h-full p-8 md:p-10"><item.icon className="text-[var(--orange)]" size={28} /><h3 className="mt-8 font-heading text-2xl font-bold">{item.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{item.desc}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7fb] py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Made for the moments that matter"
              title={<>Everything your ride needs, <span className="text-gradient">in one place.</span></>}
              subtitle="Designed around the actual rhythm of a group ride — before, during, and after."
            />
          </Reveal>
          <div className="mt-10 space-y-10 md:mt-14 md:space-y-14">
            {FEATURE_GROUPS.map((group, groupIndex) => (
              <div key={group.title}>
                <Reveal delay={groupIndex * 80}>
                  <div className="mb-4 flex items-center gap-3 md:mb-5"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[var(--navy)] text-white md:h-10 md:w-10"><group.icon size={18} /></span><h3 className="font-heading text-lg font-bold leading-tight sm:text-xl md:text-2xl">{group.title}</h3></div>
                </Reveal>
                <div className="grid gap-3 sm:grid-cols-2 md:gap-4 xl:grid-cols-4">
                  {group.features.map((feature, featureIndex) => (
                    <Reveal key={feature.title} delay={groupIndex * 80 + featureIndex * 65}>
                      <div className="group flex h-full gap-4 rounded-2xl border border-border/70 bg-white p-4 transition-all duration-300 sm:p-5 md:block md:rounded-3xl md:p-7 md:hover:-translate-y-1 md:hover:shadow-[var(--shadow-elegant)]">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--navy)] text-white transition-transform duration-300 group-hover:bg-[var(--orange)] md:mb-6 md:h-12 md:w-12 md:rounded-2xl md:group-hover:rotate-3"><feature.icon size={20} /></div>
                        <div className="min-w-0"><h4 className="font-heading text-base font-bold leading-tight sm:text-lg md:text-xl">{feature.title}</h4><p className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:mt-2 md:text-base">{feature.desc}</p></div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
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

      <section className="overflow-hidden bg-background py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Made for the real ride"
              title={<>See every part of the <span className="text-gradient">journey.</span></>}
              subtitle="From the plan in your pocket to the stories you bring home, CRUIZR is designed to feel alive on the road."
            />
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <Reveal>
              <figure className="flex h-full flex-col items-center justify-start text-center">
                <img src={communityGallery} alt="Motorcycle riders sharing a scenic ride" loading="lazy" className="h-[340px] w-auto max-w-full rounded-[2rem] object-contain shadow-[var(--shadow-elegant)] sm:h-[380px]" />
                <figcaption className="mt-4 text-sm font-bold text-[var(--navy)]">Discover the road together</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={100}>
              <figure className="flex h-full flex-col items-center justify-start text-center">
                <img src={appMockup} alt="CRUIZR app ride-matching screen" loading="lazy" className="h-[340px] w-auto max-w-full rounded-2xl object-contain shadow-[var(--shadow-elegant)] sm:h-[380px]" />
                <figcaption className="mt-4 text-sm font-bold text-[var(--navy)]">Find your next ride</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={180}>
              <figure className="flex h-full flex-col items-center justify-start text-center">
                <img src={intercomScreen} alt="CRUIZR group intercom screen" loading="lazy" className="h-[340px] w-auto max-w-full rounded-2xl object-contain shadow-[var(--shadow-elegant)] sm:h-[380px]" />
                <figcaption className="mt-4 text-sm font-bold text-[var(--navy)]">Talk hands-free</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={240}>
              <figure className="flex h-full flex-col items-center justify-start text-center">
                <img src={offlineSupport} alt="CRUIZR offline support screen" loading="lazy" className="h-[340px] w-auto max-w-full rounded-2xl object-contain shadow-[var(--shadow-elegant)] sm:h-[380px]" />
                <figcaption className="mt-4 text-sm font-bold text-[var(--navy)]">Stay prepared</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={300}>
              <figure className="flex h-full flex-col items-center justify-start text-center">
                <img src={liveRide} alt="CRUIZR live ride sharing screen" loading="lazy" className="h-[340px] w-auto max-w-full rounded-2xl object-contain shadow-[var(--shadow-elegant)] sm:h-[380px]" />
                <figcaption className="mt-4 text-sm font-bold text-[var(--navy)]">Share the moment</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-dark py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
          <Reveal><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--orange)]">Always in the loop</p><h2 className="mt-5 font-heading text-4xl font-black leading-tight text-white md:text-6xl">The whole crew.<br /><span className="text-gradient">One shared view.</span></h2><p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">Every rider’s location, every turn, every essential update — visible when it matters and private when it doesn’t.</p><div className="mt-8 space-y-4">{["Live location for the entire group", "One-tap route sharing and SOS", "Private, invite-only ride controls"].map(text => <div key={text} className="flex items-center gap-3 text-sm font-medium text-white/80"><span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-[var(--orange)]"><Check size={14} /></span>{text}</div>)}</div></div></Reveal>
          <Reveal delay={150}><div className="relative mx-auto max-w-sm"><div className="absolute -inset-12 rounded-full bg-[var(--cyan)]/15 blur-3xl" /><img src={mapMockup} alt="Live group map showing every rider" className="relative w-full rounded-[2rem] border border-white/10 shadow-2xl" /></div></Reveal>
        </div>
      </section>

      <section className="bg-background py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1"><div className="grid grid-cols-2 gap-4"><img src={clubs} alt="CRUIZR motorcycle clubs" className="mt-10 rounded-3xl shadow-[var(--shadow-elegant)]" /><img src={women} alt="CRUIZR women-only ride community" className="rounded-3xl shadow-[var(--shadow-elegant)]" /></div></Reveal>
          <Reveal className="order-1 lg:order-2"><SectionHeading center={false} eyebrow="Your kind of community" title={<>Find riders who <span className="text-gradient">get it.</span></>} subtitle="Build a trusted club, join the next open ride, or create a women-only ride. This is a space where every rider belongs." /><Link to="/features" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.03]">Explore the features <ArrowRight size={16} /></Link></Reveal>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-background py-16 md:py-32">
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

                <AccordionItem value="item-6" className="border-b border-border/50">
                  <AccordionTrigger className="text-base font-semibold hover:text-[var(--orange)] md:text-lg">
                    How does CRUIZR work as a motorcycle trip planner app?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    CRUIZR is built as a complete motorcycle trip planner app. You can map out detailed tour routes, set meeting waypoints and fuel stops, sync routes instantly with all group members, and track everyone's live GPS position on long-distance highway or offroad rides.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border-b border-border/50">
                  <AccordionTrigger className="text-base font-semibold hover:text-[var(--orange)] md:text-lg">
                    Is CRUIZR also spelled as Cruizer, Cruzr, or Cruiz?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    Yes! Whether you spell it CRUIZR, Cruizer, Cruzr, Cruiz, or Cruzrs, CRUIZR is the official name of India's premier motorcycle companion app and trip planner for biker clubs, solo tourers, and e-bike riders.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border-b-0">
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
      <section className="relative overflow-hidden bg-dark py-16 md:py-32">
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
