<template>
  <span
    @focus.capture="focus"
    @click.capture="focus"
    @blur.capture="blur"
    @keydown.esc="escape"
    @keydown.shift.enter.prevent="blur"
    :tabindex="tabindex"
    style="background-color: green"
    >
    <span v-show="editing">
      <textarea
        :type="type"
        :placeholder="placeholder"
        :aria-labelledby="ariaLabelledby"
        :aria-describedby="ariaDescribedby"
        :required="required"
        :autofocus="autofocus"
        :value="content"
        @input="input"
        ref='textInput'
        style="background-color: transparent; border: none; overflow:hidden; resize:none"
      ></textarea>
    </span>
    <span v-show="!editing" style="white-space: pre-line;">{{ content }}</span>

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
      this.$refs.textInput.setAttribute('style', `height:${this.$refs.textInput.scrollHeight}px;overflow-y:hidden;resize:none`);
    },
    blur() {
      this.editing = false;
      this.sync();
    },
    input() {
      this.content = this.$refs.textInput.value;
      this.$refs.textInput.style.height = 'auto';
      this.$refs.textInput.style.height = `${this.$refs.textInput.scrollHeight}px`;
      console.log(this.$refs.textInput.scrollHeight);
      // this.$refs.textInput.addEventListener('input', OnInput, false);
      this.sync();
    },
    escape() {
      this.content = this.backup;
      this.blur();
    },
    shiftEnter() {
      this.$refs.textInput.value = `${this.$refs.textInput.value}\n`;
      console.log('shift enter');
      // console.log(this.$refs.textInput.value);
      // this.input();
    },
  },
};
</script>

<style>

</style>
