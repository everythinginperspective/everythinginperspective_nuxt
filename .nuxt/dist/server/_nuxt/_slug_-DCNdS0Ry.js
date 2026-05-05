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
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `page-${slug}`,
      () => queryContent(`/pages/${slug}`).findOne()
    )), __temp = await __temp, __restore(), __temp);
    watch(() => page.value, (newPage) => {
      if (newPage) {
        useSeoMeta({
          title: `${newPage.title} | Everything in Perspective`,
          description: newPage.description || newPage.title
        });
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16" }, _attrs))} data-v-9cbd84fb>`);
      if (unref(page)) {
        _push(`<article data-v-9cbd84fb><h1 class="font-serif text-4xl font-bold mb-8" data-v-9cbd84fb>${ssrInterpolate(unref(page).title)}</h1><div class="prose prose-lg max-w-none" data-v-9cbd84fb>`);
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(page) }, null, _parent));
        _push(`</div></article>`);
      } else {
        _push(`<div class="text-center py-12" data-v-9cbd84fb><p data-v-9cbd84fb>Page not found</p></div>`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9cbd84fb"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-DCNdS0Ry.js.map
