import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Instagram, Twitter, Youtube, Send, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CRUIZR" },
      {
        name: "description",
        content: "Get in touch with the CRUIZR team. Support, partnerships, or press — we'd love to hear from you.",
      },
      { property: "og:title", content: "Contact — CRUIZR" },
      { property: "og:description", content: "Reach the CRUIZR team." },
      { property: "og:url", content: "https://www.cruizr.in/contact" },
      { property: "og:image", content: "https://www.cruizr.in/assets/hero-riders.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact — CRUIZR" },
      { name: "twitter:description", content: "Reach the CRUIZR team." },
      { name: "twitter:image", content: "https://www.cruizr.in/assets/hero-riders.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://www.cruizr.in/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [err, setErr] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErr("Please fill out every field.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErr("Please enter a valid email address.");
      return;
    }
    setErr("");
    setSent(true);
    
    // ✅ Actual email sending via mailto
    const subject = encodeURIComponent(`Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:abhishek@cruizr.in?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <div className="mb-4 inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--orange)]">
            Contact
          </div>
          <h1 className="font-heading text-5xl font-black leading-tight text-white md:text-6xl">
            Let's <span className="text-gradient">talk.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Support, feedback, partnerships, press — pick your lane below.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 md:px-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)]">
              {sent ? (
                <div className="grid place-items-center py-12 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--orange)]/10 text-[var(--orange)]">
                    <Check size={32} />
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-bold">Message sent</h3>
                  <p className="mt-2 text-muted-foreground">
                    Thanks — we'll get back to you at {form.email} soon.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", email: "", message: "" });
                    }}
                    className="mt-4 text-sm text-[var(--orange)] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-semibold" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-[var(--orange)]"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-[var(--orange)]"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-[var(--orange)]"
                      placeholder="Tell us what's on your mind..."
                      required
                    />
                  </div>
                  {err && <p className="text-sm text-destructive">{err}</p>}
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-6 py-3 font-semibold text-white transition-transform hover:scale-105 btn-glow"
                  >
                    <Send size={18} /> Send message
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-border bg-muted/30 p-8">
              <h3 className="font-heading text-xl font-bold">Direct channels</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="mailto:abhishek@cruizr.in" className="flex items-center gap-3 text-foreground hover:text-[var(--orange)]">
                    <Mail size={18} /> abhishek@cruizr.in
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/cruizrapp?igsh=d2ttMDRjbmU1YWhk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-[var(--orange)]">
                    <Instagram size={18} /> @cruizrapp on Instagram
                  </a>
                </li>
              </ul>
              <p className="mt-8 text-xs text-muted-foreground">
                We reply within 1–2 business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}