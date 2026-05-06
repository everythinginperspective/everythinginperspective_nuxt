import { _ as _sfc_main$1 } from './ContentRenderer-q1ePKMET.mjs';
import { defineComponent, withAsyncContext, watch, mergeProps, unref, useSSRContext } from 'file:///workspace/everythinginperspective_nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'file:///workspace/everythinginperspective_nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, b as useRoute, u as useHead } from './server.mjs';
import { u as useAsyncData, q as queryCollection } from './client-Cdb-MN8A.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/scule/dist/index.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/destr/dist/index.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/property-information/index.js';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/minimark/dist/hast.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/consola/dist/index.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/h3/dist/index.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/ufo/dist/index.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/node-mock-http/dist/index.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/unstorage/dist/index.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/klona/dist/index.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/defu/dist/defu.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/unctx/dist/index.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/radix3/dist/index.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/devalue/index.js';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/nuxt-og-image/node_modules/ohash/dist/index.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/@nuxtjs/i18n/node_modules/vue-router/vue-router.node.mjs';
import 'node:fs';
import 'node:url';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/pathe/dist/index.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/nuxtseo-shared/dist/utils.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/@nuxt/content/node_modules/pathe/dist/index.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/db0/dist/connectors/better-sqlite3.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/vue-router/vue-router.node.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/unhead/dist/plugins.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/nuxt/node_modules/ohash/dist/index.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/@unhead/schema-org/dist/vue.mjs';
import '../_/server.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/unhead/dist/server.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/unhead/dist/utils.mjs';
import 'file:///workspace/everythinginperspective_nuxt/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const { data: article } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `article-${slug}`,
      () => queryCollection("articles").path(`/articles/${slug}`).first()
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
        const imageUrl = newArticle.image || "/og-default.png";
        const publishedDate = newArticle.date ? new Date(newArticle.date).toISOString() : (/* @__PURE__ */ new Date()).toISOString();
        useHead({
          title: `${newArticle.title} | Everything in Perspective`,
          meta: [
            { name: "description", content: newArticle.description },
            { property: "og:title", content: newArticle.title },
            { property: "og:description", content: newArticle.description },
            { property: "og:type", content: "article" },
            { property: "og:image", content: imageUrl },
            { property: "og:image:alt", content: newArticle.imageAlt || newArticle.title },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:image", content: imageUrl },
            { property: "article:published_time", content: publishedDate },
            { property: "article:modified_time", content: publishedDate },
            { property: "article:author", content: newArticle.author || "Everything in Perspective" },
            { property: "article:section", content: newArticle.category || "General" }
          ]
        });
        useHead({
          script: [
            {
              type: "application/ld+json",
              innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "NewsArticle",
                headline: newArticle.title,
                description: newArticle.description,
                image: imageUrl,
                author: {
                  "@type": "Person",
                  name: newArticle.author || "Everything in Perspective"
                },
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
                dateModified: publishedDate,
                articleBody: newArticle.body || ""
              })
            },
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
                    name: "Articles",
                    item: "https://einp.surge.sh/magazine/articles"
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: newArticle.title,
                    item: `https://einp.surge.sh/article/${slug}`
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
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16" }, _attrs))} data-v-cbbd3f20>`);
      if (unref(article)) {
        _push(`<article data-v-cbbd3f20><div class="mb-12 pb-8 border-b border-accent" data-v-cbbd3f20><h1 class="font-serif text-5xl font-bold mb-4 leading-tight" data-v-cbbd3f20>${ssrInterpolate(unref(article).title)}</h1><div class="flex justify-between items-baseline" data-v-cbbd3f20><div data-v-cbbd3f20><p class="text-muted text-sm mb-2" data-v-cbbd3f20>By <span class="font-bold" data-v-cbbd3f20>${ssrInterpolate(unref(article).author || "Staff")}</span></p><p class="text-muted text-sm" data-v-cbbd3f20>${ssrInterpolate(formatDate(unref(article).date))}</p></div><span class="bg-light text-xs px-3 py-1 font-sans" data-v-cbbd3f20>${ssrInterpolate(unref(article).category || "General")}</span></div></div><div class="article-content prose prose-lg max-w-none mb-16" data-v-cbbd3f20>`);
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(article) }, null, _parent));
        _push(`</div><div class="mt-16 pt-8 border-t border-accent" data-v-cbbd3f20><div class="bg-light p-8 rounded" data-v-cbbd3f20><h3 class="font-serif text-lg font-bold mb-3" data-v-cbbd3f20>About the Author</h3><p class="text-sm text-muted" data-v-cbbd3f20>${ssrInterpolate(unref(article).authorBio || `${unref(article).author || "Staff"} is a writer exploring context, nuance, and perspective on global trends and ideas.`)}</p></div></div></article>`);
      } else {
        _push(`<div class="text-center py-12" data-v-cbbd3f20><p data-v-cbbd3f20>Article not found</p></div>`);
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
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cbbd3f20"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-BemfUhj0.mjs.map
