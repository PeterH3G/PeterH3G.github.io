<template>
  <article class="about">
    <portal to="base-header">
      <span class="header-title" v-text="headerTitle" />
    </portal>

    <about-default />

    <portal to="base-footer">
      <span class="flex justify-center items-center">About footer content</span>
    </portal>
  </article>
</template>

<script>
import { ref } from "vue";
import AboutDefault from "@/components/content/AboutDefault.vue";

export default {
  components: {
    AboutDefault,
  },

  setup() {
    const headerTitle = ref('About article')

    return {
      headerTitle,
    }
  }
};
</script>
