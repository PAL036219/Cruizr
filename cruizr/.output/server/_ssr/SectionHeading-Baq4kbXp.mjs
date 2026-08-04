import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-Baq4kbXp.js
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
//#endregion
export { SectionHeading as t };
