import Vue from "vue"
import { accessorType } from "~/store"

declare module "*.vue" {
  export default Vue
}

declare module "vue/types/vue" {
  interface Vue {
    $accessor: typeof accessorType
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}
