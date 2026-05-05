import _sfc_main$1 from "./ContentRenderer-BF3k2gMn.js";
import { defineComponent, withAsyncContext, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/hookable/dist/index.mjs";
import { c as useRoute, b as useSeoMeta, _ as _export_sfc } from "../server.mjs";
import { u as useAsyncData, q as queryContent } from "./query-BpQ5BxIZ.js";
import "./ContentRendererMarkdown-tklI2Ef2.js";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/destr/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/scule/dist/index.mjs";
import "property-information";
import "./node-DPfXEbjB.js";
import "./preview-DCDZIGxi.js";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/h3/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/klona/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/defu/dist/defu.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/ufo/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/ohash/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const { data: article } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `article-${slug}`,
      () => queryContent(`/articles/${slug}`).findOne()
    )), __temp = await __temp, __restore(), __temp);
    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    watch(() => article.value, (newArticle) => {
      if (newArticle) {
        useSeoMeta({
          title: `${newArticle.title} | Everything in Perspective`,
          description: newArticle.description,
          ogTitle: newArticle.title,
          ogDescription: newArticle.description,
          ogType: "article",
          articlePublishedTime: newArticle.date
        });
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16" }, _attrs))} data-v-b54f60ce>`);
      if (unref(article)) {
        _push(`<article data-v-b54f60ce><div class="mb-12 pb-8 border-b border-accent" data-v-b54f60ce><h1 class="font-serif text-5xl font-bold mb-4 leading-tight" data-v-b54f60ce>${ssrInterpolate(unref(article).title)}</h1><div class="flex justify-between items-baseline" data-v-b54f60ce><div data-v-b54f60ce><p class="text-muted text-sm mb-2" data-v-b54f60ce>By <span class="font-bold" data-v-b54f60ce>${ssrInterpolate(unref(article).author || "Staff")}</span></p><p class="text-muted text-sm" data-v-b54f60ce>${ssrInterpolate(formatDate(unref(article).date))}</p></div><span class="bg-light text-xs px-3 py-1 font-sans" data-v-b54f60ce>${ssrInterpolate(unref(article).category || "General")}</span></div></div><div class="article-content prose prose-lg max-w-none mb-16" data-v-b54f60ce>`);
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(article) }, null, _parent));
        _push(`</div><div class="mt-16 pt-8 border-t border-accent" data-v-b54f60ce><div class="bg-light p-8 rounded" data-v-b54f60ce><h3 class="font-serif text-lg font-bold mb-3" data-v-b54f60ce>About the Author</h3><p class="text-sm text-muted" data-v-b54f60ce>${ssrInterpolate(unref(article).authorBio || `${unref(article).author || "Staff"} is a writer exploring context, nuance, and perspective on global trends and ideas.`)}</p></div></div></article>`);
      } else {
        _push(`<div class="text-center py-12" data-v-b54f60ce><p data-v-b54f60ce>Article not found</p></div>`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/article/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b54f60ce"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-CEK75on0.js.map
