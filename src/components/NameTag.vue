<template>
  <button @click="show" class="bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 m-4 rounded cursor-pointer">
    <slot>What is your name?</slot>
    <portal to="modals" v-if="visible">
      <modal @modal-closed="close" :modal-visible="visible">
        <form @submit.prevent="submit">
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2 text-xl" for="name">
              What is your name?
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="name" type="text" placeholder="New Name" v-model="name">
          </div>
          <div class="flex justify-end">
            <button class="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 mr-4 rounded" type="button" @click="close">
              Cancel
            </button>
            <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button" @click="submit">
              Save
            </button>
          </div>
        </form>
      </modal>
    </portal>
  </button>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  components: {
    Modal
  },
  data() {
    return {
      visible: false,
      name: '',
    }
  },
  methods: {
    show() {
      this.visible = true
    },
    close() {
      this.visible = false
    },
    submit() {
      this.$emit('new-name', this.name)
      this.name = ''
      this.close()
    }
  }
}
</script>
