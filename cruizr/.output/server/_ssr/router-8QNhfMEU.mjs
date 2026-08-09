import { a as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$7 } from "../_slug-BXDQkBtN.mjs";
import { C as Instagram, n as X, x as Mail, y as Menu } from "../_libs/lucide-react.mjs";
import { t as Route$8 } from "./blog._postSlug--M1ThiFY.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-8QNhfMEU.js
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
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CRUIZR — Best App for Motorbike Club, Offroad Rides & Group Riding in India" },
			{
				name: "description",
				content: "CRUIZR is the ultimate motorcycle companion app. Join motorbike clubs, plan offroad/monsoon rides, track groups live with built-in intercom and crash safety features. The best app for bike riders in Bangalore, Mumbai, Pune, Delhi NCR, and across India."
			},
			{
				name: "keywords",
				content: "best app for motorbike club, best app for offriding rides, best app for group motorcycle rides, best app for bike riders, best app for motorcycle community, best app for offroad riding, best motorcycle app India, bike riding app Bangalore, Pune, Mumbai, Hyderabad, Chennai, Delhi NCR, women motorcycle riders app India, motorcycle intercom app, motorcycle crash alert app, motorcycle GPS tracker"
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
				property: "og:title",
				content: "CRUIZR — Best App for Motorbike Clubs, Offroad Rides & Group Riding"
			},
			{
				property: "og:description",
				content: "CRUIZR is the ultimate motorcycle companion app. Join motorbike clubs, plan offroad/monsoon rides, track groups live with built-in intercom, safety crash alerts, and female-only rides in India."
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
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@cruizr"
			},
			{
				name: "twitter:title",
				content: "CRUIZR — Best App for Motorbike Clubs & Offriding Rides"
			},
			{
				name: "twitter:description",
				content: "CRUIZR matches solo riders, coordinates group rides, supports voice intercom, offers live GPS tracking, and supports motorcycle clubs across India."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp"
			}
		],
		links: [
			{
				rel: "canonical",
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
				"@type": "WebApplication",
				name: "CRUIZR",
				applicationCategory: "TravelApplication",
				operatingSystem: "Any",
				description: "The best ride sharing and companion app for motorcycle and bike riders. Match with solo riders, use live tracking and built-in intercom.",
				url: "https://www.cruizr.in",
				image: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp",
				sameAs: [
					"https://instagram.com/cruizr",
					"https://twitter.com/cruizr",
					"https://youtube.com/@cruizr"
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
	const { queryClient } = Route$6.useRouteContext();
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
var $$splitComponentImporter$5 = () => import("./terms-BXpkMZL4.mjs");
var Route$5 = createFileRoute("/terms")({
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
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./privacy-CGLYAxYK.mjs");
var Route$4 = createFileRoute("/privacy")({
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
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./features-DtcuYcZj.mjs");
var Route$3 = createFileRoute("/features")({
	head: () => ({
		meta: [
			{ title: "Features — CRUIZR: Best Intercom, GPS Tracking & Club Tools for Bikers" },
			{
				name: "description",
				content: "Explore the top features that make CRUIZR the best app for motorbike clubs, offriding rides, group navigation, and rider safety. Get free intercom voice comms, live GPS tracking, and crash alerts."
			},
			{
				name: "keywords",
				content: "motorcycle ride tracking app, bike rider communication app, group motorcycle navigation app, motorcycle intercom app, offline motorcycle maps app, motorcycle GPS tracker, download motorcycle riders app, motorcycle community app free"
			},
			{
				property: "og:title",
				content: "CRUIZR Features — Built for Motorbike Clubs & Safety"
			},
			{
				property: "og:description",
				content: "Explore the top features that make CRUIZR the best app for motorbike clubs, offriding rides, group navigation, and rider safety."
			},
			{
				property: "og:url",
				content: "https://www.cruizr.in/features"
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
				content: "CRUIZR Features — Group Ride Planner & GPS Tracker"
			},
			{
				name: "twitter:description",
				content: "Free intercom, live group tracking, SOS crash alerts, and dedicated club management for motorcycle riders."
			},
			{
				name: "twitter:image",
				content: "https://www.cruizr.in/assets/hero-riders.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.cruizr.in/features"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-B-Fba4RW.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — CRUIZR" },
			{
				name: "description",
				content: "Get in touch with the CRUIZR team. Support, partnerships, or press — we'd love to hear from you."
			},
			{
				property: "og:title",
				content: "Contact — CRUIZR"
			},
			{
				property: "og:description",
				content: "Reach the CRUIZR team."
			},
			{
				property: "og:url",
				content: "https://www.cruizr.in/contact"
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
				content: "Contact — CRUIZR"
			},
			{
				name: "twitter:description",
				content: "Reach the CRUIZR team."
			},
			{
				name: "twitter:image",
				content: "https://www.cruizr.in/assets/hero-riders.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.cruizr.in/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-syx7tr4K.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — CRUIZR: The Free Motorcycle Riding Community App" },
			{
				name: "description",
				content: "Discover why we built CRUIZR. We are building the ultimate Indian motorcycle community app and rider networking platform. Join us to find weekend bike rides near you."
			},
			{
				name: "keywords",
				content: "free motorcycle riding community app, motorcycle rider networking app, best app to meet motorcycle riders, Indian motorcycle community app, motorcycle club app India, bike riders app Delhi"
			},
			{
				property: "og:title",
				content: "About CRUIZR — Indian Motorcycle Community & Biker Network"
			},
			{
				property: "og:description",
				content: "Discover why we built CRUIZR. We are building the ultimate Indian motorcycle community app and rider networking platform."
			},
			{
				property: "og:url",
				content: "https://www.cruizr.in/about"
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
				content: "About CRUIZR — Biker Social Network"
			},
			{
				name: "twitter:description",
				content: "Connecting motorcycle riders across India. Join the ultimate biker community."
			},
			{
				name: "twitter:image",
				content: "https://www.cruizr.in/assets/hero-riders.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.cruizr.in/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-j3Xy2bGt.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "CRUIZR — Best App for Motorbike Clubs, Offriding Rides & Bike Community" },
			{
				name: "description",
				content: "Looking for the best app for motorbike clubs, offriding rides, or group motorcycle rides? CRUIZR offers live GPS tracking, hands-free intercom, crash safety alerts, and a vibrant riding community in Bangalore, Mumbai, Pune, and India."
			},
			{
				name: "keywords",
				content: "best app for motorbike club, best app for offriding rides, best app for group motorcycle rides, best app for bike riders, best app for motorcycle enthusiasts, best app for offroad riding, best motorcycle app India, bike riding app Bangalore, Pune, Mumbai, Hyderabad, Chennai, Delhi NCR, women motorcycle riders app India, women only bike rides, monsoon bike rides India, offroad rides monsoon, winter motorcycle rides India, motorcycle intercom app, motorcycle crash alert app, motorcycle GPS tracker"
			},
			{
				property: "og:title",
				content: "CRUIZR — Best App for Motorbike Clubs & Group Rides"
			},
			{
				property: "og:description",
				content: "CRUIZR is the ultimate motorcycle companion app. Join motorbike clubs, plan offroad/monsoon rides, track groups live with built-in intercom, safety crash alerts, and female-only rides in India."
			},
			{
				property: "og:image",
				content: "https://www.cruizr.in/assets/hero-riders.jpg"
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
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "CRUIZR — Best App for Motorbike Clubs & Offriding"
			},
			{
				name: "twitter:description",
				content: "Join motorbike clubs, plan offroad/monsoon rides, track groups live with built-in intercom, safety crash alerts, and female-only rides in India."
			},
			{
				name: "twitter:image",
				content: "https://www.cruizr.in/assets/hero-riders.jpg"
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
					"@type": "MobileApplication",
					"name": "CRUIZR",
					"applicationCategory": "LifestyleApplication",
					"operatingSystem": "iOS, Android",
					"description": "The best app for motorbike clubs and offriding rides. Find local riding partners, use live tracking, and communicate hands-free.",
					"offers": {
						"@type": "Offer",
						"price": "0",
						"priceCurrency": "INR"
					}
				}, {
					"@type": "FAQPage",
					"mainEntity": [
						{
							"@type": "Question",
							"name": "What is the best app for motorbike clubs and organizing group motorcycle rides?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "CRUIZR is the best app for motorbike clubs and group motorcycle rides. It replaces scattered WhatsApp groups with a unified platform offering built-in intercom voice communication, live GPS tracking for every member, and safety features like rider accountability."
							}
						},
						{
							"@type": "Question",
							"name": "How can riders find offriding rides, offroad trails, and adventure rides?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "CRUIZR makes finding offriding rides and offroad trials simple. The app lets you filter rides by terrain, bike type (adventure, dirt, sport, cruiser), and pace. Whether you are searching for offroad trails in Pune, monsoon bike rides in Mumbai, or weekend trips in Bangalore, CRUIZR connects you with local riders."
							}
						},
						{
							"@type": "Question",
							"name": "What makes CRUIZR the best app for rider safety and group communication?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "CRUIZR focuses on safety with real-time GPS tracking so no one gets left behind, intercom voice communication, crash alerts, and one-tap emergency SOS features. Its OTP verification confirms rider presence at meetups, creating an accountable community."
							}
						},
						{
							"@type": "Question",
							"name": "Is there a dedicated app for women motorcycle riders in India?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Yes, CRUIZR supports the female riding community. Women motorcycle riders in India can create and join women-only bike rides, connect with a dedicated female riders network, and plan secure trips in Bangalore, Mumbai, Pune, Chennai, Delhi NCR, and Hyderabad."
							}
						},
						{
							"@type": "Question",
							"name": "How does CRUIZR support seasonal rides like monsoon, winter, and summer trips?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "CRUIZR organizes seasonal ride highlights, making it the perfect app for planning monsoon bike rides, winter motorcycle expeditions, and summer highway cruises. The community provides weather alerts, road reports, and safety updates."
							}
						}
					]
				}]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TermsRoute = Route$5.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$6
});
var PrivacyRoute = Route$4.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$6
});
var FeaturesRoute = Route$3.update({
	id: "/features",
	path: "/features",
	getParentRoute: () => Route$6
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$6
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$6
});
var SlugRoute = Route$7.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	SlugRoute,
	AboutRoute,
	ContactRoute,
	FeaturesRoute,
	PrivacyRoute,
	TermsRoute,
	BlogPostSlugRoute: Route$8.update({
		id: "/blog/$postSlug",
		path: "/blog/$postSlug",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
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
