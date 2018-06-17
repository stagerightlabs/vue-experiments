<template>
  <button @click="show" class="bg-green-dark hover:bg-green-darker text-white font-bold
    py-2 px-4 m-4 rounded cursor-pointer">
    <slot>Click Me!</slot>
    <modal @modal-closed="close" :modal-visible="visible">
      <div class="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
      <p class="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil.</p>
    </modal>
  </button>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
  },
};
</script>
