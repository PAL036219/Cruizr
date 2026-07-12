import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { g as Mail, i as Twitter, m as Menu, n as X, t as Youtube, v as Instagram } from "../_libs/lucide-react.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CoPw5cb7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BHassXBs.css";
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
						src: cruizr_logo_default.url,
						alt: "CRUIZR",
						width: 40,
						height: 40,
						className: "h-10 w-10 rounded-lg bg-white object-contain p-1"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
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
						children: "Download App"
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
					children: "Download App"
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
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: cruizr_logo_default.url,
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
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://instagram.com/cruizr",
										"aria-label": "Instagram",
										className: "grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-[var(--orange)] hover:text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 18 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://twitter.com/cruizr",
										"aria-label": "Twitter",
										className: "grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-[var(--orange)] hover:text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { size: 18 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://youtube.com/@cruizr",
										"aria-label": "YouTube",
										className: "grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-[var(--orange)] hover:text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { size: 18 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:support@cruizr.app",
										"aria-label": "Email",
										className: "grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-[var(--orange)] hover:text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 })
									})
								]
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
								href: "mailto:support@cruizr.app",
								className: "hover:text-[var(--orange)]",
								children: "support@cruizr.app"
							}) })
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" CRUIZR. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Ride safe. Ride together." })]
			})]
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
			{ title: "CRUIZR — Never Cruise Alone. Find Your Riding Partner." },
			{
				name: "description",
				content: "CRUIZR matches solo riders with compatible partners by bike, pace, and style. Live tracking, in built intercom, private rides, and clubs."
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
				content: "CRUIZR — Never Cruise Alone. Find Your Riding Partner."
			},
			{
				property: "og:description",
				content: "CRUIZR matches solo riders with compatible partners by bike, pace, and style. Live tracking, in built intercom, private rides, and clubs."
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
				content: "CRUIZR — Never Cruise Alone. Find Your Riding Partner."
			},
			{
				name: "twitter:description",
				content: "CRUIZR matches solo riders with compatible partners by bike, pace, and style. Live tracking, in built intercom, private rides, and clubs."
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
				"@type": "Organization",
				name: "CRUIZR",
				url: "/",
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
var $$splitComponentImporter$5 = () => import("./terms-Co0GYRKP.mjs");
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
				content: "/terms"
			}
		],
		links: [{
			rel: "canonical",
			href: "/terms"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./privacy-DJqaOVlQ.mjs");
var Route$4 = createFileRoute("/privacy")({
	head: () => ({
		meta: [
			{ title: "Privacy Policy — CRUIZR" },
			{
				name: "description",
				content: "How CRUIZR collects, uses, and protects your data."
			},
			{
				property: "og:title",
				content: "Privacy Policy — CRUIZR"
			},
			{
				property: "og:description",
				content: "How CRUIZR handles your data."
			},
			{
				property: "og:url",
				content: "/privacy"
			},
			{
				name: "robots",
				content: "index,follow"
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./feature-D6-f8HId.mjs");
var Route$3 = createFileRoute("/feature")({
	head: () => ({
		meta: [
			{ title: "Features — CRUIZR" },
			{
				name: "description",
				content: "Explore every CRUIZR feature: smart matching, live GPS, walkie-talkie, OTP verification, private rides, clubs, community feed, and safety."
			},
			{
				property: "og:title",
				content: "Features — CRUIZR"
			},
			{
				property: "og:description",
				content: "Every feature that makes CRUIZR the ride-partner app for serious riders."
			},
			{
				property: "og:url",
				content: "/features"
			}
		],
		links: [{
			rel: "canonical",
			href: "/features"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-DyTKn5PO.mjs");
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
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-CQsVfw3-.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — CRUIZR" },
			{
				name: "description",
				content: "Why we built CRUIZR — a ride-partner app made by riders for riders. Our mission, story, and values."
			},
			{
				property: "og:title",
				content: "About — CRUIZR"
			},
			{
				property: "og:description",
				content: "The story behind CRUIZR and the values that drive us."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-D9cvxvHF.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "CRUIZR — Never Cruise Alone. Find Your Riding Partner." },
			{
				name: "description",
				content: "CRUIZR matches solo riders with compatible partners by bike, pace, and style. Live tracking, in built intercom, private rides, and clubs."
			},
			{
				property: "og:title",
				content: "CRUIZR — Never Cruise Alone. Find Your Riding Partner."
			},
			{
				property: "og:description",
				content: "CRUIZR matches solo riders with compatible partners by bike, pace, and style. Live tracking, in built intercom, private rides, and clubs."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "MobileApplication",
				name: "CRUIZR",
				applicationCategory: "LifestyleApplication",
				operatingSystem: "iOS, Android",
				offers: {
					"@type": "Offer",
					price: "0",
					priceCurrency: "USD"
				}
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
var FeatureRoute = Route$3.update({
	id: "/feature",
	path: "/feature",
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
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute,
	ContactRoute,
	FeatureRoute,
	PrivacyRoute,
	TermsRoute
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
