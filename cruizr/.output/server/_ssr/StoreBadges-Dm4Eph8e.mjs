import { t as motion } from "../_libs/framer-motion.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { F as Apple, m as Play } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StoreBadges-Dm4Eph8e.js
var import_jsx_runtime = require_jsx_runtime();
var APP_STORE = "https://apps.apple.com/app/cruizr";
var PLAY_STORE = "https://play.google.com/store/apps/details?id=com.cruizr";
function StoreBadges({ dark = false }) {
	const cls = `inline-flex items-center gap-3 rounded-xl px-5 py-3 font-medium shadow-sm ${dark ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90"}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "download",
		className: "flex flex-wrap gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
			href: APP_STORE,
			className: cls,
			"aria-label": "Download on the App Store",
			whileHover: { scale: 1.05 },
			whileTap: { scale: .95 },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apple, { size: 24 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex flex-col leading-tight text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] uppercase opacity-80",
					children: "Coming soon to the"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-heading text-base font-bold",
					children: "App Store"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
			href: PLAY_STORE,
			className: cls,
			"aria-label": "Get it on Google Play",
			whileHover: { scale: 1.05 },
			whileTap: { scale: .95 },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
				size: 24,
				fill: "currentColor"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex flex-col leading-tight text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] uppercase opacity-80",
					children: "Coming soon to"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-heading text-base font-bold",
					children: "Google Play"
				})]
			})]
		})]
	});
}
//#endregion
export { StoreBadges as t };
