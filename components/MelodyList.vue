<template>
  <v-simple-table>
    <tbody>
      <tr v-for="melody in availableMelodies" :key="melody.pattern">
        <td>
          <Note
            :key="melody.pattern"
            :note="melody.pattern"
            :with-text="false"
          ></Note>
        </td>
        <td>{{ melody.name }}</td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script lang="ts">
import { computed, defineComponent, SetupContext } from "@vue/composition-api"
import Note from "./Note.vue"
import { ColorPatterns } from "~/weaponColorPatterns"

type Melody = {
  name: string
  pattern: string
}

type Props = {
  usePattern: null | ColorPatterns
}

export default defineComponent({
  name: "melody-list",
  components: {
    Note
  },
  props: {
    usePattern: {
      type: String,
      required: false
    }
  },
  setup(props: Props, { root }: SetupContext) {
    const availableMelodies = computed(
      () => root.$accessor.getAvailableMelodies
    )

    return {
      availableMelodies
    }
  }
})
</script>
