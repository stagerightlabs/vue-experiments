<template>
  <div>
    <h1>Toast Notifications</h1>
    <p>
      Yet another take on in-browser toast notifications.  In this case the
      notification events are triggered by an event bus, but it would be very
      easy to use alternate methods instead.  The notifications themselves can
      be dismissed via the "X" or you can wait for them to fade out.
    </p>
    <p>
      The notification container is rendedred in the main <code>App.vue</code>
      file.  When used in combination with <code>vue-router</code> this allows
      us to retain the notifications when the user navigates to a different page.
    </p>
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
    <p>
      There are some additional changes I would like to make:  It would be nice
      to allow the user to customize the timeout and flush all notifications on command.
      Also, the styling of the notifications is hard-coded; it would be nice to allow for more
      flexible display options.
    </p>
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
