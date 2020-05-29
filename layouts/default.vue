<template>
  <v-app>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue"
import config from "~/config"
export default Vue.extend({
  data() {
    return { ...config }
  },
  mounted() {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
    this.applyTheme(isDarkMode.matches)
    isDarkMode.addEventListener("change", () => {
      this.applyTheme(isDarkMode.matches)
    })
  },
  methods: {
    applyTheme(isDark: boolean) {
      this.$vuetify.theme.dark = isDark
    }
  }
})
</script>
