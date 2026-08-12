import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./_slug-CzqrU8Yl.mjs";
import { D as CircleCheck, M as Bike, N as ArrowRight, T as Compass, b as MapPin, i as Users, j as Calendar, p as Radio, u as ShieldAlert } from "./_libs/lucide-react.mjs";
import { t as WaitlistForm } from "./_ssr/WaitlistForm-CTuBTSC3.mjs";
import { t as Reveal } from "./_ssr/Reveal-BHPg_427.mjs";
import { t as SectionHeading } from "./_ssr/SectionHeading-Baq4kbXp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BceQ3fo3.js
var import_jsx_runtime = require_jsx_runtime();
function SlugLandingPage() {
	const data = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background min-h-screen text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-dark py-20 md:py-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "var(--gradient-radial)" },
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-5xl px-4 text-center md:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--orange)] backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[var(--orange)] animate-pulse" }), data.heroBadge]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-heading text-4xl font-black leading-[1.1] text-white sm:text-5xl md:text-7xl",
							children: data.headline.split(" ").map((w, idx) => {
								const highlightWords = [
									"Delhi",
									"Bangalore",
									"Mumbai",
									"Pune",
									"Hyderabad",
									"Chennai",
									"Kolkata",
									"Best",
									"Safest",
									"Companion",
									"Offroad",
									"Central",
									"Intercom",
									"GPS",
									"Safety",
									"ECR",
									"Biker",
									"India"
								];
								const cleanWord = w.replace(/[^a-zA-Z]/g, "");
								if (highlightWords.includes(cleanWord)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-gradient",
									children: [
										" ",
										w,
										" "
									]
								}, idx);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									" ",
									w,
									" "
								] }, idx);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-3xl text-lg text-white/70 md:text-xl",
							children: data.subheadline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaitlistForm, {})
						})
					] })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-5xl px-4 md:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-12 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
								center: false,
								eyebrow: "Rider Companion",
								title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Why serious riders choose ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "CRUIZR"
								})] }),
								subtitle: data.introText
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 h-5 w-5 text-[var(--orange)] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "100% Free Voice Intercom:" }), " Push & Talk with your crew without buying hardware."] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 h-5 w-5 text-[var(--orange)] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Live Convoy GPS:" }), " Real-time mapping showing speed, distance, and turns."] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 h-5 w-5 text-[var(--orange)] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Safe Rider Audits:" }), " Safety check-ins, SOS buttons, and crash notification sensors."] })]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5 rounded-3xl bg-muted/40 p-8 border border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-heading text-2xl font-bold mb-4",
									children: "India's Biking Revolution"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm leading-relaxed mb-6",
									children: "CRUIZR is designed for Indian roads, highway routes, and off-road trail conditions. Find companions near you who match your riding discipline."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-border pt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground uppercase tracking-wider mb-2 font-semibold",
										children: "Active Hubs"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2 text-xs",
										children: [
											"Bangalore",
											"Mumbai",
											"Pune",
											"Delhi NCR",
											"Hyderabad",
											"Chennai",
											"Kolkata"
										].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-border/40 px-3 py-1 text-foreground/80 border border-border/20",
											children: c
										}, c))
									})]
								})
							]
						})]
					}) })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-muted/10 py-16 md:py-24 border-t border-b border-border/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-5xl px-4 md:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 md:grid-cols-3",
						children: data.features.map((feat, idx) => {
							const IconComp = {
								users: Users,
								compass: Compass,
								mappin: MapPin,
								calendar: Calendar,
								radio: Radio,
								shieldalert: ShieldAlert,
								checkcircle2: CircleCheck,
								bike: Bike
							}[feat.icon] || Compass;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: idx * 120,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-[var(--orange)]/30 transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--orange)] to-[var(--cyan)] text-white",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComp, { size: 22 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-heading text-lg font-bold",
											children: feat.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted-foreground leading-relaxed",
											children: feat.desc
										})
									]
								})
							}, idx);
						})
					})
				})
			}),
			data.cityContext && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 md:py-28 bg-gradient-to-b from-transparent to-muted/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-4xl px-4 text-center md:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-heading text-3xl font-black md:text-5xl mb-4",
							children: ["Find Local Rides & Clubs in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: data.title.replace(" Biker Community", "").replace(" Motorcycle Rides & Clubs", "").replace(" Biker Network", "")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto max-w-2xl text-muted-foreground mb-8",
							children: "Connect with local groups and riders who match your style. Join safety runs, weekend breakfast meetups, or rugged offroad explorations."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex flex-wrap justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/features",
								className: "rounded-full bg-border/40 px-6 py-2.5 text-sm font-semibold border border-border hover:bg-border/60 transition-colors inline-flex items-center gap-2",
								children: ["Explore Features ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "rounded-full bg-[var(--orange)] px-6 py-2.5 text-sm font-semibold text-white hover:scale-105 transition-transform",
								children: "Read Our Story"
							})]
						})
					] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-dark py-20 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "var(--gradient-radial)" },
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-4xl px-4 text-center md:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-heading text-3xl font-black leading-tight text-white md:text-5xl",
							children: data.ctaTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-2xl text-white/70",
							children: "Join thousands of passionate riders finding their groups, tracking convoys, and exploring trails. CRUIZR is coming soon."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaitlistForm, {})
						})
					] })
				})]
			})
		]
	});
}
//#endregion
export { SlugLandingPage as component };
