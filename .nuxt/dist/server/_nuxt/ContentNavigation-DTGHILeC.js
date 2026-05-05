import { d as useRuntimeConfig, e as useState, a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, useSlots, toRefs, computed, h, useSSRContext } from "vue";
import { hash } from "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/ohash/dist/index.mjs";
import { q as queryContent, w as withContentBase, e as encodeQueryParams, a as addPrerenderPath, s as shouldUseClientDB, j as jsonStringify, b as useContentDisabled, u as useAsyncData } from "./query-BpQ5BxIZ.js";
import { u as useContentPreview } from "./preview-DCDZIGxi.js";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/hookable/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/unctx/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/defu/dist/defu.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/ufo/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/klona/dist/index.mjs";
import "vue/server-renderer";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/destr/dist/index.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
const fetchContentNavigation = async (queryBuilder) => {
  const { content } = useRuntimeConfig().public;
  if (typeof queryBuilder?.params !== "function") {
    queryBuilder = queryContent(queryBuilder);
  }
  const params = queryBuilder.params();
  const apiPath = content.experimental.stripQueryParameters ? withContentBase(`/navigation/${`${hash(params)}.${content.integrity}`}/${encodeQueryParams(params)}.json`) : withContentBase(`/navigation/${hash(params)}.${content.integrity}.json`);
  {
    addPrerenderPath(apiPath);
  }
  if (shouldUseClientDB()) {
    const generateNavigation = await import("./client-db-U1_b9_Np.js").then((m) => m.generateNavigation);
    return generateNavigation(params);
  }
  const data = await $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: content.experimental.stripQueryParameters ? void 0 : {
      _params: jsonStringify(params),
      previewToken: useContentPreview().getPreviewToken()
    }
  });
  if (typeof data === "string" && data.startsWith("<!DOCTYPE html>")) {
    throw new Error("Not found");
  }
  return data;
};
const ContentNavigation = defineComponent({
  name: "ContentNavigation",
  props: {
    /**
     * A query to be passed to `fetchContentNavigation()`.
     */
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      query
    } = toRefs(props);
    const queryBuilder = computed(() => {
      if (typeof query.value?.params === "function") {
        return query.value.params();
      }
      return query.value;
    });
    if (!queryBuilder.value && useState("dd-navigation").value) {
      const { navigation: navigation2 } = useContentDisabled();
      return { navigation: navigation2 };
    }
    const { data: navigation } = await useAsyncData(
      `content-navigation-${hash(queryBuilder.value)}`,
      () => fetchContentNavigation(queryBuilder.value)
    );
    return { navigation };
  },
  /**
   * Navigation empty fallback
   * @slot empty
   */
  render(ctx) {
    const slots = useSlots();
    const { navigation } = ctx;
    const renderLink = (link) => h(__nuxt_component_0, { to: link._path }, () => link.title);
    const renderLinks = (data, level) => h(
      "ul",
      level ? { "data-level": level } : null,
      data.map((link) => {
        if (link.children) {
          return h("li", null, [renderLink(link), renderLinks(link.children, level + 1)]);
        }
        return h("li", null, renderLink(link));
      })
    );
    const defaultNode = (data) => renderLinks(data, 0);
    return slots?.default ? slots.default({ navigation, ...this.$attrs }) : defaultNode(navigation);
  }
});
const _sfc_main = ContentNavigation;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ContentNavigation-DTGHILeC.js.map
