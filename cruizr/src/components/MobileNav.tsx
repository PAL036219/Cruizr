import { Link, useLocation } from "@tanstack/react-router";
import { Home, Compass, DollarSign, Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteHeader } from "./SiteHeader"; // Or we can trigger a generic menu overlay from here

const NAV = [
  { to: "/", label: "Home", icon: Home },
  { to: "/features", label: "Features", icon: Compass },
  { to: "/pricing", label: "Pricing", icon: DollarSign },
] as const;

export function MobileNav() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe">
      <div 
        className="flex h-16 items-center justify-around bg-[var(--navy)]/95 backdrop-blur-xl border-t border-white/10 px-2"
        style={{
          boxShadow: "0 -4px 24px -4px rgba(0,0,0,0.4)"
        }}
      >
        {NAV.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className="relative flex flex-col items-center justify-center w-full h-full text-xs font-medium transition-colors"
              activeProps={{
                className: "text-[var(--orange)]",
              }}
              inactiveProps={{
                className: "text-muted-foreground",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-pill"
                  className="absolute inset-0 bg-white/5 rounded-xl mx-2 my-1"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div className="relative z-10 flex flex-col items-center gap-1">
                <item.icon size={20} className={isActive ? "text-[var(--orange)]" : "text-muted-foreground"} />
                <span>{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
