import { b as useRoute, d as createError, u as useHead, a as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/hookable/dist/index.mjs";
import { g as getContentTypeByPlural } from "./useContentTypes-DiGmzXH6.js";
import { u as useAsyncData } from "./asyncData-WSHJDlBy.js";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
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
    const { data: items } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `${type}-index`,
      () => queryContent(`/${contentType.folder}`).find()
    )), __temp = await __temp, __restore(), __temp);
    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    useHead({
      title: `${contentType.plural} | Everything in Perspective`,
      meta: [
        { name: "description", content: `Browse all ${contentType.plural} on Everything in Perspective` },
        { property: "og:title", content: `${contentType.plural} | Everything in Perspective` },
        { property: "og:description", content: `Browse all ${contentType.plural} on Everything in Perspective` }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16" }, _attrs))} data-v-0344e6d4><div class="mb-12" data-v-0344e6d4><h1 class="font-serif text-5xl font-bold mb-4 capitalize" data-v-0344e6d4>${ssrInterpolate(unref(contentType)?.plural)}</h1><p class="text-muted text-lg" data-v-0344e6d4>Browse all ${ssrInterpolate(unref(contentType)?.plural)}</p></div><div class="mb-8" data-v-0344e6d4><p class="text-sm text-muted" data-v-0344e6d4>${ssrInterpolate(unref(items).length)} ${ssrInterpolate(unref(contentType)?.plural)} found</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-0344e6d4><!--[-->`);
      ssrRenderList(unref(items), (item) => {
        _push(`<div class="border border-accent p-6 hover:shadow-lg transition-shadow" data-v-0344e6d4>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/magazine/${unref(contentType)?.singular}/${item.slug || item._path?.split("/").pop()}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="font-serif text-2xl font-bold mb-2" data-v-0344e6d4${_scopeId}>${ssrInterpolate(item.title)}</h2>`);
              if (item.description) {
                _push2(`<p class="text-muted text-sm mb-4" data-v-0344e6d4${_scopeId}>${ssrInterpolate(item.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="text-xs text-muted" data-v-0344e6d4${_scopeId}>`);
              if (item.author) {
                _push2(`<span data-v-0344e6d4${_scopeId}>By ${ssrInterpolate(item.author)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.date) {
                _push2(`<span data-v-0344e6d4${_scopeId}> · ${ssrInterpolate(formatDate(item.date))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("h2", { class: "font-serif text-2xl font-bold mb-2" }, toDisplayString(item.title), 1),
                item.description ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-muted text-sm mb-4"
                }, toDisplayString(item.description), 1)) : createCommentVNode("", true),
                createVNode("div", { class: "text-xs text-muted" }, [
                  item.author ? (openBlock(), createBlock("span", { key: 0 }, "By " + toDisplayString(item.author), 1)) : createCommentVNode("", true),
                  item.date ? (openBlock(), createBlock("span", { key: 1 }, " · " + toDisplayString(formatDate(item.date)), 1)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(items).length === 0) {
        _push(`<div class="text-center py-12 text-muted" data-v-0344e6d4><p data-v-0344e6d4>No ${ssrInterpolate(unref(contentType)?.plural)} found.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/magazine/[type]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0344e6d4"]]);
export {
  index as default
};
//# sourceMappingURL=index-kLqmwbZH.js.map
