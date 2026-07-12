import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as Apple, d as Play } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StoreBadges-DJpzADmx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, subtitle, center = true, invert = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`,
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mb-4 inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${invert ? "border-white/20 text-[var(--orange)]" : "border-[var(--orange)]/30 text-[var(--orange)]"}`,
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: `font-heading text-3xl font-extrabold leading-tight md:text-5xl ${invert ? "text-white" : "text-foreground"}`,
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-4 text-base md:text-lg ${invert ? "text-white/70" : "text-muted-foreground"}`,
				children: subtitle
			})
		]
	});
}
function Reveal({ children, delay = 0, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					setShown(true);
					io.disconnect();
				}
			});
		}, {
			threshold: .12,
			rootMargin: "0px 0px -60px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className,
		style: {
			opacity: shown ? 1 : 0,
			transform: shown ? "translateY(0)" : "translateY(24px)",
			transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`
		},
		children
	});
}
var APP_STORE = "https://apps.apple.com/app/cruizr";
var PLAY_STORE = "https://play.google.com/store/apps/details?id=com.cruizr";
function StoreBadges({ dark = false }) {
	const cls = `inline-flex items-center gap-3 rounded-xl px-5 py-3 font-medium transition-all hover:scale-[1.03] hover:shadow-lg ${dark ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90"}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "download",
		className: "flex flex-wrap gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: APP_STORE,
			className: cls,
			"aria-label": "Download on the App Store",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apple, { size: 24 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex flex-col leading-tight text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] uppercase opacity-80",
					children: "Download on the"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-heading text-base font-bold",
					children: "App Store"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: PLAY_STORE,
			className: cls,
			"aria-label": "Get it on Google Play",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
				size: 24,
				fill: "currentColor"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex flex-col leading-tight text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] uppercase opacity-80",
					children: "Get it on"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-heading text-base font-bold",
					children: "Google Play"
				})]
			})]
		})]
	});
}
//#endregion
export { SectionHeading as n, StoreBadges as r, Reveal as t };
