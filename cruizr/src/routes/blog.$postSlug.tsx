import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldAlert, 
  MapPin, 
  Navigation,
  Compass
} from "lucide-react";
import { WaitlistForm } from "../components/WaitlistForm";
import { Reveal } from "../components/Reveal";

interface BlogPost {
  title: string;
  metaTitle: string;
  metaDesc: string;
  metaKeywords: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  intro: string;
  sections: Array<{ heading: string; body: string; listItems?: string[] }>;
  conclusion: string;
}

const BLOG_CONTENT_MAP: Record<string, BlogPost> = {
  "best-monsoon-motorcycle-rides-india": {
    title: "Best Monsoon Motorcycle Rides in India: The Ultimate Biker Guide",
    metaTitle: "Best Monsoon Motorcycle Rides in India — Monsoon Bike Guide",
    metaDesc: "Discover the best monsoon bike rides in India. Plan adventure runs to Lonavala, Tamhini Ghat, or Chikmagalur, with safety guidelines and tracking prep.",
    metaKeywords: "best motorcycle rides monsoon, monsoon bike rides India, offroad rides monsoon",
    author: "CRUIZR Adventure Team",
    date: "Aug 02, 2026",
    readTime: "6 min read",
    category: "Adventure Touring",
    intro: "Monsoon in India transforms the landscape into a green, mist-covered paradise. For motorcyclists, it presents some of the most rewarding and challenging rides of the year. From the Western Ghats to the hills of Chikmagalur, here is our curated list of the best monsoon motorcycle rides in India and how to conquer them safely.",
    sections: [
      {
        heading: "1. Tamhini Ghat (Maharashtra)",
        body: "Running from Pune to the Konkan plains, Tamhini Ghat is legendary among Mumbai and Pune bikers. During monsoons, the entire stretch is flanked by hundreds of temporary waterfalls, thick fog, and deep green valleys. The tarmac can get slick, so keeping space in your convoy is essential.",
        listItems: [
          "Start early to avoid tourist traffic.",
          "Watch for sudden gravel washes on corners.",
          "Stop at local dhabas for hot tea and bhaji."
        ]
      },
      {
        heading: "2. Chikmagalur (Karnataka)",
        body: "Nestled in the Mullayanagiri range, Chikmagalur coffee estates are a dream during rains. The winding roads up to Mullayanagiri peak are shrouded in heavy mist, offering low visibility but breathtaking views. Make sure your headlight and fog lamps are in top shape.",
        listItems: [
          "Expect steep slopes and blind curves.",
          "Use lower gears to maintain engine braking.",
          "Keep group tracking active as cellular signals drop near the peak."
        ]
      },
      {
        heading: "3. Lonavala to Khandala (Maharashtra)",
        body: "The classic weekend route from Mumbai. Lonavala receives heavy downpours, filling up local lakes and dams. The old Mumbai-Pune highway offers wide lanes but requires high alert for waterlogging.",
        listItems: [
          "Beware of aquaplaning at higher speeds.",
          "Maintain a steady pace and follow headlight trails."
        ]
      },
      {
        heading: "Essential Gear & Tech Prep for Monsoons",
        body: "Riding in monsoons requires the right setup. Never ride without a complete waterproof gear set, proper tire tread depth, and active location tracking.",
        listItems: [
          "Waterproof riding jacket, pants, and boot covers.",
          "Anti-fog pinlock inserts for helmet visors.",
          "Low-latency GPS tracker like CRUIZR to avoid splits in dense fog."
        ]
      }
    ],
    conclusion: "Monsoon rides are unmatched in beauty but demand respect. Prepare your machine, check the weather, ride with a trusted group, and always keep safety at the forefront."
  },
  "motorcycle-safety-tips": {
    title: "How to Stay Safe on Group Rides: Biker Accountability & Safety Tips",
    metaTitle: "How to Stay Safe on Group Rides — Biker Safety Guide",
    metaDesc: "Master the art of group riding. Learn hand signals, convoy formations, crash emergency alerts, and how to maintain rider accountability in your club.",
    metaKeywords: "motorcycle riders safety app, how to stay safe on group rides, motorcycle crash alert app",
    author: "CRUIZR Safety Council",
    date: "Jul 28, 2026",
    readTime: "5 min read",
    category: "Safety & Tech",
    intro: "Riding in a group is one of the greatest pleasures of motorcycling, but it requires coordination. A single mistake in a tight formation can cause a chain reaction. Here is how to keep your club runs secure, organized, and accident-free.",
    sections: [
      {
        heading: "1. Establish Convoy Formations",
        body: "Always ride in a staggered formation on open highways. The road leader rides on the left third of the lane, while the second rider stays two seconds behind on the right third, and so on. This configuration maximizes braking margins and road visibility.",
        listItems: [
          "Never ride side-by-side; it cuts off escape paths.",
          "Single-file formation should be used on tight curves, ghats, or narrow streets."
        ]
      },
      {
        heading: "2. The Roles: Lead & Sweep",
        body: "The Road Leader decides the route, speed, and stops. The Sweep (the last rider in the pack) is responsible for securing the formation and assisting any rider who falls behind or breaks down.",
        listItems: [
          "Both Lead and Sweep should be experienced riders.",
          "Sweep must have direct communication (like an intercom or radio) with the Lead."
        ]
      },
      {
        heading: "3. Tech Integration: Live Tracking & Crash Detection",
        body: "Technology makes group management significantly safer. Standalone intercoms can be expensive, but companion apps allow standard headsets to sync voice alerts and locate stranded riders instantly.",
        listItems: [
          "Activate GPS tracking so the leader knows if the tail gets cut off by a traffic light.",
          "Use a crash detection app that broadcasts SOS location coordinates automatically in an incident."
        ]
      }
    ],
    conclusion: "Safety is not about riding slowly; it is about riding smart. Establish rules, verify everyone is present before rolling, and leverage modern safety applications to keep your crew protected."
  },
  "how-to-find-motorcycle-rides-near-me": {
    title: "How to Find Motorcycle Rides Near Me: Connecting with Biker Communities",
    metaTitle: "How to Find Motorcycle Rides Near Me — Biker Networking Guide",
    metaDesc: "Looking for local bike rides, weekend trips, or riding clubs near you? Learn how to connect with the motorcycle community in India and discover rides.",
    metaKeywords: "app to find motorcycle rides near me, how to join motorcycle groups, how to connect with bike riders",
    author: "CRUIZR Community Team",
    date: "Jul 22, 2026",
    readTime: "4 min read",
    category: "Community",
    intro: "Whether you just bought your first motorcycle or moved to a new city like Bangalore, Pune, or Delhi NCR, finding the right riding partners can be tough. Coordination over general chat apps often falls through. Here is the easiest way to connect with local biker communities.",
    sections: [
      {
        heading: "1. Join Local Biker Networks",
        body: "Look for motorcycle groups tailored to your machine or riding style. Cafe racers, cruising clubs, and adventure clubs regularly host open weekend runs that welcome newcomers.",
        listItems: [
          "Search for brand-specific clubs (e.g., Royal Enfield, KTM, Honda BigWing).",
          "Attend local biker cafés and meetups on Sunday mornings."
        ]
      },
      {
        heading: "2. Plan Beginner-Friendly Weekend Runs",
        body: "If you are a new rider, look for short breakfast rides. These are usually 50-100 km round trips that help you practice group etiquette without fatigue.",
        listItems: [
          "Inform the group lead that this is your first group ride.",
          "Ride at your own pace; never push beyond your comfort level to keep up."
        ]
      },
      {
        heading: "3. Leverage Dedicated Companion Apps",
        body: "Rather than scrolling through chaotic Facebook boards or WhatsApp threads, dedicated motorcycle networking apps match you by pace, bike displacement, and location.",
        listItems: [
          "Filter local rides matching your speed class.",
          "Connect directly with verified riders nearby for solo or group runs."
        ]
      }
    ],
    conclusion: "The motorcycle community is incredibly welcoming. Take the first step, join a local run, and enjoy the open road with your new crew."
  }
};

