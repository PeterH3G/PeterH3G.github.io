<template>
  <footer>
    <portal-target name="base-footer" />
    <data-support v-if="showDataSupport" />
    <data-github v-if="showDataGithub" />
    <strong v-text="disclaimerText" class="data disclaimer" />
  </footer>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import DataSupport from "@/components/footer/DataSupport.vue";
import DataGithub from "@/components/footer/DataGithub.vue";

export default {
  props: {
    //
  },

  components: {
    DataSupport,
    DataGithub,
  },

  setup() {
    const store = useStore();
    const disclaimerText = ref("All Rights Reserved");

    return {
      showDataSupport: computed(() => store.state.showDataSupport),
      showDataGithub: computed(() => store.state.showDataGithub),
      disclaimerText,
    };
  },
};
</script>

<style lang="scss" scoped>
.data {
  @apply flex justify-center items-center;
}
</style>