<template>
  <portal to="modals" v-if="modalVisible">
    <div class="absolute fixed pin w-full h-full bg-smoke-light flex" @click.self="close">
      <div class="max-w-md w-full lg:flex self-center m-auto">
        <div class="border border-grey-light lg:border lg:border-grey-light
          bg-white lg:rounded p-4 flex flex-col justify-between
          leading-normal w-full">
          <div class="">
            <span @click="close">
              <icon name="times" class="float-right cursor-pointer"></icon>
            </span>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </portal>
</template>

<script>
import 'vue-awesome/icons/times';

export default {
  props: ['modalVisible'],
  data() {
    return {
    };
  },
  methods: {
    close() {
      this.$emit('modal-closed');
    },
  },
  mounted() {
    // A function to handle an escape key event
    const escapeHandler = (e) => {
      if (this.modalVisible && e.key === 'Escape') {
        this.close();
      }
    };
    // Bind the event
    document.addEventListener('keydown', escapeHandler);

    // Register this event listener to be removed when the component is destroyed
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler);
    });
  },
};

</script>
