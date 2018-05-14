<template>
  <div>
    <h1>Typeahead Search</h1>

    <div class="flex mt-8">
      <div class="w-1/2">
          <p>Add:</p>
          <type-ahead :options="options" @select="onSelection" :allow-new="false">
          <template slot="item" slot-scope="option">
            {{ option.searchable }}
          </template>
        </type-ahead>
        <hr>
        <p>Chosen:</p>
        <ul class="">
          <li v-for="selected in selection" :key="selected.name">{{ selected.name }}</li>
        </ul>
      </div>
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
        { name: 'Olga Sergeyevna Prozorova', group: 'Prozorovs' },
        { name: 'Maria Sergeyevna Kulygina', group: 'Prozorovs' },
        { name: 'Irina Sergeyevna Prozorova', group: 'Prozorovs' },
        { name: 'Andrei Sergeyevich Prozorov', group: 'Prozorovs' },
        { name: 'Natalia Ivanovna', group: 'Prozorovs' },
        { name: 'Fyodor Ilyich Kulygin', group: 'Prozorovs' },
        { name: 'Aleksandr Ignatyevich Vershinin', group: 'Soldiers' },
        { name: 'Baron Nikolaj Lvovich Tuzenbach', group: 'Soldiers' },
        { name: 'Staff Captain Vassily Vasilyevich Solyony', group: 'Soldiers' },
        { name: 'Ivan Romanovich Chebutykin', group: 'Soldiers' },
        { name: 'Aleksej Petrovich Fedotik', group: 'Soldiers' },
        { name: 'Vladimir Karlovich Rode', group: 'Soldiers' },
        { name: 'Anfisa', group: 'Cameos' },
        { name: 'Ferapont', group: 'Cameos' },
      ],
      selection: [],
    };
  },
  methods: {
    onSelection(selected) {
      this.selection.push(selected);
    },
  },
};
</script>
