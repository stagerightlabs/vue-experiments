<template>
  <div>
    <h1>Content Editing</h1>
    <p>
      This component aims to add some UX/UI sugar to the "content editable"
      experience by providing some additional functionality:
    </p>
    <ul class="mx-8 pb-8">
      <li class="my-2">Allow data binding via <code>v-model</code></li>
      <li class="my-2">
        Use the <span class="keyboard-symbol">ESC</span> key to abort content
        changes and restore the prior value before blurring the input.
      </li>
      <li class="my-2">
        The <span class="keyboard-symbol">Enter</span> key will add a carriage return.
      </li>
      <li class="my-2">
        Typing <span class="keyboard-symbol">Shift</span> +
        <span class="keyboard-symbol">Enter</span> will save the edits and blur the input.
      </li>
      <li class="my-2">
        <span class="keyboard-symbol">Tab</span> will save, blur and move the cursor to the next input.
      </li>
      <li class="my-2">Automatic tab-focussing</li>
      <li class="my-2">Aria descriptors, placeholders and autofocus can be specified</li>
      <li class="my-2">
        Non-editable content can be displayed adjacent to the editable div via a
        slot; this allows us to add an indicator for better UX.
      </li>
      <li class="my-2">Clicking on the slot content will focus the input.</li>
      <li class="my-2">
        A separate <code>updated</code> event is fired if content has changed on
        blur; this could be used as a trigger by the parent component to persist
        the updated object.
      </li>
      <li class="my-2">
        Formatting of pasted content is stripped on blur; only text is stored
      </li>
      <li class="my-2">
        It will automatically select all of the existing content on focus.
      </li>
    </ul>
    <h4>Demo</h4>
    <div class="border p-4 mt-4 text-lg">
      <div class="flex my-2">
        <div class="w-1/3 text-right font-bold">Name:</div>
        <div class="w-1/2">
          <editable
            input-class="ml-2 border-b-2 border-dotted inline-block"
            @updated="updated"
            v-model="character.name"
          ><icon name="pencil-alt" class="text-grey w-3 h-3 ml-1"></icon></editable>
        </div>
      </div>
      <div class="flex my-2">
        <div class="w-1/3 text-right font-bold">Position:</div>
        <div class="w-1/2">
          <editable
            input-class="ml-2 border-b-2 border-dotted inline-block"
            @updated="updated"
            v-model="character.position"
          ></editable>
        </div>
      </div>
      <div class="flex my-2">
        <div class="w-1/3 text-right font-bold">Hobby:</div>
        <div class="w-1/2">
          <editable
            input-class="ml-2 p-1 border border-solid border-green-light bg-grey-light inline-block"
            @updated="updated"
            v-model="character.hobby"
          ></editable>
        </div>
      </div>
      <p class="border-t pt-4">
        Editable content can also be
        <editable
            input-class="border-b-2 border-dotted inline-block"
            value="displayed inline"
          >
        </editable>
        or as a
        <editable
              input-class="border-2 border-dotted block w-64 mx-auto mt-4 p-2"
              value="block element."
            >
        </editable>
      </p>
    </div>
    <h4 class="mt-4">Object:</h4>
    <p class="bg-grey-lighter border p-4 mx-0 font-mono">{{ character }}</p>
  </div>
</template>

<script>
import EventBus from '@/event-bus';
import 'vue-awesome/icons/pencil-alt';
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
  methods: {
    updated() {
      EventBus.$emit('flash', 'Object updated!', 'success');
    },
  },
};
</script>
