<template>
  <div class="bg-green-lightest md:min-h-screen flex flex-col shadow-md">
    <div id="masthead" class="flex flex-row md:flex-col justify-between items-center">
      <img
        src="@/assets/logo.png"
        alt="vue js logo"
        class="md:self-center w-8 md:w-32 m-2 md:mx-4 md:mt-4"
      >
      <p class="self-start md:self-center text-green-darkest m-4 text-center">
        Experimenting with VueJs
      </p>
      <a
        class="md:hidden self-end text-right p-2 m-2 border border-green-darkest rounded-sm"
        href="#"
        @click="toggleMenu"
      >
        <icon name="bars" class="text-green-darkest"></icon>
      </a>
    </div>
    <transition name="slide-fade">
      <div id="nav" ref="nav" class="hidden md:block">
        <router-link to="/">Modals</router-link>
        <router-link to="/content-editing">Content Editing</router-link>
        <router-link to="/toast-notifications">Toast Notifications</router-link>
        <router-link to="/typeahead">Typeahead</router-link>
        <router-link to="/vue-pickaday">Vue Pikaday Demo</router-link>
        <router-link to="/draggable-sorting">Draggable Sorting</router-link>
      </div>
    </transition>
    <p class="self-center mt-8 hidden md:flex md:flex-col">
      <a
        class="no-underline text-sm text-grey-dark italic text-center mb-2"
        href="https://gitlab.com/stage-right-labs/vue-experiments"
        target="_blank"
      > <icon name="brands/gitlab" class="w-3 h-3"></icon> View Source</a>
      <img
        src="https://gitlab.com/stage-right-labs/vue-experiments/badges/master/build.svg"
        aria-hidden="true"
        class="project-badge"
      >
    </p>
  </div>
</template>

<script>
import 'vue-awesome/icons/bars';

export default {
  methods: {
    toggleMenu() {
      if (this.$refs.nav.classList.contains('hidden')) {
        this.$refs.nav.classList.remove('hidden');
      } else {
        this.$refs.nav.classList.add('hidden');
      }
    },
  },
};
</script>

<style>

</style>
