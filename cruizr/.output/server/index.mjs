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
	"/icons.svg": {
		"type": "image/svg+xml",
		"etag": "\"13a7-+Yl6wl4T3p6mAdLxrF2TU9++/No\"",
		"mtime": "2026-07-12T07:45:50.775Z",
		"size": 5031,
		"path": "../public/icons.svg"
	},
	"/assets/about-CX_g-R4C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10e6-AoUogcEPbyrQruJxMO5IDCy37zc\"",
		"mtime": "2026-07-12T09:58:35.052Z",
		"size": 4326,
		"path": "../public/assets/about-CX_g-R4C.js"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"2532-P1u486agW3ymimJYHS3VvIiBLK8\"",
		"mtime": "2026-07-12T07:45:50.762Z",
		"size": 9522,
		"path": "../public/favicon.svg"
	},
	"/assets/contact-CUzS6eTR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13e4-rs1GC/j7bGffqG/MEMKG8QXGmkg\"",
		"mtime": "2026-07-12T09:58:35.052Z",
		"size": 5092,
		"path": "../public/assets/contact-CUzS6eTR.js"
	},
	"/assets/app-mockup-CgR8S9CB.jpg": {
		"type": "image/jpeg",
		"etag": "\"f965-ddUpkqQLjcuvofc7+hGlDar27aA\"",
		"mtime": "2026-07-12T09:58:35.061Z",
		"size": 63845,
		"path": "../public/assets/app-mockup-CgR8S9CB.jpg"
	},
	"/assets/heart-handshake-G27RigKY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bf-dLoVhvl5UbwsoarM1fTZYTvttZs\"",
		"mtime": "2026-07-12T09:58:35.052Z",
		"size": 447,
		"path": "../public/assets/heart-handshake-G27RigKY.js"
	},
	"/assets/cruizr-logo-Cnpshv2y.png": {
		"type": "image/png",
		"etag": "\"13853-p+hZMGkGWtna5ApUjYMnt1qSABk\"",
		"mtime": "2026-07-12T09:58:35.061Z",
		"size": 79955,
		"path": "../public/assets/cruizr-logo-Cnpshv2y.png"
	},
	"/assets/feature-Jat9OzM0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1219-9UZaQ9NYhukat8WPSMWwIvTQQtc\"",
		"mtime": "2026-07-12T09:58:35.052Z",
		"size": 4633,
		"path": "../public/assets/feature-Jat9OzM0.js"
	},
	"/assets/about-community-BHHeFakd.jpg": {
		"type": "image/jpeg",
		"etag": "\"300cd-Ko+myuwHPeokoaQtqKV9bXZAoIk\"",
		"mtime": "2026-07-12T09:58:35.060Z",
		"size": 196813,
		"path": "../public/assets/about-community-BHHeFakd.jpg"
	},
	"/assets/privacy-Dw8Un2pS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f5a-jlcCB/PASE9lOvH5+aIVM141yuM\"",
		"mtime": "2026-07-12T09:58:35.052Z",
		"size": 3930,
		"path": "../public/assets/privacy-Dw8Un2pS.js"
	},
	"/assets/routes-BpO9KPoY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bb1-r2QZqR293tUJRZRssERcEMBKjag\"",
		"mtime": "2026-07-12T09:58:35.052Z",
		"size": 11185,
		"path": "../public/assets/routes-BpO9KPoY.js"
	},
	"/assets/StoreBadges-t4m5CmmP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d1d-lYcPloBwYbqQYcWlHriEbv7GB2U\"",
		"mtime": "2026-07-12T09:58:35.052Z",
		"size": 3357,
		"path": "../public/assets/StoreBadges-t4m5CmmP.js"
	},
	"/assets/hero-riders-DSSPWlN1.jpg": {
		"type": "image/jpeg",
		"etag": "\"26bbc-EI7qy6JnqRXeY+9yggb3+e6rQ68\"",
		"mtime": "2026-07-12T09:58:35.061Z",
		"size": 158652,
		"path": "../public/assets/hero-riders-DSSPWlN1.jpg"
	},
	"/assets/terms-BEw0_Hpa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"faa-N1OcJV6hVapZEdbsCbS3VSdwdBg\"",
		"mtime": "2026-07-12T09:58:35.052Z",
		"size": 4010,
		"path": "../public/assets/terms-BEw0_Hpa.js"
	},
	"/assets/index-D2zQJaCR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57361-AXNhobN7K2WTdmWQwwry+5q12dw\"",
		"mtime": "2026-07-12T09:58:35.052Z",
		"size": 357217,
		"path": "../public/assets/index-D2zQJaCR.js"
	},
	"/assets/styles-BHassXBs.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15519-oeQOf3rxc4pMUYaJACbZnrTM4C4\"",
		"mtime": "2026-07-12T09:58:35.064Z",
		"size": 87321,
		"path": "../public/assets/styles-BHassXBs.css"
	},
	"/assets/trophy-BHTSdTRy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"46f-PJanH5xPJ3rX4FwPZJG56XQDb+Q\"",
		"mtime": "2026-07-12T09:58:35.060Z",
		"size": 1135,
		"path": "../public/assets/trophy-BHTSdTRy.js"
	},
	"/assets/hero-video-BhkfceSo.mp4": {
		"type": "video/mp4",
		"etag": "\"a5635a-o87oBHTVeZMr4sDJ+8EZswcu0fc\"",
		"mtime": "2026-07-12T09:58:35.064Z",
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
