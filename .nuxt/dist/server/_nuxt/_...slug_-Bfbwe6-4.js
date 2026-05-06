import { _ as _sfc_main$1 } from "./ContentRenderer-q1ePKMET.js";
import { defineComponent, withAsyncContext, computed, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug.join("/");
    const ldCollection = slug.split("/")[0] || "articles";
    const { data: content } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `ld-${slug}`,
      () => queryCollection(ldCollection).path(`/${slug}`).first()
    )), __temp = await __temp, __restore(), __temp);
    const { data: graph } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "graph-data",
      () => $fetch("/graph.json").catch(() => null)
    )), __temp = await __temp, __restore(), __temp);
    const connections = computed(() => {
      if (!graph.value?.nodes || !content.value?.path) return null;
      const node = graph.value.nodes.find((n) => n.path === content.value.path);
      return node?.connections || null;
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
      const _component_ContentRenderer = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16" }, _attrs))} data-v-e8124240>`);
      if (unref(content)) {
        _push(`<article data-v-e8124240><div class="mb-12 pb-8 border-b border-accent" data-v-e8124240><h1 class="font-serif text-5xl font-bold mb-4 leading-tight" data-v-e8124240>${ssrInterpolate(unref(content).title)}</h1><div class="flex justify-between items-baseline" data-v-e8124240><div data-v-e8124240>`);
        if (unref(content).author) {
          _push(`<p class="text-muted text-sm mb-2" data-v-e8124240>By <span class="font-bold" data-v-e8124240>${ssrInterpolate(unref(content).author)}</span></p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(content).date) {
          _push(`<p class="text-muted text-sm" data-v-e8124240>${ssrInterpolate(formatDate(unref(content).date))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(content).category) {
          _push(`<span class="bg-light text-xs px-3 py-1 font-sans" data-v-e8124240>${ssrInterpolate(unref(content).category)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="mb-12 pb-12 border-b-2 border-accent" data-v-e8124240><h2 class="font-serif text-2xl font-bold mb-4" data-v-e8124240>Graph Connections</h2>`);
        if (unref(connections)) {
          _push(`<div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-e8124240>`);
          if (unref(connections).authors?.length) {
            _push(`<div data-v-e8124240><h3 class="font-bold mb-2" data-v-e8124240>Authors (${ssrInterpolate(unref(connections).authors.length)})</h3><ul class="text-sm space-y-1" data-v-e8124240><!--[-->`);
            ssrRenderList(unref(connections).authors, (author) => {
              _push(`<li data-v-e8124240>${ssrInterpolate(author)}</li>`);
            });
            _push(`<!--]--></ul></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(connections).categories?.length) {
            _push(`<div data-v-e8124240><h3 class="font-bold mb-2" data-v-e8124240>Categories (${ssrInterpolate(unref(connections).categories.length)})</h3><ul class="text-sm space-y-1" data-v-e8124240><!--[-->`);
            ssrRenderList(unref(connections).categories, (cat) => {
              _push(`<li data-v-e8124240>${ssrInterpolate(cat)}</li>`);
            });
            _push(`<!--]--></ul></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(connections).tags?.length) {
            _push(`<div data-v-e8124240><h3 class="font-bold mb-2" data-v-e8124240>Tags (${ssrInterpolate(unref(connections).tags.length)})</h3><ul class="text-sm space-y-1" data-v-e8124240><!--[-->`);
            ssrRenderList(unref(connections).tags, (tag) => {
              _push(`<li data-v-e8124240>${ssrInterpolate(tag)}</li>`);
            });
            _push(`<!--]--></ul></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="prose prose-lg max-w-none mb-16" data-v-e8124240>`);
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(content) }, null, _parent));
        _push(`</div></article>`);
      } else {
        _push(`<div class="text-center py-12" data-v-e8124240><p data-v-e8124240>Content not found</p></div>`);
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
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e8124240"]]);
export {
  ____slug_ as default
};
//# sourceMappingURL=_...slug_-Bfbwe6-4.js.map
