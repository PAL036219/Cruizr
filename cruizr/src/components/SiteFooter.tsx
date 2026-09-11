import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";
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
              <li><Link to="/pricing" className="hover:text-[var(--orange)]">Pricing</Link></li>
              <li><Link to="/roadmap" className="hover:text-[var(--orange)]">Roadmap</Link></li>
              <li><Link to="/feedback" className="hover:text-[var(--orange)]">Feedback</Link></li>
              <li><Link to="/about" className="hover:text-[var(--orange)]">About</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--orange)]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to="/privacy" className="hover:text-[var(--orange)]">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[var(--orange)]">Terms of Service</Link></li>
              <li><Link to="/delete-account" className="hover:text-[var(--orange)]">Delete Account</Link></li>
              <li><a href="mailto:abhishek@cruizr.in" className="hover:text-[var(--orange)]">abhishek@cruizr.in</a></li>
            </ul>
          </div>
        </div>

        {/* SEO DIRECTORY LINKS */}
        <div className="mt-12 border-t border-white/5 pt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-xs text-white/50">
          <div>
            <h5 className="font-semibold text-white/80 mb-3 uppercase tracking-wider">Biker Cities</h5>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              <Link to={"/motorcycle-app-delhi" as any} className="hover:text-[var(--orange)]">Delhi NCR</Link>
              <span>•</span>
              <Link to={"/motorcycle-app-bangalore" as any} className="hover:text-[var(--orange)]">Bangalore</Link>
              <span>•</span>
              <Link to={"/motorcycle-app-mumbai" as any} className="hover:text-[var(--orange)]">Mumbai</Link>
              <span>•</span>
              <Link to={"/motorcycle-app-pune" as any} className="hover:text-[var(--orange)]">Pune</Link>
              <span>•</span>
              <Link to={"/motorcycle-app-hyderabad" as any} className="hover:text-[var(--orange)]">Hyderabad</Link>
              <span>•</span>
              <Link to={"/motorcycle-app-chennai" as any} className="hover:text-[var(--orange)]">Chennai</Link>
              <span>•</span>
              <Link to={"/motorcycle-app-kolkata" as any} className="hover:text-[var(--orange)]">Kolkata</Link>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-white/80 mb-3 uppercase tracking-wider">Rider States</h5>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              <Link to={"/motorcycle-app-goa" as any} className="hover:text-[var(--orange)]">Goa</Link>
              <span>•</span>
              <Link to={"/motorcycle-app-maharashtra" as any} className="hover:text-[var(--orange)]">Maharashtra</Link>
              <span>•</span>
              <Link to={"/motorcycle-app-karnataka" as any} className="hover:text-[var(--orange)]">Karnataka</Link>
              <span>•</span>
              <Link to={"/motorcycle-app-tamil-nadu" as any} className="hover:text-[var(--orange)]">Tamil Nadu</Link>
              <span>•</span>
              <Link to={"/motorcycle-app-kerala" as any} className="hover:text-[var(--orange)]">Kerala</Link>
              <span>•</span>
              <Link to={"/motorcycle-app-telangana" as any} className="hover:text-[var(--orange)]">Telangana</Link>
              <span>•</span>
              <Link to={"/motorcycle-app-rajasthan" as any} className="hover:text-[var(--orange)]">Rajasthan</Link>
              <span>•</span>
              <Link to={"/motorcycle-app-himachal-pradesh" as any} className="hover:text-[var(--orange)]">Himachal</Link>
              <span>•</span>
              <Link to={"/motorcycle-app-ladakh" as any} className="hover:text-[var(--orange)]">Ladakh</Link>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-white/80 mb-3 uppercase tracking-wider">Bike Models</h5>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              <Link to={"/royal-enfield-himalayan-rides" as any} className="hover:text-[var(--orange)]">Himalayan</Link>
              <span>•</span>
              <Link to={"/royal-enfield-classic-350-rides" as any} className="hover:text-[var(--orange)]">Classic 350</Link>
              <span>•</span>
              <Link to={"/royal-enfield-hunter-350-rides" as any} className="hover:text-[var(--orange)]">Hunter 350</Link>
              <span>•</span>
              <Link to={"/royal-enfield-continental-gt-650-rides" as any} className="hover:text-[var(--orange)]">GT 650</Link>
              <span>•</span>
              <Link to={"/ktm-duke-390-rides" as any} className="hover:text-[var(--orange)]">Duke 390</Link>
              <span>•</span>
              <Link to={"/ktm-adventure-390-rides" as any} className="hover:text-[var(--orange)]">ADV 390</Link>
              <span>•</span>
              <Link to={"/triumph-speed-400-rides" as any} className="hover:text-[var(--orange)]">Speed 400</Link>
              <span>•</span>
              <Link to={"/hero-xpulse-200-rides" as any} className="hover:text-[var(--orange)]">XPulse 200</Link>
              <span>•</span>
              <Link to={"/bmw-g310-gs-rides" as any} className="hover:text-[var(--orange)]">G 310 GS</Link>
              <span>•</span>
              <Link to={"/bajaj-dominor-400-rides" as any} className="hover:text-[var(--orange)]">Dominar</Link>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-white/80 mb-3 uppercase tracking-wider">Accessories & Gear</h5>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              <Link to={"/motorcycle-intercom-headset-app" as any} className="hover:text-[var(--orange)]">Free Intercom</Link>
              <span>•</span>
              <Link to={"/motorcycle-helmet-bluetooth-intercom" as any} className="hover:text-[var(--orange)]">Helmet Audio</Link>
              <span>•</span>
              <Link to={"/motorcycle-gps-tracker-accessories" as any} className="hover:text-[var(--orange)]">GPS Tracker</Link>
              <span>•</span>
              <Link to={"/motorcycle-mobile-phone-mount-guide" as any} className="hover:text-[var(--orange)]">Phone Mounts</Link>
              <span>•</span>
              <Link to={"/motorcycle-riding-gear-accessories" as any} className="hover:text-[var(--orange)]">Riding Gear</Link>
              <span>•</span>
              <Link to={"/motorcycle-action-camera-mounts" as any} className="hover:text-[var(--orange)]">Action Cam</Link>
              <span>•</span>
              <Link to={"/motorcycle-saddlebags-luggage-touring" as any} className="hover:text-[var(--orange)]">Saddlebags</Link>
              <span>•</span>
              <Link to={"/motorcycle-fog-lights-auxiliary" as any} className="hover:text-[var(--orange)]">Fog Lights</Link>
              <span>•</span>
              <Link to={"/motorcycle-crash-guard-accessories" as any} className="hover:text-[var(--orange)]">Crash Guards</Link>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-white/80 mb-3 uppercase tracking-wider">Bike Apps</h5>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              <Link to={"/group-motorcycle-rides" as any} className="hover:text-[var(--orange)]">Group Rides</Link>
              <span>•</span>
              <Link to={"/motorcycle-rides-near-me" as any} className="hover:text-[var(--orange)]">Rides Near Me</Link>
              <span>•</span>
              <Link to={"/find-riding-partner" as any} className="hover:text-[var(--orange)]">Find Partner</Link>
              <span>•</span>
              <Link to={"/motorcycle-trip-planner" as any} className="hover:text-[var(--orange)]">Trip Planner</Link>
              <span>•</span>
              <Link to={"/biker-emergency-sos-app" as any} className="hover:text-[var(--orange)]">Crash SOS</Link>
              <span>•</span>
              <Link to={"/motorcycle-speedometer-gps-app" as any} className="hover:text-[var(--orange)]">Speedometer</Link>
              <span>•</span>
              <Link to={"/bike-club-management-app" as any} className="hover:text-[var(--orange)]">Club Portal</Link>
              <span>•</span>
              <Link to={"/women-biker-safety-riding-app" as any} className="hover:text-[var(--orange)]">Women Bikers</Link>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-white/80 mb-3 uppercase tracking-wider">Guides & Blogs</h5>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              <Link to={"/blog/royal-enfield-himalayan-440" as any} className="hover:text-[var(--orange)]">Himalayan 440</Link>
              <span>•</span>
              <Link to={"/blog/best-monsoon-motorcycle-rides-india" as any} className="hover:text-[var(--orange)]">Monsoon Rides</Link>
              <span>•</span>
              <Link to={"/blog/motorcycle-trip-planner-app" as any} className="hover:text-[var(--orange)]">Trip Planner Guide</Link>
              <span>•</span>
              <Link to={"/blog/how-to-start-motorcycle-club-india" as any} className="hover:text-[var(--orange)]">Start a Club</Link>
              <span>•</span>
              <Link to={"/blog/how-to-find-motorcycle-rides-near-me" as any} className="hover:text-[var(--orange)]">Find Rides</Link>
              <span>•</span>
              <Link to={"/blog/motorcycle-safety-tips" as any} className="hover:text-[var(--orange)]">Safety Tips</Link>
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