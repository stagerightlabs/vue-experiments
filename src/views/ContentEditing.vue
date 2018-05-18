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
          ><icon name="pencil-alt" class="text-grey w-3 h-3"></icon></editable>
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
      <p>
      Editable content can also be displayed inline:
      <editable
            input-class="ml-2 border-b-2 border-dotted inline-block"
            v-model="character.name"
          >
      </editable>
      or as a block element:
      <editable
            input-class="border-2 border-dotted block w-64 mx-auto mt-4 p-2"
            v-model="character.position"
          >
      </editable>
    </p>
    </div>

    <hr>
    <h4 class="mt-4">Object:</h4>
    <p class="bg-grey-lighter border p-4 mx-0 font-mono">{{ character }}</p>

    <h4 class="mt-4">Usage</h4>
    <p class="bg-grey-lighter border p-4 mx-0 font-mono">
      <pre>&lt;editable input-class=&quot;ml-2 border-b-2 border-dotted inline-block&quot; v-model=&quot;character.name&quot;&gt;
  &lt;icon name=&quot;pencil-alt&quot; class=&quot;text-grey w-3 h-3&quot;&gt;&lt;/icon&gt;
&lt;/editable&gt;</pre>
    </p>
  </div>
</template>

<script>
import Editable from '@/components/Editable.vue';
import EventBus from '@/event-bus';

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

<style>

</style>
