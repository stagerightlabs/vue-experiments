<template>
  <div class="typeahead relative">
    <input
      type="text"
      class="block appearance-none w-full border border-grey text-grey-dark py-3 px-4 pr-8 rounded"
      :placeholder="placeholder"
      @input="onInput($event.target.value)"
      @keyup.esc="isOpen = false"
      @blur="isOpen = false"
      @keydown.down="moveDown"
      @keydown.up="moveUp"
      @keydown.enter="select"
      v-model="keyword"
    >
    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-dark">
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>
    <ul class="flex flex-column flex-wrap w-full overflow-hidden absolute list-reset border bg-white" v-show="isOpen">
      <li v-for="(option,index) in filteredOptions"
        class="pointer w-full p-2 border-b"
        :class="{
          'bg-grey-lighter': index === highlightedPosition
        }"
        :key=index
        @click="select(option)"
        @mouseenter="highlightedPosition = index"
        @mousedown="select"
      >
      <slot name="item" :searchable="option.name"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
// http://taha-sh.com/blog/building-an-awesome-reusable-autocomplete-input-component-in-vue-21-part-one
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    allowNew: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: 'Select...',
    },
  },
  data() {
    return {
      keyword: '',
      isOpen: false,
      selectedOption: {},
      highlightedPosition: 0,
    };
  },
  methods: {
    onInput(value) {
      this.isOpen = !!value;
      this.highlightedPosition = 0;
    },
    moveDown() {
      if (!this.isOpen) {
        return;
      }
      this.highlightedPosition = (this.highlightedPosition + 1) % this.filteredOptions.length;
    },
    moveUp() {
      if (!this.isOpen) {
        return;
      }
      this.highlightedPosition = this.highlightedPosition - 1 < 0
        ? this.filteredOptions.length - 1
        : this.highlightedPosition - 1;
    },
    select() {
      this.selectedOption = this.filteredOptions[this.highlightedPosition];

      if (!this.selectedOption && this.allowNew) {
        // We are adding an existing author
        this.selectedOption = { searchable: this.keyword };
      }

      this.$emit('select', this.selectedOption);
      this.keyword = '';
      this.isOpen = false;
    },
  },
  computed: {
    filteredOptions() {
      const re = new RegExp(this.keyword, 'i');
      return this.options.filter(o => o.name.match(re));
    },
  },
};
</script>
