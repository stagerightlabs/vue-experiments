<template>
  <div
    @keydown.esc="escape"
    @keydown.shift.enter.prevent="blur"
    @input="input"
    @blur="blur"
    @focusin="focus"
    :tabindex="tabindex"
    :type="type"
    :placeholder="placeholder"
    :aria-labelledby="ariaLabelledby"
    :aria-describedby="ariaDescribedby"
    :autofocus="autofocus"
    contenteditable="true"
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: '',
    },
    tabindex: {
      default: 0,
    },
    type: {
      default: 'text',
    },
    placeholder: {
      default: '',
    },
    ariaLabelledby: {
      default: '',
    },
    ariaDescribedby: {
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      editing: false,
      original: '',
    };
  },
  methods: {
    backup() {
      this.original = this.$el.innerText;
    },
    restore() {
      this.$el.innerText = this.original;
    },
    sync() {
      this.$emit('input', this.$el.innerText);
    },
    focus() {
      console.log('focus');
      this.backup();
      this.$nextTick(() => this.$el.focus());
    },
    blur() {
      console.log('blurred');
      this.$el.blur();
      this.sync();
      // this.backup();
    },
    input() {
      this.sync();
    },
    escape() {
      this.restore();
      this.sync();
      this.blur();
    },
  },
  mounted() {
    this.$el.innerText = this.value;
    this.backup();
  },
  watch: {
    value() {
      if (document.activeElement !== this.$el) {
        this.$el.innerText = this.value;
        this.backup();
      }
    },
  },
};
</script>

<style>

</style>
