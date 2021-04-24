<template>
  <article class="support">
    <portal to="base-header">
      <span class="header-title" v-text="headerTitle" />
    </portal>

    <support-default />

    <portal to="base-footer">
      <span class="flex justify-center items-center"
        >Support footer content</span
      >
    </portal>
  </article>
</template>

<script>
import { ref } from "vue";
import SupportDefault from "@/components/content/SupportDefault.vue";

export default {
  components: {
    SupportDefault,
  },

  setup() {
    const headerTitle = ref("Support article");

    return {
      headerTitle,
    };
  },
};
</script>
