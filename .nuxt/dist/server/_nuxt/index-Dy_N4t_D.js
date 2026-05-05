import { b as useSeoMeta, a as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/hookable/dist/index.mjs";
import { u as useAsyncData, q as queryContent } from "./query-BpQ5BxIZ.js";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/unctx/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/defu/dist/defu.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/ufo/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/klona/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/ohash/dist/index.mjs";
import "./preview-DCDZIGxi.js";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/destr/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
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
    useSeoMeta({
      title: "Everything in Perspective",
      description: "Essays on trends, context & nuance",
      ogTitle: "Everything in Perspective",
      ogDescription: "Essays on trends, context & nuance",
      ogType: "website"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16" }, _attrs))} data-v-fb30d1ab><section class="mb-16" data-v-fb30d1ab><h2 class="font-serif text-3xl font-bold mb-8" data-v-fb30d1ab>Latest Essays</h2><div class="space-y-8" data-v-fb30d1ab><!--[-->`);
      ssrRenderList(unref(articles).slice(0, 3), (article) => {
        _push(`<article class="mb-12 pb-12 border-b border-accent" data-v-fb30d1ab><h3 class="font-serif text-2xl font-bold mb-2" data-v-fb30d1ab>${ssrInterpolate(article.title)}</h3><p class="text-muted text-sm mb-4" data-v-fb30d1ab>${ssrInterpolate(formatDate(article.date))} • ${ssrInterpolate(article.category || "General")}</p><p class="text-body mb-4" data-v-fb30d1ab>${ssrInterpolate(article.description)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/article/${article._path?.split("/").pop()}`,
          class: "text-primary font-sans font-bold hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Read More → `);
            } else {
              return [
                createTextVNode(" Read More → ")
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fb30d1ab"]]);
export {
  index as default
};
//# sourceMappingURL=index-Dy_N4t_D.js.map
