import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/cruizr-logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Only use transparent/white mode on the homepage hero
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          // Transparent on hero, frosted glass once scrolled
          background: isTransparent
            ? "transparent"
            : "oklch(1 0 0 / 70%)",
          backdropFilter: isTransparent ? "none" : "blur(24px) saturate(180%)",
          WebkitBackdropFilter: isTransparent ? "none" : "blur(24px) saturate(180%)",
          boxShadow: isTransparent
            ? "none"
            : "0 1px 0 oklch(0 0 0 / 0.06), 0 4px 24px oklch(0 0 0 / 0.04)",
        }}
      >
        {/* Subtle gradient accent line at the very top */}
        <div
          className="h-[2px] w-full transition-opacity duration-500"
          style={{
            background: "linear-gradient(90deg, var(--orange), var(--cyan), var(--orange))",
            opacity: isTransparent ? 0 : 1,
          }}
          aria-hidden
        />

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
            <div className="relative">
              <img
                src={logo}
                alt="CRUIZR"
                width={36}
                height={36}
                className="h-9 w-9 rounded-xl bg-white object-contain p-1 shadow-sm transition-transform duration-300 group-hover:scale-110"
              />
              {/* Subtle glow behind logo on hover */}
              <div className="absolute inset-0 rounded-xl bg-[var(--orange)]/0 transition-all duration-300 group-hover:bg-[var(--orange)]/10 group-hover:blur-md" />
            </div>
            <span className="flex flex-col leading-none">
              <span
                className="font-heading text-lg font-extrabold tracking-tight transition-colors duration-300"
                style={{ color: isTransparent ? "#fff" : "var(--foreground)" }}
              >
                CRU
                <span className="relative inline-block">
                  I
                  <span
                    className="absolute left-1/2 top-[-2px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--orange)]"
                    aria-hidden
                  />
                </span>
                ZR
              </span>
              <span
                className="text-[9px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300"
                style={{ color: isTransparent ? "rgba(255,255,255,0.5)" : "var(--muted-foreground)" }}
              >
                never cruise alone
              </span>
            </span>
          </Link>

          {/* ── Desktop Nav — Floating Pill ── */}
          <nav
            className="hidden md:flex items-center gap-1 rounded-full px-1.5 py-1 transition-all duration-500"
            style={{
              background: isTransparent
                ? "oklch(1 0 0 / 8%)"
                : "oklch(0.97 0.005 260 / 80%)",
              backdropFilter: isTransparent ? "blur(12px)" : "none",
              border: isTransparent
                ? "1px solid oklch(1 0 0 / 12%)"
                : "1px solid oklch(0.92 0.01 260 / 60%)",
            }}
          >
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300"
                style={{
                  color: isTransparent ? "rgba(255,255,255,0.7)" : "var(--muted-foreground)",
                }}
                activeProps={{
                  className: "!text-white",
                  style: {
                    color: "#fff",
                    background: "var(--orange)",
                    boxShadow: "0 2px 8px oklch(0.7 0.19 40 / 0.3)",
                  },
                }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* ── CTA Button ── */}
          <div className="hidden md:block">
            <a
              href="#download"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_8px_24px_oklch(0.7_0.19_40/0.35)]"
              style={{
                background: "linear-gradient(135deg, var(--orange) 0%, #ff8f5c 100%)",
              }}
            >
              <span className="relative z-10">Coming Soon</span>
              <ArrowRight size={14} className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" />
              {/* Shimmer sweep on hover */}
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                aria-hidden
              />
            </a>
          </div>

          {/* ── Mobile Menu Toggle ── */}
          <motion.button
            className="relative z-50 grid h-10 w-10 place-items-center rounded-xl md:hidden transition-colors duration-300"
            style={{
              color: isTransparent || open ? "#fff" : "var(--foreground)",
              background: open ? "var(--orange)" : "transparent",
            }}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </header>

      {/* ── Mobile Full-Screen Overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop blur */}
            <div className="absolute inset-0 bg-[var(--navy)]/95 backdrop-blur-xl" />

            {/* Nav content */}
            <div className="relative flex h-full flex-col items-center justify-center gap-2 px-8">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
                  className="w-full max-w-sm"
                >
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between rounded-2xl px-6 py-4 text-2xl font-bold text-white/80 transition-all hover:bg-white/5 hover:text-white"
                    activeProps={{
                      className: "!text-[var(--orange)] bg-white/5",
                    }}
                    activeOptions={{ exact: n.to === "/" }}
                  >
                    {n.label}
                    <ArrowRight
                      size={20}
                      className="text-white/20 transition-all group-hover:text-[var(--orange)] group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: NAV.length * 0.08, duration: 0.4, ease: "easeOut" }}
                className="mt-6 w-full max-w-sm"
              >
                <a
                  href="#download"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-[var(--orange)] py-4 text-base font-bold text-white shadow-[0_8px_32px_oklch(0.7_0.19_40/0.4)]"
                >
                  Coming Soon
                  <ArrowRight size={16} />
                </a>
              </motion.div>

              {/* Tagline at bottom */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 text-xs font-medium uppercase tracking-widest text-white/20"
              >
                Never cruise alone
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer so content doesn't hide behind fixed header (except on home page where hero is full screen) */}
      {!isHome && <div className="h-[66px]" />}
    </>
  );
}