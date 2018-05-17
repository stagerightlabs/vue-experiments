<template>
  <div class="home">
    <h1>Modals</h1>
    <p>Modals are common UI pattern found in many CSS/Design frameworks.  Often the impetus to move away from a CSS framework is dampened by the fear that modal (or other component) functionality won't be easy to recreate.  This component aims to solve that problem.  Some key features:</p>
    <ul class="mx-8">
      <li class="my-2">This component can be easily extended by other custom components to create different types of modal content.</li>
      <li class="my-2">A modal can be dismissed by clicking on the "close" icon, clicking outside the modal div, or by pressing <span class="keyboard-symbol">ESC</span>.</li>
      <li class="my-2">Modal content is centered in the viewport via flexbox.</li>
    </ul>
    <p class="text-center">
      <coffee-button>Hello {{ name }}!</coffee-button>
      <name-tag-button>My Name is...</name-tag-button>
    </p>
    <p>This is only possible thanks to the <a href="https://github.com/LinusBorg/portal-vue">Vue-Portal</a> component which allows us to render virtual nodes outside the scope of their source component.</p>
    <p>Heavlily inspired by <a href="https://adamwathan.me/2016/01/04/composing-reusable-modal-dialogs-with-vuejs/">this blog post</a> by Adam Wathan.</p>
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
