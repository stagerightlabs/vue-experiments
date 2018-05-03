  <template>
  <div class="absolute pin w-full h-full bg-smoke-light flex">
    <div class="max-w-md w-full lg:flex self-center m-auto">
      <div class="border border-grey-light lg:border lg:border-grey-light bg-white  lg:rounded p-4 flex flex-col justify-between leading-normal">
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
  data() {
    return {

    }
  },
  methods: {
    close() {
      this.$emit('closed')
    }
  }
}
</script>
