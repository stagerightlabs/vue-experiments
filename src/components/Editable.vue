<template>
  <div style="display: inline">
  <div
    ref="content"
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
    :class="inputClass"
    contenteditable="true"
    ></div>
    <div v-if="hasSlotContent" @click="focus" style="display:inline-block; cursor:pointer">
      <slot ></slot>
    </div>
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
    inputClass: {
      default: '',
    },
  },
  data() {
    return {
      editing: false,
      original: '',
    };
  },
  computed: {
    hasValue() {
      return this.value.length > 0;
    },
    hasSlotContent() {
      return !!this.$slots.default;
    },
  },
  methods: {
    backup() {
      this.original = this.$refs.content.innerText.trim();
    },
    restore() {
      this.$refs.content.innerText = this.original;
    },
    trim() {
      this.$refs.content.innerText = this.$refs.content.innerText.trim();
    },
    sync() {
      this.$emit('input', this.$refs.content.innerText);
    },
    focus() {
      this.backup();
      this.$nextTick(() => this.$refs.content.focus());
    },
    blur() {
      this.$refs.content.blur();
      this.trim();
      this.sync();
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
    this.$refs.content.innerText = this.value;
    this.backup();
  },
  watch: {
    value() {
      if (document.activeElement !== this.$refs.content) {
        this.$refs.content.innerText = this.value;
        this.backup();
      }
    },
  },
};
</script>

<style>

</style>
