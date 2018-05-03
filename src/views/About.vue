<template>
  <div class="info text-center">
    <HelloWorld msg="About this Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'about',
  components: {
    HelloWorld
  }
}
</script>
