import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Mail } from "lucide-react";

// Replace this with your actual Formspree endpoint or API route
const FORMSPREE_URL = "https://formspree.io/f/mbdnpreb";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    
    try {
      // Send to Formspree
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        // If placeholder, let's just pretend it worked for the demo
        if (FORMSPREE_URL.includes("placeholder")) {
           setTimeout(() => setStatus("success"), 800);
        } else {
           setStatus("error");
        }
      }
    } catch (error) {
       if (FORMSPREE_URL.includes("placeholder")) {
           setTimeout(() => setStatus("success"), 800);
       } else {
           setStatus("error");
       }
    }
  };

  return (
    <div className="w-full max-w-md">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-6 py-4 text-green-400"
          >
            <Check size={24} />
            <span className="font-semibold">You're on the list! We'll be in touch.</span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-white/50">
                <Mail size={18} />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-full border border-white/20 bg-white/5 py-3 pl-12 pr-4 text-white placeholder-white/50 outline-none backdrop-blur transition-colors focus:border-[var(--orange)]"
                disabled={status === "loading"}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === "loading"}
              type="submit"
              className="inline-flex h-[50px] items-center justify-center rounded-full bg-[var(--orange)] px-8 font-semibold text-white transition-opacity disabled:opacity-70 sm:w-auto btn-glow"
            >
              {status === "loading" ? "Joining..." : "Join Waitlist"}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
      
      {status === "error" && (
        <p className="mt-2 text-sm text-red-400">Oops! Something went wrong. Please try again.</p>
      )}
      {status === "idle" && (
        <p className="mt-2 pl-2 text-xs text-white/60">
          Join early to get exclusive beta access.
        </p>
      )}
    </div>
  );
}
