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
      { title: "CRUIZR — Best App for Motorbike Club, Offroad Rides & Group Riding in India" },
      {
        name: "description",
        content:
          "CRUIZR is the ultimate motorcycle companion app. Join motorbike clubs, plan offroad/monsoon rides, track groups live with built-in intercom and crash safety features. The best app for bike riders in Bangalore, Mumbai, Pune, Delhi NCR, and across India.",
      },
      {
        name: "keywords",
        content:
          "best app for motorbike club, best app for offriding rides, best app for group motorcycle rides, best app for bike riders, best app for motorcycle community, best app for offroad riding, best motorcycle app India, bike riding app Bangalore, Pune, Mumbai, Hyderabad, Chennai, Delhi NCR, women motorcycle riders app India, motorcycle intercom app, motorcycle crash alert app, motorcycle GPS tracker",
      },
      { name: "author", content: "CRUIZR" },
      { name: "theme-color", content: "#1a1a2e" },
      { property: "og:title", content: "CRUIZR — Best App for Motorbike Clubs, Offroad Rides & Group Riding" },
      {
        property: "og:description",
        content: "CRUIZR is the ultimate motorcycle companion app. Join motorbike clubs, plan offroad/monsoon rides, track groups live with built-in intercom, safety crash alerts, and female-only rides in India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "CRUIZR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@cruizr" },
      { name: "twitter:title", content: "CRUIZR — Best App for Motorbike Clubs & Offriding Rides" },
      { name: "twitter:description", content: "CRUIZR matches solo riders, coordinates group rides, supports voice intercom, offers live GPS tracking, and supports motorcycle clubs across India." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp" },
    ],
    links: [
      { rel: "canonical", href: "https://cruizr.in" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
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
          "@type": "WebApplication",
          name: "CRUIZR",
          applicationCategory: "TravelApplication",
          operatingSystem: "Any",
          description: "The best ride sharing and companion app for motorcycle and bike riders. Match with solo riders, use live tracking and built-in intercom.",
          url: "https://cruizr.in",
          image: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp",
          sameAs: [
            "https://instagram.com/cruizr",
            "https://twitter.com/cruizr",
            "https://youtube.com/@cruizr",
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
