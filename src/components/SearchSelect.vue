<template>
  <on-click-outside :do="close">
    <div class="relative" :class="{ 'is-active': isOpen }">
      <button
        ref="button"
        @click="open"
        type="button"
        class="block w-full border px-2 py-3 bg-white rounded cursor-pointer text-left"
      >
        <span v-if="value !== null">{{ value }}</span>
        <span v-else>Select an option...</span>
      </button>
      <div
        ref="dropdown"
        v-show="isOpen"
        class="my-1 absolute pin-r pin-l bg-grey-dark p-4 shadow z-50 rounded"
      >
        <input
          ref="search"
          v-model="search"
          type="text"
          class="block mb-2 w-full px-2 py-3 bg-grey text-white rounded"
          @keydown.esc="close"
          @keydown.down="highlightNext"
          @keydown.up="highlightPrev"
          @keydown.enter.prevent="selectHighlighted"
          @keydown.tab.prevent
        >
        <ul
          ref="options"
          v-show="filteredOptions.length > 0"
          class="list-reset p-0 relative overflow-y-auto"
          style="max-height: 14rem"
        >
          <li
            class="py-2 px-3 text-white cursor-pointer rounded select-none hover:bg-grey-darker"
            :class="{'bg-green-darkest': i === highlightedIndex}"
            v-for="(option,i) in filteredOptions"
            :key="option"
            @click="select(option)"
          >{{ option }}</li>
        </ul>
        <div
          v-show="filteredOptions.length === 0"
          class="py-2 px-3 bg-grey-dark text-grey-light">
          No results found for "{{ search }}"
        </div>
      </div>
    </div>
  </on-click-outside>
</template>

<script>
import OnClickOutside from '@/components/OnClickOutside.vue';
import Popper from 'popper.js';

export default {
  components: { OnClickOutside },
  props: ['value', 'options', 'filterFunction'],
  data() {
    return {
      isOpen: false,
      search: '',
      highlightedIndex: 0,
    };
  },
  beforeDestroyed() {
    this.popper.destroy();
  },
  computed: {
    filteredOptions() {
      return this.filterFunction(this.search, this.options);
    },
  },
  methods: {
    open() {
      if (this.isOpen) {
        return;
      }

      this.isOpen = true;
      this.$nextTick(() => {
        this.setupPopper();
        this.$refs.search.focus();
        this.scrollToHighlighted();
      });
    },
    setupPopper() {
      if (this.popper === undefined) {
        this.popper = new Popper(this.$refs.button, this.$refs.dropdown, {
          placement: 'bottom',
        });
      } else {
        this.popper.scheduleUpdate();
      }
    },
    close() {
      if (!this.isOpen) {
        return;
      }

      this.isOpen = false;
      this.$refs.button.focus();
    },
    select(option) {
      this.$emit('input', option);
      this.search = '';
      this.highlightedIndex = 0;
      this.close();
    },
    selectHighlighted() {
      this.select(this.filteredOptions[this.highlightedIndex]);
    },
    scrollToHighlighted() {
      this.$refs.options.children[this.highlightedIndex].scrollIntoView({
        block: 'nearest',
      });
    },
    hightlight(index) {
      this.highlightedIndex = index;

      if (this.highlightedIndex > this.filteredOptions.length - 1) {
        this.highlightedIndex = 0;
      }

      if (this.highlightedIndex < 0) {
        this.highlightedIndex = this.filteredOptions.length - 1;
      }

      this.scrollToHighlighted();
    },
    highlightNext() {
      this.hightlight(this.highlightedIndex + 1);
    },
    highlightPrev() {
      this.hightlight(this.highlightedIndex - 1);
    },
  },
};
</script>

<style>
.is-active button {
  -webkit-box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
  box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
}
</style>
