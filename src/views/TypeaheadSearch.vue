<template>
  <div>
    <h1>Typeahead Search</h1>
    <p>
      The goal here is to allow users to make selections from a pre-defined list
      of options.  Those options could be fetched via ajax or stored inline, as
      we do here. When a selection is made an event is fired notifying the parent
      component of the selected option.  It is the responsibility of the parent
      to check for duplicates and/or reduce the option set based on that selection.
    </p>
    <ul>
      <li class="p-1">
        You can decide whether or not to allow users to create new options via
        the <code>allow-new</code> prop.
      </li>
      <li class="p-1">
        The <code>display</code> prop allows you to specify which property on
        the option object should be used in the dropdown display.
      </li>
      <li class="p-1">
        Change the look and feel of the input via the <code>input-class</code> prop.
      </li>
      <li class="p-1">
        An <code>invalid-selection</code> event is fired if the user selects an
        invalid option and the creation of new records is turned off.
      </li>
    </ul>
    <div class="flex mt-8">
      <div class="w-1/2">
        <p>Find a character:</p>
        <type-ahead
          :options="options"
          display="name"
          @select="onSelectionA"
          @invalid-selection="invalidSelection"
          class="w-64"
          input-class="border border-green text-green-dark py-3 px-4 pr-8 bg-green-lightest"
          >
        </type-ahead>
      </div>
      <div class="w-1/2">
        <p>
          Selected
          <span
            @click="reset('selectionA')"
            class="text-grey-light cursor-pointer float-right">
            Clear
          </span>
        </p>
        <div class="border rounded min-height-32">
          <ul v-if="selectionA.length" class="py-4 px-8">
            <li
              class="p-1"
              v-for="(selected, index) in selectionA" :key="index">
              {{ selected.name }}
            </li>
          </ul>
          <p v-else class="text-grey">Nothing yet...</p>
        </div>
      </div>
    </div>
    <hr>
    <div class="flex my-8 border-t">
      <div class="w-1/2">
        <p>Find or create a character:</p>
        <type-ahead
          @select="onSelectionB"
          class="w-64"
          display="name"
          :options="options"
          :allow-new="true">
        </type-ahead>
      </div>
      <div class="w-1/2">
        <p>
          Selected
          <span
            @click="reset('selectionB')"
            class="text-grey-light cursor-pointer float-right">
            Clear
          </span>
        </p>
        <div class="border rounded min-height-32">
          <ul v-if="selectionB.length" class="py-4 px-8">
            <li
              class="p-1"
              v-for="(selected, index) in selectionB"
              :key="index">
              {{ selected.name }}
              <span v-if="isNewEntry(selected)" class="text-green-darker">[added by user]</span>
            </li>
          </ul>
          <p v-else class="text-grey">Nothing yet...</p>
        </div>
      </div>
    </div>
    <p class="mt-8">It would be nice if we could allow customized styling of the <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code> tags used in the options list.</p>
  </div>
</template>

<script>
import TypeAhead from '@/components/TypeAhead.vue';

export default {
  name: 'TypeaheadSearch',
  components: {
    TypeAhead,
  },
  data() {
    return {
      options: [
        { id: 1, name: 'Olga Sergeyevna Prozorova', group: 'Prozorovs' },
        { id: 2, name: 'Maria Sergeyevna Kulygina', group: 'Prozorovs' },
        { id: 3, name: 'Irina Sergeyevna Prozorova', group: 'Prozorovs' },
        { id: 4, name: 'Andrei Sergeyevich Prozorov', group: 'Prozorovs' },
        { id: 5, name: 'Natalia Ivanovna', group: 'Prozorovs' },
        { id: 6, name: 'Fyodor Ilyich Kulygin', group: 'Prozorovs' },
        { id: 7, name: 'Aleksandr Ignatyevich Vershinin', group: 'Soldiers' },
        { id: 8, name: 'Baron Nikolaj Lvovich Tuzenbach', group: 'Soldiers' },
        { id: 9, name: 'Staff Captain Vassily Vasilyevich Solyony', group: 'Soldiers' },
        { id: 10, name: 'Ivan Romanovich Chebutykin', group: 'Soldiers' },
        { id: 11, name: 'Aleksej Petrovich Fedotik', group: 'Soldiers' },
        { id: 12, name: 'Vladimir Karlovich Rode', group: 'Soldiers' },
        { id: 13, name: 'Anfisa', group: 'Cameos' },
        { id: 14, name: 'Ferapont', group: 'Cameos' },
      ],
      selectionA: [],
      selectionB: [],
    };
  },
  methods: {
    onSelectionA(selected) {
      this.selectionA.push(selected);
    },
    onSelectionB(selected) {
      this.selectionB.push(selected);
    },
    reset(name) {
      if (!Object.prototype.hasOwnProperty.call(this, name)) {
        return;
      }

      this[name] = [];
    },
    isNewEntry(selection) {
      return !('id' in selection);
    },
    invalidSelection(invalid) {
      // eslint-disable-next-line no-alert
      alert(`'${invalid}' is not a valid option.`);
    },
  },
};
</script>
