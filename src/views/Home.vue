<template>
  <div class="home text-center">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illum autem itaque nostrum dolorum, consequatur neque quidem impedit quas ab tempore magnam praesentium voluptatem dolores! Dolore iste rerum sunt id.</p>
    <p>
      <a @click="showModal = true" class="bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 m-4 rounded cursor-pointer">Show Modal</a>
    </p>
    <modal v-if="showModal" @closed="showModal = false">
      <div class="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
      <p class="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </modal>
  </div>
</template>

<script>
// @ is an alias to /src

import Modal from '@/components/Modal.vue'

export default {
  name: 'home',
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    }
  }
};
</script>
