import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as ArrowRight, _ as Lock, a as Trophy, h as MapPin, l as Radio, o as Star, r as Users, s as ShieldCheck, u as Quote } from "../_libs/lucide-react.mjs";
import { n as SectionHeading, r as StoreBadges, t as Reveal } from "./StoreBadges-DJpzADmx.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D9cvxvHF.js
var import_jsx_runtime = require_jsx_runtime();
var hero_riders_default = "/assets/hero-riders-DSSPWlN1.jpg";
var hero_video_default = "/assets/hero-video-BhkfceSo.mp4";
var app_mockup_default = "/assets/app-mockup-CgR8S9CB.jpg";
var FEATURES = [
	{
		icon: Users,
		title: "Smart Matching",
		desc: "Find riders with similar pace, bike type, and riding style."
	},
	{
		icon: MapPin,
		title: "Live Tracking",
		desc: "See your entire group in real-time on an interactive map."
	},
	{
		icon: Radio,
		title: "In Built Intercom",
		desc: "Free voice comms. No expensive intercoms required."
	},
	{
		icon: ShieldCheck,
		title: "OTP Verification",
		desc: "Confirm every rider is actually at the meeting point."
	},
	{
		icon: Lock,
		title: "Private Rides",
		desc: "Invite-only rides for your trusted crew of riders."
	},
	{
		icon: Trophy,
		title: "Clubs",
		desc: "Join permanent riding communities and build your legacy."
	}
];
var STEPS = [
	{
		n: "01",
		title: "Create or discover",
		desc: "Post a ride or browse open rides near you."
	},
	{
		n: "02",
		title: "Match & join",
		desc: "Get paired with riders that fit your pace and vibe."
	},
	{
		n: "03",
		title: "Ride together",
		desc: "Track live, talk over in built intercom, stay connected."
	}
];
var TESTIMONIALS = [
	{
		quote: "CRUIZR transformed my weekend rides. I finally found my crew.",
		name: "Marco R.",
		role: "Sport touring"
	},
	{
		quote: "Finally found riders who match my pace. No more hanging back or catching up.",
		name: "Priya S.",
		role: "Adventure"
	},
	{
		quote: "The in built intercom feature is a game-changer. Saved us $400 on intercoms.",
		name: "Diego M.",
		role: "Cruiser"
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-dark",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					className: "absolute inset-0 h-full w-full object-cover",
					src: hero_video_default.url,
					poster: hero_riders_default,
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "linear-gradient(180deg, rgba(26,26,46,0.55) 0%, rgba(18,18,31,0.9) 100%)" },
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "var(--gradient-radial)" },
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto grid max-w-7xl gap-12 px-4 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:py-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur",
								style: { animation: "fade-in 0.8s ease-out both" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--orange)]" }), "Ride-partner discovery"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 font-heading text-5xl font-black leading-[1.05] text-white md:text-7xl lg:text-8xl",
								style: { animation: "fade-up 0.9s ease-out 0.1s both" },
								children: [
									"Never",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Cruise"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Alone."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-lg text-white/70 md:text-xl",
								style: { animation: "fade-up 0.9s ease-out 0.25s both" },
								children: "Find your perfect riding partner. Match on bike, pace, and style. Ride together. Stay connected on every mile."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10",
								style: { animation: "fade-up 0.9s ease-out 0.4s both" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreBadges, { dark: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center gap-4 text-sm text-white/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex -space-x-2",
										children: [
											0,
											1,
											2,
											3
										].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-8 rounded-full border-2 border-[var(--navy)] bg-gradient-to-br from-[var(--orange)] to-[var(--cyan)]" }, i))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [[
											0,
											1,
											2,
											3,
											4
										].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
											size: 14,
											className: "fill-[var(--orange)] text-[var(--orange)]"
										}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-2",
											children: "Trusted by 10,000+ riders"
										})]
									})]
								})]
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "The problem",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Riding solo is ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "boring, unsafe, and lonely."
					})] }),
					subtitle: "Every rider knows the feeling. You want to ride, but no one's around. Or worse — you ride with people who don't match your pace, and it ruins the trip."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-6 md:grid-cols-3",
					children: [
						{
							stat: "68%",
							label: "of riders quit early because they had no partner to ride with."
						},
						{
							stat: "3.2×",
							label: "safer riding in a group of 3+ vs. riding solo (industry study)."
						},
						{
							stat: "82%",
							label: "of riders want a way to find compatible partners nearby."
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-[var(--orange)]/40 hover:shadow-[var(--shadow-elegant)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-heading text-5xl font-black text-gradient",
								children: s.stat
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground",
								children: s.label
							})]
						})
					}, s.stat))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted/30 py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: false,
					eyebrow: "The solution",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"CRUIZR connects you with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "compatible riders"
						}),
						" in your area."
					] }),
					subtitle: "Post a ride or browse rides near you. Our matching engine pairs you with riders that share your bike type, experience, and pace — so every ride feels like it was made for you."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3",
					children: [
						"Filter by bike type, pace, and experience",
						"Verified riders only — OTP-checked at meetup",
						"Chat, plan, and coordinate in-app"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 grid h-5 w-5 place-items-center rounded-full bg-[var(--orange)] text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 })
						}), t]
					}, t))
				})] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--orange)]/20 to-[var(--cyan)]/20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: app_mockup_default,
							alt: "CRUIZR matching interface",
							loading: "lazy",
							width: 1200,
							height: 1200,
							className: "relative rounded-3xl shadow-[var(--shadow-elegant)]"
						})]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Everything you need",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Built for riders, by riders." }),
						subtitle: "Six core features that turn strangers into your riding crew."
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: FEATURES.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-[var(--orange)]/40 hover:shadow-[var(--shadow-elegant)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--orange)] to-[var(--cyan)] text-white transition-transform group-hover:scale-110",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { size: 22 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-heading text-xl font-bold",
										children: f.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-muted-foreground",
										children: f.desc
									})
								]
							})
						}, f.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/features",
							className: "inline-flex items-center gap-2 font-semibold text-[var(--orange)] hover:underline",
							children: ["See all features ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-dark py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					invert: true,
					eyebrow: "How it works",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-white",
						children: "Three steps to your next ride."
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-8 md:grid-cols-3",
					children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 150,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-heading text-6xl font-black text-gradient opacity-80",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-heading text-xl font-bold text-white",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-white/60",
									children: s.desc
								})
							]
						})
					}, s.n))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Loved by riders",
					title: "Real stories from real rides."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-6 md:grid-cols-3",
					children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "flex h-full flex-col rounded-2xl border border-border bg-card p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
									className: "text-[var(--orange)]",
									size: 28
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
									className: "mt-4 flex-1 text-lg leading-relaxed",
									children: [
										"\"",
										t.quote,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "mt-6 border-t border-border pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-heading font-bold",
										children: t.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-muted-foreground",
										children: t.role
									})]
								})
							]
						})
					}, t.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-dark py-24 md:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "var(--gradient-radial)" },
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-4xl px-4 text-center md:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-heading text-4xl font-black leading-tight text-white md:text-6xl",
						children: ["Ready to stop ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "riding alone?"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-lg text-white/70",
						children: "Join thousands of riders finding their crew every week. Download CRUIZR and never cruise alone again."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreBadges, { dark: true })
					})
				] })
			})]
		})
	] });
}
//#endregion
export { Home as component };
