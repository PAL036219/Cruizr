import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState, useMemo } from "react";
import { Calendar, Clock, ArrowRight, BookOpen, Compass, Search } from "lucide-react";
import matter from "gray-matter";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export interface BlogPostSummary {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDesc?: string;
  author?: string;
  date?: string;
  readTime?: string;
  category?: string;
}

const fetchAllBlogPosts = createServerFn({ method: "GET" }).handler(
  async (): Promise<BlogPostSummary[]> => {
    try {
      const allFiles = import.meta.glob("../content/blog/*.md", {
        query: "?raw",
        import: "default",
      });

      const posts: BlogPostSummary[] = [];

      for (const [filePath, resolver] of Object.entries(allFiles)) {
        try {
          const contentRaw = (await resolver()) as string;
          const { data } = matter(contentRaw);
          const slug = filePath.replace("../content/blog/", "").replace(".md", "");

          posts.push({
            slug,
            title: data.title || slug.replace(/-/g, " "),
            metaTitle: data.metaTitle,
            metaDesc: data.metaDesc,
            author: data.author || "CRUIZR Biker Club",
            date: data.date || "Recent",
            readTime: data.readTime || "5 min read",
            category: data.category || "Motorcycle Guides",
          });
        } catch (err) {
          console.error(`Error parsing blog post ${filePath}:`, err);
        }
      }

      // Sort newest first if date is parseable
      return posts.sort((a, b) => {
        const timeA = a.date ? new Date(a.date).getTime() : 0;
        const timeB = b.date ? new Date(b.date).getTime() : 0;
        return (isNaN(timeB) ? 0 : timeB) - (isNaN(timeA) ? 0 : timeA);
      });
    } catch (error) {
      console.error("Failed to read blog markdown files", error);
      return [];
    }
  }
);

export const Route = createFileRoute("/blog/")({
  loader: async () => {
    const posts = await fetchAllBlogPosts();
    return { posts };
  },
  head: ({ loaderData }) => {
    const posts = loaderData?.posts || [];
    return {
      meta: [
        { title: "CRUIZR Biker Blog — Motorcycle Route Guides, Reviews & Rider Tips" },
        {
          name: "description",
          content:
            "Curated motorcycle route guides, weekend ride itineraries, biker club tips, and bike reviews across India. Never cruise alone with CRUIZR.",
        },
        {
          name: "keywords",
          content:
            "motorcycle blog India, bike rides Bangalore, Mumbai Pune bike rides, Himalayan 440 review, motorcycle intercom app, motorcycle club India",
        },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
        { property: "og:title", content: "CRUIZR Biker Blog — Motorcycle Route Guides, Reviews & Rider Tips" },
        {
          property: "og:description",
          content:
            "Curated motorcycle route guides, weekend ride itineraries, biker club tips, and bike reviews across India.",
        },
        { property: "og:url", content: "https://www.cruizr.in/blog" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "en_IN" },
        {
          property: "og:image",
          content:
            "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@cruizrapp" },
        { name: "twitter:title", content: "CRUIZR Biker Blog — Motorcycle Guides & Route Reviews" },
        {
          name: "twitter:description",
          content:
            "Curated motorcycle route guides, weekend ride itineraries, and rider community articles from CRUIZR.",
        },
      ],
      links: [{ rel: "canonical", href: "https://www.cruizr.in/blog" }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": "https://www.cruizr.in/blog/#collection",
            url: "https://www.cruizr.in/blog",
            name: "CRUIZR Biker Blog",
            description: "Curated motorcycle route guides, reviews, and community insights for Indian riders.",
            isPartOf: { "@id": "https://www.cruizr.in/#website" },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: posts.map((post, idx) => ({
                "@type": "ListItem",
                position: idx + 1,
                url: `https://www.cruizr.in/blog/${post.slug}`,
                name: post.title,
              })),
            },
          }),
        },
      ],
    };
  },
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const { posts } = Route.useLoaderData();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return ["All", ...Array.from(set)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        search.trim() === "" ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        (post.metaDesc && post.metaDesc.toLowerCase().includes(search.toLowerCase())) ||
        post.slug.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [posts, search, selectedCategory]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-dark py-20 md:py-28">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-radial)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl px-4 text-center md:px-8">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--orange)] backdrop-blur">
              <BookOpen className="h-3.5 w-3.5" />
              <span>CRUIZR Chronicles</span>
            </div>
            <h1 className="font-heading text-4xl font-black text-white sm:text-5xl md:text-6xl">
              Rider Routes, Reviews & <span className="text-gradient">Guides</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
              Curated weekend runs, intercom guides, safety tips, and motorbike news straight from India's riding community.
            </p>
          </Reveal>

          {/* Search bar */}
          <Reveal delay={150}>
            <div className="mx-auto mt-8 max-w-md">
              <div className="relative flex items-center">
                <Search className="absolute left-4 h-5 w-5 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search rides, bikes, routes..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-sm text-white placeholder-white/40 backdrop-blur outline-none transition focus:border-[var(--orange)] focus:ring-1 focus:ring-[var(--orange)]"
                />
              </div>
            </div>
          </Reveal>

          {/* Category Filter Pills */}
          {categories.length > 1 && (
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                    selectedCategory === cat
                      ? "bg-[var(--orange)] text-white shadow-lg shadow-[var(--orange)]/30"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {filteredPosts.length === 0 ? (
          <div className="py-20 text-center">
            <Compass className="mx-auto h-12 w-12 text-muted-foreground/40 animate-pulse" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">No articles found</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Try searching for something else or reset your category filter.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-4 inline-flex items-center rounded-full bg-[var(--orange)] px-5 py-2 text-xs font-semibold text-white"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, idx) => (
              <Reveal key={post.slug} delay={idx * 60}>
                <article className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:border-[var(--orange)]/40 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-[var(--orange)]/5">
                  <div>
                    {/* Meta header */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="rounded-full bg-[var(--orange)]/10 px-2.5 py-0.5 font-medium text-[var(--orange)]">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="mt-4 font-heading text-xl font-bold leading-snug text-foreground transition group-hover:text-[var(--orange)]">
                      <Link
                        to="/blog/$postSlug"
                        params={{ postSlug: post.slug }}
                        className="focus:outline-none"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    {post.metaDesc && (
                      <p className="mt-3 line-clamp-3 text-sm text-muted-foreground leading-relaxed">
                        {post.metaDesc}
                      </p>
                    )}
                  </div>

                  {/* Footer / CTA */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{post.date}</span>
                    </div>

                    <Link
                      to="/blog/$postSlug"
                      params={{ postSlug: post.slug }}
                      className="inline-flex items-center gap-1 font-semibold text-[var(--orange)] transition group-hover:translate-x-1"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
