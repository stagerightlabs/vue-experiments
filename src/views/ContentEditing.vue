<template>
  <div>
    <h1>Content Editing</h1>
    <div class="border p-4 mt-4 text-lg">
      <div class="flex my-2">
        <div class="w-1/3 text-right font-bold">Name:</div>
        <div class="w-1/2">
          <editable
            input-class="ml-2 border-b-2 border-dotted"
            v-model="character.name"
          ><icon name="pencil-alt" class="text-grey w-3 h-3"></icon></editable>
        </div>
      </div>
      <div class="flex my-2">
        <div class="w-1/3 text-right font-bold">Position:</div>
        <div class="w-1/2">
          <editable
            input-class="ml-2 border-b-2 border-dotted"
            v-model="character.position"
          ><icon name="pencil-alt" class="text-grey w-3 h-3"></icon></editable>
        </div>
      </div>
      <div class="flex my-2">
        <div class="w-1/3 text-right font-bold">Hobby:</div>
        <div class="w-1/2">
          <editable
            input-class="ml-2 border-b-2 border-dotted"
            v-model="character.hobby"
          ><icon name="pencil-alt" class="text-grey w-3 h-3"></icon></editable>
        </div>
      </div>
    </div>
    <hr>
    <h4 class="mt-4">Object:</h4>
    <p class="bg-grey-lighter border p-4 mx-0 font-mono">{{ character }}</p>
  </div>
</template>

<script>
import Editable from '@/components/Editable.vue';

export default {
  name: 'ContentEditing',
  components: {
    Editable,
  },
  data() {
    return {
      character: {
        name: 'Andrei Sergeyevich Prozorov',
        position: 'City Council Secretary',
        hobby: 'violin',
      },
    };
  },
};
</script>

<style>

</style>
