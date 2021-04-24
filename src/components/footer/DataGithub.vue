<template>
  <div class="data github">
    <a
      :href="github.userUrl"
      target="blank_"
      class="flex justify-center items-center"
    >
      <strong v-text="github.userName + '@GitHub'" />
      <span class="material-icons">
        outbound
      </span>
    </a>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const github = ref({
      userName: process.env.VUE_APP_GH_USER_NAME,
      userUrl: process.env.VUE_APP_GH_USER_URL,
    });

    return {
      github,
    };
  },
};
</script>
