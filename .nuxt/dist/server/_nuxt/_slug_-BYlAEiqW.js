import { defineComponent, useSSRContext, withAsyncContext, computed, watch, mergeProps, unref, createVNode, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderVNode } from "vue/server-renderer";
import { _ as _sfc_main$7 } from "./ContentRenderer-CqPa3RfC.js";
import { _ as _export_sfc, b as useRoute, c as createError, u as useHead } from "../server.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/hookable/dist/index.mjs";
import { a as getContentTypeBySingular } from "./useContentTypes-DiGmzXH6.js";
import { u as useAsyncData } from "./asyncData-BTZGG7Mr.js";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/scule/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/destr/dist/index.mjs";
import "property-information";
import "minimark/hast";
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
import "@vue/devtools-api";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "@unhead/schema-org/vue";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/radix3/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/devalue/index.js";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt-og-image/node_modules/ohash/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ArticleTemplate",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-cc1ebc4b><div class="mb-12 pb-8 border-b border-accent" data-v-cc1ebc4b><h1 class="font-serif text-5xl font-bold mb-4 leading-tight" data-v-cc1ebc4b>${ssrInterpolate(__props.content.title)}</h1><div class="flex justify-between items-baseline" data-v-cc1ebc4b><div data-v-cc1ebc4b><p class="text-muted text-sm mb-2" data-v-cc1ebc4b>By <span class="font-bold" data-v-cc1ebc4b>${ssrInterpolate(__props.content.author || "Staff")}</span></p><p class="text-muted text-sm" data-v-cc1ebc4b>${ssrInterpolate(formatDate(__props.content.date))}</p></div><span class="bg-light text-xs px-3 py-1 font-sans" data-v-cc1ebc4b>${ssrInterpolate(__props.content.category || "General")}</span></div></div><div class="article-content prose prose-lg max-w-none mb-16" data-v-cc1ebc4b>`);
      _push(ssrRenderComponent(_component_ContentRenderer, { value: __props.content }, null, _parent));
      _push(`</div><div class="mt-16 pt-8 border-t border-accent" data-v-cc1ebc4b><div class="bg-light p-8 rounded" data-v-cc1ebc4b><h3 class="font-serif text-lg font-bold mb-3" data-v-cc1ebc4b>About the Author</h3><p class="text-sm text-muted" data-v-cc1ebc4b>${ssrInterpolate(__props.content.authorBio || `${__props.content.author || "Staff"} is a writer exploring context, nuance, and perspective on global trends and ideas.`)}</p></div></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/magazine/ArticleTemplate.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ArticleTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-cc1ebc4b"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PerspectiveTemplate",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6a5f9f45><div class="mb-12 pb-8 border-b-2 border-accent" data-v-6a5f9f45><div class="text-xs uppercase tracking-wider text-accent mb-3 font-bold" data-v-6a5f9f45>Perspective</div><h1 class="font-serif text-6xl font-bold mb-6 leading-tight" data-v-6a5f9f45>${ssrInterpolate(__props.content.title)}</h1>`);
      if (__props.content.subtitle) {
        _push(`<p class="text-2xl text-muted mb-6" data-v-6a5f9f45>${ssrInterpolate(__props.content.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex justify-between items-baseline" data-v-6a5f9f45><div data-v-6a5f9f45><p class="text-muted text-sm mb-2" data-v-6a5f9f45>By <span class="font-bold" data-v-6a5f9f45>${ssrInterpolate(__props.content.author || "Editorial Team")}</span></p><p class="text-muted text-sm" data-v-6a5f9f45>${ssrInterpolate(formatDate(__props.content.date))}</p></div>`);
      if (__props.content.category) {
        _push(`<span class="bg-accent text-white text-xs px-3 py-1 font-sans" data-v-6a5f9f45>${ssrInterpolate(__props.content.category)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="perspective-content prose prose-xl max-w-none mb-16" data-v-6a5f9f45>`);
      _push(ssrRenderComponent(_component_ContentRenderer, { value: __props.content }, null, _parent));
      _push(`</div><div class="mt-16 pt-8 border-t-2 border-accent" data-v-6a5f9f45><div class="bg-accent text-white p-8 rounded" data-v-6a5f9f45><h3 class="font-serif text-xl font-bold mb-3" data-v-6a5f9f45>This Perspective</h3><p class="text-sm" data-v-6a5f9f45>${ssrInterpolate(__props.content.summary || "An exploration of context, nuance, and multiple viewpoints on this topic.")}</p></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/magazine/PerspectiveTemplate.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const PerspectiveTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-6a5f9f45"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BookTemplate",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f57d04ed><div class="mb-12 text-center" data-v-f57d04ed><div class="text-xs uppercase tracking-wider text-muted mb-3" data-v-f57d04ed>Book</div><h1 class="font-serif text-5xl font-bold mb-4 leading-tight" data-v-f57d04ed>${ssrInterpolate(__props.content.title)}</h1>`);
      if (__props.content.author) {
        _push(`<p class="text-xl text-muted mb-2" data-v-f57d04ed>by ${ssrInterpolate(__props.content.author)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.content.year) {
        _push(`<p class="text-sm text-muted mb-6" data-v-f57d04ed>(${ssrInterpolate(__props.content.year)})</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.content.image) {
        _push(`<div class="max-w-md mx-auto mb-8" data-v-f57d04ed><img${ssrRenderAttr("src", __props.content.image)}${ssrRenderAttr("alt", __props.content.title)} class="w-full shadow-lg" data-v-f57d04ed></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="book-content prose prose-lg max-w-none mb-16" data-v-f57d04ed>`);
      _push(ssrRenderComponent(_component_ContentRenderer, { value: __props.content }, null, _parent));
      _push(`</div>`);
      if (__props.content.isbn || __props.content.publisher) {
        _push(`<div class="mt-16 pt-8 border-t border-accent" data-v-f57d04ed><div class="bg-light p-6 rounded text-sm" data-v-f57d04ed><h3 class="font-serif text-base font-bold mb-3" data-v-f57d04ed>Publication Details</h3>`);
        if (__props.content.publisher) {
          _push(`<p class="mb-1" data-v-f57d04ed><strong data-v-f57d04ed>Publisher:</strong> ${ssrInterpolate(__props.content.publisher)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.content.isbn) {
          _push(`<p class="mb-1" data-v-f57d04ed><strong data-v-f57d04ed>ISBN:</strong> ${ssrInterpolate(__props.content.isbn)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.content.pages) {
          _push(`<p class="mb-1" data-v-f57d04ed><strong data-v-f57d04ed>Pages:</strong> ${ssrInterpolate(__props.content.pages)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/magazine/BookTemplate.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const BookTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-f57d04ed"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PageTemplate",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a120cbbe><div class="mb-12 pb-8 border-b border-accent" data-v-a120cbbe><h1 class="font-serif text-4xl font-bold mb-4 leading-tight" data-v-a120cbbe>${ssrInterpolate(__props.content.title)}</h1>`);
      if (__props.content.description) {
        _push(`<p class="text-lg text-muted" data-v-a120cbbe>${ssrInterpolate(__props.content.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="page-content prose prose-lg max-w-none" data-v-a120cbbe>`);
      _push(ssrRenderComponent(_component_ContentRenderer, { value: __props.content }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/magazine/PageTemplate.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PageTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a120cbbe"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PersonTemplate",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7402dcde><div class="mb-12 text-center" data-v-7402dcde>`);
      if (__props.content.image) {
        _push(`<div class="mb-6" data-v-7402dcde><img${ssrRenderAttr("src", __props.content.image)}${ssrRenderAttr("alt", __props.content.title)} class="w-32 h-32 rounded-full mx-auto object-cover" data-v-7402dcde></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="font-serif text-4xl font-bold mb-2" data-v-7402dcde>${ssrInterpolate(__props.content.title)}</h1>`);
      if (__props.content.role) {
        _push(`<p class="text-lg text-muted mb-4" data-v-7402dcde>${ssrInterpolate(__props.content.role)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.content.social) {
        _push(`<div class="flex justify-center gap-4 text-sm" data-v-7402dcde>`);
        if (__props.content.social.twitter) {
          _push(`<a${ssrRenderAttr("href", __props.content.social.twitter)} class="text-accent hover:underline" data-v-7402dcde>Twitter</a>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.content.social.linkedin) {
          _push(`<a${ssrRenderAttr("href", __props.content.social.linkedin)} class="text-accent hover:underline" data-v-7402dcde>LinkedIn</a>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.content.social.website) {
          _push(`<a${ssrRenderAttr("href", __props.content.social.website)} class="text-accent hover:underline" data-v-7402dcde>Website</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="person-content prose prose-lg max-w-none mb-16" data-v-7402dcde>`);
      _push(ssrRenderComponent(_component_ContentRenderer, { value: __props.content }, null, _parent));
      _push(`</div><div class="mt-16 pt-8 border-t border-accent" data-v-7402dcde><h3 class="font-serif text-xl font-bold mb-4" data-v-7402dcde>Contributions</h3><p class="text-sm text-muted" data-v-7402dcde>Articles and perspectives by ${ssrInterpolate(__props.content.title)} will appear here.</p></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/magazine/PersonTemplate.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PersonTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7402dcde"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LanguageTemplate",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-36fc138d><div class="mb-12 pb-8 border-b border-accent text-center" data-v-36fc138d><div class="text-6xl mb-4" data-v-36fc138d>🌐</div><h1 class="font-serif text-4xl font-bold mb-2" data-v-36fc138d>${ssrInterpolate(__props.content.title)}</h1>`);
      if (__props.content.code) {
        _push(`<p class="text-sm text-muted uppercase tracking-wider" data-v-36fc138d>Language Code: ${ssrInterpolate(__props.content.code)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="language-content prose prose-lg max-w-none mb-16" data-v-36fc138d>`);
      _push(ssrRenderComponent(_component_ContentRenderer, { value: __props.content }, null, _parent));
      _push(`</div><div class="mt-16 pt-8 border-t border-accent" data-v-36fc138d><h3 class="font-serif text-xl font-bold mb-4" data-v-36fc138d>Content in ${ssrInterpolate(__props.content.title)}</h3><p class="text-sm text-muted" data-v-36fc138d>Articles, perspectives, and pages available in this language will be listed here.</p></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/magazine/LanguageTemplate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LanguageTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-36fc138d"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const singular = route.params.singular;
    const slug = route.params.slug;
    const contentType = ([__temp, __restore] = withAsyncContext(() => getContentTypeBySingular(singular)), __temp = await __temp, __restore(), __temp);
    if (!contentType) {
      throw createError({ statusCode: 404, message: "Content type not found" });
    }
    const { data: content } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `${singular}-${slug}`,
      () => queryContent(`/${contentType.folder}/${slug}`).findOne()
    )), __temp = await __temp, __restore(), __temp);
    const templateMap = {
      article: ArticleTemplate,
      perspective: PerspectiveTemplate,
      book: BookTemplate,
      page: PageTemplate,
      person: PersonTemplate,
      language: LanguageTemplate
    };
    const templateComponent = computed(() => {
      return templateMap[singular] || PageTemplate;
    });
    watch(() => content.value, (newContent) => {
      if (newContent) {
        const imageUrl = newContent.image || "/og-default.png";
        const publishedDate = newContent.date ? new Date(newContent.date).toISOString() : (/* @__PURE__ */ new Date()).toISOString();
        useHead({
          title: `${newContent.title} | Everything in Perspective`,
          meta: [
            { name: "description", content: newContent.description },
            { property: "og:title", content: newContent.title },
            { property: "og:description", content: newContent.description },
            { property: "og:type", content: singular === "article" || singular === "perspective" ? "article" : "website" },
            { property: "og:image", content: imageUrl },
            { property: "og:image:alt", content: newContent.imageAlt || newContent.title },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:image", content: imageUrl }
          ]
        });
        const schemaType = singular === "article" || singular === "perspective" ? "NewsArticle" : singular === "book" ? "Book" : singular === "person" ? "Person" : "WebPage";
        useHead({
          script: [
            {
              type: "application/ld+json",
              innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": schemaType,
                headline: newContent.title,
                description: newContent.description,
                image: imageUrl,
                author: newContent.author ? {
                  "@type": "Person",
                  name: newContent.author
                } : void 0,
                publisher: {
                  "@type": "Organization",
                  name: "Everything in Perspective",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://einp.surge.sh/logo.png",
                    width: 250,
                    height: 60
                  }
                },
                datePublished: publishedDate,
                dateModified: publishedDate
              })
            }
          ]
        });
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16" }, _attrs))}>`);
      if (unref(content)) {
        _push(`<article>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(templateComponent)), { content: unref(content) }, null), _parent);
        _push(`</article>`);
      } else {
        _push(`<div class="text-center py-12"><p>Content not found</p></div>`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/magazine/[singular]/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-BYlAEiqW.js.map
