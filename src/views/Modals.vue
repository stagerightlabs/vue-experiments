<template>
  <div class="home">
    <h1>Modals</h1>
    <p class="text-center">
      <coffee-button>Hello {{ name }}!</coffee-button>
      <name-tag-button>My Name is...</name-tag-button>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

import CoffeeMessage from '@/components/CoffeeMessage.vue';
import NameTag from '@/components/NameTag.vue';
import { mapState } from 'vuex';

export default {
  name: 'home',
  components: {
    'coffee-button': CoffeeMessage,
    'name-tag-button': NameTag,
  },
  computed: {
    ...mapState([
      'name',
    ]),
  },
  data() {
    return {
    };
  },
};
</script>
