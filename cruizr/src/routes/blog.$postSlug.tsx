import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { WaitlistForm } from "../components/WaitlistForm";
import { Reveal } from "../components/Reveal";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const fetchBlogPost = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    try {
      const filePath = path.resolve(process.cwd(), `src/content/blog/${slug}.md`);
      const fileContent = await fs.readFile(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      return {
        meta: data as Record<string, string>,
        body: content,
      };
    } catch (error) {
      console.error(`Failed to read markdown file for slug: ${slug}`, error);
      return null;
    }
  });

export const Route = createFileRoute("/blog/$postSlug")({
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "CRUIZR Biker Blog" },
          { name: "description", content: "Read safety guides, monsoon ride tips, and biking news." }
        ]
      };
    }
    const { post: { meta }, slug } = loaderData;
    
    return {
      meta: [
        { title: meta.metaTitle },
        { name: "description", content: meta.metaDesc },
        { name: "keywords", content: meta.metaKeywords },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
        { property: "article:published_time", content: meta.date },
        { property: "article:author", content: meta.author },
        { property: "article:section", content: meta.category },
        { property: "og:title", content: meta.metaTitle },
        { property: "og:description", content: meta.metaDesc },
        { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp" },
        { property: "og:image:alt", content: meta.metaTitle },
        { property: "og:url", content: `https://www.cruizr.in/blog/${slug}` },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "en_IN" },
        { property: "og:site_name", content: "CRUIZR" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@cruizrapp" },
        { name: "twitter:title", content: meta.metaTitle },
        { name: "twitter:description", content: meta.metaDesc },
        { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp" },
      ],
      links: [{ rel: "canonical", href: `https://www.cruizr.in/blog/${slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: meta.title,
            description: meta.metaDesc,
            image: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp",
            datePublished: meta.date,
            dateModified: meta.date,
            author: {
              "@type": "Organization",
              name: meta.author,
              url: "https://www.cruizr.in",
            },
            publisher: {
              "@type": "Organization",
              name: "CRUIZR",
              logo: {
                "@type": "ImageObject",
                url: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.cruizr.in/blog/${slug}`,
            },
            articleSection: meta.category,
            keywords: meta.metaKeywords,
            inLanguage: "en-IN",
            isPartOf: { "@id": "https://www.cruizr.in/#website" },
          }),
        },
      ],
    };
  },
  loader: async ({ params }) => {
    const post = await fetchBlogPost({ data: params.postSlug });
    if (!post) {
      throw notFound();
    }
    return { post, slug: params.postSlug };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const { meta, body } = post;

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
              {meta.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock size={13} /> {meta.readTime}
            </div>
          </div>
          <h1 className="font-heading text-3xl font-black leading-tight text-foreground md:text-5xl">
            {meta.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-6 border-t border-border/20 pt-6">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-border text-foreground">
                <User size={15} />
              </div>
              <span className="text-sm font-medium text-foreground">{meta.author}</span>
            </div>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar size={13} /> {meta.date}
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <Reveal>
            <div className="space-y-6">
              <ReactMarkdown
                components={{
                  p: ({node, ...props}) => <p className="text-muted-foreground leading-relaxed text-[1.05rem]" {...props} />,
                  h2: ({node, ...props}) => <h2 className="font-heading text-2xl font-bold mt-10 mb-4 text-foreground flex items-center gap-2 border-b border-border/30 pb-2" {...props} />,
                  h3: ({node, ...props}) => <h3 className="font-heading text-xl font-bold mt-8 mb-3 text-foreground" {...props} />,
                  ul: ({node, ...props}) => <ul className="space-y-3 mt-4 mb-6" {...props} />,
                  li: ({node, ...props}) => (
                    <li className="flex items-start gap-3 text-[0.95rem] text-foreground/95">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--orange)] shrink-0" />
                      <span className="flex-1">{props.children}</span>
                    </li>
                  ),
                }}
              >
                {body}
              </ReactMarkdown>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="relative overflow-hidden bg-dark py-16 md:py-24 border-t border-border/20 mt-12">
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
