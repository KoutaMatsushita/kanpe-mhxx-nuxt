<template>
  <v-app>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue"

const errorTexts = {
  pageNotFound: "404 Not Found",
  otherError: "An error occurred"
}

export default Vue.extend({
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return errorTexts
  },
  head() {
    const title =
      this.error.statusCode === 404
        ? errorTexts.pageNotFound
        : errorTexts.otherError
    return {
      title: `${title} - かりぴーかんぺ for MHXX`
    }
  }
})
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
