globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"98-UGODfJkRmBm6mQXnIzFfMvaGxS8\"",
		"mtime": "2026-08-12T18:33:44.301Z",
		"size": 152,
		"path": "../public/robots.txt"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"2532-P1u486agW3ymimJYHS3VvIiBLK8\"",
		"mtime": "2026-07-12T07:45:50.762Z",
		"size": 9522,
		"path": "../public/favicon.svg"
	},
	"/assets/about-CtHxu_XQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ba6-9talKapunF3otsRwrMQ28Uabgpc\"",
		"mtime": "2026-08-12T18:34:32.632Z",
		"size": 7078,
		"path": "../public/assets/about-CtHxu_XQ.js"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"13853-p+hZMGkGWtna5ApUjYMnt1qSABk\"",
		"mtime": "2026-07-12T09:53:28.696Z",
		"size": 79955,
		"path": "../public/favicon.png"
	},
	"/assets/blog._postSlug-BTad3fB2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1317-xEIdhwfYCLtr3636ADqgz2KH+uw\"",
		"mtime": "2026-08-12T18:34:32.632Z",
		"size": 4887,
		"path": "../public/assets/blog._postSlug-BTad3fB2.js"
	},
	"/assets/arrow-right-BontFere.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-mh/xAKd2YrjHzi4pGQjzUd+/FYE\"",
		"mtime": "2026-08-12T18:34:32.632Z",
		"size": 165,
		"path": "../public/assets/arrow-right-BontFere.js"
	},
	"/assets/check-BCrbOwvW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c-yXu76vThkpnWmIkqnRDBQoPeGjc\"",
		"mtime": "2026-08-12T18:34:32.632Z",
		"size": 124,
		"path": "../public/assets/check-BCrbOwvW.js"
	},
	"/icons.svg": {
		"type": "image/svg+xml",
		"etag": "\"13a7-+Yl6wl4T3p6mAdLxrF2TU9++/No\"",
		"mtime": "2026-07-12T07:45:50.775Z",
		"size": 5031,
		"path": "../public/icons.svg"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"28c5-PzzmTgun4ok+rxJlaOgpc+IPx+M\"",
		"mtime": "2026-08-12T18:33:35.586Z",
		"size": 10437,
		"path": "../public/sitemap.xml"
	},
	"/assets/contact-s_ND6JCY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1447-lCMIsJi5uQGC3sETKWksrD7qJlw\"",
		"mtime": "2026-08-12T18:34:32.635Z",
		"size": 5191,
		"path": "../public/assets/contact-s_ND6JCY.js"
	},
	"/assets/compass-C0oTiA7g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fb-KZEirkmJuQqy6p1kFOVHD/tXI3M\"",
		"mtime": "2026-08-12T18:34:32.635Z",
		"size": 251,
		"path": "../public/assets/compass-C0oTiA7g.js"
	},
	"/assets/createLucideIcon-BlXDHVeD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21d8-usE81Ndp/khFoD69lxKAwCwTtaA\"",
		"mtime": "2026-08-12T18:34:32.635Z",
		"size": 8664,
		"path": "../public/assets/createLucideIcon-BlXDHVeD.js"
	},
	"/assets/delete-account-BnsjftRg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dd8-xMKIPilucNe/jdH6cIR0buIgCgs\"",
		"mtime": "2026-08-12T18:34:32.635Z",
		"size": 3544,
		"path": "../public/assets/delete-account-BnsjftRg.js"
	},
	"/assets/Clubs-BJk3eDLC.png": {
		"type": "image/png",
		"etag": "\"3a1c9-/v4F2Eef9BGH/LJaeYo7MMzNL3g\"",
		"mtime": "2026-08-12T18:34:32.665Z",
		"size": 238025,
		"path": "../public/assets/Clubs-BJk3eDLC.png"
	},
	"/assets/features-CQQB9zZE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"170d-fM74QNfVjjbVuJSVVLb0xAUWTYc\"",
		"mtime": "2026-08-12T18:34:32.637Z",
		"size": 5901,
		"path": "../public/assets/features-CQQB9zZE.js"
	},
	"/assets/jsx-runtime-CZcjcDnw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e3-jCOgwIq6oGNLw0tt5XnD3UYp7FI\"",
		"mtime": "2026-08-12T18:34:32.637Z",
		"size": 1251,
		"path": "../public/assets/jsx-runtime-CZcjcDnw.js"
	},
	"/assets/app-mockup-mF32xL68.jpg": {
		"type": "image/jpeg",
		"etag": "\"1cbd8-foTMpwoNb8i9gdAZqbm/ibun5fc\"",
		"mtime": "2026-08-12T18:34:32.667Z",
		"size": 117720,
		"path": "../public/assets/app-mockup-mF32xL68.jpg"
	},
	"/assets/link-BBLDnrOX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"68e2-MTzaGpTUalBX7WVoQE1y+moT87s\"",
		"mtime": "2026-08-12T18:34:32.638Z",
		"size": 26850,
		"path": "../public/assets/link-BBLDnrOX.js"
	},
	"/assets/cruizr-logo-Cnpshv2y.png": {
		"type": "image/png",
		"etag": "\"13853-p+hZMGkGWtna5ApUjYMnt1qSABk\"",
		"mtime": "2026-08-12T18:34:32.667Z",
		"size": 79955,
		"path": "../public/assets/cruizr-logo-Cnpshv2y.png"
	},
	"/assets/index-U7mWY87q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5fc02-c71aVBIdeTUyFaBwK7qrQXVpPWw\"",
		"mtime": "2026-08-12T18:34:32.632Z",
		"size": 392194,
		"path": "../public/assets/index-U7mWY87q.js"
	},
	"/assets/hero-riders-DSSPWlN1.jpg": {
		"type": "image/jpeg",
		"etag": "\"26bbc-EI7qy6JnqRXeY+9yggb3+e6rQ68\"",
		"mtime": "2026-08-12T18:34:32.669Z",
		"size": 158652,
		"path": "../public/assets/hero-riders-DSSPWlN1.jpg"
	},
	"/assets/liveintercom-z0EatGV3.png": {
		"type": "image/png",
		"etag": "\"75c38-irxIvGxVQ6CMUSjs+FP2CpL+ZZM\"",
		"mtime": "2026-08-12T18:34:32.672Z",
		"size": 482360,
		"path": "../public/assets/liveintercom-z0EatGV3.png"
	},
	"/assets/map-pin-DqgDwBXg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-e69nJXr6k3BOnhdof5ZAptyRcfw\"",
		"mtime": "2026-08-12T18:34:32.638Z",
		"size": 259,
		"path": "../public/assets/map-pin-DqgDwBXg.js"
	},
	"/assets/SectionHeading-PJajG2sU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f5-CGSFwfChVJF219UAUYDo7AVbB8U\"",
		"mtime": "2026-08-12T18:34:32.632Z",
		"size": 1013,
		"path": "../public/assets/SectionHeading-PJajG2sU.js"
	},
	"/assets/radio-hvd-RG5X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176-2otZabg5La2TVQSQjVUJR7wyCfA\"",
		"mtime": "2026-08-12T18:34:32.639Z",
		"size": 374,
		"path": "../public/assets/radio-hvd-RG5X.js"
	},
	"/assets/privacy-DqTwcCVB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4461-1m9me1T3L9YV+mZOkf5kxTEn1eE\"",
		"mtime": "2026-08-12T18:34:32.638Z",
		"size": 17505,
		"path": "../public/assets/privacy-DqTwcCVB.js"
	},
	"/assets/shield-check-CsKAQ7y9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-XoY/66UNVeil0o9ggTgGmw+4/RA\"",
		"mtime": "2026-08-12T18:34:32.663Z",
		"size": 320,
		"path": "../public/assets/shield-check-CsKAQ7y9.js"
	},
	"/assets/shield-alert-CVpdNueO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a0-q+E1WJH9yi4e8U6qExrZ9q1aRiU\"",
		"mtime": "2026-08-12T18:34:32.640Z",
		"size": 672,
		"path": "../public/assets/shield-alert-CVpdNueO.js"
	},
	"/assets/StoreBadges-Cs6um9oJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"86b-OaHxbpS3okye/rrw+iy5MfQ5aBg\"",
		"mtime": "2026-08-12T18:34:32.632Z",
		"size": 2155,
		"path": "../public/assets/StoreBadges-Cs6um9oJ.js"
	},
	"/assets/terms-YIZWKLCe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"efa-xeTG/UvTETBCNWBKCXL8r4KlhMY\"",
		"mtime": "2026-08-12T18:34:32.665Z",
		"size": 3834,
		"path": "../public/assets/terms-YIZWKLCe.js"
	},
	"/assets/routes-ClTxkGoK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10579-wQ+WJmfvOXLfLBeM0PanX3+XKXQ\"",
		"mtime": "2026-08-12T18:34:32.640Z",
		"size": 66937,
		"path": "../public/assets/routes-ClTxkGoK.js"
	},
	"/assets/trophy-qz-7d1I8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"275-1+2p0DxgyHB64akzs7PQW5iSD9w\"",
		"mtime": "2026-08-12T18:34:32.665Z",
		"size": 629,
		"path": "../public/assets/trophy-qz-7d1I8.js"
	},
	"/assets/Reveal-BjZXm-z_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d9e2-yorCjMKDvGLxuYHuj6Wq0YkykXI\"",
		"mtime": "2026-08-12T18:34:32.632Z",
		"size": 121314,
		"path": "../public/assets/Reveal-BjZXm-z_.js"
	},
	"/assets/WaitlistForm-jD1RmIio.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1914-I4FKWzxltWjWLsRjwtlpZSFLwao\"",
		"mtime": "2026-08-12T18:34:32.632Z",
		"size": 6420,
		"path": "../public/assets/WaitlistForm-jD1RmIio.js"
	},
	"/assets/_slug-CUrUyufZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d2c-zLB7jbHb8bYTKgcFgIwwpyrUTlM\"",
		"mtime": "2026-08-12T18:34:32.632Z",
		"size": 7468,
		"path": "../public/assets/_slug-CUrUyufZ.js"
	},
	"/assets/commongallery-BEv2UmDm.png": {
		"type": "image/png",
		"etag": "\"197fc5-zjK5VL9z5/9FhVqJLY8fF6kqUSg\"",
		"mtime": "2026-08-12T18:34:32.667Z",
		"size": 1671109,
		"path": "../public/assets/commongallery-BEv2UmDm.png"
	},
	"/assets/styles-HFJYnATP.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"17035-Z1ZkVnXkjON5ZHlNtxaCdjmjTrY\"",
		"mtime": "2026-08-12T18:34:32.672Z",
		"size": 94261,
		"path": "../public/assets/styles-HFJYnATP.css"
	},
	"/assets/Map-DKIfwk5P.png": {
		"type": "image/png",
		"etag": "\"a39c2-h0FegRp0zBrqEhEUXtDEiIRDZBE\"",
		"mtime": "2026-08-12T18:34:32.667Z",
		"size": 670146,
		"path": "../public/assets/Map-DKIfwk5P.png"
	},
	"/assets/live-C76_ApqC.png": {
		"type": "image/png",
		"etag": "\"24483a-QJGu1FSnWpH0RGxLbi1rNM0Hl/Q\"",
		"mtime": "2026-08-12T18:34:32.672Z",
		"size": 2377786,
		"path": "../public/assets/live-C76_ApqC.png"
	},
	"/assets/womens-DsPBskBa.png": {
		"type": "image/png",
		"etag": "\"2bca77-7O4VER4c9sBOkrxDMpPPgWj842s\"",
		"mtime": "2026-08-12T18:34:32.672Z",
		"size": 2869879,
		"path": "../public/assets/womens-DsPBskBa.png"
	},
	"/assets/hero-video-BhkfceSo.mp4": {
		"type": "video/mp4",
		"etag": "\"a5635a-o87oBHTVeZMr4sDJ+8EZswcu0fc\"",
		"mtime": "2026-08-12T18:34:32.672Z",
		"size": 10838874,
		"path": "../public/assets/hero-video-BhkfceSo.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_F7pfbd = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_F7pfbd
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
