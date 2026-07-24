import { t as motion } from "../_libs/framer-motion.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as MapPin, a as Trophy, c as ShieldCheck, d as Radio, i as Users, w as ArrowRight, y as Lock } from "../_libs/lucide-react.mjs";
import { n as SectionHeading, r as StoreBadges, t as Reveal } from "./StoreBadges-CihJqyKP.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BPmR9wTe.js
var import_jsx_runtime = require_jsx_runtime();
var hero_riders_default = "/assets/hero-riders-DSSPWlN1.jpg";
var hero_video_default = "/assets/hero-video-BhkfceSo.mp4";
var app_mockup_default = "/assets/app-mockup-0fQfpPJ5.png";
var commongallery_default = "/assets/commongallery-BEv2UmDm.png";
var live_default = "/assets/live-C76_ApqC.png";
var womens_default = "/assets/womens-DsPBskBa.png";
var Clubs_default = "/assets/Clubs-BJk3eDLC.png";
var liveintercom_default = "/assets/liveintercom-ieO3Bnrs.png";
var Map_default = "/assets/Map-DKIfwk5P.png";
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
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-dark",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					className: "absolute inset-0 h-full w-full object-cover",
					src: hero_video_default,
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10",
								style: { animation: "fade-up 0.9s ease-out 0.4s both" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreBadges, { dark: true })
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex gap-6 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--orange)]/20 to-[var(--cyan)]/20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: app_mockup_default,
							alt: "CRUIZR matching interface",
							loading: "lazy",
							width: 300,
							height: 300,
							className: "relative rounded-3xl shadow-[var(--shadow-elegant)] max-w-full h-auto"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
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
						"Live interactive map with real-time updates",
						"Chat, plan, and coordinate in-app"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 grid h-5 w-5 place-items-center rounded-full bg-[var(--orange)] text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 })
						}), t]
					}, t))
				})] }) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted/30 py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "order-2 lg:order-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						center: false,
						eyebrow: "Interact",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Interact With ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Live Interactive Map"
							}),
							"."
						] }),
						subtitle: "Track your entire crew in real-time — CRUIZR's live group map shows every rider's exact location the moment they join a ride, so no one gets left behind or lost on unfamiliar roads. Whether you're leading a 5-bike weekend run or a 50-rider club convoy, watch each member's position update live on a single shared map, keep tabs on speed and distance from the pack, and instantly spot if someone's fallen behind or taken a wrong turn. Built for Indian riders who ride in groups, not alone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3",
						children: [
							"Live GPS tracking for every rider in your group",
							"Real-time speed & distance monitoring from the pack",
							"Instant route sharing with one tap",
							"Emergency SOS alerts with location sharing"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 grid h-5 w-5 place-items-center rounded-full bg-[var(--orange)] text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 })
							}), t]
						}, t))
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					className: "order-1 lg:order-2 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex gap-6 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--orange)]/20 to-[var(--cyan)]/20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: Map_default,
							alt: "CRUIZR map interface",
							loading: "lazy",
							width: 300,
							height: 300,
							className: "relative rounded-3xl shadow-[var(--shadow-elegant)] max-w-full h-auto"
						})]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted/30 py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex gap-6 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--orange)]/20 to-[var(--cyan)]/20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: Clubs_default,
							alt: "CRUIZR matching interface",
							loading: "lazy",
							width: 300,
							height: 400,
							className: "relative rounded-3xl shadow-[var(--shadow-elegant)] max-w-full h-auto"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: false,
					eyebrow: "The solution",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"CRUIZR connects you with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Club & Fellow riders"
						}),
						"."
					] }),
					subtitle: "Find your riding tribe with CRUIZR's Clubs — create your own club or join one that matches your vibe, from cruiser crews to sportbike squads to weekend explorers. Every club gets its own dedicated chat, so you can plan the next ride, share route ideas, post breakdown alerts, or just talk bikes with people who get it. No more scattered WhatsApp groups — everything from club discussions to ride announcements lives in one place, built specifically for riders."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3",
					children: [
						"Create Your Own Club",
						"Find your riding tribe",
						"Dedicated club chat"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 grid h-5 w-5 place-items-center rounded-full bg-[var(--orange)] text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 })
						}), t]
					}, t))
				})] }) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted/30 py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "order-2 lg:order-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						center: false,
						eyebrow: "Talk to your crew, hands-free",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Built-in intercom, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "no hardware needed"
							}),
							"."
						] }),
						subtitle: "Skip the expensive Bluetooth intercom kits — CRUIZR has group voice communication built right in. Push and lock with your entire crew over the internet in cities, and stay connected through mesh networking even in dead zones with zero network coverage. One tap, and your whole group hears you, wherever the ride takes you."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3",
						children: [
							"Push and lock with your entire riding group, instantly",
							"Works over internet in cities, mesh network in dead zones",
							"No pairing, no extra hardware, just tap and talk"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 grid h-5 w-5 place-items-center rounded-full bg-[var(--orange)] text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 })
							}), t]
						}, t))
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					className: "order-1 lg:order-2 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex gap-6 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--orange)]/20 to-[var(--cyan)]/20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: liveintercom_default,
							alt: "CRUIZR matching interface",
							loading: "lazy",
							width: 300,
							height: 400,
							className: "relative rounded-3xl shadow-[var(--shadow-elegant)] max-w-full h-auto"
						})]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted/30 py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex gap-6 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--orange)]/20 to-[var(--cyan)]/20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: live_default,
							alt: "CRUIZR matching interface",
							loading: "lazy",
							width: 300,
							height: 400,
							className: "relative rounded-3xl shadow-[var(--shadow-elegant)] max-w-full h-auto"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: false,
					eyebrow: "Ride live, share live",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Go live from the saddle, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "let them ride with you"
						}),
						"."
					] }),
					subtitle: "Turn every ride into a live show — stream your ride straight from CRUIZR with real-time chat, likes, and reactions from your followers, just like Instagram Live. Connect an external camera like a GoPro or DJI for pro-quality footage, or go live straight from your phone. Your crew back home gets the full ride, live, as it happens."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3",
					children: [
						"Live stream your ride with chat, likes, and reactions",
						"Connect GoPro, DJI, and other external action cameras",
						"Followers watch and comment in real time, just like Instagram"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 grid h-5 w-5 place-items-center rounded-full bg-[var(--orange)] text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 })
						}), t]
					}, t))
				})] }) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted/30 py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "order-2 lg:order-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						center: false,
						eyebrow: "Built for her safety",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Queens-only rides, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "verified and protected"
							}),
							"."
						] }),
						subtitle: "Every rider deserves to feel safe on the road. With CRUIZR, women can create rides open only to women — no men can join, request to join, or even see the ride's live location. Ride with a trusted circle of women riders, share routes freely, and build your own community without compromise."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3",
						children: [
							"Create women-only rides, invisible to male riders",
							"Only verified women can request to join",
							"Live location shared only within the group"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 grid h-5 w-5 place-items-center rounded-full bg-[var(--orange)] text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 })
							}), t]
						}, t))
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					className: "order-1 lg:order-2 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex gap-6 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--orange)]/20 to-[var(--cyan)]/20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: womens_default,
							alt: "CRUIZR matching interface",
							loading: "lazy",
							width: 300,
							height: 400,
							className: "relative rounded-3xl shadow-[var(--shadow-elegant)] max-w-full h-auto"
						})]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted/30 py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex gap-6 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--orange)]/20 to-[var(--cyan)]/20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: commongallery_default,
							alt: "CRUIZR matching interface",
							loading: "lazy",
							width: 300,
							height: 400,
							className: "relative rounded-3xl shadow-[var(--shadow-elegant)] max-w-full h-auto"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: false,
					eyebrow: "Discover new routes",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"A shared gallery of every ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "scenic spot riders find"
						}),
						"."
					] }),
					subtitle: "Found a breathtaking viewpoint, a hidden pit stop, or the perfect sunset spot on your ride? Upload it to CRUIZR's community gallery so other riders can discover it too. Browse photos from riders across the country, tap any spot to see where it is, and turn your next ride into an adventure someone else already mapped out."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3",
					children: [
						"Upload photos from your rides to the community gallery",
						"Browse scenic spots shared by riders near you",
						"Tap a photo to see the exact location and route"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 grid h-5 w-5 place-items-center rounded-full bg-[var(--orange)] text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 })
						}), t]
					}, t))
				})] }) })]
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
						subtitle: "Seven core features that turn strangers into your riding crew."
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
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							whileHover: { y: -8 },
							transition: {
								type: "spring",
								stiffness: 300
							},
							className: "relative h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur",
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
						children: "Join thousands of riders finding their crew every week. CRUIZR is coming soon, get ready to never cruise alone again."
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
