<script>
export default {
  inject: ['shiftClickSelectableClass'],
  mounted() {
    this.$el.classList.add(this.shiftClickSelectableClass);
  },
  render() {
    return this.$slots.default[0];
  },
};
</script>
