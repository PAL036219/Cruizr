import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as ChartColumn, _ as MapPin, a as Trophy, b as HeartHandshake, c as ShieldCheck, d as Radio, h as MessageCircle, i as Users, m as MessageSquare, o as Target, r as Video, y as Lock } from "../_libs/lucide-react.mjs";
import { n as SectionHeading, r as StoreBadges, t as Reveal } from "./StoreBadges-CihJqyKP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/features-CdqEO6li.js
var import_jsx_runtime = require_jsx_runtime();
var ALL = [
	{
		icon: Users,
		title: "Smart Matching",
		body: "Our matching engine considers your bike type, experience level, preferred pace, and riding style to pair you with riders who genuinely fit. No more mismatched groups."
	},
	{
		icon: MapPin,
		title: "Live GPS Tracking",
		body: "See your entire group on an interactive real-time map. Know who's ahead, who's behind, and never worry about losing a rider on the route again."
	},
	{
		icon: Radio,
		title: "Walkie-Talkie",
		body: "Free push-to-talk voice communication built right into the app. Replace $200+ intercoms with your phone and a bluetooth headset."
	},
	{
		icon: ShieldCheck,
		title: "OTP Verification",
		body: "Every rider gets a one-time code that confirms they're physically at the meeting point. No ghosting, no confusion — everyone accounted for."
	},
	{
		icon: Lock,
		title: "Private & Invite-Only Rides",
		body: "Ride only with your trusted crew. Create private rides visible to invitees only, with full control over who joins."
	},
	{
		icon: Trophy,
		title: "Groups & Clubs",
		body: "Build permanent riding communities. Clubs give members recurring rides, shared history, and a place to belong."
	},
	{
		icon: MessageSquare,
		title: "Community Feed",
		body: "Share photos, routes, and stories from your rides. Follow other riders, discover routes, and stay plugged into the culture."
	},
	{
		icon: ChartColumn,
		title: "Ride History & Stats",
		body: "Every ride is logged — distance, duration, elevation, partners. Watch your riding story build over time."
	},
	{
		icon: HeartHandshake,
		title: "Safety & Trust",
		body: "Verified profiles, rider ratings, emergency SOS, and check-in reminders. Built with rider safety at the core."
	},
	{
		icon: MessageCircle,
		title: "Direct & Group Chat",
		body: "Connect with other riders through direct messaging, or coordinate your next trip in dedicated ride and club group chats."
	},
	{
		icon: Video,
		title: "Live Ride Broadcasting",
		body: "Stream your ride live to your followers or club members. Let viewers join your journey in real-time, right from their screens."
	},
	{
		icon: Target,
		title: "Daily Rider Challenges",
		body: "Push your limits and keep the rubber on the road. Complete daily riding challenges, earn badges, and compete with the community."
	}
];
function FeaturesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-dark py-24 md:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "var(--gradient-radial)" },
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-4xl px-4 text-center md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--orange)]",
						children: "Features"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-heading text-5xl font-black leading-tight text-white md:text-7xl",
						children: ["Every tool a rider ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "actually needs."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-lg text-white/70",
						children: "Built ground-up for motorcycle and bicycle riders — not adapted from some generic social app."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl space-y-16 px-4 md:px-8 md:space-y-24",
				children: ALL.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: i % 2 === 0 ? "left" : "right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: `grid gap-10 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[var(--orange)] to-[var(--cyan)] text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { size: 26 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-heading text-3xl font-extrabold md:text-4xl",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg text-muted-foreground",
								children: f.body
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/3] rounded-3xl border border-border bg-gradient-to-br from-[var(--orange)]/10 via-background to-[var(--cyan)]/10 p-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-full place-items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, {
										size: 96,
										className: "text-[var(--orange)] opacity-60"
									})
								})
							})
						})]
					})
				}, f.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-dark py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-4 text-center md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					invert: true,
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-white",
						children: "Try every feature free."
					}),
					subtitle: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-white/70",
						children: "CRUIZR is coming soon. Get ready to start riding with your crew."
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreBadges, { dark: true })
				})]
			})
		})
	] });
}
//#endregion
export { FeaturesPage as component };
