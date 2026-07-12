import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as Check, c as Send, g as Mail, i as Twitter, t as Youtube, v as Instagram } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DyTKn5PO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const [err, setErr] = (0, import_react.useState)("");
	function submit(e) {
		e.preventDefault();
		if (!form.name || !form.email || !form.message) {
			setErr("Please fill out every field.");
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
			setErr("Please enter a valid email address.");
			return;
		}
		setErr("");
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-dark py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-4 text-center md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--orange)]",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-heading text-5xl font-black leading-tight text-white md:text-6xl",
					children: ["Let's ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "talk."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-2xl text-lg text-white/70",
					children: "Support, feedback, partnerships, press — pick your lane below."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-5xl gap-12 px-4 md:px-8 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)]",
					children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid place-items-center py-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-16 w-16 place-items-center rounded-full bg-[var(--orange)]/10 text-[var(--orange)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 32 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-heading text-2xl font-bold",
								children: "Message sent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-muted-foreground",
								children: [
									"Thanks — we'll get back to you at ",
									form.email,
									" soon."
								]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-sm font-semibold",
								htmlFor: "name",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "name",
								value: form.name,
								onChange: (e) => setForm({
									...form,
									name: e.target.value
								}),
								className: "w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-[var(--orange)]",
								placeholder: "Your name"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-sm font-semibold",
								htmlFor: "email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "email",
								type: "email",
								value: form.email,
								onChange: (e) => setForm({
									...form,
									email: e.target.value
								}),
								className: "w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-[var(--orange)]",
								placeholder: "you@example.com"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-sm font-semibold",
								htmlFor: "message",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "message",
								rows: 5,
								value: form.message,
								onChange: (e) => setForm({
									...form,
									message: e.target.value
								}),
								className: "w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-[var(--orange)]",
								placeholder: "Tell us what's on your mind..."
							})] }),
							err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-destructive",
								children: err
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-6 py-3 font-semibold text-white transition-transform hover:scale-105 btn-glow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 18 }), " Send message"]
							})
						]
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-muted/30 p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-heading text-xl font-bold",
							children: "Direct channels"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 space-y-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:support@cruizr.app",
									className: "flex items-center gap-3 text-foreground hover:text-[var(--orange)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 }), " support@cruizr.app"]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://instagram.com/cruizr",
									className: "flex items-center gap-3 text-foreground hover:text-[var(--orange)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 18 }), " @cruizr on Instagram"]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://twitter.com/cruizr",
									className: "flex items-center gap-3 text-foreground hover:text-[var(--orange)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { size: 18 }), " @cruizr on Twitter"]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://youtube.com/@cruizr",
									className: "flex items-center gap-3 text-foreground hover:text-[var(--orange)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { size: 18 }), " CRUIZR on YouTube"]
								}) })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-xs text-muted-foreground",
							children: "We reply within 1–2 business days."
						})
					]
				})
			})]
		})
	})] });
}
//#endregion
export { ContactPage as component };
