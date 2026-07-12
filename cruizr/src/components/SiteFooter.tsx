import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Youtube, Mail } from "lucide-react";
import logo from "../assets/cruizr-logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="CRUIZR" width={40} height={40} className="h-10 w-10 rounded-lg bg-white object-contain p-1" />
              <span className="font-heading text-xl font-extrabold tracking-tight text-white">
                CRU<span className="relative inline-block">I<span className="absolute left-1/2 top-[-2px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--orange)]" aria-hidden /></span>ZR
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              Never Cruise Alone. Find your perfect riding partner, ride together, and stay connected.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://instagram.com/cruizr" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-[var(--orange)] hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="mailto:pal036219@gmail.com" aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-[var(--orange)] hover:text-white">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">Product</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to="/features" className="hover:text-[var(--orange)]">Features</Link></li>
              <li><Link to="/about" className="hover:text-[var(--orange)]">About</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--orange)]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to="/privacy" className="hover:text-[var(--orange)]">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[var(--orange)]">Terms of Service</Link></li>
              <li><a href="mailto:pal036219@gmail.com" className="hover:text-[var(--orange)]">pal036219@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} CRUIZR. All rights reserved.</p>
          <p>Ride safe. Ride together.</p>
        </div>
      </div>
    </footer>
  );
}