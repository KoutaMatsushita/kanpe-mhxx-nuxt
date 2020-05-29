import { Plugin } from "@nuxt/types"
import createPersistedState from "vuex-persistedstate"

const plugin: Plugin = ({ store, app }) => {
  createPersistedState({
    paths: ["usePattern"]
  })(store)
  if (app.$accessor.getUsePattern) {
    app.$accessor.setUsePatternAction(app.$accessor.getUsePattern!)
  }
}

export default plugin
