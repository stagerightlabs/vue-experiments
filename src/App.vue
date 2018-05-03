<template>
  <div id="app" class="container">
    <div id="nav" class="text-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/app.scss';

#nav {
  padding: 30px;
  a,a:visited {
    font-weight: bold;
    @apply text-teal;
    &.router-link-exact-active {
      @apply text-grey no-underline cursor-auto;
    }
  }
}
body {
  @apply bg-blue-lightest font-sans;
}
p {
  @apply m-4;
}

</style>
