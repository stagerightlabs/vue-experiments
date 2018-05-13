<template>
  <div>
    <h1>Toast Notifications</h1>
    <div class="flex flex-wrap xl:flex-no-wrap mt-8">
      <div class="w-full md:w-1/2 lg:w-1/4  block m-1 text-center p-4">
        <a
          @click="flash('Success!', 'success')"
          class="bg-green hover:bg-green-dark text-white font-bold
                py-2 px-4 rounded cursor-pointer"
        >Success Message</a>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/4  m-1 text-center p-4">
        <a
          @click="flash('Warning!', 'warning')"
          class="bg-yellow-light hover:bg-yellow text-black font-bold
                py-2 px-4 rounded cursor-pointer"
        >Warning Message</a>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/4  m-1 text-center p-4">
        <a
          @click="flash(`Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives - Carl Sagan`, 'info')"
          class="bg-blue hover:bg-blue-dark text-white font-bold
                py-2 px-4 rounded cursor-pointer"
        >Info Message</a>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/4  m-1 text-center p-4">
        <a
          @click="flash('Danger!', 'danger')"
          class="bg-red hover:bg-red-dark text-white font-bold
                py-2 px-4 rounded cursor-pointer"
        >Danger Message</a>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../event-bus';

export default {
  data() {
    return {

    };
  },
  methods: {
    flash(message, level) {
      EventBus.$emit('flash', message, level);
    },
  },
};
</script>

<style>

</style>
