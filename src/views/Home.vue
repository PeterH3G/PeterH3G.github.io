<template>
  <article class="home">
    <portal to="base-header">
      <span class="header-title" v-text="headerTitle" />
    </portal>

    <home-default />

    <portal to="base-footer">
      <span class="flex justify-center items-center">Home footer content</span>
    </portal>
  </article>
</template>

<script>
import { ref } from "vue";
import HomeDefault from "@/components/content/HomeDefault.vue";

export default {
  name: "Home",
  
  components: {
    HomeDefault,
  },

  setup() {
    const headerTitle = ref('Home article')

    return {
      headerTitle,
    }
  }
};
</script>
