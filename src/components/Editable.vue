<template>
  <div style="display: inline" @focusout="blur">
  <div
    ref="content"
    @keydown.esc="escape"
    @keydown.shift.enter.prevent="shiftEnter"
    @input="sync"
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
      <slot></slot>
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
    // Save a separate copy of the value incase we need to restore the original
    backup() {
      this.original = this.$refs.content.innerText.trim();
    },
    // Replace the current value with the original value
    restore() {
      this.$refs.content.innerText = this.original;
    },
    // Remove whitespace from either side of the value string
    trim() {
      this.$refs.content.innerText = this.$refs.content.innerText.trim();
    },
    // Send an input event to the parent component; part of the "v-model" flow
    sync() {
      this.$emit('input', this.$refs.content.innerText);
    },
    // Fired when the component receives focus
    focus() {
      // Save a copy of our current value for future comparisson
      this.backup();
      // Force the browser to give focus to our contenteditable div
      this.$nextTick(() => {
        this.$refs.content.focus();
        document.execCommand('selectAll', false, null);
      });
    },
    // Fired when the component loses focus
    blur() {
      // Trigger the blur event on the contenteditable dom element
      this.$refs.content.blur();

      // Remove excess whitespace
      this.trim();

      // If the content has changed, fired an "updated" event
      if (this.$refs.content.innerText !== this.original) {
        this.$emit('updated');
      }

      // Fire an input event for v-model compatibility
      this.sync();
    },
    // Handle an escape keypress event
    escape() {
      // Remove any changes that have been made
      this.restore();
      // Fire an input event to send the original value back to the parent
      this.sync();
      // Trigger a blur event
      this.blur();
    },
    // Pressing shift+enter should trigger a blur event which will then
    // bubble up to the component's focusout handler
    shiftEnter() {
      window.getSelection().removeAllRanges();
      this.$refs.content.blur();
    },
  },
  mounted() {
    // Use the value prop as our default div content
    this.$refs.content.innerText = this.value;
    // Save a copy of this value for future comparisson
    this.backup();
  },
  watch: {
    value() {
      // If the value prop changes we should update the div content,
      // but only if this component does not currently have focus
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
