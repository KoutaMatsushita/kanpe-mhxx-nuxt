<template>
  <span class="note" v-html="noteHTML"></span>
</template>

<script>
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  name: "note",
  props: {
    note: {
      type: String,
      required: true
    },
    withText: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  setup({ note, withText }) {
    if (withText) {
      return {
        noteHTML: note
          .replace(/白/g, "<span class='white-note'>♪</span><span>白</span>")
          .replace(/紫/g, "<span class='purple-note'>♪</span><span>紫</span>")
          .replace(/赤/g, "<span class='red-note'>♪</span><span>赤</span>")
          .replace(/黄/g, "<span class='yellow-note'>♪</span><span>黄</span>")
          .replace(/青/g, "<span class='blue-note'>♪</span><span>青</span>")
          .replace(/緑/g, "<span class='green-note'>♪</span><span>緑</span>")
          .replace(/橙/g, "<span class='orange-note'>♪</span><span>橙</span>")
          .replace(
            /空/g,
            "<span class='light-blue-note'>♪</span><span>空</span>"
          )
      }
    } else {
      return {
        noteHTML: note
          .replace(/白/g, "</span><span class='white-note'>♪</span>")
          .replace(/紫/g, "<span class='purple-note'>♪</span>")
          .replace(/赤/g, "<span class='red-note'>♪</span>")
          .replace(/黄/g, "<span class='yellow-note'>♪</span>")
          .replace(/青/g, "<span class='blue-note'>♪</span>")
          .replace(/緑/g, "<span class='green-note'>♪</span>")
          .replace(/橙/g, "<span class='orange-note'>♪</span>")
          .replace(/空/g, "<span class='light-blue-note'>♪</span>")
      }
    }
  }
})
</script>

<style lang="scss">
.note {
  & > .white-note {
    color: white;
    -webkit-text-stroke: 0.1px black;
    @media (prefers-color-scheme: dark) {
      -webkit-text-stroke: unset;
    }
  }

  & > .purple-note {
    color: purple;
  }

  & > .red-note {
    color: red;
  }

  & > .yellow-note {
    color: yellow;
  }

  & > .blue-note {
    color: blue;
  }

  & > .green-note {
    color: green;
  }

  & > .orange-note {
    color: orange;
  }

  & > .light-blue-note {
    color: lightblue;
  }
}
</style>
