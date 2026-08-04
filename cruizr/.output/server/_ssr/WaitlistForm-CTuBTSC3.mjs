import { a as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { k as Check, x as Mail } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WaitlistForm-CTuBTSC3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FORMSPREE_URL = "https://formspree.io/f/mbdnpreb";
function WaitlistForm() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("idle");
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!email) return;
		setStatus("loading");
		try {
			if ((await fetch(FORMSPREE_URL, {
				method: "POST",
				headers: { "Accept": "application/json" },
				body: JSON.stringify({ email })
			})).ok) setStatus("success");
			else if (FORMSPREE_URL.includes("placeholder")) setTimeout(() => setStatus("success"), 800);
			else setStatus("error");
		} catch (error) {
			if (FORMSPREE_URL.includes("placeholder")) setTimeout(() => setStatus("success"), 800);
			else setStatus("error");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full max-w-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .9
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					className: "flex items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-6 py-4 text-green-400",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 24 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: "You're on the list! We'll be in touch."
					})]
				}, "success") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: {
						opacity: 0,
						scale: .9
					},
					onSubmit: handleSubmit,
					className: "flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-y-0 left-0 flex items-center pl-4 text-white/50",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value),
							placeholder: "Enter your email",
							className: "w-full rounded-full border border-white/20 bg-white/5 py-3 pl-12 pr-4 text-white placeholder-white/50 outline-none backdrop-blur transition-colors focus:border-[var(--orange)]",
							disabled: status === "loading"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
						whileHover: { scale: 1.05 },
						whileTap: { scale: .95 },
						disabled: status === "loading",
						type: "submit",
						className: "inline-flex h-[50px] items-center justify-center rounded-full bg-[var(--orange)] px-8 font-semibold text-white transition-opacity disabled:opacity-70 sm:w-auto btn-glow",
						children: status === "loading" ? "Joining..." : "Join Waitlist"
					})]
				}, "form")
			}),
			status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-red-400",
				children: "Oops! Something went wrong. Please try again."
			}),
			status === "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 pl-2 text-xs text-white/60",
				children: "Join early to get exclusive beta access."
			})
		]
	});
}
//#endregion
export { WaitlistForm as t };
