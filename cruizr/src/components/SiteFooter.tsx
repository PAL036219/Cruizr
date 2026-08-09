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
              <a href="https://www.instagram.com/cruizrapp?igsh=d2ttMDRjbmU1YWhk" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-[var(--orange)] hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="mailto:abhishek@cruizr.in" aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-[var(--orange)] hover:text-white">
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
              <li><a href="mailto:abhishek@cruizr.in" className="hover:text-[var(--orange)]">abhishek@cruizr.in</a></li>
            </ul>
          </div>
        </div>

        {/* SEO DIRECTORY LINKS */}
        <div className="mt-12 border-t border-white/5 pt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-xs text-white/50">
          <div>
            <h5 className="font-semibold text-white/80 mb-3 uppercase tracking-wider">Popular Biker Cities</h5>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              <Link to="/motorcycle-app-delhi" className="hover:text-[var(--orange)]">Delhi NCR</Link>
              <span>•</span>
              <Link to="/motorcycle-app-bangalore" className="hover:text-[var(--orange)]">Bangalore</Link>
              <span>•</span>
              <Link to="/motorcycle-app-mumbai" className="hover:text-[var(--orange)]">Mumbai</Link>
              <span>•</span>
              <Link to="/motorcycle-app-pune" className="hover:text-[var(--orange)]">Pune</Link>
              <span>•</span>
              <Link to="/motorcycle-app-hyderabad" className="hover:text-[var(--orange)]">Hyderabad</Link>
              <span>•</span>
              <Link to="/motorcycle-app-chennai" className="hover:text-[var(--orange)]">Chennai</Link>
              <span>•</span>
              <Link to="/motorcycle-app-kolkata" className="hover:text-[var(--orange)]">Kolkata</Link>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-white/80 mb-3 uppercase tracking-wider">Rider States & Trails</h5>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              <Link to="/motorcycle-app-goa" className="hover:text-[var(--orange)]">Goa</Link>
              <span>•</span>
              <Link to="/motorcycle-app-maharashtra" className="hover:text-[var(--orange)]">Maharashtra</Link>
              <span>•</span>
              <Link to="/motorcycle-app-karnataka" className="hover:text-[var(--orange)]">Karnataka</Link>
              <span>•</span>
              <Link to="/motorcycle-app-tamil-nadu" className="hover:text-[var(--orange)]">Tamil Nadu</Link>
              <span>•</span>
              <Link to="/motorcycle-app-kerala" className="hover:text-[var(--orange)]">Kerala</Link>
              <span>•</span>
              <Link to="/motorcycle-app-telangana" className="hover:text-[var(--orange)]">Telangana</Link>
              <span>•</span>
              <Link to="/motorcycle-app-gujarat" className="hover:text-[var(--orange)]">Gujarat</Link>
              <span>•</span>
              <Link to="/motorcycle-app-rajasthan" className="hover:text-[var(--orange)]">Rajasthan</Link>
              <span>•</span>
              <Link to="/motorcycle-app-west-bengal" className="hover:text-[var(--orange)]">West Bengal</Link>
              <span>•</span>
              <Link to="/motorcycle-app-himachal-pradesh" className="hover:text-[var(--orange)]">Himachal</Link>
              <span>•</span>
              <Link to="/motorcycle-app-ladakh" className="hover:text-[var(--orange)]">Ladakh</Link>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-white/80 mb-3 uppercase tracking-wider">Riding Resources</h5>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              <Link to="/group-motorcycle-rides" className="hover:text-[var(--orange)]">Group Rides</Link>
              <span>•</span>
              <Link to="/motorcycle-ride-planning" className="hover:text-[var(--orange)]">Ride Planner</Link>
              <span>•</span>
              <Link to="/offroad-motorcycle-rides" className="hover:text-[var(--orange)]">Offroad Rides</Link>
              <span>•</span>
              <Link to="/motorcycle-clubs" className="hover:text-[var(--orange)]">Motorbike Clubs</Link>
              <span>•</span>
              <Link to="/motorcycle-tracking" className="hover:text-[var(--orange)]">GPS Tracker</Link>
              <span>•</span>
              <Link to="/motorcycle-intercom" className="hover:text-[var(--orange)]">Intercom App</Link>
              <span>•</span>
              <Link to="/motorcycle-safety" className="hover:text-[var(--orange)]">Safety App</Link>
              <span>•</span>
              <Link to="/women-motorcycle-riders" className="hover:text-[var(--orange)]">Women Bikers</Link>
              <span>•</span>
              <Link to="/best-motorcycle-app-india" className="hover:text-[var(--orange)]">Best App India</Link>
            </div>
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