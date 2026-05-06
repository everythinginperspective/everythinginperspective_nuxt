import { _ as _sfc_main$1 } from "./ContentRenderer-q1ePKMET.js";
import { defineComponent, withAsyncContext, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "/workspace/everythinginperspective_nuxt/node_modules/hookable/dist/index.mjs";
import { b as useRoute, u as useHead, _ as _export_sfc } from "../server.mjs";
import { u as useAsyncData, q as queryCollection } from "./client-Cdb-MN8A.js";
import "/workspace/everythinginperspective_nuxt/node_modules/scule/dist/index.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/destr/dist/index.mjs";
import "property-information";
import "minimark/hast";
import "/workspace/everythinginperspective_nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/workspace/everythinginperspective_nuxt/node_modules/unctx/dist/index.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/workspace/everythinginperspective_nuxt/node_modules/defu/dist/defu.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/ufo/dist/index.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/klona/dist/index.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/@unhead/vue/dist/index.mjs";
import "unhead/plugins";
import "@vue/devtools-api";
import "/workspace/everythinginperspective_nuxt/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "@unhead/schema-org/vue";
import "/workspace/everythinginperspective_nuxt/node_modules/radix3/dist/index.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/devalue/index.js";
import "/workspace/everythinginperspective_nuxt/node_modules/nuxt-og-image/node_modules/ohash/dist/index.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `page-${slug}`,
      () => queryCollection("pages").path(`/pages/${slug}`).first()
    )), __temp = await __temp, __restore(), __temp);
    watch(() => page.value, (newPage) => {
      if (newPage) {
        useHead({
          title: `${newPage.title} | Everything in Perspective`,
          meta: [
            { name: "description", content: newPage.description || newPage.title }
          ]
        });
        useHead({
          script: [
            {
              type: "application/ld+json",
              innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://einp.surge.sh"
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: newPage.title,
                    item: `https://einp.surge.sh/page/${slug}`
                  }
                ]
              })
            }
          ]
        });
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16" }, _attrs))} data-v-0194f8b5>`);
      if (unref(page)) {
        _push(`<article data-v-0194f8b5><h1 class="font-serif text-4xl font-bold mb-8" data-v-0194f8b5>${ssrInterpolate(unref(page).title)}</h1><div class="prose prose-lg max-w-none" data-v-0194f8b5>`);
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(page) }, null, _parent));
        _push(`</div></article>`);
      } else {
        _push(`<div class="text-center py-12" data-v-0194f8b5><p data-v-0194f8b5>Page not found</p></div>`);
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
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0194f8b5"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-erfNhREE.js.map
