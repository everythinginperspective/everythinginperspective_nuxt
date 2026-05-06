import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/workspace/everythinginperspective_nuxt/node_modules/hookable/dist/index.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/unctx/dist/index.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/workspace/everythinginperspective_nuxt/node_modules/defu/dist/defu.mjs";
import "/workspace/everythinginperspective_nuxt/node_modules/ufo/dist/index.mjs";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<ol${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</ol>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseOl = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ProseOl as default
};
//# sourceMappingURL=ProseOl-CzdVDZok.js.map
