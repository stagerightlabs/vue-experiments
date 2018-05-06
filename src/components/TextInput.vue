<template>
  <span
    @focus.capture="focus"
    @click.capture="focus"
    @blur.capture="blur"
    @keydown.enter="blur"
    @keydown.esc="escape"
    @keydown.shift.enter.prevent="shiftEnter"
    :tabindex="tabindex"
    >
    <span v-show="editing">
      <input
        :type="type"
        :placeholder="placeholder"
        :aria-labelledby="ariaLabelledby"
        :aria-describedby="ariaDescribedby"
        :required="required"
        :autofocus="autofocus"
        :value="content"
        @input="input"
        ref='textInput'
        style="background-color: transparent; border: none;"
      >
    </span>
    <span v-show="!editing">{{ content }}</span>

  </span>
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
      content: this.value,
      backup: '',
    };
  },
  methods: {
    sync() {
      this.$emit('input', this.content);
    },
    focus() {
      this.editing = true;
      this.backup = this.content;
      this.$nextTick(() => this.$refs.textInput.focus());
    },
    blur() {
      this.editing = false;
      this.sync();
    },
    input() {
      this.content = this.$refs.textInput.value;
      this.sync();
    },
    escape() {
      this.content = this.backup;
      this.blur();
    },
    shiftEnter() {
      this.$refs.textInput.value = `${this.$refs.textInput.value}\n`;
      // console.log(this.$refs.textInput.value);
      this.input();
    },
  },
};
</script>

<style>

</style>
