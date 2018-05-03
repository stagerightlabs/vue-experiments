<template>
  <div class="home text-center">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illum autem itaque nostrum dolorum, consequatur neque quidem impedit quas ab tempore magnam praesentium voluptatem dolores! Dolore iste rerum sunt id.</p>
    <p>
      <coffee-button>Hello {{ name }}!</coffee-button>
      <name-tag-button @new-name="changeName">My Name is...</name-tag-button>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

import CoffeeMessage from '@/components/CoffeeMessage.vue'
import NameTag from '@/components/NameTag.vue'

export default {
  name: 'home',
  components: {
    'coffee-button': CoffeeMessage,
    'name-tag-button': NameTag,
  },
  data() {
    return {
      name: 'Coffee'
    }
  },
  methods: {
    changeName(name) {
      this.name = name
    }
  }
};
</script>
