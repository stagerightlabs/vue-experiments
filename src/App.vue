<template>
  <div class="flex flex-col md:flex-row">
    <main-menu class="w-full md:w-1/5"></main-menu>
    <div class="w-full md:w-4/5 bg-white p-4 pt-8">
      <div id="app" class="container">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <portal-target name="modals"></portal-target>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';

export default {
  components: {
    MainMenu,
  },
};
</script>


<style lang="scss">
@import './assets/app.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
