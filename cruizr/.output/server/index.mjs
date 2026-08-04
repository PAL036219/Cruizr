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
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"2532-P1u486agW3ymimJYHS3VvIiBLK8\"",
		"mtime": "2026-07-12T07:45:50.762Z",
		"size": 9522,
		"path": "../public/favicon.svg"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"13853-p+hZMGkGWtna5ApUjYMnt1qSABk\"",
		"mtime": "2026-07-12T09:53:28.696Z",
		"size": 79955,
		"path": "../public/favicon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"3f-m8leKTxph+wj2kVRI4WB3/YvMXs\"",
		"mtime": "2026-07-24T21:23:18.699Z",
		"size": 63,
		"path": "../public/robots.txt"
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
		"etag": "\"1d7a-yE1jjjLxyvC8gRIRPzYNLqr2gIY\"",
		"mtime": "2026-08-04T21:48:21.516Z",
		"size": 7546,
		"path": "../public/sitemap.xml"
	},
	"/assets/about-CtHxu_XQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ba6-9talKapunF3otsRwrMQ28Uabgpc\"",
		"mtime": "2026-08-04T21:50:38.754Z",
		"size": 7078,
		"path": "../public/assets/about-CtHxu_XQ.js"
	},
	"/assets/arrow-right-BontFere.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-mh/xAKd2YrjHzi4pGQjzUd+/FYE\"",
		"mtime": "2026-08-04T21:50:38.754Z",
		"size": 165,
		"path": "../public/assets/arrow-right-BontFere.js"
	},
	"/assets/check-BCrbOwvW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c-yXu76vThkpnWmIkqnRDBQoPeGjc\"",
		"mtime": "2026-08-04T21:50:38.754Z",
		"size": 124,
		"path": "../public/assets/check-BCrbOwvW.js"
	},
	"/assets/blog._postSlug-BMQbpjBi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1317-1a5bW6Je648ZineQ3dCZUg7d43U\"",
		"mtime": "2026-08-04T21:50:38.754Z",
		"size": 4887,
		"path": "../public/assets/blog._postSlug-BMQbpjBi.js"
	},
	"/assets/Clubs-BJk3eDLC.png": {
		"type": "image/png",
		"etag": "\"3a1c9-/v4F2Eef9BGH/LJaeYo7MMzNL3g\"",
		"mtime": "2026-08-04T21:50:38.757Z",
		"size": 238025,
		"path": "../public/assets/Clubs-BJk3eDLC.png"
	},
	"/assets/app-mockup-mF32xL68.jpg": {
		"type": "image/jpeg",
		"etag": "\"1cbd8-foTMpwoNb8i9gdAZqbm/ibun5fc\"",
		"mtime": "2026-08-04T21:50:38.757Z",
		"size": 117720,
		"path": "../public/assets/app-mockup-mF32xL68.jpg"
	},
	"/assets/compass-C0oTiA7g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fb-KZEirkmJuQqy6p1kFOVHD/tXI3M\"",
		"mtime": "2026-08-04T21:50:38.754Z",
		"size": 251,
		"path": "../public/assets/compass-C0oTiA7g.js"
	},
	"/assets/cruizr-logo-Cnpshv2y.png": {
		"type": "image/png",
		"etag": "\"13853-p+hZMGkGWtna5ApUjYMnt1qSABk\"",
		"mtime": "2026-08-04T21:50:38.758Z",
		"size": 79955,
		"path": "../public/assets/cruizr-logo-Cnpshv2y.png"
	},
	"/assets/contact--IdxKdnI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1447-JERGuhfofOPEe64rYHXg36lfsEI\"",
		"mtime": "2026-08-04T21:50:38.754Z",
		"size": 5191,
		"path": "../public/assets/contact--IdxKdnI.js"
	},
	"/assets/createLucideIcon-BlXDHVeD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21d8-usE81Ndp/khFoD69lxKAwCwTtaA\"",
		"mtime": "2026-08-04T21:50:38.755Z",
		"size": 8664,
		"path": "../public/assets/createLucideIcon-BlXDHVeD.js"
	},
	"/assets/features-CQQB9zZE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"170d-fM74QNfVjjbVuJSVVLb0xAUWTYc\"",
		"mtime": "2026-08-04T21:50:38.755Z",
		"size": 5901,
		"path": "../public/assets/features-CQQB9zZE.js"
	},
	"/assets/hero-riders-DSSPWlN1.jpg": {
		"type": "image/jpeg",
		"etag": "\"26bbc-EI7qy6JnqRXeY+9yggb3+e6rQ68\"",
		"mtime": "2026-08-04T21:50:38.758Z",
		"size": 158652,
		"path": "../public/assets/hero-riders-DSSPWlN1.jpg"
	},
	"/assets/jsx-runtime-CZcjcDnw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e3-jCOgwIq6oGNLw0tt5XnD3UYp7FI\"",
		"mtime": "2026-08-04T21:50:38.755Z",
		"size": 1251,
		"path": "../public/assets/jsx-runtime-CZcjcDnw.js"
	},
	"/assets/index-BEnqVUI6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59866-NVPIPqvZeLZC4xwFTWKltQQ/QYA\"",
		"mtime": "2026-08-04T21:50:38.748Z",
		"size": 366694,
		"path": "../public/assets/index-BEnqVUI6.js"
	},
	"/assets/link-BBLDnrOX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"68e2-MTzaGpTUalBX7WVoQE1y+moT87s\"",
		"mtime": "2026-08-04T21:50:38.755Z",
		"size": 26850,
		"path": "../public/assets/link-BBLDnrOX.js"
	},
	"/assets/liveintercom-z0EatGV3.png": {
		"type": "image/png",
		"etag": "\"75c38-irxIvGxVQ6CMUSjs+FP2CpL+ZZM\"",
		"mtime": "2026-08-04T21:50:38.763Z",
		"size": 482360,
		"path": "../public/assets/liveintercom-z0EatGV3.png"
	},
	"/assets/Map-DKIfwk5P.png": {
		"type": "image/png",
		"etag": "\"a39c2-h0FegRp0zBrqEhEUXtDEiIRDZBE\"",
		"mtime": "2026-08-04T21:50:38.757Z",
		"size": 670146,
		"path": "../public/assets/Map-DKIfwk5P.png"
	},
	"/assets/map-pin-DqgDwBXg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-e69nJXr6k3BOnhdof5ZAptyRcfw\"",
		"mtime": "2026-08-04T21:50:38.755Z",
		"size": 259,
		"path": "../public/assets/map-pin-DqgDwBXg.js"
	},
	"/assets/privacy-DqTwcCVB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4461-1m9me1T3L9YV+mZOkf5kxTEn1eE\"",
		"mtime": "2026-08-04T21:50:38.756Z",
		"size": 17505,
		"path": "../public/assets/privacy-DqTwcCVB.js"
	},
	"/assets/radio-hvd-RG5X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176-2otZabg5La2TVQSQjVUJR7wyCfA\"",
		"mtime": "2026-08-04T21:50:38.756Z",
		"size": 374,
		"path": "../public/assets/radio-hvd-RG5X.js"
	},
	"/assets/routes-CWMnULn0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10421-Mq/jPMm1SzePMati9fw9Lho3j7s\"",
		"mtime": "2026-08-04T21:50:38.756Z",
		"size": 66593,
		"path": "../public/assets/routes-CWMnULn0.js"
	},
	"/assets/commongallery-BEv2UmDm.png": {
		"type": "image/png",
		"etag": "\"197fc5-zjK5VL9z5/9FhVqJLY8fF6kqUSg\"",
		"mtime": "2026-08-04T21:50:38.758Z",
		"size": 1671109,
		"path": "../public/assets/commongallery-BEv2UmDm.png"
	},
	"/assets/SectionHeading-PJajG2sU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f5-CGSFwfChVJF219UAUYDo7AVbB8U\"",
		"mtime": "2026-08-04T21:50:38.749Z",
		"size": 1013,
		"path": "../public/assets/SectionHeading-PJajG2sU.js"
	},
	"/assets/shield-alert-CVpdNueO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a0-q+E1WJH9yi4e8U6qExrZ9q1aRiU\"",
		"mtime": "2026-08-04T21:50:38.756Z",
		"size": 672,
		"path": "../public/assets/shield-alert-CVpdNueO.js"
	},
	"/assets/StoreBadges-Cs6um9oJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"86b-OaHxbpS3okye/rrw+iy5MfQ5aBg\"",
		"mtime": "2026-08-04T21:50:38.749Z",
		"size": 2155,
		"path": "../public/assets/StoreBadges-Cs6um9oJ.js"
	},
	"/assets/Reveal-BjZXm-z_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d9e2-yorCjMKDvGLxuYHuj6Wq0YkykXI\"",
		"mtime": "2026-08-04T21:50:38.749Z",
		"size": 121314,
		"path": "../public/assets/Reveal-BjZXm-z_.js"
	},
	"/assets/shield-check-CsKAQ7y9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-XoY/66UNVeil0o9ggTgGmw+4/RA\"",
		"mtime": "2026-08-04T21:50:38.756Z",
		"size": 320,
		"path": "../public/assets/shield-check-CsKAQ7y9.js"
	},
	"/assets/terms-YIZWKLCe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"efa-xeTG/UvTETBCNWBKCXL8r4KlhMY\"",
		"mtime": "2026-08-04T21:50:38.756Z",
		"size": 3834,
		"path": "../public/assets/terms-YIZWKLCe.js"
	},
	"/assets/trophy-qz-7d1I8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"275-1+2p0DxgyHB64akzs7PQW5iSD9w\"",
		"mtime": "2026-08-04T21:50:38.756Z",
		"size": 629,
		"path": "../public/assets/trophy-qz-7d1I8.js"
	},
	"/assets/styles-HFJYnATP.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"17035-Z1ZkVnXkjON5ZHlNtxaCdjmjTrY\"",
		"mtime": "2026-08-04T21:50:38.763Z",
		"size": 94261,
		"path": "../public/assets/styles-HFJYnATP.css"
	},
	"/assets/_slug-CD6tdIa8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d2c-RLZ0/e9931yepIOwIbCTh/gOJE4\"",
		"mtime": "2026-08-04T21:50:38.753Z",
		"size": 7468,
		"path": "../public/assets/_slug-CD6tdIa8.js"
	},
	"/assets/WaitlistForm-Bz4xmuHX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1914-QIq4YJ1sIQXPQajL+pEcZ3Jt+ag\"",
		"mtime": "2026-08-04T21:50:38.749Z",
		"size": 6420,
		"path": "../public/assets/WaitlistForm-Bz4xmuHX.js"
	},
	"/assets/live-C76_ApqC.png": {
		"type": "image/png",
		"etag": "\"24483a-QJGu1FSnWpH0RGxLbi1rNM0Hl/Q\"",
		"mtime": "2026-08-04T21:50:38.763Z",
		"size": 2377786,
		"path": "../public/assets/live-C76_ApqC.png"
	},
	"/assets/womens-DsPBskBa.png": {
		"type": "image/png",
		"etag": "\"2bca77-7O4VER4c9sBOkrxDMpPPgWj842s\"",
		"mtime": "2026-08-04T21:50:38.764Z",
		"size": 2869879,
		"path": "../public/assets/womens-DsPBskBa.png"
	},
	"/assets/hero-video-BhkfceSo.mp4": {
		"type": "video/mp4",
		"etag": "\"a5635a-o87oBHTVeZMr4sDJ+8EZswcu0fc\"",
		"mtime": "2026-08-04T21:50:38.762Z",
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
