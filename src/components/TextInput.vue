<template>
  <span
    @focus.capture="focus"
    @click.capture="focus"
    @blur.capture="blur"
    @keydown.enter="blur"
    @keydown.esc="escape"
    @keydown.shift.enter="shiftEnter"
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
        :value="value"
        @input="input"
        ref='textInput'
        style="background-color: transparent; border: none;"
      >
    </span>
    <span v-show="!editing">{{ value }}</span>

  </span>
</template>

<script>
export default {
  props: {
    value: {
      default: ""
    },
    tabindex: {
      default: 0
    },
    type: {
      default: "text"
    },
    placeholder: {
      default: ""
    },
    ariaLabelledby: {
      default: ""
    },
    ariaDescribedby: {
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editing: false,
      backup: ""
    };
  },
  methods: {
    focus() {
      this.editing = true;
      this.backup = this.value;
      this.$nextTick(() => this.$refs.textInput.focus());
      console.log(this.$refs.textInput);
    },
    blur() {
      this.editing = false;
    },
    input() {
      this.$emit("input", this.$refs.textInput.value);
    },
    escape() {
      this.$emit("input", this.backup);
      this.blur();
    },
    shiftEnter() {
      alert("shiftin`");
    }
  }
};
</script>

<style>

</style>
