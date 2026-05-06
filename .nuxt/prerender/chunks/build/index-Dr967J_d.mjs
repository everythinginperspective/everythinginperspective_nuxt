import { _ as _export_sfc, b as useRoute, d as createError, u as useHead, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/vue/server-renderer/index.mjs';
import { g as getContentTypeByPlural } from './useContentTypes-Bfyhb4am.mjs';
import { u as useAsyncData } from './asyncData-WSHJDlBy.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/consola/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/h3/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/ufo/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/destr/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unstorage/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/klona/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/defu/dist/defu.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/scule/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unctx/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/radix3/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/devalue/index.js';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt-og-image/node_modules/ohash/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/pathe/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/@nuxt/content/node_modules/pathe/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/db0/dist/connectors/better-sqlite3.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/vue-router/vue-router.node.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unhead/dist/plugins.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/@unhead/schema-org/dist/vue.mjs';
import '../_/server.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unhead/dist/server.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unhead/dist/utils.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const type = route.params.type;
    const contentType = ([__temp, __restore] = withAsyncContext(() => getContentTypeByPlural(type)), __temp = await __temp, __restore(), __temp);
    if (!contentType) {
      throw createError({ statusCode: 404, message: "Content type not found" });
    }
    const [{ data: items }, { data: graph }] = ([__temp, __restore] = withAsyncContext(() => Promise.all([
      useAsyncData(
        `ld-${type}-index`,
        () => queryContent(`/${contentType.folder}`).find()
      ),
      useAsyncData(
        "graph-data",
        () => $fetch("/graph.json").catch(() => null)
      )
    ])), __temp = await __temp, __restore(), __temp);
    const totalConnections = computed(() => {
      if (!graph.value || !items.value) return 0;
      return items.value.reduce((acc, item) => {
        var _a, _b, _c;
        const connections = getItemConnections(item._path);
        if (!connections) return acc;
        return acc + (((_a = connections.authors) == null ? void 0 : _a.length) || 0) + (((_b = connections.categories) == null ? void 0 : _b.length) || 0) + (((_c = connections.tags) == null ? void 0 : _c.length) || 0);
      }, 0);
    });
    const getItemConnections = (path) => {
      var _a;
      if (!((_a = graph.value) == null ? void 0 : _a.nodes)) return null;
      const node = graph.value.nodes.find((n) => n.path === path);
      return (node == null ? void 0 : node.connections) || null;
    };
    useHead({
      title: `${contentType.plural} - Linked Data | Everything in Perspective`,
      meta: [
        { name: "description", content: `Graph-based view of all ${contentType.plural} with relationship connections` },
        { property: "og:title", content: `${contentType.plural} - Linked Data | Everything in Perspective` }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16" }, _attrs))} data-v-05f50a8a><div class="mb-12 border-b-2 border-accent pb-6" data-v-05f50a8a><div class="text-xs uppercase tracking-wider text-muted mb-2" data-v-05f50a8a>Linked Data View</div><h1 class="font-serif text-5xl font-bold mb-2 capitalize" data-v-05f50a8a>${ssrInterpolate((_a = unref(contentType)) == null ? void 0 : _a.plural)}</h1><p class="text-muted" data-v-05f50a8a>Graph-based view of all ${ssrInterpolate((_b = unref(contentType)) == null ? void 0 : _b.plural)} with relationship connections</p></div>`);
      if (unref(graph)) {
        _push(`<div class="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4" data-v-05f50a8a><div class="bg-light p-4" data-v-05f50a8a><div class="text-2xl font-bold" data-v-05f50a8a>${ssrInterpolate(unref(items).length)}</div><div class="text-xs text-muted uppercase" data-v-05f50a8a>Items</div></div><div class="bg-light p-4" data-v-05f50a8a><div class="text-2xl font-bold" data-v-05f50a8a>${ssrInterpolate(unref(totalConnections))}</div><div class="text-xs text-muted uppercase" data-v-05f50a8a>Connections</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-6" data-v-05f50a8a><!--[-->`);
      ssrRenderList(unref(items), (item) => {
        var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
        _push(`<div class="border border-accent p-6" data-v-05f50a8a><div class="mb-4" data-v-05f50a8a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/linked-data/${item._path}`,
          class: "font-serif text-2xl font-bold hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        if (item.description) {
          _push(`<p class="text-muted text-sm mt-2" data-v-05f50a8a>${ssrInterpolate(item.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (getItemConnections(item._path)) {
          _push(`<div class="text-xs" data-v-05f50a8a><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-05f50a8a>`);
          if ((_b2 = (_a2 = getItemConnections(item._path)) == null ? void 0 : _a2.authors) == null ? void 0 : _b2.length) {
            _push(`<div data-v-05f50a8a><strong class="text-muted" data-v-05f50a8a>Authors:</strong><span class="ml-2" data-v-05f50a8a>${ssrInterpolate((_d = (_c = getItemConnections(item._path)) == null ? void 0 : _c.authors) == null ? void 0 : _d.length)}</span></div>`);
          } else {
            _push(`<!---->`);
          }
          if ((_f = (_e = getItemConnections(item._path)) == null ? void 0 : _e.categories) == null ? void 0 : _f.length) {
            _push(`<div data-v-05f50a8a><strong class="text-muted" data-v-05f50a8a>Categories:</strong><span class="ml-2" data-v-05f50a8a>${ssrInterpolate((_h = (_g = getItemConnections(item._path)) == null ? void 0 : _g.categories) == null ? void 0 : _h.length)}</span></div>`);
          } else {
            _push(`<!---->`);
          }
          if ((_j = (_i = getItemConnections(item._path)) == null ? void 0 : _i.tags) == null ? void 0 : _j.length) {
            _push(`<div data-v-05f50a8a><strong class="text-muted" data-v-05f50a8a>Tags:</strong><span class="ml-2" data-v-05f50a8a>${ssrInterpolate((_l = (_k = getItemConnections(item._path)) == null ? void 0 : _k.tags) == null ? void 0 : _l.length)}</span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/linked-data/[type]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-05f50a8a"]]);

export { index as default };
//# sourceMappingURL=index-Dr967J_d.mjs.map
