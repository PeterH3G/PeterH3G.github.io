<template>
  <Navbar />
  <Header />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
</template>

<script>
import Navbar from "@/components/base/BaseNavbar.vue";
import Header from "@/components/base/BaseHeader.vue";
import Footer from "@/components/base/BaseFooter.vue";

export default {
  components: {
    Navbar,
    Header,
    Footer,
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss">
$base-font-size: .75rem;
$base-font-color: purple;

// Full height & width, No margins & paddings...
html,
body,
#app {
  @apply m-0 p-0 w-full h-full;
}

// App defaults...
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: $base-font-size;
  color: $base-font-color;

  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  .material-icons {
    @apply text-purple-900;
  }
}

// Grid settings...
#app {
  display: grid;
  grid-template-rows: auto auto 1fr auto;
}

header {
  .header-title {
    @apply font-extrabold text-3xl;
  }
}

article {
  @apply p-4;
  section {
    @apply flex flex-col justify-center items-center;
  }
}

// Router Transitions...
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