export const Route = createFileRoute("/blog/$postSlug")({
  head: ({ params }) => {
    const data = BLOG_CONTENT_MAP[params.postSlug];
    if (!data) {
      return {
        meta: [
          { title: "CRUIZR Biker Blog" },
          { name: "description", content: "Read safety guides, monsoon ride tips, and biking news." }
        ]
      };
    }
    return {
      meta: [
        { title: data.metaTitle },
        { name: "description", content: data.metaDesc },
        { name: "keywords", content: data.metaKeywords },
        { property: "og:title", content: data.metaTitle },
        { property: "og:description", content: data.metaDesc },
        { property: "og:image", content: "https://www.cruizr.in/assets/hero-riders.jpg" },
        { name: "twitter:title", content: data.metaTitle },
        { name: "twitter:description", content: data.metaDesc },
        { name: "twitter:image", content: "https://www.cruizr.in/assets/hero-riders.jpg" }
      ],
      links: [{ rel: "canonical", href: `https://www.cruizr.in/blog/${params.postSlug}` }]
    };
  },
  loader: ({ params }) => {
    const data = BLOG_CONTENT_MAP[params.postSlug];
    if (!data) {
      throw notFound();
    }
    return data;
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();

  return (
    <div className="bg-background min-h-screen text-foreground pb-20">
      {/* HEADER META BAR */}
      <section className="bg-dark/50 border-b border-border/20 py-10 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[var(--orange)] mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Back to features
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="rounded-full bg-[var(--orange)]/25 border border-[var(--orange)]/40 px-3 py-1 text-xs font-semibold text-[var(--orange)]">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock size={13} /> {post.readTime}
            </div>
          </div>
          <h1 className="font-heading text-3xl font-black leading-tight text-white md:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-6 border-t border-border/20 pt-6">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-border text-foreground">
                <User size={15} />
              </div>
              <span className="text-sm font-medium text-foreground">{post.author}</span>
            </div>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar size={13} /> {post.date}
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <Reveal>
            <p className="text-lg leading-relaxed text-foreground/90 font-medium border-l-4 border-[var(--orange)] pl-4 mb-8">
              {post.intro}
            </p>
          </Reveal>

          <div className="space-y-12">
            {post.sections.map((section, idx) => (
              <Reveal key={idx} delay={idx * 80}>
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4 text-white flex items-center gap-2">
                    {section.heading.includes("Safety") || section.heading.includes("Tech") ? (
                      <ShieldAlert className="text-[var(--orange)]" size={22} />
                    ) : section.heading.includes("Tamhini") || section.heading.includes("ECR") || section.heading.includes("Chikmagalur") ? (
                      <MapPin className="text-[var(--orange)]" size={22} />
                    ) : (
                      <Navigation className="text-[var(--orange)]" size={22} />
                    )}
                    {section.heading}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {section.body}
                  </p>
                  {section.listItems && (
                    <ul className="space-y-2 mt-4">
                      {section.listItems.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 text-sm text-foreground/95">
                          <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 text-[var(--cyan)] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* CONCLUSION */}
          <Reveal delay={250}>
            <div className="mt-12 rounded-2xl bg-muted/40 p-6 md:p-8 border border-border">
              <h3 className="font-heading text-xl font-bold mb-3 flex items-center gap-2 text-white">
                <Compass size={20} className="text-[var(--orange)]" /> Conclusion
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {post.conclusion}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="relative overflow-hidden bg-dark py-16 md:py-24 border-t border-border/20">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-radial)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
          <Reveal>
            <h2 className="font-heading text-3xl font-black leading-tight text-white md:text-4xl">
              Never Ride Alone. Join CRUIZR.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70 text-sm md:text-base mb-8">
              Join thousands of riders in India who coordinate safe monsoon runs, off-road trials, and share location details live.
            </p>
            <div className="flex justify-center">
              <WaitlistForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
