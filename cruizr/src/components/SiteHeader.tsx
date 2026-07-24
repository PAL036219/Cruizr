import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "../assets/cruizr-logo.png";


const NAV = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
  <img src={logo} alt="CRUIZR" width={40} height={40} className="h-10 w-10 rounded-lg bg-white object-contain p-1" />
  <span className="flex flex-col leading-none">
    <span className="font-heading text-xl font-extrabold tracking-tight">
      CRU<span className="relative inline-block">I<span className="absolute left-1/2 top-[-2px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--orange)]" aria-hidden /></span>ZR
    </span>
    <span className="text-[10px] font-medium tracking-wide text-muted-foreground">
      never cruise alone
    </span>
  </span>
</Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#download"
            className="inline-flex items-center rounded-full bg-[var(--orange)] px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 btn-glow"
          >
            Coming Soon
          </a>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col p-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[var(--orange)] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Coming Soon
            </a>
          </div>
        </div>
      )}
    </header>
  );
}