import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { hasInjectionContext, inject, defineComponent, shallowRef, h, resolveComponent, getCurrentInstance, computed, unref, createElementBlock, provide, cloneVNode, defineAsyncComponent, ref, Suspense, Fragment, useSSRContext, createApp, shallowReactive, mergeProps, withCtx, createTextVNode, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, reactive, effectScope, getCurrentScope, toRef, isReadonly, toValue, isRef, isShallow, isReactive, toRaw } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/vue/index.mjs';
import { $fetch } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/ofetch/dist/node.mjs';
import { y as baseURL } from '../nitro/nitro.mjs';
import { createHooks } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/hookable/dist/index.mjs';
import { getContext, executeAsync } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unctx/dist/index.mjs';
import { createError as createError$1, sanitizeStatusCode, appendHeader } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/h3/dist/index.mjs';
import { RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/vue-router/vue-router.node.mjs';
import { defu } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/defu/dist/defu.mjs';
import { parseQuery, hasProtocol, joinURL, parseURL, encodePath, decodePath, withQuery, isScriptProtocol, withTrailingSlash, withoutTrailingSlash, withoutBase, stringifyQuery, withLeadingSlash, withBase } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/ufo/dist/index.mjs';
import { TemplateParamsPlugin, InferSeoMetaPlugin } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unhead/dist/plugins.mjs';
import { titleCase, camelCase } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/scule/dist/index.mjs';
import { defineWebSite, defineWebPage, SchemaOrgUnheadPlugin } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/@unhead/schema-org/dist/vue.mjs';
import { toRouteMatcher, createRouter as createRouter$1 } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/radix3/dist/index.mjs';
import { stringify } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/devalue/index.js';
import { hash } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt-og-image/node_modules/ohash/dist/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/vue/server-renderer/index.mjs';
import { u as useHead$1, h as headSymbol, a as useSeoMeta$1 } from '../_/server.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/consola/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/destr/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unstorage/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/klona/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/pathe/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/@nuxt/content/node_modules/pathe/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/db0/dist/connectors/better-sqlite3.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unhead/dist/server.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unhead/dist/utils.mjs';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const asyncDataDefaults = { "value": null, "errorValue": null, "deep": true };
const fetchDefaults = {};
const appId = "nuxt-app";
const crawlLinks = true;
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.21.4";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...options.ssrContext?.payload || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  let error = void 0;
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    const unresolvedPluginsForThisPlugin = plugin2.dependsOn?.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.add(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      }).catch((e) => {
        if (!plugin2.parallel && !nuxtApp.payload.error) {
          throw e;
        }
        error ||= e;
      });
      if (plugin2.parallel) {
        parallels.push(promise);
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (error) {
    throw nuxtApp.payload.error || error;
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = /* @__PURE__ */ Symbol("layout-meta");
const PageRouteSymbol = /* @__PURE__ */ Symbol("route");
function toArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to ||= "/";
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = options?.external || isExternalHost;
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext["~renderResponse"] = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  const encodedTo = typeof to === "string" ? encodeRoutePath(to) : to;
  return options?.replace ? router.replace(encodedTo) : router.push(encodedTo);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
function encodeRoutePath(url) {
  const parsed = parseURL(url);
  return encodePath(decodePath(parsed.pathname)) + parsed.search + parsed.hash;
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = /* @__NO_SIDE_EFFECTS__ */ () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const error2 = /* @__PURE__ */ useError();
    if (false) ;
    error2.value ||= nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  if (typeof error !== "string" && error.statusText) {
    error.message ??= error.statusText;
  }
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  Object.defineProperty(nuxtError, "status", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusCode,
    configurable: true
  });
  Object.defineProperty(nuxtError, "statusText", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusMessage,
    configurable: true
  });
  return nuxtError;
};
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const matcher = /* @__PURE__ */ (() => {
  const $0 = { prerender: true }, $1 = {}, $2 = { payload: false, payload: false }, $3 = { payload: false };
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    if (p === "/") {
      r.unshift({ data: $0 });
    } else if (p === "/__nuxt_content/content/sql_dump.txt") {
      r.unshift({ data: $0 });
    } else if (p === "/sitemap.xml") {
      r.unshift({ data: $1 });
    } else if (p === "/_nuxt") {
      r.unshift({ data: $1 });
    }
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "article") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      } else if (s[1] === "perspective") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      } else if (s[1] === "page") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      } else if (s[1] === "book") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      } else if (s[1] === "magazine") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      } else if (s[1] === "linked-data") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      } else if (s[1] === "api") {
        r.unshift({ data: $2, params: { "_": s.slice(2).join("/") } });
      } else if (s[1] === "__nuxt_content") {
        r.unshift({ data: $3, params: { "_": s.slice(2).join("/") } });
      } else if (s[1] === "_og") {
        if (l > 2) {
          if (s[2] === "d") {
            r.unshift({ data: $1, params: { "_": s.slice(3).join("/") } });
          } else if (s[2] === "r") {
            r.unshift({ data: $1, params: { "_": s.slice(3).join("/") } });
          } else if (s[2] === "s") {
            r.unshift({ data: $1, params: { "_": s.slice(3).join("/") } });
          }
        }
      }
    }
    return r;
  };
})();
const _routeRulesMatcher = (path) => defu({}, ...matcher("", path).map((r) => r.data).reverse());
const routeRulesMatcher = _routeRulesMatcher;
function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  try {
    return routeRulesMatcher(path);
  } catch (e) {
    console.error("[nuxt] Error matching route rules.", e);
    return {};
  }
}
const __nuxt_page_meta$5 = {
  layout: "default"
};
const __nuxt_page_meta$4 = {
  layout: "default"
};
const __nuxt_page_meta$3 = {
  layout: "default"
};
const __nuxt_page_meta$2 = {
  layout: "default"
};
const __nuxt_page_meta$1 = {
  layout: "default"
};
const __nuxt_page_meta = {
  layout: "default"
};
const _routes = [
  {
    name: "index",
    path: "/",
    meta: __nuxt_page_meta$5 || {},
    component: () => import('./index-DmpbClTR.mjs')
  },
  {
    name: "page-slug",
    path: "/page/:slug()",
    meta: __nuxt_page_meta$4 || {},
    component: () => import('./_slug_-CghQmVb1.mjs')
  },
  {
    name: "article-slug",
    path: "/article/:slug()",
    meta: __nuxt_page_meta$3 || {},
    component: () => import('./_slug_-CNkchQrO.mjs')
  },
  {
    name: "linked-data-slug",
    path: "/linked-data/:slug(.*)*",
    component: () => import('./_...slug_-DFlaOtsI.mjs')
  },
  {
    name: "magazine-type",
    path: "/magazine/:type()",
    meta: __nuxt_page_meta$2 || {},
    component: () => import('./index-kLqmwbZH.mjs')
  },
  {
    name: "magazine-type-slug",
    path: "/magazine/:type()/:slug()",
    meta: __nuxt_page_meta$1 || {},
    component: () => import('./_slug_-DN-e4XTa.mjs')
  },
  {
    name: "linked-data-type",
    path: "/linked-data/:type()",
    meta: __nuxt_page_meta || {},
    component: () => import('./index-DQ4Z5h1a.mjs')
  }
];
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = route?.meta.key ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => comp.components && comp.components.default === from.matched[index]?.components?.default
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    const hashScrollBehaviour = useRouter().options?.scrollBehaviorType ?? "auto";
    if (to.path.replace(/\/$/, "") === from.path.replace(/\/$/, "")) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior: hashScrollBehaviour };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    if (from === START_LOCATION) {
      return _calculatePosition(to, from, savedPosition, hashScrollBehaviour);
    }
    return new Promise((resolve) => {
      const doScroll = () => {
        requestAnimationFrame(() => resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour)));
      };
      nuxtApp.hooks.hookOnce("page:loading:end", () => {
        const transitionPromise = nuxtApp["~transitionPromise"];
        if (transitionPromise) {
          transitionPromise.then(doScroll);
        } else {
          doScroll();
        }
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
  if (savedPosition) {
    return savedPosition;
  }
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: isChangingPage(to, from) ? defaultHashScrollBehaviour : "instant"
    };
  }
  return {
    left: 0,
    top: 0
  };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    status: result && (result.status || result.statusCode) || 404,
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    statusText: result && (result.statusText || result.statusMessage) || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
const route_45aliases_45global = /* @__PURE__ */ defineNuxtRouteMiddleware((to) => {
  const path = to.path;
  if (path.startsWith("/mag/") || path === "/mag") {
    const newPath = path.replace("/mag", "/magazine");
    return navigateTo(newPath, { redirectCode: 301 });
  }
  if (path.startsWith("/ld/") || path === "/ld") {
    const newPath = path.replace("/ld", "/linked-data");
    return navigateTo(newPath, { redirectCode: 301 });
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware((to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  route_45aliases_45global,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = routerOptions.history?.(routerBase) ?? createMemoryHistory(routerBase);
    const routes2 = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes: routes2
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    router.afterEach((to, from) => {
      const lastTo = to.matched.at(-1)?.components?.default;
      const lastFrom = from.matched.at(-1)?.components?.default;
      if (lastTo === lastFrom) {
        syncCurrentRoute();
        return;
      }
      if (to.matched.length < from.matched.length && to.matched.every((m, i) => m.components?.default === from.matched[i]?.components?.default)) {
        syncCurrentRoute();
      }
    });
    const route = { sync: syncCurrentRoute };
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware ||= {
      global: [],
      named: {}
    };
    const error = /* @__PURE__ */ useError();
    if (!nuxtApp.ssrContext?.islandContext) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if (failure?.type === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    const hasDeferredRoute = false;
    syncCurrentRoute();
    if (nuxtApp.ssrContext?.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!nuxtApp.ssrContext?.islandContext) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        const routeRules = getRouteRules({ path: to.path });
        if (routeRules.appMiddleware) {
          for (const key in routeRules.appMiddleware) {
            if (routeRules.appMiddleware[key]) {
              middlewareEntries.add(key);
            } else {
              middlewareEntries.delete(key);
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await namedMiddleware[entry2]?.().then((r) => r.default || r) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            if (false) ;
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  status: 404,
                  statusText: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach((to) => {
      if (to.matched.length === 0 && !error.value) {
        return nuxtApp.runWithContext(() => showError(createError({
          status: 404,
          fatal: false,
          statusText: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        if (hasDeferredRoute) ;
        else {
          await router.replace({
            ...resolvedInitialRoute,
            force: true
          });
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function injectHead(nuxtApp) {
  const nuxt = nuxtApp || tryUseNuxtApp();
  return nuxt?.ssrContext?.head || nuxt?.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  });
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input, { head, ...options });
  }
}
function useSeoMeta(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useSeoMeta$1(input, { head, ...options });
  }
}
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
function useRequestFetch() {
  return useRequestEvent()?.$fetch || globalThis.$fetch;
}
function prerenderRoutes(path) {
  const paths = toArray$1(path);
  appendHeader(useRequestEvent(), "x-nitro-prerender", paths.map((p) => encodeURIComponent(p)).join(", "));
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext["~payloadReducers"][name] = reduce;
  }
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
    const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
    if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!unref(props.target) && unref(props.target) !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = unref(props.to) || unref(props.href) || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (unref(props.external)) {
        return true;
      }
      const path = unref(props.to) || unref(props.href) || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = unref(props.to) || unref(props.href) || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve, unref(props.trailingSlash));
    });
    const link = isExternal.value ? void 0 : useBuiltinLink?.({ ...props, to, viewTransition: unref(props.viewTransition) });
    const href = computed(() => {
      const effectiveTrailingSlash = unref(props.trailingSlash) ?? options.trailingSlash;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return applyTrailingSlashBehavior(href2, effectiveTrailingSlash);
      }
      if (typeof to.value === "object") {
        return router.resolve(to.value)?.href ?? null;
      }
      return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: link?.isActive ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: link?.isExactActive ?? computed(() => to.value === router.currentRoute.value.path),
      route: link?.route ?? computed(() => router.resolve(to.value)),
      async navigate(_e) {
        await navigateTo(href.value, { replace: unref(props.replace), external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Behavior
      trailingSlash: {
        type: String,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      const router = useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      shallowRef(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", {
          ref: el,
          href: href.value || null,
          // converts `""` to `null` to prevent the attribute from being added as empty (`href=""`)
          rel,
          target,
          onClick: async (event) => {
            if (isExternal.value || hasTarget.value) {
              return;
            }
            event.preventDefault();
            try {
              const encodedHref = encodeRoutePath(href.value);
              return await (props.replace ? router.replace(encodedHref) : router.push(encodedHref));
            } finally {
            }
          }
        }, slots.default?.());
      };
    }
  });
}
const __nuxt_component_0$1 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const _0_siteConfig_tU0SxKrPeVRXWcGu2sOnIfhNDbYiKNfDCvYZhRueG0Q = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-site-config:init",
  enforce: "pre",
  async setup(nuxtApp) {
    const stack = useRequestEvent()?.context?.siteConfig;
    const state = useState("site-config");
    {
      nuxtApp.hooks.hook("app:rendered", () => {
        state.value = stack?.get({
          debug: (/* @__PURE__ */ useRuntimeConfig())["nuxt-site-config"].debug,
          resolveRefs: true
        });
      });
    }
    return {
      provide: {
        nuxtSiteConfig: stack
      }
    };
  }
});
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
function useSiteConfig(options) {
  const stack = useRequestEvent()?.context.siteConfig.get(defu({ resolveRefs: true }, options));
  delete stack._priority;
  return stack;
}
const siteConfig_vuqmRkLAUZxQvb5pvUwT3uUdVggfjhj1m5v7Pb6IE0w = /* @__PURE__ */ defineNuxtPlugin(() => {
  const head = injectHead();
  if (!head)
    return;
  const { tagPriority, separator, titleSeparator } = (/* @__PURE__ */ useRuntimeConfig()).public["seo-utils"];
  const siteConfig = useSiteConfig();
  const resolvedSeparator = siteConfig.separator || separator || siteConfig.titleSeparator || titleSeparator;
  const resolvedTitleSeparator = siteConfig.titleSeparator || titleSeparator || siteConfig.separator || separator;
  const input = {
    meta: [],
    templateParams: {
      site: siteConfig,
      // support legacy
      siteUrl: siteConfig.url,
      siteName: siteConfig.name
    }
  };
  if (resolvedSeparator)
    input.templateParams.separator = resolvedSeparator;
  if (resolvedTitleSeparator)
    input.templateParams.titleSeparator = resolvedTitleSeparator;
  if (siteConfig.description) {
    input.templateParams.siteDescription = siteConfig.description;
    input.meta.push(
      {
        name: "description",
        content: "%site.description",
        tagPriority
      }
    );
  }
  head.push(input);
});
const inferSeoMetaPlugin_KsEotgC9NJyW_guR_3z04hFN8TI2h5dgP8bzHmpMm5o = /* @__PURE__ */ defineNuxtPlugin(() => {
  const head = injectHead();
  if (!head)
    return;
  head.use(TemplateParamsPlugin);
  head.use(InferSeoMetaPlugin());
});
function useI18n() {
  const siteConfig = useSiteConfig({
    resolveRefs: false
  });
  return {
    t: (_, fallback, _options) => fallback,
    te: (_) => false,
    strategy: "no_prefix",
    defaultLocale: computed(() => {
      return toValue(siteConfig.defaultLocale) || "en";
    }),
    locale: computed(() => {
      return toValue(siteConfig.currentLocale) || toValue(siteConfig.defaultLocale) || "en";
    })
  };
}
function useFallbackTitle() {
  const route = useRoute();
  const err = /* @__PURE__ */ useError();
  let i18n;
  try {
    i18n = useI18n();
  } catch {
  }
  return computed(() => {
    if (err.value?.statusCode && [404, 500].includes(err.value.statusCode)) {
      return `${err.value.statusCode} - ${err.value.message}`;
    }
    if (typeof route.meta?.title === "string")
      return route.meta?.title;
    const path = withoutTrailingSlash(route.path || "/");
    const lastSegment = path.split("/").pop();
    let fallback = lastSegment ? titleCase(lastSegment) : null;
    const matched = route.matched?.at(-1);
    if (matched) {
      const routeName = String(matched.name).split("___")?.[0];
      if (routeName && i18n)
        fallback = i18n.t(`pages.${routeName}.title`, fallback || "", { missingWarn: false }) || fallback;
    }
    return fallback;
  });
}
const titles_Fth_MAhm7dgpxeTaMXibYXbcCjegjWK3QH9gKvbTRVg = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-seo:fallback-titles",
  env: {
    islands: false
  },
  setup() {
    const title = useFallbackTitle();
    const minimalPriority = {
      // give nuxt.config values higher priority
      tagPriority: 101
    };
    useHead({ title: () => title.value }, minimalPriority);
  }
});
function useSchemaOrgConfig() {
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  return defu(runtimeConfig["nuxt-schema-org"], {
    scriptAttributes: {}
  });
}
function useSchemaOrg(input) {
  const config = useSchemaOrgConfig();
  const nuxtApp = useNuxtApp();
  const nodes = isRef(input) ? computed(() => nuxtApp.runWithContext(() => input.value)) : input;
  const script = {
    type: "application/ld+json",
    key: "schema-org-graph",
    // @ts-expect-error untyped
    nodes,
    tagPriority: "high",
    ...config.scriptAttributes
  };
  {
    return useHead({
      script: [script]
    });
  }
}
const FILE_EXT_RE = /\.[0-9a-z]+$/i;
function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  let origin = withoutTrailingSlash(options.absolute ? options.siteUrl : "");
  if (base !== "/" && origin.endsWith(base)) {
    origin = origin.slice(0, origin.indexOf(base));
  }
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
const fileExtensions = [
  // Images
  "jpg",
  "jpeg",
  "png",
  "gif",
  "bmp",
  "webp",
  "svg",
  "ico",
  // Documents
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx",
  "txt",
  "md",
  "markdown",
  // Archives
  "zip",
  "rar",
  "7z",
  "tar",
  "gz",
  // Audio
  "mp3",
  "wav",
  "flac",
  "ogg",
  "opus",
  "m4a",
  "aac",
  "midi",
  "mid",
  // Video
  "mp4",
  "avi",
  "mkv",
  "mov",
  "wmv",
  "flv",
  "webm",
  // Web
  "html",
  "css",
  "js",
  "json",
  "xml",
  "tsx",
  "jsx",
  "ts",
  "vue",
  "svelte",
  "xsl",
  "rss",
  "atom",
  // Programming
  "php",
  "py",
  "rb",
  "java",
  "c",
  "cpp",
  "h",
  "go",
  // Data formats
  "csv",
  "tsv",
  "sql",
  "yaml",
  "yml",
  // Fonts
  "woff",
  "woff2",
  "ttf",
  "otf",
  "eot",
  // Executables/Binaries
  "exe",
  "msi",
  "apk",
  "ipa",
  "dmg",
  "iso",
  "bin",
  // Scripts/Config
  "bat",
  "cmd",
  "sh",
  "env",
  "htaccess",
  "conf",
  "toml",
  "ini",
  // Package formats
  "deb",
  "rpm",
  "jar",
  "war",
  // E-books
  "epub",
  "mobi",
  // Common temporary/backup files
  "log",
  "tmp",
  "bak",
  "old",
  "sav"
];
function isPathFile(path) {
  const lastSegment = path.split("/").pop();
  const ext = (lastSegment || path).match(FILE_EXT_RE)?.[0];
  return !!(ext && fileExtensions.includes(ext.replace(".", "")));
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}
function getNitroOrigin(e) {
  {
    e = e || useRequestEvent();
    return e?.context?.siteConfigNitroOrigin || "";
  }
}
function useNitroOrigin(e) {
  return getNitroOrigin(e);
}
function createSitePathResolver(options = {}) {
  const siteConfig = useSiteConfig();
  const nitroOrigin = useNitroOrigin();
  const nuxtBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL || "/";
  return (path) => {
    return computed(() => resolveSitePath(unref(path), {
      absolute: unref(options.absolute),
      withBase: unref(options.withBase),
      siteUrl: unref(options.canonical) !== false || true ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    }));
  };
}
function withSiteUrl(path, options = {}) {
  const siteConfig = useSiteConfig();
  const nitroOrigin = useNitroOrigin();
  const base = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL || "/";
  return computed(() => {
    return resolveSitePath(unref(path), {
      absolute: true,
      siteUrl: unref(options.canonical) !== false || true ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base,
      withBase: unref(options.withBase)
    });
  });
}
function resolvePathDirect(siteConfig, path, options) {
  const nuxtBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL || "/";
  return resolveSitePath(path, {
    absolute: options.absolute,
    withBase: options.withBase,
    siteUrl: toValue(siteConfig.url),
    trailingSlash: toValue(siteConfig.trailingSlash),
    base: nuxtBase
  });
}
function initPlugin(nuxtApp) {
  const head = injectHead();
  const config = useSchemaOrgConfig();
  const route = useRoute();
  const siteConfig = useSiteConfig();
  const resolveUrl = (path) => resolvePathDirect(siteConfig, path, { absolute: true, withBase: true });
  function resolveSchemaOrg() {
    const siteConfigResolved = {};
    for (const key in siteConfig) {
      if (key.startsWith("_")) {
        continue;
      }
      siteConfigResolved[key] = toValue(siteConfig[key]);
      if (typeof siteConfigResolved[key] === "object") {
        for (const k in siteConfigResolved[key]) {
          siteConfigResolved[key][k] = toValue(siteConfigResolved[key][k]);
        }
      }
    }
    return {
      ...route.meta?.schemaOrg || {},
      ...siteConfigResolved,
      url: toValue(resolveUrl(route.path)),
      host: withTrailingSlash(toValue(resolveUrl("/"))),
      inLanguage: toValue(siteConfigResolved.currentLocale) || toValue(siteConfigResolved.defaultLocale),
      path: route.path
    };
  }
  useHead({
    templateParams: { schemaOrg: resolveSchemaOrg() }
  });
  head.use(
    SchemaOrgUnheadPlugin({}, async () => {
      const meta = {};
      await nuxtApp.hooks.callHook("schema-org:meta", meta);
      return meta;
    }, {
      minify: config.minify,
      trailingSlash: siteConfig.trailingSlash
    })
  );
}
function maybeAddIdentitySchemaOrg() {
  const config = useSchemaOrgConfig();
  const siteConfig = useSiteConfig({
    resolveRefs: true
  });
  if (config.identity || siteConfig.identity) {
    const identity = config.identity || siteConfig.identity;
    let identityPayload = {
      name: () => toValue(siteConfig.name),
      url: () => toValue(siteConfig.url)
    };
    let identityType;
    if (typeof identity !== "string") {
      identityPayload = {
        ...identityPayload,
        ...identity
      };
      identityType = identity.type;
      delete identityPayload.type;
    } else {
      identityType = identity;
    }
    if (siteConfig.twitter) {
      const id = siteConfig.twitter.startsWith("@") ? siteConfig.twitter.slice(1) : siteConfig.twitter;
      identityPayload.sameAs = [
        `https://twitter.com/${id}`
      ];
    }
    identityPayload._resolver = identityPayload._resolver || camelCase(identityType);
    useSchemaOrg([identityPayload]);
  }
}
const defaults_ZjgoYqsIrjWNaJMfDhci2B0eoNnvY4CDsoscm0L1fE0 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-schema-org:defaults",
  dependsOn: [
    "nuxt-schema-org:init"
  ],
  setup() {
    const error = /* @__PURE__ */ useError();
    if (error.value?.error) {
      return;
    }
    const siteConfig = useSiteConfig();
    useSchemaOrg([
      defineWebSite({
        name: () => toValue(siteConfig.name) || "",
        inLanguage: () => toValue(siteConfig.currentLocale) || "",
        description: () => toValue(siteConfig.description) || ""
      }),
      defineWebPage()
    ]);
    maybeAddIdentitySchemaOrg();
  }
});
const init_Ks1wcI1vuv3K3FXG7iAYRqIWlPli19G_eByed0tsXe0 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-schema-org:init",
  setup(nuxtApp) {
    initPlugin(nuxtApp);
  }
});
const componentNames = [{ "hash": "", "pascalName": "BlogPostTakumi", "kebabName": "blog-post-takumi", "path": "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community", "category": "community", "renderer": "takumi", "propNames": [] }, { "hash": "", "pascalName": "BrutalistSatori", "kebabName": "brutalist-satori", "path": "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community", "category": "community", "renderer": "satori", "propNames": [] }, { "hash": "", "pascalName": "DocsTakumi", "kebabName": "docs-takumi", "path": "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community", "category": "community", "renderer": "takumi", "propNames": [] }, { "hash": "", "pascalName": "FrameSatori", "kebabName": "frame-satori", "path": "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community", "category": "community", "renderer": "satori", "propNames": [] }, { "hash": "", "pascalName": "NuxtSatori", "kebabName": "nuxt-satori", "path": "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community", "category": "community", "renderer": "satori", "propNames": [] }, { "hash": "", "pascalName": "NuxtSeoSatori", "kebabName": "nuxt-seo-satori", "path": "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community", "category": "community", "renderer": "satori", "propNames": [] }, { "hash": "", "pascalName": "NuxtSeoTakumi", "kebabName": "nuxt-seo-takumi", "path": "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community", "category": "community", "renderer": "takumi", "propNames": [] }, { "hash": "", "pascalName": "PergelSatori", "kebabName": "pergel-satori", "path": "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community", "category": "community", "renderer": "satori", "propNames": [] }, { "hash": "", "pascalName": "ProductCardTakumi", "kebabName": "product-card-takumi", "path": "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community", "category": "community", "renderer": "takumi", "propNames": [] }, { "hash": "", "pascalName": "SaaSSatori", "kebabName": "saa-ssatori", "path": "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community", "category": "community", "renderer": "satori", "propNames": [] }, { "hash": "", "pascalName": "SimpleBlogSatori", "kebabName": "simple-blog-satori", "path": "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community", "category": "community", "renderer": "satori", "propNames": [] }, { "hash": "", "pascalName": "UnJsSatori", "kebabName": "un-js-satori", "path": "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community", "category": "community", "renderer": "satori", "propNames": [] }, { "hash": "", "pascalName": "WithEmojiSatori", "kebabName": "with-emoji-satori", "path": "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community", "category": "community", "renderer": "satori", "propNames": [] }];
const MAX_PATH_LENGTH = 200;
const RE_BASE64_PADDING = /=/g;
const RE_BASE64_PLUS = /\+/g;
const RE_BASE64_SLASH = /\//g;
const RE_UNDERSCORE = /_/g;
const RE_PERCENT20 = /%20/g;
const RE_NON_ASCII = /[^\u0000-\u007F]/;
const PARAM_ALIASES = {
  w: "width",
  h: "height",
  c: "component",
  em: "emojis",
  k: "key",
  a: "alt",
  u: "url",
  cache: "cacheMaxAgeSeconds",
  p: "_path",
  // page path - needs alias since _path starts with underscore
  q: "_query",
  // query params - needs alias since _query starts with underscore
  ch: "_componentHash"
  // component template hash for cache busting prerendered URLs
};
const PARAM_TO_ALIAS = Object.fromEntries(
  Object.entries(PARAM_ALIASES).map(([alias, param]) => [param, alias])
);
const COMPLEX_PARAMS = /* @__PURE__ */ new Set(["satori", "resvg", "sharp", "screenshot", "takumi", "fonts", "_query", "_path"]);
function b64Encode(str) {
  let encoded;
  if (typeof btoa === "function") {
    const utf8 = new TextEncoder().encode(str);
    const binary = String.fromCharCode(...utf8);
    encoded = btoa(binary);
  } else {
    encoded = Buffer.from(str, "utf8").toString("base64");
  }
  return encoded.replace(RE_BASE64_PADDING, "").replace(RE_BASE64_PLUS, "-").replace(RE_BASE64_SLASH, "~");
}
function simpleHash(str) {
  let hash2 = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash2 = (hash2 << 5) - hash2 + char;
    hash2 = hash2 & hash2;
  }
  return Math.abs(hash2).toString(36);
}
function hashOgImageOptions(options, componentHash, version) {
  const { _path, _hash, ...hashableOptions } = options;
  const hashInput = hashableOptions;
  return simpleHash(JSON.stringify(hashInput));
}
function encodeOgImageParams(options, defaults) {
  const parts = [];
  const flattened = {};
  for (const [key, value] of Object.entries(options)) {
    if (key === "props" && typeof value === "object") {
      for (const [propKey, propValue] of Object.entries(value)) {
        if (propValue === void 0 || propValue === null)
          continue;
        if (typeof propValue === "string" || typeof propValue === "number" || typeof propValue === "boolean") {
          flattened[propKey] = propValue;
        } else {
          flattened.props = flattened.props || {};
          flattened.props[propKey] = propValue;
        }
      }
    } else {
      flattened[key] = value;
    }
  }
  for (const [key, value] of Object.entries(flattened)) {
    if (value === void 0 || value === null || value === "") {
      continue;
    }
    if (key === "extension" || key === "socialPreview")
      continue;
    if (key === "_path" && value === "/")
      continue;
    if (key === "_query" && typeof value === "object" && Object.keys(value).length === 0)
      continue;
    if (defaults && key in defaults && defaults[key] === value && key !== "component")
      continue;
    const alias = PARAM_TO_ALIAS[key] || key;
    if (COMPLEX_PARAMS.has(key)) {
      const json = JSON.stringify(value);
      if (json === "{}")
        continue;
      const b64 = b64Encode(json);
      parts.push(`${alias}_${b64}`);
    } else if (typeof value === "object") {
      const json = JSON.stringify(value);
      if (json === "{}")
        continue;
      const b64 = b64Encode(json);
      parts.push(`${alias}_${b64}`);
    } else {
      const str = String(value);
      if (RE_NON_ASCII.test(str)) {
        parts.push(`${alias}_~${b64Encode(str)}`);
      } else {
        const escaped = str.startsWith("~") ? `~${str}` : str;
        const encoded = encodeURIComponent(escaped.replace(RE_UNDERSCORE, "__")).replace(RE_PERCENT20, "+");
        if (encoded.includes("%")) {
          parts.push(`${alias}_~${b64Encode(str)}`);
        } else {
          parts.push(`${alias}_${encoded}`);
        }
      }
    }
  }
  return parts.join(",");
}
function buildOgImageUrl(options, extension = "png", isStatic = false, defaults, secret) {
  const encoded = encodeOgImageParams(options, defaults);
  const prefix = isStatic ? "/_og/s" : "/_og/d";
  if (isStatic && (encoded.length > MAX_PATH_LENGTH || encoded.includes("%"))) {
    const hash2 = hashOgImageOptions(options);
    return {
      url: `${prefix}/o_${hash2}.${extension}`,
      hash: hash2
    };
  }
  const segment = encoded || "default";
  const signed = secret && !isStatic ? `${segment},s_${signEncodedParams(segment, secret)}` : segment;
  return {
    url: `${prefix}/${signed}.${extension}`
  };
}
function signEncodedParams(encoded, secret) {
  return hash(`${secret}:${encoded}`).slice(0, 16);
}
const RE_KEBAB_CASE = /-([a-z])/g;
function generateMeta(url, resolvedOptions) {
  const key = resolvedOptions.key || "og";
  const isTwitterOnly = key === "twitter";
  const includeTwitter = key === "og" || key === "twitter";
  const meta = [];
  if (includeTwitter) {
    meta.push({ name: "twitter:card", content: "summary_large_image" });
    meta.push({ name: "twitter:image", content: url });
    meta.push({ name: "twitter:image:src", content: url });
  }
  if (!isTwitterOnly) {
    meta.push({ property: "og:image", content: url });
    meta.push({ property: "og:image:type", content: () => `image/${getExtension(toValue(url)) || resolvedOptions.extension}` });
  }
  if (resolvedOptions.width) {
    if (!isTwitterOnly)
      meta.push({ property: "og:image:width", content: resolvedOptions.width });
    if (includeTwitter)
      meta.push({ name: "twitter:image:width", content: resolvedOptions.width });
  }
  if (resolvedOptions.height) {
    if (!isTwitterOnly)
      meta.push({ property: "og:image:height", content: resolvedOptions.height });
    if (includeTwitter)
      meta.push({ name: "twitter:image:height", content: resolvedOptions.height });
  }
  if (resolvedOptions.alt) {
    if (!isTwitterOnly)
      meta.push({ property: "og:image:alt", content: resolvedOptions.alt });
    if (includeTwitter)
      meta.push({ name: "twitter:image:alt", content: resolvedOptions.alt });
  }
  return meta;
}
function isInternalRoute(path) {
  return path.startsWith("/_") || path.startsWith("@");
}
function filterIsOgImageOption(key) {
  const keys = [
    "url",
    "extension",
    "width",
    "height",
    "alt",
    "props",
    "renderer",
    "component",
    "emojis",
    "_query",
    "_hash",
    "fonts",
    "satori",
    "resvg",
    "sharp",
    "screenshot",
    "takumi",
    "cacheMaxAgeSeconds",
    "cacheKey",
    "key"
  ];
  return keys.includes(key);
}
function separateProps(options, ignoreKeys = []) {
  options = options || {};
  const _props = defu(options.props, Object.fromEntries(
    Object.entries({ ...options }).filter(([k]) => !filterIsOgImageOption(k) && !ignoreKeys.includes(k))
  ));
  const props = {};
  Object.entries(_props).forEach(([key, val]) => {
    props[key.replace(RE_KEBAB_CASE, (g) => String(g[1]).toUpperCase())] = val;
  });
  const result = Object.fromEntries(
    Object.entries({ ...options }).filter(([k]) => filterIsOgImageOption(k) || ignoreKeys.includes(k))
  );
  if (Object.keys(props).length > 0)
    result.props = props;
  return result;
}
function withoutQuery(path) {
  return path.split("?")[0];
}
function getExtension(path) {
  path = withoutQuery(path);
  const lastSegment = path.split("/").pop() || path;
  const extension = lastSegment.split(".").pop() || lastSegment;
  if (extension === "jpg")
    return "jpeg";
  return extension;
}
function resolveUnrefHeadInput(input) {
  if (input == null)
    return input;
  if (isRef(input) || typeof input === "function")
    return resolveUnrefHeadInput(toValue(input));
  if (Array.isArray(input))
    return input.map(resolveUnrefHeadInput);
  if (typeof input === "object") {
    const result = {};
    for (const k in input)
      result[k] = resolveUnrefHeadInput(input[k]);
    return result;
  }
  return input;
}
const RE_RENDERER_SUFFIX = /(Satori|Browser|Takumi)$/;
function createOgImageMeta(src, input, ssrContext, pagePath, head) {
  const ogImageConfig = useOgImageRuntimeConfig();
  const { defaults } = ogImageConfig;
  const resolvedOptions = separateProps(defu(input, defaults));
  resolvedOptions.key = resolvedOptions.key || "og";
  const payloads = ssrContext._ogImagePayloads || [];
  const currentPayloadIdx = payloads.findIndex(([k]) => k === resolvedOptions.key);
  const _input = separateProps(defu(input, currentPayloadIdx >= 0 ? payloads[currentPayloadIdx][1] : {}));
  if (!src && !input.url && !resolvedOptions.url)
    return;
  const basePath = "/";
  if (currentPayloadIdx === -1) {
    payloads.push([resolvedOptions.key, _input, basePath]);
  } else {
    payloads[currentPayloadIdx] = [resolvedOptions.key, _input, basePath];
  }
  const baseURL2 = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
  ssrContext._ogImageInstance?.dispose();
  ssrContext._ogImageInstance = useHead({
    // Meta is generated lazily so that title/description from useSeoMeta / useHead
    // are available regardless of call ordering (all component setups have completed
    // by the time Unhead resolves tags).
    meta() {
      const finalPayload = ssrContext._ogImagePayloads || [];
      return finalPayload.flatMap(([_, options, payloadBasePath]) => {
        const opts = { ...options, props: { ...options.props } };
        const rawComponentName = opts.component || componentNames?.[0]?.pascalName;
        const resolvedComponentName = rawComponentName ? resolveComponentName(rawComponentName) : void 0;
        const resolvedComponent = resolvedComponentName ? componentNames?.find((c) => c.pascalName === resolvedComponentName || c.kebabName === resolvedComponentName) : void 0;
        resolvedComponent?.propNames;
        const extension = opts.extension || defaults?.extension || "png";
        const isStatic = !(ogImageConfig.security?.secret && ogImageConfig.security?.strict);
        const urlOpts = { ...opts, _path: payloadBasePath };
        const componentName = opts.component || componentNames?.[0]?.pascalName;
        const component = componentNames?.find((c) => c.pascalName === componentName || c.kebabName === componentName);
        if (component?.hash)
          urlOpts._componentHash = component.hash;
        const result = buildOgImageUrl(urlOpts, extension, isStatic, defaults, ogImageConfig.security?.secret || void 0);
        if (result.hash) {
          opts._hash = result.hash;
          options._hash = result.hash;
        }
        const resolvedUrl = joinURL("/", baseURL2, result.url);
        const finalUrl = opts._query && Object.keys(opts._query).length ? withQuery(resolvedUrl, { _query: opts._query }) : resolvedUrl;
        if (isStatic && true && ssrContext.event) {
          const prerenderPaths = ssrContext.event.context._ogImagePrerenderPaths;
          if (prerenderPaths) {
            const ogKey = opts.key || "og";
            prerenderPaths.set(ogKey, (finalUrl.split("?")[0] || finalUrl).replace(/,/g, "%2C"));
          }
        }
        return generateMeta(finalUrl, opts);
      });
    }
  }, {
    processTemplateParams: true,
    tagPriority: 35
  });
  {
    ssrContext._ogImageDevtoolsInstance?.dispose();
    ssrContext._ogImageDevtoolsInstance = useHead({
      script: [{
        id: "nuxt-og-image-options",
        type: "application/json",
        processTemplateParams: true,
        innerHTML: () => {
          const devtoolsPayload = (ssrContext._ogImagePayloads || []).map(([key, options]) => {
            const payload = resolveUnrefHeadInput(options);
            const rawComponentName = payload.component || componentNames?.[0]?.pascalName;
            const resolvedComponentName = rawComponentName ? resolveComponentName(rawComponentName) : void 0;
            const component = resolvedComponentName ? componentNames?.find((c) => c.pascalName === resolvedComponentName || c.kebabName === resolvedComponentName) : void 0;
            const declaredProps = component?.propNames;
            if (payload.props && typeof payload.props.title === "undefined" && (!declaredProps || declaredProps.includes("title")))
              payload.props.title = "%s";
            if (typeof payload.component === "string") {
              payload.component = resolveComponentName(payload.component);
            } else if (payload.component) {
              delete payload.component;
            }
            payload.key = key;
            delete payload.url;
            if (payload._query && Object.keys(payload._query).length === 0) {
              delete payload._query;
            }
            if (payload.props && typeof payload.props === "object" && Object.keys(payload.props).length === 0) {
              delete payload.props;
            }
            const ALWAYS_INCLUDE = /* @__PURE__ */ new Set(["component", "_hash", "key", "fonts"]);
            const final = {};
            for (const k in payload) {
              if (payload[k] === "")
                continue;
              if (ALWAYS_INCLUDE.has(k) || payload[k] !== defaults[k]) {
                final[k] = payload[k];
              }
            }
            return final;
          });
          return stringify(devtoolsPayload);
        },
        tagPosition: "bodyClose"
      }]
    });
  }
  ssrContext._ogImagePayloads = payloads;
}
function resolveComponentName(component) {
  component = component || componentNames?.[0]?.pascalName;
  if (component && componentNames) {
    const originalName = component;
    const normalizedName = originalName.split(".").map((s, i) => i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
    const inputBase = normalizedName.replace(RE_RENDERER_SUFFIX, "");
    for (const component2 of componentNames) {
      if (component2.pascalName === normalizedName)
        return component2.pascalName;
      const basePascalName = component2.pascalName.replace(RE_RENDERER_SUFFIX, "");
      if (basePascalName === originalName || basePascalName === inputBase)
        return component2.pascalName;
      const prefixes = [
        { prefix: "OgImageCommunity", overlapWord: "Community" },
        { prefix: "OgImageTemplate", overlapWord: "Template" },
        { prefix: "OgImage", overlapWord: "Image" }
      ];
      for (const { prefix, overlapWord } of prefixes) {
        if (!basePascalName.startsWith(prefix))
          continue;
        const withoutPrefix = basePascalName.slice(prefix.length);
        if (withoutPrefix === originalName || withoutPrefix === inputBase)
          return component2.pascalName;
        if (withoutPrefix && withoutPrefix !== overlapWord) {
          const withOverlap = overlapWord + withoutPrefix;
          if (withOverlap === originalName || withOverlap === inputBase)
            return component2.pascalName;
        }
        break;
      }
    }
  }
  return component;
}
function getOgImagePath(_pagePath, _options) {
  const { app, defaults, security } = useOgImageRuntimeConfig();
  const baseURL2 = app.baseURL;
  const extension = _options?.extension || defaults?.extension || "png";
  const isStatic = !(security?.secret && security?.strict);
  const options = { ..._options, _path: _pagePath };
  const componentName = _options?.component || componentNames?.[0]?.pascalName;
  const component = componentNames?.find((c) => c.pascalName === componentName || c.kebabName === componentName);
  if (component?.hash)
    options._componentHash = component.hash;
  const result = buildOgImageUrl(options, extension, isStatic, defaults, security?.secret || void 0);
  const path = joinURL("/", baseURL2, result.url);
  return {
    path,
    hash: result.hash
  };
}
function useOgImageRuntimeConfig() {
  const event = useRequestEvent();
  const c = event ? /* @__PURE__ */ useRuntimeConfig() : /* @__PURE__ */ useRuntimeConfig();
  const serverCfg = c["nuxt-og-image"] || {};
  const publicCfg = c.public?.["nuxt-og-image"] || {};
  const merged = { defaults: {}, ...publicCfg, ...serverCfg };
  const overrideSecret = c.ogImage?.secret;
  if (overrideSecret)
    merged.security = { ...merged.security || {}, secret: overrideSecret };
  merged.app = { baseURL: c.app.baseURL };
  return merged;
}
const RE_COMMA = /,/g;
function ogImageCanonicalUrls(nuxtApp) {
  nuxtApp.hooks.hook("app:rendered", async (ctx) => {
    const { ssrContext } = ctx;
    const e = useRequestEvent();
    const path = parseURL(e?.path || "").pathname;
    if (isInternalRoute(path))
      return;
    ssrContext?.head.use(TemplateParamsPlugin);
    ssrContext?.head.use({
      key: "nuxt-og-image:overrides-and-canonical-urls",
      hooks: {
        "tags:afterResolve": (ctx2) => {
          let title = "";
          let description = "";
          for (const tag of ctx2.tags) {
            if (tag.tag === "title" && tag.textContent) {
              title = tag.textContent;
            } else if (tag.tag === "meta" && tag.props.name === "description") {
              description = tag.props.content || "";
            }
            if (title && description)
              break;
          }
          for (const tag of ctx2.tags) {
            if (tag.tag === "meta" && (tag.props.property === "og:image" || ["twitter:image:src", "twitter:image"].includes(tag.props.name || ""))) {
              if (!tag.props.content) {
                tag.props = {};
                continue;
              }
              tag.props.content = tag.props.content.replaceAll("%title", title).replaceAll("%description", description).replaceAll(" ", "+");
              if (!tag.props.content?.startsWith("https")) {
                nuxtApp.runWithContext(() => {
                  tag.props.content = toValue(withSiteUrl(tag.props.content || "", {
                    withBase: true,
                    canonical: true
                  }));
                });
              }
            }
          }
        }
      }
    });
  });
}
function routeRuleOgImage(nuxtApp) {
  nuxtApp.hooks.hook("app:rendered", async (ctx) => {
    const { ssrContext } = ctx;
    const e = useRequestEvent();
    const path = parseURL(e?.path || "").pathname;
    if (isInternalRoute(path))
      return;
    const _routeRulesMatcher2 = toRouteMatcher(
      createRouter$1({ routes: ssrContext?.runtimeConfig?.nitro?.routeRules })
    );
    const matchedRules = _routeRulesMatcher2.matchAll(
      withoutBase(path.split("?")?.[0] || "", ssrContext?.runtimeConfig?.app.baseURL || "")
    ).reverse();
    const combinedRules = defu({}, ...matchedRules);
    let routeRules = combinedRules?.ogImage;
    if (typeof routeRules === "undefined")
      return;
    if (routeRules === false) {
      nuxtApp.ssrContext._ogImageInstance?.dispose();
      nuxtApp.ssrContext._ogImageDevtoolsInstance?.dispose();
      nuxtApp.ssrContext._ogImageInstance = void 0;
      nuxtApp.ssrContext._ogImagePayloads = [];
      e?.context._ogImagePrerenderPaths?.clear();
      return;
    }
    routeRules = defu(nuxtApp.ssrContext?.event?.context._nitro?.routeRules?.ogImage, routeRules);
    const { path: src, hash: hash2 } = getOgImagePath(ssrContext.url, routeRules);
    if (hash2) {
      routeRules._hash = hash2;
    }
    createOgImageMeta(src, routeRules, nuxtApp.ssrContext);
    if (e) {
      const ogKey = routeRules.key || "og";
      const prerenderPath = (src.split("?")[0] || src).replace(RE_COMMA, "%2C");
      const prerenderPaths = e.context._ogImagePrerenderPaths || (e.context._ogImagePrerenderPaths = /* @__PURE__ */ new Map());
      prerenderPaths.set(ogKey, prerenderPath);
    }
  });
}
const og_image_canonical_urls_server_2uCBKzWxjEK91fSFBdBNPEWilWXRzR66cHJvjIi4FGA = /* @__PURE__ */ defineNuxtPlugin({
  setup(nuxtApp) {
    ogImageCanonicalUrls(nuxtApp);
  }
});
const route_rule_og_image_server_yrHfzNQxtCKZyHaGhWqsbaa4V0Y5WoBOo3_wqkmh41k = /* @__PURE__ */ defineNuxtPlugin({
  setup(nuxtApp) {
    routeRuleOgImage(nuxtApp);
  }
});
const robot_meta_server_bRHpso_4KN_Ec3RJzqCvbuvfZsNOeE_4TgpL8dCNuwk = /* @__PURE__ */ defineNuxtPlugin({
  setup() {
    const event = useRequestEvent();
    const ctx = event?.context?.robots;
    event?.context?.robotsProduction;
    if (!ctx)
      return;
    useHead({
      meta: [
        {
          "name": "robots",
          "content": () => ctx.rule || "",
          "data-hint": () => void 0,
          "data-production-content": () => void 0
        }
      ]
    });
  }
});
const LazyProseA = defineAsyncComponent(() => import('./ProseA-DkGO5b59.mjs').then((r) => r["default"] || r.default || r));
const LazyProseBlockquote = defineAsyncComponent(() => import('./ProseBlockquote-DCcJoMYD.mjs').then((r) => r["default"] || r.default || r));
const LazyProseCode = defineAsyncComponent(() => import('./ProseCode-BfhyOxBi.mjs').then((r) => r["default"] || r.default || r));
const LazyProseEm = defineAsyncComponent(() => import('./ProseEm-BH7funYV.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH1 = defineAsyncComponent(() => import('./ProseH1-C17UTHFd.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH2 = defineAsyncComponent(() => import('./ProseH2-Cb9GQWGl.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH3 = defineAsyncComponent(() => import('./ProseH3-BAEYuPzN.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH4 = defineAsyncComponent(() => import('./ProseH4-C-PjAB3K.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH5 = defineAsyncComponent(() => import('./ProseH5-CsjT45OU.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH6 = defineAsyncComponent(() => import('./ProseH6-BNuIKpo0.mjs').then((r) => r["default"] || r.default || r));
const LazyProseHr = defineAsyncComponent(() => import('./ProseHr-DolEqj2-.mjs').then((r) => r["default"] || r.default || r));
const LazyProseImg = defineAsyncComponent(() => import('./ProseImg-OQVD8ifA.mjs').then((r) => r["default"] || r.default || r));
const LazyProseLi = defineAsyncComponent(() => import('./ProseLi-CjYc9KH7.mjs').then((r) => r["default"] || r.default || r));
const LazyProseOl = defineAsyncComponent(() => import('./ProseOl-Bu0bvtW0.mjs').then((r) => r["default"] || r.default || r));
const LazyProseP = defineAsyncComponent(() => import('./ProseP-QmWBDhfi.mjs').then((r) => r["default"] || r.default || r));
const LazyProsePre = defineAsyncComponent(() => import('./ProsePre-ByG-rB1z.mjs').then((r) => r["default"] || r.default || r));
const LazyProseScript = defineAsyncComponent(() => import('./ProseScript-B3ujpe25.mjs').then((r) => r["default"] || r.default || r));
const LazyProseStrong = defineAsyncComponent(() => import('./ProseStrong-CWe3U0eR.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTable = defineAsyncComponent(() => import('./ProseTable-DRjE3kJI.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTbody = defineAsyncComponent(() => import('./ProseTbody-C7S1nSgr.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTd = defineAsyncComponent(() => import('./ProseTd-BNB4LEtx.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTh = defineAsyncComponent(() => import('./ProseTh-Cex4Xz3E.mjs').then((r) => r["default"] || r.default || r));
const LazyProseThead = defineAsyncComponent(() => import('./ProseThead-D3i-SYyr.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTr = defineAsyncComponent(() => import('./ProseTr-Bs5sfj5n.mjs').then((r) => r["default"] || r.default || r));
const LazyProseUl = defineAsyncComponent(() => import('./ProseUl-Dnb1iG-i.mjs').then((r) => r["default"] || r.default || r));
const lazyGlobalComponents = [
  ["ProseA", LazyProseA],
  ["ProseBlockquote", LazyProseBlockquote],
  ["ProseCode", LazyProseCode],
  ["ProseEm", LazyProseEm],
  ["ProseH1", LazyProseH1],
  ["ProseH2", LazyProseH2],
  ["ProseH3", LazyProseH3],
  ["ProseH4", LazyProseH4],
  ["ProseH5", LazyProseH5],
  ["ProseH6", LazyProseH6],
  ["ProseHr", LazyProseHr],
  ["ProseImg", LazyProseImg],
  ["ProseLi", LazyProseLi],
  ["ProseOl", LazyProseOl],
  ["ProseP", LazyProseP],
  ["ProsePre", LazyProsePre],
  ["ProseScript", LazyProseScript],
  ["ProseStrong", LazyProseStrong],
  ["ProseTable", LazyProseTable],
  ["ProseTbody", LazyProseTbody],
  ["ProseTd", LazyProseTd],
  ["ProseTh", LazyProseTh],
  ["ProseThead", LazyProseThead],
  ["ProseTr", LazyProseTr],
  ["ProseUl", LazyProseUl]
];
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
let routes;
const prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk = /* @__PURE__ */ defineNuxtPlugin(async () => {
  let __temp, __restore;
  if (routes && !routes.length) {
    return;
  }
  routes ||= Array.from(processRoutes(([__temp, __restore] = executeAsync(() => routerOptions.routes?.(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes));
  const batch = routes.splice(0, 10);
  prerenderRoutes(batch);
});
const OPTIONAL_PARAM_RE = /^\/?:.*(?:\?|\(\.\*\)\*)$/;
function shouldPrerender(path) {
  return crawlLinks;
}
function processRoutes(routes2, currentPath = "/", routesToPrerender = /* @__PURE__ */ new Set()) {
  for (const route of routes2) {
    if (OPTIONAL_PARAM_RE.test(route.path) && !route.children?.length && shouldPrerender()) {
      routesToPrerender.add(currentPath);
    }
    if (route.path.includes(":")) {
      continue;
    }
    const fullPath = joinURL(currentPath, route.path);
    {
      routesToPrerender.add(fullPath);
    }
    if (route.children) {
      processRoutes(route.children, fullPath, routesToPrerender);
    }
  }
  return routesToPrerender;
}
function minifyJS(code) {
  let result = "";
  let i = 0;
  const len = code.length;
  while (i < len) {
    const ch = code[i];
    if (ch === "'" || ch === '"' || ch === "`") {
      const quote = ch;
      result += ch;
      i++;
      while (i < len && code[i] !== quote) {
        if (code[i] === "\\") {
          result += code[i++];
        }
        result += code[i++];
      }
      if (i < len)
        result += code[i++];
    } else if (ch === "/" && code[i + 1] === "/") {
      i += 2;
      while (i < len && code[i] !== "\n")
        i++;
    } else if (ch === "/" && code[i + 1] === "*") {
      i += 2;
      while (i < len && !(code[i] === "*" && code[i + 1] === "/"))
        i++;
      i += 2;
    } else if (ch === " " || ch === "	" || ch === "\n" || ch === "\r") {
      let hasNewline = false;
      while (i < len && (code[i] === " " || code[i] === "	" || code[i] === "\n" || code[i] === "\r")) {
        if (code[i] === "\n")
          hasNewline = true;
        i++;
      }
      const prev = result.at(-1);
      const next = code[i];
      if (hasNewline && prev && next && prev !== "{" && prev !== "}" && prev !== ";" && next !== "}" && next !== ";")
        result += "\n";
      else if (prev && next && isIdentChar(prev) && isIdentChar(next))
        result += " ";
      else if (prev && next && (prev === "+" && next === "+" || prev === "-" && next === "-"))
        result += " ";
    } else {
      result += ch;
      i++;
    }
  }
  return result.trim();
}
function minifyCSS(code) {
  let result = "";
  let i = 0;
  let parenDepth = 0;
  const len = code.length;
  while (i < len) {
    const ch = code[i];
    if (ch === "'" || ch === '"') {
      const quote = ch;
      result += ch;
      i++;
      while (i < len && code[i] !== quote) {
        if (code[i] === "\\")
          result += code[i++];
        result += code[i++];
      }
      if (i < len)
        result += code[i++];
    } else if (ch === "/" && code[i + 1] === "*") {
      i += 2;
      while (i < len && !(code[i] === "*" && code[i + 1] === "/"))
        i++;
      i += 2;
    } else if (ch === "(") {
      parenDepth++;
      result += ch;
      i++;
    } else if (ch === ")") {
      parenDepth = Math.max(0, parenDepth - 1);
      result += ch;
      i++;
    } else if (ch === " " || ch === "	" || ch === "\n" || ch === "\r") {
      while (i < len && (code[i] === " " || code[i] === "	" || code[i] === "\n" || code[i] === "\r"))
        i++;
      const prev = result.at(-1);
      const next = code[i];
      if (next === "!")
        continue;
      if (parenDepth > 0) {
        if (prev && next && !isCSSCalcPunctuation(prev) && !isCSSCalcPunctuation(next))
          result += " ";
      } else if (prev && next && !isCSSPunctuation(prev) && !isCSSPunctuation(next)) {
        result += " ";
      }
    } else if (ch === ";") {
      let j = i + 1;
      while (j < len && (code[j] === " " || code[j] === "	" || code[j] === "\n" || code[j] === "\r"))
        j++;
      if (code[j] === "}") {
        i++;
      } else {
        result += ch;
        i++;
      }
    } else if (ch === "0" && code[i + 1] === "." && (code[i + 2] ?? "") >= "0" && (code[i + 2] ?? "") <= "9") {
      const prev = result.at(-1);
      if (prev && prev >= "0" && prev <= "9") {
        result += ch;
        i++;
      } else {
        i++;
      }
    } else {
      result += ch;
      i++;
    }
  }
  return result.trim();
}
function isIdentChar(ch) {
  return ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z" || ch >= "0" && ch <= "9" || ch === "_" || ch === "$";
}
function isCSSBasePunctuation(ch) {
  return ch === "{" || ch === "}" || ch === ";" || ch === ":" || ch === ",";
}
function isCSSPunctuation(ch) {
  return isCSSBasePunctuation(ch) || ch === ">" || ch === "+" || ch === "~";
}
function isCSSCalcPunctuation(ch) {
  return isCSSBasePunctuation(ch) || ch === "*" || ch === "/";
}
function minifyJSON(code) {
  return JSON.stringify(JSON.parse(code));
}
const JSON_TYPES = /* @__PURE__ */ new Set(["application/json", "application/ld+json"]);
const SKIP_JS_TYPES = /* @__PURE__ */ new Set(["application/json", "application/ld+json", "speculationrules", "importmap"]);
const minifyScripts_server_vI_uAmhP3_n8myLPfw5_eV1I7D4ANVXFZoE6G_rspLU = /* @__PURE__ */ defineNuxtPlugin({
  enforce: "post",
  setup() {
    const head = injectHead();
    if (!head)
      return;
    head.use({
      key: "minify-inline",
      hooks: {
        "ssr:render": ({ tags }) => {
          for (const tag of tags) {
            const content = tag.innerHTML;
            if (!content)
              continue;
            if (tag.tag === "script") {
              const type = tag.props.type;
              if (type && JSON_TYPES.has(type)) {
                try {
                  const minified = minifyJSON(content);
                  if (minified.length < content.length)
                    tag.innerHTML = minified;
                } catch {
                }
                continue;
              }
              if (type && SKIP_JS_TYPES.has(type))
                continue;
              try {
                const minified = minifyJS(content);
                if (minified.length < content.length)
                  tag.innerHTML = minified;
              } catch {
              }
            } else if (tag.tag === "style") {
              try {
                const minified = minifyCSS(content);
                if (minified.length < content.length)
                  tag.innerHTML = minified;
              } catch {
              }
            }
          }
        }
      }
    });
  }
});
const _1_absoluteImageUrls_server_2YTf8dZl0nl5nVc1xW7fV_4mFLM_syJu2DEHHvxD9lg = /* @__PURE__ */ defineNuxtPlugin({
  enforce: "post",
  setup() {
    const head = injectHead();
    if (!head)
      return;
    const resolver = createSitePathResolver({
      withBase: true,
      absolute: true,
      canonical: true
    });
    head.use({
      key: "absoluteImageUrls",
      hooks: {
        "tags:resolve": async ({ tags }) => {
          for (const tag of tags) {
            if (tag.tag !== "meta")
              continue;
            if (tag.props.property !== "og:image:url" && tag.props.property !== "og:image" && tag.props.name !== "twitter:image" && tag.props.name !== "twitter:image:src")
              continue;
            if (typeof tag.props.content !== "string" || !tag.props.content.trim() || tag.props.content.startsWith("http") || tag.props.content.startsWith("//"))
              continue;
            tag.props.content = unref(resolver(tag.props.content));
          }
        }
      }
    });
  }
});
const _0_routeRules_3p7F2AZYQSP_eJRsw5nLkf3zyZXPOFcTrXNpZlBwROM = /* @__PURE__ */ defineNuxtPlugin({
  enforce: "post",
  env: { islands: false },
  async setup() {
    let __temp, __restore;
    const head = injectHead();
    if (!head)
      return;
    const { tagPriority } = (/* @__PURE__ */ useRuntimeConfig()).public["seo-utils"];
    const routeRuleState = useState("nuxt-seo-utils:routeRules", () => null);
    {
      const event = useRequestEvent();
      const routeRules = ([__temp, __restore] = executeAsync(() => getRouteRules(event)), __temp = await __temp, __restore(), __temp);
      const rules = routeRules;
      routeRuleState.value = {
        head: rules.head,
        seoMeta: rules.seoMeta
      };
    }
    if (routeRuleState.value) {
      const { head: headInput, seoMeta } = routeRuleState.value;
      if (headInput)
        head.push(headInput);
      if (seoMeta)
        useSeoMeta(seoMeta, { tagPriority });
    }
  }
});
const LOCALE_UNDERSCORE_RE = /_/g;
function applyDefaults() {
  const siteConfig = useSiteConfig({
    resolveRefs: false
  });
  const resolveCurrentLocale = () => {
    const locale = toValue(siteConfig.currentLocale) || toValue(siteConfig.defaultLocale) || "en";
    return locale.replace(LOCALE_UNDERSCORE_RE, "-");
  };
  const head = injectHead();
  head.use(TemplateParamsPlugin);
  const { canonicalQueryWhitelist, canonicalLowercase, tagPriority, separator, titleSeparator } = (/* @__PURE__ */ useRuntimeConfig()).public["seo-utils"];
  const route = useRoute();
  const resolveUrl = createSitePathResolver({ withBase: true, absolute: true });
  const err = /* @__PURE__ */ useError();
  const resolveSeparator = () => toValue(siteConfig.separator) || separator || toValue(siteConfig.titleSeparator) || titleSeparator;
  const resolveTitleSeparator = () => toValue(siteConfig.titleSeparator) || titleSeparator || toValue(siteConfig.separator) || separator;
  const canonicalUrl = computed(() => {
    if (err.value) {
      return false;
    }
    const { query } = route;
    let url = resolveUrl(route.path || "/").value || route.path;
    if (canonicalLowercase) {
      try {
        url = url.toLocaleLowerCase(resolveCurrentLocale());
      } catch {
        url = url.toLowerCase();
      }
    }
    const filteredQuery = Object.fromEntries(
      Object.entries(query).filter(([key]) => canonicalQueryWhitelist.includes(key)).sort(([a], [b]) => a.localeCompare(b))
      // Sort params
    );
    const href = Object.keys(filteredQuery).length ? `${url}?${stringifyQuery(filteredQuery)}` : url;
    return { rel: "canonical", href };
  });
  const minimalPriority = {
    // give nuxt.config values higher priority
    tagPriority: "low"
  };
  const seoMetaPriority = {
    tagPriority
  };
  useHead({
    htmlAttrs: { lang: resolveCurrentLocale },
    templateParams: {
      site: () => siteConfig,
      siteName: () => siteConfig.name,
      separator: resolveSeparator,
      titleSeparator: resolveTitleSeparator
    },
    titleTemplate: () => err.value ? "%s" : "%s %separator %siteName",
    link: [() => canonicalUrl.value]
  }, minimalPriority);
  useSeoMeta({
    ogLocale: () => {
      const locale = resolveCurrentLocale();
      if (locale) {
        const l = locale.replace("-", "_");
        if (l.includes("_")) {
          return l;
        }
      }
      return false;
    }
  }, minimalPriority);
  const seoMeta = {
    ogType: "website",
    ogUrl: () => {
      const url = canonicalUrl.value;
      return url ? url.href : false;
    },
    ogSiteName: siteConfig.name
  };
  if (siteConfig.description)
    useSeoMeta({ description: siteConfig.description }, minimalPriority);
  if (siteConfig.twitter) {
    const id = siteConfig.twitter.startsWith("@") ? siteConfig.twitter : `@${siteConfig.twitter}`;
    seoMeta.twitterCreator = id;
    seoMeta.twitterSite = id;
  }
  useSeoMeta(seoMeta, seoMetaPriority);
}
const defaults_0Sn7xIMAzGkdbab2otVWD8mX4GpY74A3Jy_gY_4_qYk = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-seo:defaults",
  order: 999,
  env: {
    islands: false
  },
  setup() {
    applyDefaults();
  }
});
const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin,
  _0_siteConfig_tU0SxKrPeVRXWcGu2sOnIfhNDbYiKNfDCvYZhRueG0Q,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  siteConfig_vuqmRkLAUZxQvb5pvUwT3uUdVggfjhj1m5v7Pb6IE0w,
  inferSeoMetaPlugin_KsEotgC9NJyW_guR_3z04hFN8TI2h5dgP8bzHmpMm5o,
  titles_Fth_MAhm7dgpxeTaMXibYXbcCjegjWK3QH9gKvbTRVg,
  defaults_ZjgoYqsIrjWNaJMfDhci2B0eoNnvY4CDsoscm0L1fE0,
  init_Ks1wcI1vuv3K3FXG7iAYRqIWlPli19G_eByed0tsXe0,
  og_image_canonical_urls_server_2uCBKzWxjEK91fSFBdBNPEWilWXRzR66cHJvjIi4FGA,
  route_rule_og_image_server_yrHfzNQxtCKZyHaGhWqsbaa4V0Y5WoBOo3_wqkmh41k,
  robot_meta_server_bRHpso_4KN_Ec3RJzqCvbuvfZsNOeE_4TgpL8dCNuwk,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk,
  minifyScripts_server_vI_uAmhP3_n8myLPfw5_eV1I7D4ANVXFZoE6G_rspLU,
  _1_absoluteImageUrls_server_2YTf8dZl0nl5nVc1xW7fV_4mFLM_syJu2DEHHvxD9lg,
  _0_routeRules_3p7F2AZYQSP_eJRsw5nLkf3zyZXPOFcTrXNpZlBwROM,
  defaults_0Sn7xIMAzGkdbab2otVWD8mX4GpY74A3Jy_gY_4_qYk
];
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    route: {
      type: Object,
      required: true
    },
    vnode: Object,
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      if (!props.vnode) {
        return props.vnode;
      }
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_0 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const navOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "border-b border-accent bg-secondary sticky top-0 z-50" }, _attrs))} data-v-5a5db79b><div class="max-w-6xl mx-auto px-4 sm:px-6 py-8" data-v-5a5db79b><div class="flex justify-between items-start" data-v-5a5db79b><div data-v-5a5db79b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-2xl sm:text-4xl font-serif font-bold tracking-tight"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Everything in Perspective `);
          } else {
            return [
              createTextVNode(" Everything in Perspective ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-muted text-xs sm:text-sm mt-2" data-v-5a5db79b>Essays on trends, context &amp; nuance</p></div><div class="hidden lg:flex gap-8 text-sm nav-main" data-v-5a5db79b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/magazine/articles",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Articles`);
          } else {
            return [
              createTextVNode("Articles")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/magazine/perspectives",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Perspectives`);
          } else {
            return [
              createTextVNode("Perspectives")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/page/faq",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`FAQ`);
          } else {
            return [
              createTextVNode("FAQ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/page/contact-us",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="lg:hidden nav-drawer-toggle" aria-label="Toggle navigation" data-v-5a5db79b>☰</button></div></div>`);
      if (unref(navOpen)) {
        _push(`<nav class="nav-drawer lg:hidden border-t border-accent bg-secondary p-4" data-v-5a5db79b><div class="space-y-4" data-v-5a5db79b>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Home`);
            } else {
              return [
                createTextVNode("Home")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/page/faq",
          class: "block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`FAQ`);
            } else {
              return [
                createTextVNode("FAQ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/page/contact-us",
          class: "block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Contact`);
            } else {
              return [
                createTextVNode("Contact")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/page/privacy-policy",
          class: "block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Privacy`);
            } else {
              return [
                createTextVNode("Privacy")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/page/terms-conditions",
          class: "block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Terms`);
            } else {
              return [
                createTextVNode("Terms")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/page/cookie-policy",
          class: "block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Cookies`);
            } else {
              return [
                createTextVNode("Cookies")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-5a5db79b"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-accent text-secondary mt-16 sm:mt-24 py-8 sm:py-12 border-t border-primary" }, _attrs))} data-v-ddf4f40a><div class="max-w-6xl mx-auto px-4 sm:px-6" data-v-ddf4f40a><div class="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12" data-v-ddf4f40a><div data-v-ddf4f40a><h4 class="font-serif font-bold mb-4" data-v-ddf4f40a>Magazine</h4><ul class="text-xs sm:text-sm space-y-2" data-v-ddf4f40a><li data-v-ddf4f40a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-ddf4f40a><a href="/sitemap.xml" class="hover:underline" data-v-ddf4f40a>Sitemap</a></li><li data-v-ddf4f40a><a href="/feed.xml" class="hover:underline" data-v-ddf4f40a>RSS</a></li></ul></div><div data-v-ddf4f40a><h4 class="font-serif font-bold mb-4" data-v-ddf4f40a>Brand</h4><ul class="text-xs sm:text-sm space-y-2" data-v-ddf4f40a><li data-v-ddf4f40a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/page/about",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-ddf4f40a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/page/faq",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`FAQ`);
      } else {
        return [
          createTextVNode("FAQ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-ddf4f40a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/page/contact-us",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div data-v-ddf4f40a><h4 class="font-serif font-bold mb-4" data-v-ddf4f40a>Legal</h4><ul class="text-xs sm:text-sm space-y-2" data-v-ddf4f40a><li data-v-ddf4f40a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/page/privacy-policy",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacy`);
      } else {
        return [
          createTextVNode("Privacy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-ddf4f40a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/page/terms-conditions",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Terms`);
      } else {
        return [
          createTextVNode("Terms")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-ddf4f40a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/page/cookie-policy",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Cookies`);
      } else {
        return [
          createTextVNode("Cookies")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div class="border-t border-primary pt-6 sm:pt-8 text-xs text-center text-secondary" data-v-ddf4f40a><p data-v-ddf4f40a>© 2026 Everything in Perspective. All rights reserved.</p></div></div></footer>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ddf4f40a"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
        { name: "referrer", content: "no-referrer-when-downgrade" }
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Everything in Perspective",
            url: "https://einp.surge.sh",
            logo: "https://einp.surge.sh/logo.png",
            description: "Essays on trends, context & nuance",
            sameAs: []
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-secondary text-primary" }, _attrs))}>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    const status = Number(_error.statusCode || 500);
    const is404 = status === 404;
    const statusText = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-D1csT8ol.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-C3xuuDUL.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ status: unref(status), statusText: unref(statusText), statusCode: unref(status), statusMessage: unref(statusText), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup", []);
    const error = /* @__PURE__ */ useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    function invokeAppErrorHandler(err, target, info) {
      const errorHandler = nuxtApp.vueApp.config.errorHandler;
      if (errorHandler && !errorHandler.__nuxt_default) {
        try {
          errorHandler(err, target, info);
        } catch (handlerError) {
          console.error("[nuxt] Error in `app.config.errorHandler`", handlerError);
        }
      }
    }
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        invokeAppErrorHandler(err, target, info);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error ||= createError(error);
    }
    if (ssrContext && (ssrContext["~renderResponse"] || ssrContext._renderResponse)) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry_default = ((ssrContext) => entry(ssrContext));

export { _export_sfc as _, __nuxt_component_0$1 as a, useRoute as b, useRequestFetch as c, createError as d, entry_default as default, useRuntimeConfig as e, fetchDefaults as f, useNuxtApp as g, asyncDataDefaults as h, useHead as u };
//# sourceMappingURL=server.mjs.map
