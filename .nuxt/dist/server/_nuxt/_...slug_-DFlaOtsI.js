import { f as fetchDefaults, c as useRequestFetch, b as useRoute, u as useHead, a as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { computed, toValue, reactive, watch, defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { hash } from "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import { isPlainObject } from "@vue/shared";
import { u as useAsyncData } from "./asyncData-WSHJDlBy.js";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/hookable/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/unctx/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/defu/dist/defu.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/ufo/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/klona/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/@unhead/vue/dist/index.mjs";
import "unhead/plugins";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/scule/dist/index.mjs";
import "@unhead/schema-org/vue";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/radix3/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/devalue/index.js";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt-og-image/node_modules/ohash/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = [{}, arg1];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  if (!immediate) {
    let setImmediate = function() {
      _asyncDataOptions.immediate = true;
    };
    watch(key, setImmediate, { flush: "sync", once: true });
    watch([...watchSources || [], _fetchOptions], setImmediate, { flush: "sync", once: true });
  }
  const asyncData = useAsyncData(watchSources === false ? key.value : key, (_, { signal }) => {
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  const segments = [
    toValue(opts.method)?.toUpperCase() || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.query || opts.params]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const entries = [];
      for (const entry of value.entries()) {
        const [key, val] = entry;
        entries.push([key, val instanceof File ? `${val.name}:${val.size}:${val.lastModified}` : val]);
      }
      segments.push(hash(entries));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const itemPath = route.params.slug.join("/");
    const { data: graphData } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/graph.json",
      "$7X-M4VDMy3"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const graph = computed(() => graphData.value || {});
    const item = computed(() => graph.value[itemPath]);
    function groupByType(items) {
      if (!items) return [];
      const grouped = {};
      items.forEach((item2) => {
        const type = item2.split("/")[0];
        if (!grouped[type]) grouped[type] = [];
        grouped[type].push(item2);
      });
      return Object.entries(grouped).map(([name, items2]) => ({ name, items: items2 }));
    }
    useHead({
      title: `${item.value?.title || "Item"} - Linked Data View`,
      meta: [
        { name: "description", content: `Explore all relationships and connections for ${item.value?.title}` },
        { name: "robots", content: "noindex" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16" }, _attrs))} data-v-d01f69ef>`);
      if (unref(item)) {
        _push(`<div data-v-d01f69ef><div class="mb-8 pb-6 border-b border-accent" data-v-d01f69ef><div class="text-sm text-muted mb-2" data-v-d01f69ef>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/linked-data",
          class: "hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Linked Data`);
            } else {
              return [
                createTextVNode("Linked Data")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` / ${ssrInterpolate(unref(item).type)}</div><h1 class="font-serif text-4xl font-bold mb-4" data-v-d01f69ef>${ssrInterpolate(unref(item).title)}</h1><div class="text-muted text-sm" data-v-d01f69ef> Type: <span class="font-mono" data-v-d01f69ef>${ssrInterpolate(unref(item).type)}/${ssrInterpolate(unref(item).slug)}</span></div></div><section class="mb-12" data-v-d01f69ef><h2 class="font-serif text-2xl font-bold mb-4" data-v-d01f69ef>Metadata</h2><div class="bg-light p-6 rounded-lg" data-v-d01f69ef><dl class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-d01f69ef><!--[-->`);
        ssrRenderList(unref(item).metadata, (value, key) => {
          _push(`<div data-v-d01f69ef><dt class="font-bold text-sm text-muted uppercase" data-v-d01f69ef>${ssrInterpolate(key)}</dt><dd class="mt-1" data-v-d01f69ef>${ssrInterpolate(value)}</dd></div>`);
        });
        _push(`<!--]--></dl></div></section><section class="mb-12" data-v-d01f69ef><h2 class="font-serif text-2xl font-bold mb-4" data-v-d01f69ef>Direct Relationships</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-d01f69ef><div data-v-d01f69ef><h3 class="font-bold mb-3 text-lg" data-v-d01f69ef>Links To (${ssrInterpolate(unref(item).links_to.length)})</h3><ul class="space-y-2" data-v-d01f69ef><!--[-->`);
        ssrRenderList(unref(item).links_to, (link) => {
          _push(`<li class="flex items-center gap-2" data-v-d01f69ef><span class="text-xs px-2 py-1 bg-accent text-secondary rounded" data-v-d01f69ef>${ssrInterpolate(unref(graph)[link]?.type)}</span>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/linked-data/${link}`,
            class: "hover:underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(graph)[link]?.title || link)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(graph)[link]?.title || link), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]-->`);
        if (unref(item).links_to.length === 0) {
          _push(`<li class="text-muted italic" data-v-d01f69ef>No outgoing links</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></div><div data-v-d01f69ef><h3 class="font-bold mb-3 text-lg" data-v-d01f69ef>Linked From (${ssrInterpolate(unref(item).linked_from.length)})</h3><ul class="space-y-2" data-v-d01f69ef><!--[-->`);
        ssrRenderList(unref(item).linked_from, (link) => {
          _push(`<li class="flex items-center gap-2" data-v-d01f69ef><span class="text-xs px-2 py-1 bg-accent text-secondary rounded" data-v-d01f69ef>${ssrInterpolate(unref(graph)[link]?.type)}</span>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/linked-data/${link}`,
            class: "hover:underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(graph)[link]?.title || link)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(graph)[link]?.title || link), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]-->`);
        if (unref(item).linked_from.length === 0) {
          _push(`<li class="text-muted italic" data-v-d01f69ef>No incoming links</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></div></div></section><section class="mb-12" data-v-d01f69ef><h2 class="font-serif text-2xl font-bold mb-4" data-v-d01f69ef>Extended Network</h2><!--[-->`);
        ssrRenderList([1, 2, 3], (degree) => {
          _push(`<div class="mb-8" data-v-d01f69ef><h3 class="font-bold mb-3 text-lg" data-v-d01f69ef>${ssrInterpolate(degree)}-Degree Connections <span class="text-muted font-normal" data-v-d01f69ef>(${ssrInterpolate(unref(item).degrees?.[degree]?.length || 0)} items)</span></h3>`);
          if (unref(item).degrees?.[degree]?.length) {
            _push(`<div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-d01f69ef><!--[-->`);
            ssrRenderList(groupByType(unref(item).degrees[degree]), (type) => {
              _push(`<div class="bg-light p-4 rounded" data-v-d01f69ef><h4 class="font-bold text-sm mb-2 uppercase text-muted" data-v-d01f69ef>${ssrInterpolate(type.name)}</h4><ul class="space-y-1 text-sm" data-v-d01f69ef><!--[-->`);
              ssrRenderList(type.items.slice(0, 5), (link) => {
                _push(`<li data-v-d01f69ef>`);
                _push(ssrRenderComponent(_component_NuxtLink, {
                  to: `/linked-data/${link}`,
                  class: "hover:underline"
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`${ssrInterpolate(unref(graph)[link]?.title || link)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(graph)[link]?.title || link), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
                _push(`</li>`);
              });
              _push(`<!--]-->`);
              if (type.items.length > 5) {
                _push(`<li class="text-muted italic" data-v-d01f69ef> +${ssrInterpolate(type.items.length - 5)} more </li>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</ul></div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<p class="text-muted italic" data-v-d01f69ef>No connections at this degree</p>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></section><section class="mt-12 pt-6 border-t border-accent" data-v-d01f69ef><div class="flex gap-4" data-v-d01f69ef>`);
        if (unref(item).type === "articles") {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/article/${unref(item).slug}`,
            class: "px-4 py-2 bg-primary text-secondary rounded hover:bg-accent"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` View Magazine Version `);
              } else {
                return [
                  createTextVNode(" View Magazine Version ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<button class="px-4 py-2 border border-accent rounded hover:bg-light" data-v-d01f69ef> Export as JSON </button></div></section></div>`);
      } else {
        _push(`<div class="text-center py-12" data-v-d01f69ef><p class="text-muted" data-v-d01f69ef>Item not found in graph</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/linked-data",
          class: "text-primary hover:underline mt-4 inline-block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Browse all items `);
            } else {
              return [
                createTextVNode(" Browse all items ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/linked-data/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d01f69ef"]]);
export {
  ____slug_ as default
};
//# sourceMappingURL=_...slug_-DFlaOtsI.js.map
