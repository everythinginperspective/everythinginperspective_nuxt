import { computed, createVNode, resolveDynamicComponent, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderVNode } from "vue/server-renderer";
import { withLeadingSlash, withTrailingSlash, joinURL } from "/workspace/everythinginperspective_nuxt/node_modules/ufo/dist/index.mjs";
import { d as useRuntimeConfig } from "../server.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/workspace/everythinginperspective_nuxt/node_modules/hookable/dist/index.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/unctx/dist/index.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/workspace/everythinginperspective_nuxt/node_modules/defu/dist/defu.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/klona/dist/index.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/@unhead/vue/dist/index.mjs";
import "unhead/plugins";
import "/workspace/everythinginperspective_nuxt/node_modules/scule/dist/index.mjs";
import "@vue/devtools-api";
import "/workspace/everythinginperspective_nuxt/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/destr/dist/index.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "@unhead/schema-org/vue";
import "/workspace/everythinginperspective_nuxt/node_modules/radix3/dist/index.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/devalue/index.js";
import "/workspace/everythinginperspective_nuxt/node_modules/nuxt-og-image/node_modules/ohash/dist/index.mjs";
const ImageComponent = "img";
const _sfc_main = {
  __name: "ProseImg",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const refinedSrc = computed(() => {
      if (props.src?.startsWith("/") && !props.src.startsWith("//")) {
        const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL));
        if (_base !== "/" && !props.src.startsWith(_base)) {
          return joinURL(_base, props.src);
        }
      }
      return props.src;
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(ImageComponent)), mergeProps({
        src: unref(refinedSrc),
        alt: props.alt,
        width: props.width,
        height: props.height
      }, _attrs), null), _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ProseImg-CDfZdaWB.js.map
