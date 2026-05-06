import { defineComponent, useSSRContext } from "vue";
import { b as useRoute, n as navigateTo } from "../server.mjs";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Volumes/B87P4/everythinginperspective_nuxt/node_modules/hookable/dist/index.mjs";
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
import "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[plural]",
  setup(__props) {
    const route = useRoute();
    const plural = route.params.plural;
    navigateTo(`/magazine/${plural}`, { redirectCode: 301 });
    return () => {
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/linked-data/[plural].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_plural_-CWyIhQ4P.js.map
