<template>
  <div class="flex flex-col md:flex-row">
    <main-menu class="w-full md:w-1/6"></main-menu>
    <div class="w-full md:w-5/6 bg-white p-4 pt-8">
      <div id="app" class="container">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <!-- Alert Stack -->
    <flash-stack></flash-stack>
    <!-- Portals -->
    <portal-target name="modals"></portal-target>
  </div>
</template>

<script>
import 'vue-awesome/icons/brands/github';
import MainMenu from '@/components/MainMenu.vue';
import FlashStack from '@/components/FlashStack.vue';

export default {
  components: {
    MainMenu, FlashStack,
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
