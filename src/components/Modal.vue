<template>
  <div class="absolute fixed pin w-full h-full bg-smoke-light flex" @click.self="close">
    <div class="max-w-md w-full lg:flex self-center m-auto">
      <div class="border border-grey-light lg:border lg:border-grey-light bg-white lg:rounded p-4 flex flex-col justify-between leading-normal w-full">
        <div class="mb-8">
          <span @click="close">
            <icon name="times" class="float-right cursor-pointer"></icon>
          </span>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['modalVisible'],
  data() {
    return {
    }
  },
  methods: {
    close() {
      this.$emit('modal-closed')
    }
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (this.modalVisible && e.keyCode === 27) {
        this.close();
      }
    });
  }
}

</script>
