import { a as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$8 } from "../_slug-CzqrU8Yl.mjs";
import { C as Instagram, n as X, x as Mail, y as Menu } from "../_libs/lucide-react.mjs";
import { t as Route$9 } from "./blog._postSlug-Bd-6CzlJ.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Da9318CV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-HFJYnATP.css";
var cruizr_logo_default = "/assets/cruizr-logo-Cnpshv2y.png";
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/features",
		label: "Features"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: cruizr_logo_default,
						alt: "CRUIZR",
						width: 40,
						height: 40,
						className: "h-10 w-10 rounded-lg bg-white object-contain p-1"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex flex-col leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-heading text-xl font-extrabold tracking-tight",
							children: [
								"CRU",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative inline-block",
									children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute left-1/2 top-[-2px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--orange)]",
										"aria-hidden": true
									})]
								}),
								"ZR"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-medium tracking-wide text-muted-foreground",
							children: "never cruise alone"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
						activeProps: { className: "text-foreground" },
						activeOptions: { exact: n.to === "/" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#download",
						className: "inline-flex items-center rounded-full bg-[var(--orange)] px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 btn-glow",
						children: "Coming Soon"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "md:hidden",
					"aria-label": "Toggle menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col p-4",
				children: [NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted",
					children: n.label
				}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#download",
					onClick: () => setOpen(false),
					className: "mt-2 rounded-full bg-[var(--orange)] px-5 py-3 text-center text-sm font-semibold text-white",
					children: "Coming Soon"
				})]
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-dark border-t border-white/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-16 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/",
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: cruizr_logo_default,
										alt: "CRUIZR",
										width: 40,
										height: 40,
										className: "h-10 w-10 rounded-lg bg-white object-contain p-1"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-heading text-xl font-extrabold tracking-tight text-white",
										children: [
											"CRU",
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "relative inline-block",
												children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute left-1/2 top-[-2px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--orange)]",
													"aria-hidden": true
												})]
											}),
											"ZR"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-sm text-sm text-white/60",
									children: "Never Cruise Alone. Find your perfect riding partner, ride together, and stay connected."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.instagram.com/cruizrapp?igsh=d2ttMDRjbmU1YWhk",
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": "Instagram",
										className: "grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-[var(--orange)] hover:text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 18 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:abhishek@cruizr.in",
										"aria-label": "Email",
										className: "grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-[var(--orange)] hover:text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 })
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white",
							children: "Product"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm text-white/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/features",
									className: "hover:text-[var(--orange)]",
									children: "Features"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "hover:text-[var(--orange)]",
									children: "About"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "hover:text-[var(--orange)]",
									children: "Contact"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white",
							children: "Legal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm text-white/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/privacy",
									className: "hover:text-[var(--orange)]",
									children: "Privacy Policy"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/terms",
									className: "hover:text-[var(--orange)]",
									children: "Terms of Service"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/delete-account",
									className: "hover:text-[var(--orange)]",
									children: "Delete Account"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:abhishek@cruizr.in",
									className: "hover:text-[var(--orange)]",
									children: "abhishek@cruizr.in"
								}) })
							]
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 border-t border-white/5 pt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-xs text-white/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
							className: "font-semibold text-white/80 mb-3 uppercase tracking-wider",
							children: "Popular Biker Cities"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-x-3 gap-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-app-delhi",
									className: "hover:text-[var(--orange)]",
									children: "Delhi NCR"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-app-bangalore",
									className: "hover:text-[var(--orange)]",
									children: "Bangalore"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-app-mumbai",
									className: "hover:text-[var(--orange)]",
									children: "Mumbai"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-app-pune",
									className: "hover:text-[var(--orange)]",
									children: "Pune"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-app-hyderabad",
									className: "hover:text-[var(--orange)]",
									children: "Hyderabad"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-app-chennai",
									className: "hover:text-[var(--orange)]",
									children: "Chennai"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-app-kolkata",
									className: "hover:text-[var(--orange)]",
									children: "Kolkata"
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
							className: "font-semibold text-white/80 mb-3 uppercase tracking-wider",
							children: "Rider States & Trails"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-x-3 gap-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-app-goa",
									className: "hover:text-[var(--orange)]",
									children: "Goa"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-app-maharashtra",
									className: "hover:text-[var(--orange)]",
									children: "Maharashtra"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-app-karnataka",
									className: "hover:text-[var(--orange)]",
									children: "Karnataka"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-app-tamil-nadu",
									className: "hover:text-[var(--orange)]",
									children: "Tamil Nadu"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-app-kerala",
									className: "hover:text-[var(--orange)]",
									children: "Kerala"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-app-telangana",
									className: "hover:text-[var(--orange)]",
									children: "Telangana"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-app-gujarat",
									className: "hover:text-[var(--orange)]",
									children: "Gujarat"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-app-rajasthan",
									className: "hover:text-[var(--orange)]",
									children: "Rajasthan"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-app-west-bengal",
									className: "hover:text-[var(--orange)]",
									children: "West Bengal"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-app-himachal-pradesh",
									className: "hover:text-[var(--orange)]",
									children: "Himachal"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-app-ladakh",
									className: "hover:text-[var(--orange)]",
									children: "Ladakh"
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
							className: "font-semibold text-white/80 mb-3 uppercase tracking-wider",
							children: "Riding Resources"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-x-3 gap-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/group-motorcycle-rides",
									className: "hover:text-[var(--orange)]",
									children: "Group Rides"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-ride-planning",
									className: "hover:text-[var(--orange)]",
									children: "Ride Planner"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/offroad-motorcycle-rides",
									className: "hover:text-[var(--orange)]",
									children: "Offroad Rides"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-clubs",
									className: "hover:text-[var(--orange)]",
									children: "Motorbike Clubs"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-tracking",
									className: "hover:text-[var(--orange)]",
									children: "GPS Tracker"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-intercom",
									className: "hover:text-[var(--orange)]",
									children: "Intercom App"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/motorcycle-safety",
									className: "hover:text-[var(--orange)]",
									children: "Safety App"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/women-motorcycle-riders",
									className: "hover:text-[var(--orange)]",
									children: "Women Bikers"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/best-motorcycle-app-india",
									className: "hover:text-[var(--orange)]",
									children: "Best App India"
								})
							]
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" CRUIZR. All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Ride safe. Ride together." })]
				})
			]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-heading text-7xl font-extrabold text-gradient",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-heading text-xl font-semibold text-foreground",
					children: "Off the map"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "This route doesn't exist. Let's get you back on the road."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-[var(--orange)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105",
						children: "Ride home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-heading text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try again or head home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-full bg-[var(--orange)] px-4 py-2 text-sm font-medium text-white",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-full border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CRUIZR — #1 Motorcycle App India | Group Rides, GPS Tracker & Free Intercom" },
			{
				name: "description",
				content: "CRUIZR is India's #1 motorcycle companion app. Join motorbike clubs, plan offroad & monsoon rides, track groups live with free built-in intercom and crash safety alerts. Trusted by riders in Bangalore, Mumbai, Pune, Delhi NCR & across India."
			},
			{
				name: "keywords",
				content: "best motorcycle app India, best app for motorbike club, best app for offriding rides, best app for group motorcycle rides, motorcycle rides near me, find riding partner motorcycle, group motorcycle ride planner, motorcycle riding partner app, bike riding app Bangalore, Pune, Mumbai, Hyderabad, Chennai, Delhi NCR, Kolkata, Goa, Ladakh, women motorcycle riders app India, free motorcycle intercom app, motorcycle GPS tracker India, motorcycle crash alert app, motorcycle club management app, offroad riding app India"
			},
			{
				name: "author",
				content: "CRUIZR"
			},
			{
				name: "theme-color",
				content: "#1a1a2e"
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				name: "geo.region",
				content: "IN"
			},
			{
				name: "geo.placename",
				content: "India"
			},
			{
				name: "geo.position",
				content: "20.5937;78.9629"
			},
			{
				name: "ICBM",
				content: "20.5937, 78.9629"
			},
			{
				property: "og:title",
				content: "CRUIZR — #1 Motorcycle App India | Group Rides, GPS Tracker & Free Intercom"
			},
			{
				property: "og:description",
				content: "India's #1 motorcycle companion app. Join motorbike clubs, plan offroad & monsoon rides, use free built-in intercom, live GPS tracking, crash safety alerts, and female-only rides across India."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "CRUIZR"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@cruizrapp"
			},
			{
				name: "twitter:creator",
				content: "@cruizrapp"
			},
			{
				name: "twitter:title",
				content: "CRUIZR — #1 Motorcycle App India | Group Rides, GPS & Free Intercom"
			},
			{
				name: "twitter:description",
				content: "India's top motorcycle app. Match riders, coordinate group rides, free built-in intercom, live GPS tracking, crash alerts, and club management across India."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "CRUIZR — India's #1 Motorcycle Group Ride App"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp"
			},
			{
				name: "twitter:image:alt",
				content: "CRUIZR — India's #1 Motorcycle Group Ride App"
			}
		],
		links: [
			{
				rel: "canonical",
				href: "https://www.cruizr.in"
			},
			{
				rel: "alternate",
				hrefLang: "en-IN",
				href: "https://www.cruizr.in"
			},
			{
				rel: "alternate",
				hrefLang: "en",
				href: "https://www.cruizr.in"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800;900&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@graph": [
					{
						"@type": "Organization",
						"@id": "https://www.cruizr.in/#organization",
						name: "CRUIZR",
						url: "https://www.cruizr.in",
						logo: {
							"@type": "ImageObject",
							url: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp",
							width: 512,
							height: 512
						},
						description: "India's #1 motorcycle community and group ride companion app. Live GPS tracking, free intercom, club management, and rider safety tools.",
						email: "abhishek@cruizr.in",
						areaServed: {
							"@type": "Country",
							name: "India"
						},
						sameAs: [
							"https://www.instagram.com/cruizrapp",
							"https://twitter.com/cruizrapp",
							"https://youtube.com/@cruizr"
						],
						contactPoint: {
							"@type": "ContactPoint",
							contactType: "customer support",
							email: "abhishek@cruizr.in",
							areaServed: "IN",
							availableLanguage: ["English", "Hindi"]
						}
					},
					{
						"@type": "WebSite",
						"@id": "https://www.cruizr.in/#website",
						url: "https://www.cruizr.in",
						name: "CRUIZR",
						description: "India's #1 motorcycle group ride, club, and GPS tracking companion app.",
						publisher: { "@id": "https://www.cruizr.in/#organization" },
						potentialAction: {
							"@type": "SearchAction",
							target: {
								"@type": "EntryPoint",
								urlTemplate: "https://www.cruizr.in/?q={search_term_string}"
							},
							"query-input": "required name=search_term_string"
						}
					},
					{
						"@type": "SoftwareApplication",
						"@id": "https://www.cruizr.in/#app",
						name: "CRUIZR",
						applicationCategory: "LifestyleApplication",
						operatingSystem: "iOS, Android",
						description: "The best motorcycle companion app in India. Find riding partners, join motorbike clubs, track groups live with GPS, communicate hands-free with built-in intercom, and ride safely.",
						url: "https://www.cruizr.in",
						image: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp",
						featureList: [
							"Live GPS Group Tracking",
							"Built-in Motorcycle Intercom",
							"Motorbike Club Management",
							"Women-Only Ride Mode",
							"Crash Detection & SOS Alerts",
							"OTP Rider Verification",
							"Live Ride Streaming",
							"Smart Rider Matching",
							"Offroad & Adventure Rides",
							"Seasonal Ride Planning"
						],
						offers: {
							"@type": "Offer",
							price: "0",
							priceCurrency: "INR",
							description: "Free to download and use"
						},
						publisher: { "@id": "https://www.cruizr.in/#organization" }
					}
				]
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})
	});
}
var $$splitComponentImporter$6 = () => import("./terms-BXpkMZL4.mjs");
var Route$6 = createFileRoute("/terms")({
	head: () => ({
		meta: [
			{ title: "Terms of Service — CRUIZR" },
			{
				name: "description",
				content: "The terms governing your use of the CRUIZR app and website."
			},
			{
				property: "og:title",
				content: "Terms of Service — CRUIZR"
			},
			{
				property: "og:description",
				content: "CRUIZR terms of service."
			},
			{
				property: "og:url",
				content: "https://www.cruizr.in/terms"
			},
			{
				property: "og:image",
				content: "https://www.cruizr.in/assets/hero-riders.jpg"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Terms of Service — CRUIZR"
			},
			{
				name: "twitter:description",
				content: "CRUIZR terms of service."
			},
			{
				name: "twitter:image",
				content: "https://www.cruizr.in/assets/hero-riders.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.cruizr.in/terms"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./privacy-CGLYAxYK.mjs");
var Route$5 = createFileRoute("/privacy")({
	head: () => ({
		meta: [
			{ title: "Privacy Policy — CRUIZR" },
			{
				name: "description",
				content: "Read CRUIZR's privacy policy to understand how we collect, use, and protect your personal data."
			},
			{
				property: "og:title",
				content: "Privacy Policy — CRUIZR"
			},
			{
				property: "og:description",
				content: "Your privacy matters. Learn how CRUIZR handles your data."
			},
			{
				property: "og:url",
				content: "https://www.cruizr.in/privacy"
			},
			{
				property: "og:image",
				content: "https://www.cruizr.in/assets/hero-riders.jpg"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Privacy Policy — CRUIZR"
			},
			{
				name: "twitter:description",
				content: "Your privacy matters. Learn how CRUIZR handles your data."
			},
			{
				name: "twitter:image",
				content: "https://www.cruizr.in/assets/hero-riders.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.cruizr.in/privacy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./features-DtcuYcZj.mjs");
var Route$4 = createFileRoute("/features")({
	head: () => ({
		meta: [
			{ title: "CRUIZR Features — Free Motorcycle Intercom, Live GPS Tracker, Club Manager & Crash Alerts" },
			{
				name: "description",
				content: "Explore all CRUIZR features: free built-in motorcycle intercom, real-time group GPS tracking, motorbike club management, crash detection & SOS alerts, women-only ride mode, live ride streaming, and smart rider matching. India's most complete motorcycle app."
			},
			{
				name: "keywords",
				content: "motorcycle ride tracking app, free motorcycle intercom app India, group motorcycle GPS tracking, motorcycle club management app, motorcycle crash detection app, women only bike ride app India, motorcycle live streaming app, offline motorcycle maps app, motorcycle GPS tracker India, smart rider matching app, motorcycle safety app India, download motorcycle riders app free"
			},
			{
				property: "og:title",
				content: "CRUIZR Features — Free Intercom, GPS Tracker, Club Manager & Crash Alerts"
			},
			{
				property: "og:description",
				content: "India's most complete motorcycle app: free intercom, live GPS group tracking, club management, crash detection & SOS, women-only rides, and live streaming."
			},
			{
				property: "og:url",
				content: "https://www.cruizr.in/features"
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp"
			},
			{
				property: "og:image:alt",
				content: "CRUIZR Features — India's Most Complete Motorcycle App"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "CRUIZR Features — Free Intercom, GPS & Club Manager"
			},
			{
				name: "twitter:description",
				content: "Free intercom, live group tracking, SOS crash alerts, club management, women-only rides, and live streaming — India's most complete motorcycle companion app."
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.cruizr.in/features"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@graph": [{
					"@type": "WebPage",
					"@id": "https://www.cruizr.in/features#webpage",
					url: "https://www.cruizr.in/features",
					name: "CRUIZR Features — Free Motorcycle Intercom, Live GPS, Club Manager & Crash Alerts",
					description: "Explore all features of India's #1 motorcycle companion app: free intercom, group GPS tracking, club management, crash alerts, and more.",
					isPartOf: { "@id": "https://www.cruizr.in/#website" },
					breadcrumb: {
						"@type": "BreadcrumbList",
						itemListElement: [{
							"@type": "ListItem",
							position: 1,
							name: "Home",
							item: "https://www.cruizr.in/"
						}, {
							"@type": "ListItem",
							position: 2,
							name: "Features",
							item: "https://www.cruizr.in/features"
						}]
					}
				}, {
					"@type": "ItemList",
					name: "CRUIZR Motorcycle App Features",
					description: "Complete list of features in India's #1 motorcycle companion app CRUIZR.",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: "Smart Rider Matching",
							url: "https://www.cruizr.in/features#smart-matching"
						},
						{
							"@type": "ListItem",
							position: 2,
							name: "Live GPS Group Tracking",
							url: "https://www.cruizr.in/features#live-tracking"
						},
						{
							"@type": "ListItem",
							position: 3,
							name: "Free Built-in Motorcycle Intercom",
							url: "https://www.cruizr.in/features#walkie-talkie"
						},
						{
							"@type": "ListItem",
							position: 4,
							name: "OTP Rider Verification",
							url: "https://www.cruizr.in/features#otp-verification"
						},
						{
							"@type": "ListItem",
							position: 5,
							name: "Private & Invite-Only Rides",
							url: "https://www.cruizr.in/features#private-rides"
						},
						{
							"@type": "ListItem",
							position: 6,
							name: "Motorcycle Club Management",
							url: "https://www.cruizr.in/features#clubs"
						},
						{
							"@type": "ListItem",
							position: 7,
							name: "Community Feed & Route Sharing",
							url: "https://www.cruizr.in/features#community-feed"
						},
						{
							"@type": "ListItem",
							position: 8,
							name: "Ride History & Stats",
							url: "https://www.cruizr.in/features#ride-history"
						},
						{
							"@type": "ListItem",
							position: 9,
							name: "Crash Detection & Emergency SOS",
							url: "https://www.cruizr.in/features#safety"
						},
						{
							"@type": "ListItem",
							position: 10,
							name: "Direct & Group Chat",
							url: "https://www.cruizr.in/features#group-chat"
						},
						{
							"@type": "ListItem",
							position: 11,
							name: "Live Ride Broadcasting",
							url: "https://www.cruizr.in/features#live-broadcasting"
						},
						{
							"@type": "ListItem",
							position: 12,
							name: "Daily Rider Challenges",
							url: "https://www.cruizr.in/features#challenges"
						}
					]
				}]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./delete-account-CG53eLy4.mjs");
var Route$3 = createFileRoute("/delete-account")({
	head: () => ({
		meta: [
			{ title: "Delete Account Request — CRUIZR" },
			{
				name: "description",
				content: "How to request deletion of your CRUIZR account and associated personal data."
			},
			{
				property: "og:title",
				content: "Delete Account Request — CRUIZR"
			},
			{
				property: "og:description",
				content: "Learn how to request deletion of your CRUIZR profile and account data."
			},
			{
				property: "og:url",
				content: "https://www.cruizr.in/delete-account"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:title",
				content: "Delete Account Request — CRUIZR"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.cruizr.in/delete-account"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-B-Fba4RW.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact CRUIZR — Support, Partnerships & Press for India's #1 Motorcycle App" },
			{
				name: "description",
				content: "Reach the CRUIZR team for rider support, business partnerships, or press inquiries. India's top motorcycle group ride and GPS tracking app responds within 1–2 business days. Email: abhishek@cruizr.in"
			},
			{
				name: "keywords",
				content: "contact CRUIZR, CRUIZR support, motorcycle app support India, CRUIZR partnership, CRUIZR press, motorcycle app contact, CRUIZR email"
			},
			{
				property: "og:title",
				content: "Contact CRUIZR — Support, Partnerships & Press"
			},
			{
				property: "og:description",
				content: "Reach the CRUIZR team for support, business partnerships, or press. India's #1 motorcycle app responds within 1–2 business days."
			},
			{
				property: "og:url",
				content: "https://www.cruizr.in/contact"
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Contact CRUIZR — India's #1 Motorcycle App"
			},
			{
				name: "twitter:description",
				content: "Reach the CRUIZR team for support, partnerships, or press. Responds within 1–2 business days."
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.cruizr.in/contact"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@graph": [{
					"@type": "ContactPage",
					"@id": "https://www.cruizr.in/contact#webpage",
					url: "https://www.cruizr.in/contact",
					name: "Contact CRUIZR — India's #1 Motorcycle App",
					description: "Get in touch with the CRUIZR team for support, partnerships, or press inquiries.",
					isPartOf: { "@id": "https://www.cruizr.in/#website" },
					breadcrumb: {
						"@type": "BreadcrumbList",
						itemListElement: [{
							"@type": "ListItem",
							position: 1,
							name: "Home",
							item: "https://www.cruizr.in/"
						}, {
							"@type": "ListItem",
							position: 2,
							name: "Contact",
							item: "https://www.cruizr.in/contact"
						}]
					}
				}]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-syx7tr4K.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About CRUIZR — India's Premier Motorcycle Community App & Rider Network Story" },
			{
				name: "description",
				content: "Learn how CRUIZR was built by motorcycle riders for riders. India's fastest-growing bike community app with live GPS tracking, free intercom, club management, and group ride planning. Built by a passionate Java developer who wanted to stop riding alone."
			},
			{
				name: "keywords",
				content: "about CRUIZR, CRUIZR app story, who built CRUIZR, best free bike riding social app India, motorcycle riding app founder India, Indian motorcycle community app, motorcycle rider networking app, best app to meet motorcycle riders, motorcycle club app India, bike riders social app India, CRUIZR mission, motorcycle community India"
			},
			{
				property: "og:title",
				content: "About CRUIZR — India's Premier Motorcycle Community App & Biker Network"
			},
			{
				property: "og:description",
				content: "Learn how CRUIZR was built by a rider for riders. India's fastest-growing motorcycle community app with GPS tracking, free intercom, and group ride planning."
			},
			{
				property: "og:url",
				content: "https://www.cruizr.in/about"
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp"
			},
			{
				property: "og:image:alt",
				content: "CRUIZR About — India's Motorcycle Community App Story"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "About CRUIZR — India's Top Motorcycle Community App"
			},
			{
				name: "twitter:description",
				content: "Discover how CRUIZR was built from a solo rider's frustration. Connecting India's motorcycle community with live GPS, free intercom, and group rides."
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.cruizr.in/about"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@graph": [{
					"@type": "AboutPage",
					"@id": "https://www.cruizr.in/about#webpage",
					url: "https://www.cruizr.in/about",
					name: "About CRUIZR — India's Premier Motorcycle Community App",
					description: "Learn how CRUIZR was built by a motorcycle rider for riders across India.",
					isPartOf: { "@id": "https://www.cruizr.in/#website" },
					breadcrumb: {
						"@type": "BreadcrumbList",
						itemListElement: [{
							"@type": "ListItem",
							position: 1,
							name: "Home",
							item: "https://www.cruizr.in/"
						}, {
							"@type": "ListItem",
							position: 2,
							name: "About",
							item: "https://www.cruizr.in/about"
						}]
					}
				}, {
					"@type": "Person",
					name: "Abhishek",
					jobTitle: "Founder & Full-Stack Developer",
					worksFor: { "@id": "https://www.cruizr.in/#organization" },
					description: "Full-stack Java developer and motorcycle enthusiast. Built CRUIZR to solve the real problem of finding compatible riding partners in India.",
					email: "abhishek@cruizr.in",
					sameAs: ["https://www.instagram.com/cruizrapp"]
				}]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-Dlm_n852.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "CRUIZR — India's #1 Motorcycle App | Find Riding Partners, Group Rides & Free Intercom" },
			{
				name: "description",
				content: "CRUIZR is India's #1 motorcycle companion app. Find riding partners, join motorbike clubs, plan offroad & monsoon group rides, use free built-in intercom, live GPS tracking, and crash SOS alerts. Available in Bangalore, Mumbai, Pune, Delhi NCR, Hyderabad, Chennai & across India."
			},
			{
				name: "keywords",
				content: "best app for motorbike club, best app for offriding rides, best app for group motorcycle rides, find riding partner motorcycle India, motorcycle rides near me, best motorcycle app India, motorcycle ride planning app, bike riding app Bangalore Pune Mumbai Hyderabad Chennai Delhi NCR Kolkata Goa Ladakh Himachal Pradesh, women motorcycle riders app India, women only bike rides India, monsoon bike rides India, offroad rides monsoon, winter motorcycle rides India, free motorcycle intercom app, motorcycle crash alert app, motorcycle GPS tracker India, motorcycle club management app, motorcycle live streaming app, group motorcycle GPS tracker"
			},
			{
				property: "og:title",
				content: "CRUIZR — India's #1 Motorcycle App | Group Rides, GPS & Free Intercom"
			},
			{
				property: "og:description",
				content: "CRUIZR is the ultimate motorcycle companion app. Find riding partners, join motorbike clubs, plan offroad/monsoon group rides, use free intercom & live GPS. India's top bike riding app."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp"
			},
			{
				property: "og:image:alt",
				content: "CRUIZR Motorcycle App — India's #1 Group Ride Platform"
			},
			{
				property: "og:url",
				content: "https://www.cruizr.in/"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "CRUIZR — India's #1 Motorcycle App | Group Rides & Free Intercom"
			},
			{
				name: "twitter:description",
				content: "Find riding partners, join motorbike clubs, plan offroad & monsoon rides, use free built-in intercom and live GPS tracking across India."
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.cruizr.in/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@graph": [{
					"@type": "WebPage",
					"@id": "https://www.cruizr.in/#webpage",
					url: "https://www.cruizr.in/",
					name: "CRUIZR — India's #1 Motorcycle App | Group Rides, GPS & Free Intercom",
					description: "India's #1 motorcycle companion app. Find riding partners, join motorbike clubs, plan group rides, use free intercom and live GPS tracking across India.",
					isPartOf: { "@id": "https://www.cruizr.in/#website" },
					about: { "@id": "https://www.cruizr.in/#app" },
					primaryImageOfPage: {
						"@type": "ImageObject",
						url: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp"
					}
				}, {
					"@type": "FAQPage",
					mainEntity: [
						{
							"@type": "Question",
							name: "What is the best app for motorbike clubs and organizing group motorcycle rides?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "CRUIZR is the best app for motorbike clubs and group motorcycle rides in India. It replaces scattered WhatsApp groups with a unified platform offering built-in intercom voice communication, live GPS tracking for every member, OTP rider verification, and safety features like crash alerts and emergency SOS."
							}
						},
						{
							"@type": "Question",
							name: "How can riders find offriding rides, offroad trails, and adventure rides near me?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "CRUIZR makes finding motorcycle rides near you and offroad adventures simple. Filter rides by terrain, bike type (adventure, dirt, sport, cruiser), and pace. Whether you are searching for offroad trails in Pune, monsoon bike rides in Mumbai, weekend trips in Bangalore, or Ladakh expeditions, CRUIZR connects you with local riders instantly."
							}
						},
						{
							"@type": "Question",
							name: "What makes CRUIZR the best app for rider safety and group communication?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "CRUIZR prioritizes safety with real-time GPS tracking so no one gets left behind, free built-in intercom voice communication (no hardware needed), automatic crash detection alerts, one-tap emergency SOS with location sharing, and OTP verification that confirms rider presence at meetups."
							}
						},
						{
							"@type": "Question",
							name: "Is there a dedicated app for women motorcycle riders in India?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Yes, CRUIZR has a dedicated women-only ride mode. Women motorcycle riders in India can create rides visible only to other women — men cannot join, request, or see the live location. Connect with India's female riders network in Bangalore, Mumbai, Pune, Chennai, Delhi NCR, and Hyderabad."
							}
						},
						{
							"@type": "Question",
							name: "How does CRUIZR support seasonal rides like monsoon, winter, and Ladakh expeditions?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "CRUIZR organizes seasonal ride categories including monsoon bike rides, Ladakh motorcycle expeditions, Himachal Pradesh tours, winter cruises, and summer highway runs. The community provides weather alerts, road hazard reports, and live safety updates for all conditions."
							}
						},
						{
							"@type": "Question",
							name: "Is there a free motorcycle intercom app that works without expensive hardware?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Yes! CRUIZR includes a completely free built-in motorcycle intercom. Unlike expensive Bluetooth Cardo or Sena headsets, CRUIZR lets your entire group communicate hands-free using just your phone and standard earbuds. It works over internet in cities and uses mesh networking in dead zones."
							}
						},
						{
							"@type": "Question",
							name: "How do I find a motorcycle riding partner near me in India?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "CRUIZR's smart rider matching algorithm finds compatible motorcycle riding partners near you based on your bike type, riding pace, experience level, and preferred terrain. Create your profile, browse rides near you, or post your own ride — CRUIZR instantly matches you with like-minded riders in your city."
							}
						},
						{
							"@type": "Question",
							name: "Which major cities and states in India are supported by CRUIZR?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "CRUIZR supports riding communities nationwide across Bangalore, Mumbai, Pune, Hyderabad, Chennai, Delhi NCR, Kolkata, Goa, Jaipur, and states including Karnataka, Maharashtra, Telangana, Tamil Nadu, Rajasthan, Kerala, Goa, Himachal Pradesh, Uttarakhand, and Jammu & Kashmir for Ladakh riders."
							}
						}
					]
				}]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TermsRoute = Route$6.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$7
});
var PrivacyRoute = Route$5.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$7
});
var FeaturesRoute = Route$4.update({
	id: "/features",
	path: "/features",
	getParentRoute: () => Route$7
});
var DeleteAccountRoute = Route$3.update({
	id: "/delete-account",
	path: "/delete-account",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var SlugRoute = Route$8.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	SlugRoute,
	AboutRoute,
	ContactRoute,
	DeleteAccountRoute,
	FeaturesRoute,
	PrivacyRoute,
	TermsRoute,
	BlogPostSlugRoute: Route$9.update({
		id: "/blog/$postSlug",
		path: "/blog/$postSlug",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
