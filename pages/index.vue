<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card width="100%" min-width="100%">
        <v-select
          :items="weaponColorPatterns"
          :value="usePattern"
          label="旋律パターン"
          class="pa-4"
          @change="setUsePattern"
        >
          <template v-slot:selection="data">
            <Note :key="data.item" :note="data.item" :with-text="true"></Note>
          </template>
          <template v-slot:item="data">
            <Note :key="data.item" :note="data.item" :with-text="true"></Note>
          </template>
        </v-select>
        <MelodyList :use-pattern="usePattern"></MelodyList>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { computed, defineComponent, SetupContext } from "@vue/composition-api"
import Note from "~/components/Note.vue"
import MelodyList from "~/components/MelodyList.vue"
import { ColorPatterns } from "~/weaponColorPatterns"

export default defineComponent({
  components: {
    Note,
    MelodyList
  },
  setup(_props: any, { root }: SetupContext) {
    const weaponColorPatterns = computed(
      () => root.$accessor.getWeaponColorPatterns
    )
    const usePattern = computed(() => root.$accessor.getUsePattern)
    const setUsePattern = (pattern: ColorPatterns) => {
      root.$accessor.setUsePatternAction(pattern)
    }
    return {
      weaponColorPatterns,
      usePattern,
      setUsePattern
    }
  }
})
</script>
