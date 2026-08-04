import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { T as Compass, c as Sparkles, f as Rocket, g as Mountain, i as Users, l as ShieldCheck, t as Zap, w as HeartHandshake } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Reveal-BHPg_427.mjs";
import { t as SectionHeading } from "./SectionHeading-Baq4kbXp.mjs";
import { t as StoreBadges } from "./StoreBadges-Dm4Eph8e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-syx7tr4K.js
var import_jsx_runtime = require_jsx_runtime();
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
var STORY_MILESTONES = [
	{
		icon: Rocket,
		title: "The Idea",
		body: "It started on a lonely Sunday ride. I had the perfect route, perfect weather, but no one to share it with. Texting five different friends, coordinating schedules, mismatched paces — it felt harder than it should be. That's when I realized: finding riding partners should be as easy as finding the road."
	},
	{
		icon: Compass,
		title: "The Build",
		body: "I'm a full-stack Java developer who loves motorcycles. Instead of waiting for someone else to solve this problem, I started building. Spring Boot for the backend, React Native for the app, and a vision to create something that every rider would actually want to use. No shortcuts, just code and coffee."
	},
	{
		icon: Sparkles,
		title: "The Launch",
		body: "What started as a solo project quickly became a community. The first 100 riders joined within the first month. They weren't just users — they became beta testers, feature requesters, and the heart of CRUIZR. Every bug report, every suggestion, every ride shared made the app better."
	},
	{
		icon: Zap,
		title: "The Future",
		body: "Today, we're just getting started, and every rider who joins shapes what comes next. Offline mesh communication, AI route generation, group ride analytics — we're building the ultimate riding companion. Because no rider should ever have to cruise alone."
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
				className: "mx-auto max-w-4xl px-4 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: true,
					eyebrow: "Our journey",
					title: "How CRUIZR came to life.",
					subtitle: "A story of passion, code, and the open road."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-16 space-y-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-[var(--orange)] via-[var(--cyan)] to-transparent md:left-1/2 md:-translate-x-1/2" }), STORY_MILESTONES.map((milestone, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index * 150,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `relative flex flex-col md:flex-row md:items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-5 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-[var(--orange)] to-[var(--cyan)] text-white shadow-lg md:left-1/2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(milestone.icon, { size: 18 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `ml-16 flex-1 md:ml-0 ${index % 2 === 0 ? "md:mr-16 md:pr-12 md:text-right" : "md:ml-16 md:pl-12"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md md:p-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 md:block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-block rounded-full bg-[var(--orange)]/10 px-3 py-0.5 text-xs font-semibold text-[var(--orange)]",
											children: index + 1
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-heading text-xl font-bold",
											children: milestone.title
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-muted-foreground leading-relaxed",
										children: milestone.body
									})]
								})
							})]
						})
					}, milestone.title))]
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
