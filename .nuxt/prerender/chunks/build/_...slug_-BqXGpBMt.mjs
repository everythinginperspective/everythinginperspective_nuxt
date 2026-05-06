import { _ as _sfc_main$1 } from './ContentRenderer-CqPa3RfC.mjs';
import { defineComponent, withAsyncContext, computed, watch, mergeProps, unref, useSSRContext } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, b as useRoute, u as useHead } from './server.mjs';
import { u as useAsyncData } from './asyncData-BTZGG7Mr.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/scule/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/destr/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/property-information/index.js';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/minimark/dist/hast.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/consola/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/h3/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/ufo/dist/index.mjs';
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
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unctx/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/radix3/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/devalue/index.js';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt-og-image/node_modules/ohash/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/@nuxtjs/i18n/node_modules/vue-router/vue-router.node.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/pathe/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxtseo-shared/dist/utils.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/@nuxt/content/node_modules/pathe/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/db0/dist/connectors/better-sqlite3.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/vue-router/vue-router.node.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unhead/dist/plugins.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/ohash/dist/index.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/@unhead/schema-org/dist/vue.mjs';
import '../_/server.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unhead/dist/server.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/unhead/dist/utils.mjs';
import 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug.join("/");
    const { data: content } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `ld-${slug}`,
      () => queryContent(`/${slug}`).findOne()
    )), __temp = await __temp, __restore(), __temp);
    const { data: graph } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "graph-data",
      () => $fetch("/graph.json").catch(() => null)
    )), __temp = await __temp, __restore(), __temp);
    const connections = computed(() => {
      var _a, _b;
      if (!((_a = graph.value) == null ? void 0 : _a.nodes) || !((_b = content.value) == null ? void 0 : _b._path)) return null;
      const node = graph.value.nodes.find((n) => n.path === content.value._path);
      return (node == null ? void 0 : node.connections) || null;
    });
    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    watch(() => content.value, (newContent) => {
      if (newContent) {
        useHead({
          title: `${newContent.title} | Everything in Perspective`,
          meta: [
            { name: "description", content: newContent.description },
            { property: "og:title", content: newContent.title },
            { property: "og:description", content: newContent.description }
          ]
        });
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_ContentRenderer = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16" }, _attrs))} data-v-d0d49099>`);
      if (unref(content)) {
        _push(`<article data-v-d0d49099><div class="mb-12 pb-8 border-b border-accent" data-v-d0d49099><h1 class="font-serif text-5xl font-bold mb-4 leading-tight" data-v-d0d49099>${ssrInterpolate(unref(content).title)}</h1><div class="flex justify-between items-baseline" data-v-d0d49099><div data-v-d0d49099>`);
        if (unref(content).author) {
          _push(`<p class="text-muted text-sm mb-2" data-v-d0d49099>By <span class="font-bold" data-v-d0d49099>${ssrInterpolate(unref(content).author)}</span></p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(content).date) {
          _push(`<p class="text-muted text-sm" data-v-d0d49099>${ssrInterpolate(formatDate(unref(content).date))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(content).category) {
          _push(`<span class="bg-light text-xs px-3 py-1 font-sans" data-v-d0d49099>${ssrInterpolate(unref(content).category)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="mb-12 pb-12 border-b-2 border-accent" data-v-d0d49099><h2 class="font-serif text-2xl font-bold mb-4" data-v-d0d49099>Graph Connections</h2>`);
        if (unref(connections)) {
          _push(`<div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-d0d49099>`);
          if ((_a = unref(connections).authors) == null ? void 0 : _a.length) {
            _push(`<div data-v-d0d49099><h3 class="font-bold mb-2" data-v-d0d49099>Authors (${ssrInterpolate(unref(connections).authors.length)})</h3><ul class="text-sm space-y-1" data-v-d0d49099><!--[-->`);
            ssrRenderList(unref(connections).authors, (author) => {
              _push(`<li data-v-d0d49099>${ssrInterpolate(author)}</li>`);
            });
            _push(`<!--]--></ul></div>`);
          } else {
            _push(`<!---->`);
          }
          if ((_b = unref(connections).categories) == null ? void 0 : _b.length) {
            _push(`<div data-v-d0d49099><h3 class="font-bold mb-2" data-v-d0d49099>Categories (${ssrInterpolate(unref(connections).categories.length)})</h3><ul class="text-sm space-y-1" data-v-d0d49099><!--[-->`);
            ssrRenderList(unref(connections).categories, (cat) => {
              _push(`<li data-v-d0d49099>${ssrInterpolate(cat)}</li>`);
            });
            _push(`<!--]--></ul></div>`);
          } else {
            _push(`<!---->`);
          }
          if ((_c = unref(connections).tags) == null ? void 0 : _c.length) {
            _push(`<div data-v-d0d49099><h3 class="font-bold mb-2" data-v-d0d49099>Tags (${ssrInterpolate(unref(connections).tags.length)})</h3><ul class="text-sm space-y-1" data-v-d0d49099><!--[-->`);
            ssrRenderList(unref(connections).tags, (tag) => {
              _push(`<li data-v-d0d49099>${ssrInterpolate(tag)}</li>`);
            });
            _push(`<!--]--></ul></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="prose prose-lg max-w-none mb-16" data-v-d0d49099>`);
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(content) }, null, _parent));
        _push(`</div></article>`);
      } else {
        _push(`<div class="text-center py-12" data-v-d0d49099><p data-v-d0d49099>Content not found</p></div>`);
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
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d0d49099"]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_-BqXGpBMt.mjs.map
