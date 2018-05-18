<template>
  <div>
    <h1>Typeahead Search</h1>

    <div class="flex mt-8">
      <div class="w-1/2">
        <p>Find a character:</p>
        <type-ahead
          :options="options"
          display="name"
          @select="onSelectionA"
          class="w-64">
          <template slot="item" slot-scope="option">
            {{ option.searchable }}
          </template>
        </type-ahead>
      </div>
      <div class="w-1/2">
        <p>
          Chosen
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
          <p v-else class="text-grey">Nothing selected..</p>
        </div>
      </div>
    </div>
    <hr>
    <div class="flex mt-8 border-t">
      <div class="w-1/2">
          <p>Find or create a character:</p>
          <type-ahead
            @select="onSelectionB"
            class="w-64"
            display="name"
            :options="options"
            :allow-new="true">
          <template slot="item" slot-scope="option">
            {{ option.searchable }}
          </template>
        </type-ahead>
      </div>
      <div class="w-1/2">
        <p>
          Chosen
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
              :class="{'bg-green-lightest': isNewEntry(selected)}"
              v-for="(selected, index) in selectionB"
              :key="index">
              {{ selected.name }}
            </li>
          </ul>
          <p v-else class="text-grey">Nothing selected..</p>
        </div>
      </div>
      <hr>
    </div>
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
  },
};
</script>
