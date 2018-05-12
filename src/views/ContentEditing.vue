<template>
  <div>
    <h1>Content Editing</h1>
    <div class="border p-4 mt-4">
      <div class="flex my-2">
        <div class="w-1/2 text-right">Name:</div>
        <div class="w-1/2">
          <input-textarea class="m-2" :value="widget.name"></input-textarea>
        </div>
      </div>
      <div class="flex my-2">
        <div class="w-1/2 text-right">Project:</div>
        <div class="w-1/2">
          <input-text class="m-2 border-b-2 border-dotted"
            v-model="widget.project"
            placeholder="project..."
            tabindex="104"
            aria-labelledby="red1"
            aria-describedby="red1Description"
            required>
          </input-text>
        </div>
      </div>
      <div class="flex my-2">
        <div class="w-1/2 text-right">Supervisor:</div>
        <div class="w-1/2">
          <content-text
            class="ml-2 border-b-2 border-dotted"
            v-model="widget.supervisor"
          ><icon name="pencil-alt" class="text-grey w-3 h-3"></icon></content-text>
        </div>
      </div>
      <div class="flex my-2">
        <div class="w-1/2 text-right">Supervisor:</div>
        <div class="w-1/2">
          <input type="text" v-model="widget.supervisor">
        </div>
      </div>
    </div>
    <hr>
    <h4 class="mt-4">Object:</h4>
    <p class="bg-grey-lighter border p-4 mx-0 font-mono">{{ widget }}</p>
  </div>
</template>

<script>
import TextInput from '@/components/TextInput.vue';
import TextArea from '@/components/TextArea.vue';
import ContentInput from '@/components/ContentInput.vue';

export default {
  components: {
    'input-text': TextInput,
    'content-text': ContentInput,
    'input-textarea': TextArea,
  },
  data() {
    return {
      widget: {
        name: 'fred',
        project: 'red herring',
        supervisor: 'johnson',
      },
    };
  },
};
</script>

<style>

</style>
