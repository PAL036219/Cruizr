import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as CircleCheck, E as Clock, P as ArrowLeft, T as Compass, a as User, b as MapPin, h as Navigation, j as Calendar, u as ShieldAlert } from "../_libs/lucide-react.mjs";
import { t as WaitlistForm } from "./WaitlistForm-CTuBTSC3.mjs";
import { t as Reveal } from "./Reveal-BHPg_427.mjs";
import { t as Route } from "./blog._postSlug-Bd-6CzlJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._postSlug-BeUBd0hJ.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPostPage() {
	const post = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background min-h-screen text-foreground pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-dark/50 border-b border-border/20 py-10 md:py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl px-4 md:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/features",
							className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[var(--orange)] mb-6 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), " Back to features"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-[var(--orange)]/25 border border-[var(--orange)]/40 px-3 py-1 text-xs font-semibold text-[var(--orange)]",
								children: post.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 13 }),
									" ",
									post.readTime
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-heading text-3xl font-black leading-tight text-white md:text-5xl",
							children: post.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-4 mt-6 border-t border-border/20 pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-8 w-8 place-items-center rounded-full bg-border text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { size: 15 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium text-foreground",
									children: post.author
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 13 }),
									" ",
									post.date
								]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-12 md:py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-4 md:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg leading-relaxed text-foreground/90 font-medium border-l-4 border-[var(--orange)] pl-4 mb-8",
							children: post.intro
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-12",
							children: post.sections.map((section, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: idx * 80,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "font-heading text-2xl font-bold mb-4 text-white flex items-center gap-2",
										children: [section.heading.includes("Safety") || section.heading.includes("Tech") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
											className: "text-[var(--orange)]",
											size: 22
										}) : section.heading.includes("Tamhini") || section.heading.includes("ECR") || section.heading.includes("Chikmagalur") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											className: "text-[var(--orange)]",
											size: 22
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {
											className: "text-[var(--orange)]",
											size: 22
										}), section.heading]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground leading-relaxed mb-4",
										children: section.body
									}),
									section.listItems && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2 mt-4",
										children: section.listItems.map((item, itemIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2.5 text-sm text-foreground/95",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4.5 w-4.5 text-[var(--cyan)] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
										}, itemIdx))
									})
								] })
							}, idx))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 250,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 rounded-2xl bg-muted/40 p-6 md:p-8 border border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "font-heading text-xl font-bold mb-3 flex items-center gap-2 text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {
										size: 20,
										className: "text-[var(--orange)]"
									}), " Conclusion"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground leading-relaxed text-sm md:text-base",
									children: post.conclusion
								})]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-dark py-16 md:py-24 border-t border-border/20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "var(--gradient-radial)" },
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-4xl px-4 text-center md:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-heading text-3xl font-black leading-tight text-white md:text-4xl",
							children: "Never Ride Alone. Join CRUIZR."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-xl text-white/70 text-sm md:text-base mb-8",
							children: "Join thousands of riders in India who coordinate safe monsoon runs, off-road trials, and share location details live."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaitlistForm, {})
						})
					] })
				})]
			})
		]
	});
}
//#endregion
export { BlogPostPage as component };
