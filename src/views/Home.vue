<template>
  <div class="home text-center">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illum autem itaque nostrum dolorum, consequatur neque quidem impedit quas ab tempore magnam praesentium voluptatem dolores! Dolore iste rerum sunt id.</p>
    <p>
      <coffee-message-button>Hello Coffee!</coffee-message-button>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

import CoffeeMessageButton from '@/components/CoffeeMessageButton.vue'

export default {
  name: 'home',
  components: {
    CoffeeMessageButton
  },
  data() {
    return {

    }
  }
};
</script>
