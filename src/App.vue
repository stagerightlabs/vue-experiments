<template>
  <div class="flex">
    <div class="w-1/5 bg-green-lightest min-h-screen flex flex-col shadow-md">
      <img src="@/assets/logo.png" alt="vue js logo" class="self-center w-32 mx-4 mt-4">
      <p class="self-center text-green-darkest m-4">Experimenting with VueJs</p>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/widget">Widget</router-link>
      </div>
      <p class="self-center m-8">
        <a
          class="no-underline text-sm text-grey-dark italic"
          href="https://gitlab.com/stage-right-labs/vue-experiments"
          target="_blank"
        > <icon name="brands/gitlab" class="w-3 h-3"></icon> View Source</a>
      </p>
    </div>
    <div class="w-4/5 bg-white p-4 pt-8">
      <div id="app" class="container">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <portal-target name="modals"></portal-target>
  </div>
</template>

<style lang="scss">
@import './assets/app.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
