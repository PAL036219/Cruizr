import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as Mountain, r as Users, s as ShieldCheck, y as HeartHandshake } from "../_libs/lucide-react.mjs";
import { n as SectionHeading, r as StoreBadges, t as Reveal } from "./StoreBadges-DJpzADmx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CQsVfw3-.js
var import_jsx_runtime = require_jsx_runtime();
var about_community_default = "/assets/about-community-BHHeFakd.jpg";
var VALUES = [
	{
		icon: ShieldCheck,
		title: "Safety",
		body: "Every feature is designed with rider safety first. Verified profiles, live tracking, and SOS built-in."
	},
	{
		icon: Users,
		title: "Community",
		body: "Riders are stronger together. We build tools that turn strangers into lifelong riding partners."
	},
	{
		icon: HeartHandshake,
		title: "Trust",
		body: "OTP verification, ratings, and privacy controls so you always know who you're riding with."
	},
	{
		icon: Mountain,
		title: "Adventure",
		body: "Every mile should be worth remembering. CRUIZR is built to unlock more of them."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-dark py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-4 text-center md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--orange)]",
						children: "Our story"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-heading text-5xl font-black leading-tight text-white md:text-7xl",
						children: ["Built by riders. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "For riders."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-lg text-white/70",
						children: "CRUIZR started with a simple frustration: it's too hard to find people to ride with."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: about_community_default,
					alt: "A community of motorcycle riders",
					loading: "lazy",
					width: 1600,
					height: 1e3,
					className: "rounded-3xl shadow-[var(--shadow-elegant)]"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						center: false,
						eyebrow: "Our mission",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Make sure no rider has to ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "cruise alone"
							}),
							"."
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 text-lg text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We got tired of texting five friends every weekend to try to organize a ride. Of showing up to group rides where the pace didn't match. Of riding alone because finding compatible partners felt impossible." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "So we built CRUIZR — an app that treats ride-partner discovery as seriously as dating apps treat matching. Bike type, pace, style, experience — all considered, so every ride you join feels like it was made for you." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-foreground font-semibold",
								children: "Today, thousands of riders use CRUIZR to find their crew. This is only the beginning."
							})
						]
					})] })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted/30 py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "What we stand for",
					title: "Our values.",
					subtitle: "Four principles that shape every decision we make."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: VALUES.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-[var(--orange)]/40 hover:shadow-[var(--shadow-elegant)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--orange)] to-[var(--cyan)] text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { size: 22 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-heading text-xl font-bold",
									children: v.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-muted-foreground",
									children: v.body
								})
							]
						})
					}, v.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-dark py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-4 text-center md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-heading text-4xl font-black leading-tight text-white md:text-6xl",
					children: ["Come ride ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "with us."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreBadges, { dark: true })
				})]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
