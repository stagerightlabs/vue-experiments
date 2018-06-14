<template>
  <input :value="value" ref="input" type="text" :placeholder="format" :class="inputClass">
</template>

<script>
import Pikaday from 'pikaday';
import '@/assets/pikaday.css';

export default {
  props: {
    value: { required: true },
    format: { default: 'YYYY-MM-DD' },
    inputClass: { default: 'border rounded p-2' },
    options: { default() { return {}; } },
  },
  mounted() {
    const picker = new Pikaday({
      field: this.$refs.input,
      format: this.format,
      onSelect: () => {
        this.$emit('input', picker.toString());
      },
      ...this.options,
    });
  },
};
</script>
