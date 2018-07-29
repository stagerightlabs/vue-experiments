<script>
import Vue from 'vue';

export default {
  props: {
    value: {
      required: true,
    },
    selectable: {
      default: 'shift-click-me',
    },
    model: {
      required: true,
    },
  },
  data() {
    return {
      lastSelected: null,
    };
  },
  computed: {
    options() {
      return this.value.map((item) => {
        Vue.set(item, this.property, false);
        return item;
      });
    },
    selectableClass() {
      return `.${this.selectable}`;
    },
  },
  provide() {
    return {
      shiftClickSelectableClass: this.selectable,
    };
  },
  methods: {
    rootChild(target) {
      return Array.from(this.$el.children).filter(child => child.contains(target)).shift();
    },
  },
  mounted() {
    // A function to handle an escape key event
    const clickHandler = (event) => {
      if (!event.target.matches(this.selectableClass)) { return; }

      const child = this.rootChild(event.target);

      if (!child) { return; }
      const index = Array.from(this.$el.children).indexOf(child);

      // We need to wait for the event loop to swing around again.
      // If the click target was a checkbox using v-model, there
      // is a slight chance that the value isn't yet up to date
      // Vue.nextTick() didn't seem to work...
      setTimeout(() => {
        const setTo = this.value[index][this.model];

        if (this.lastSelected === null) {
          this.lastSelected = index;
          return;
        }

        if (event.shiftKey) {
          const range = event.ctrlKey ? this.value : this.value.slice(
            Math.min(index, this.lastSelected),
            Math.max(index, this.lastSelected) + 1,
          );

          range.forEach((item) => { item[this.model] = setTo; });
          this.$emit('input', this.value);
        }

        this.lastSelected = index;
      }, 0);
    };
    // Bind the event
    this.$el.addEventListener('click', clickHandler);

    // Register this event listener to be removed when the component is destroyed
    this.$once('hook:destroyed', () => {
      this.$el.removeEventListener('click', clickHandler);
    });
  },
  render() {
    return this.$scopedSlots.default({
      options: this.options,
      selectedIndex: this.lastSelected,
    });
  },
};
</script>
