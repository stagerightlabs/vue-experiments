<script>
import Vue from 'vue';

export default {
  props: {
    value: {
      required: true,
    },
    property: {
      default: 'selected',
    },
    clickOn: {
      default: 'selectable',
    },
  },
  data() {
    return {
      lastSelected: {},
    };
  },
  computed: {
    options() {
      return this.value.map((item) => {
        Vue.set(item, this.property, false);
        return item;
      });
    },
  },
  mounted() {
    const targets = Array.from(this.$el.querySelectorAll(`.${this.clickOn}`));

    // A function to handle selection event
    const clickHandler = (e) => {
      // const target = this.targets.filter((t) => { t.contains(e.target); });
      console.log(this.targets);

      // if (!this.lastSelected) {
      //   this.lastSelected = e.target
      // }


      // if (e.shiftKey) {
      //   console.log('shift click');
      // } else {
      //   console.log('regular click');
      // }
      // console.log(`Key: ${e.key}`);
    };
    // Bind the event

    // console.log(targets);

    targets.forEach((target) => {
      target.addEventListener('click', clickHandler);
    });

    // Register this event listener to be removed when the component is destroyed
    this.$once('hook:destroyed', () => {
      targets.forEach((target) => {
        target.removeEventListener('click', clickHandler);
      });
    });
  },
  render() {
    return this.$scopedSlots.default({
      options: this.options,
    });
  },
};
</script>
