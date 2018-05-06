<template>
  <div class="widget">
    <h1>Widget</h1>
    <p class="bg-grey-lighter border p-4 mx-0 font-mono">{{ widget }}</p>
    <hr>
    <div class="border p-4">
      <div class="flex my-2">
        <div class="w-1/2 text-right">Name:</div>
        <div class="w-1/2">
          <content-text class="m-2" :value="widget.name"></content-text>
        </div>
      </div>
      <div class="flex my-2">
        <div class="w-1/2 text-right">Project:</div>
        <div class="w-1/2">
          <content-text class="m-2 border-b-2 border-dotted" v-model="widget.project" placeholder="project..." tabindex="104" aria-labelledby="red1" aria-describedby="red1Description" required></content-text>
        </div>
      </div>
      <div class="flex my-2">
        <div class="w-1/2 text-right">Supervisor:</div>
        <div class="w-1/2">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/TextInput.vue";

export default {
  components: {
    "content-text": TextInput,
  },
  data() {
    return {
      widget: {
        name: "fred",
        project: "red herring",
        supervisor: "johnson"
      }
    };
  }
};
</script>

<style>

</style>
