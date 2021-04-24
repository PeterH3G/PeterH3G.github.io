<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/support">Support</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  min-height: 50px;
  @apply flex justify-center items-center;

  a {
    font-weight: bold;
    color: #2c3e50;

    @apply flex justify-center items-center h-full px-2;
    @apply hover:bg-purple-900 hover:bg-opacity-20 hover:text-white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
