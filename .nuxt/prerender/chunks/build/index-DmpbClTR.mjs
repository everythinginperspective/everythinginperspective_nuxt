import { _ as _export_sfc, u as useHead, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'file:///Volumes/B87P4/everythinginperspective_nuxt/node_modules/vue/server-renderer/index.mjs';
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
    const { data: articles } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "articles",
      () => queryContent("/articles").sort({ date: -1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    useHead({
      title: "Everything in Perspective",
      meta: [
        { name: "description", content: "Essays on trends, context & nuance" },
        { property: "og:title", content: "Everything in Perspective" },
        { property: "og:description", content: "Essays on trends, context & nuance" },
        { property: "og:type", content: "website" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16" }, _attrs))} data-v-a4b38fdd><section class="mb-16" data-v-a4b38fdd><h2 class="font-serif text-3xl font-bold mb-8" data-v-a4b38fdd>Latest Essays</h2><div class="space-y-8" data-v-a4b38fdd><!--[-->`);
      ssrRenderList((unref(articles) || []).slice(0, 3), (article) => {
        var _a;
        _push(`<article class="mb-12 pb-12 border-b border-accent" data-v-a4b38fdd><h3 class="font-serif text-2xl font-bold mb-2" data-v-a4b38fdd>${ssrInterpolate(article.title)}</h3><p class="text-muted text-sm mb-4" data-v-a4b38fdd>${ssrInterpolate(formatDate(article.date))} \u2022 ${ssrInterpolate(article.category || "General")}</p><p class="text-body mb-4" data-v-a4b38fdd>${ssrInterpolate(article.description)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/article/${(_a = article._path) == null ? void 0 : _a.split("/").pop()}`,
          class: "text-primary font-sans font-bold hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Read More \u2192 `);
            } else {
              return [
                createTextVNode(" Read More \u2192 ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</article>`);
      });
      _push(`<!--]--></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a4b38fdd"]]);

export { index as default };
//# sourceMappingURL=index-DmpbClTR.mjs.map
