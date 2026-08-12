import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-heading text-7xl font-extrabold text-gradient">404</h1>
        <h2 className="mt-4 font-heading text-xl font-semibold text-foreground">Off the map</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This route doesn't exist. Let's get you back on the road.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[var(--orange)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Ride home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    // reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-heading text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try again or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-[var(--orange)] px-4 py-2 text-sm font-medium text-white"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CRUIZR — #1 Motorcycle App India | Group Rides, GPS Tracker & Free Intercom" },
      {
        name: "description",
        content:
          "CRUIZR is India's #1 motorcycle companion app. Join motorbike clubs, plan offroad & monsoon rides, track groups live with free built-in intercom and crash safety alerts. Trusted by riders in Bangalore, Mumbai, Pune, Delhi NCR & across India.",
      },
      {
        name: "keywords",
        content:
          "best motorcycle app India, best app for motorbike club, best app for offriding rides, best app for group motorcycle rides, motorcycle rides near me, find riding partner motorcycle, group motorcycle ride planner, motorcycle riding partner app, bike riding app Bangalore, Pune, Mumbai, Hyderabad, Chennai, Delhi NCR, Kolkata, Goa, Ladakh, women motorcycle riders app India, free motorcycle intercom app, motorcycle GPS tracker India, motorcycle crash alert app, motorcycle club management app, offroad riding app India",
      },
      { name: "author", content: "CRUIZR" },
      { name: "theme-color", content: "#1a1a2e" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "geo.region", content: "IN" },
      { name: "geo.placename", content: "India" },
      { name: "geo.position", content: "20.5937;78.9629" },
      { name: "ICBM", content: "20.5937, 78.9629" },
      { property: "og:title", content: "CRUIZR — #1 Motorcycle App India | Group Rides, GPS Tracker & Free Intercom" },
      {
        property: "og:description",
        content: "India's #1 motorcycle companion app. Join motorbike clubs, plan offroad & monsoon rides, use free built-in intercom, live GPS tracking, crash safety alerts, and female-only rides across India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "CRUIZR" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@cruizrapp" },
      { name: "twitter:creator", content: "@cruizrapp" },
      { name: "twitter:title", content: "CRUIZR — #1 Motorcycle App India | Group Rides, GPS & Free Intercom" },
      { name: "twitter:description", content: "India's top motorcycle app. Match riders, coordinate group rides, free built-in intercom, live GPS tracking, crash alerts, and club management across India." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "CRUIZR — India's #1 Motorcycle Group Ride App" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp" },
      { name: "twitter:image:alt", content: "CRUIZR — India's #1 Motorcycle Group Ride App" },
    ],
    links: [
      { rel: "canonical", href: "https://www.cruizr.in" },
      { rel: "alternate", hrefLang: "en-IN", href: "https://www.cruizr.in" },
      { rel: "alternate", hrefLang: "en", href: "https://www.cruizr.in" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800;900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.cruizr.in/#organization",
              name: "CRUIZR",
              url: "https://www.cruizr.in",
              logo: {
                "@type": "ImageObject",
                url: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp",
                width: 512,
                height: 512,
              },
              description: "India's #1 motorcycle community and group ride companion app. Live GPS tracking, free intercom, club management, and rider safety tools.",
              email: "abhishek@cruizr.in",
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              sameAs: [
                "https://www.instagram.com/cruizrapp",
                "https://twitter.com/cruizrapp",
                "https://youtube.com/@cruizr",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "abhishek@cruizr.in",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.cruizr.in/#website",
              url: "https://www.cruizr.in",
              name: "CRUIZR",
              description: "India's #1 motorcycle group ride, club, and GPS tracking companion app.",
              publisher: { "@id": "https://www.cruizr.in/#organization" },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.cruizr.in/?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "SoftwareApplication",
              "@id": "https://www.cruizr.in/#app",
              name: "CRUIZR",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "iOS, Android",
              description: "The best motorcycle companion app in India. Find riding partners, join motorbike clubs, track groups live with GPS, communicate hands-free with built-in intercom, and ride safely.",
              url: "https://www.cruizr.in",
              image: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp",
              featureList: [
                "Live GPS Group Tracking",
                "Built-in Motorcycle Intercom",
                "Motorbike Club Management",
                "Women-Only Ride Mode",
                "Crash Detection & SOS Alerts",
                "OTP Rider Verification",
                "Live Ride Streaming",
                "Smart Rider Matching",
                "Offroad & Adventure Rides",
                "Seasonal Ride Planning",
              ],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
                description: "Free to download and use",
              },
              publisher: { "@id": "https://www.cruizr.in/#organization" },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
