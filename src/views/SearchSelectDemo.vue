<template>
  <div>
    <h1>Search Select</h1>
    <p>A select input that allows for filtering. Inspired by <a href="https://twitter.com/adamwathan">Adam Wathan</a>.</p>
    <ul class="mx-8 pb-8">
      <li class="my-2">
        Click on the input (or press space on focus) to open the select dropdown.
      </li>
      <li class="my-2">Click <span class="keyboard-symbol">ESC</span> to close the dropdown.</li>
      <li class="my-2">Click outside the select to close the dropdown.</li>
      <li class="my-2">
        Use <span class="keyboard-symbol">Up Arrow</span> or <span class="keyboard-symbol">Down
        Arrow</span> to traverse the options.
      </li>
      <li class="my-2">
        Type in the search input to filter the available options. The filter function is passed
        to the component as a prop.
      </li>
      <li class="my-2">
        Click on an item (or select it with the arrows and hit <span class="keyboard-symbol">
        Enter</span>) and the selected option is passed to the parent component via
        <code>v-model</code>
      </li>
      <li class="my-2">The options are passed into the component as a prop.</li>
      <li class="my-2">
        <a href="https://popper.js.org/">Popper.js</a> is used to position the dropdown to be
        visible in the browser window.
      </li>
    </ul>
    <h4 class="mt-4 mb-2">Choose A Character</h4>
    <search-select
      v-model="selected"
      :options="characters"
      :filter-function="applySearchFilter"
    ></search-select>

    <p v-if="selected" class="mx-0">You have selected "{{ selected }}".</p>
  </div>
</template>

<script>
import SearchSelect from '@/components/SearchSelect.vue';

export default {
  name: 'SearchSelectDemo',
  components: {
    SearchSelect,
  },
  data() {
    return {
      selected: null,
      characters: [
        'Olga Sergeyevna Prozorova',
        'Maria Sergeyevna Kulygina',
        'Irina Sergeyevna Prozorova',
        'Baron Nikolaj Lvovich Tuzenbach',
        'Andrei Sergeyevich Prozorov',
        'Natalia Ivanovna',
        'Aleksandr Ignatyevich Vershinin',
        'Fyodor Ilyich Kulygin',
        'Staff Captain Vassily Vasilyevich Solyony',
        'Ivan Romanovich Chebutykin',
        'Aleksej Petrovich Fedotik',
        'Vladimir Karlovich Rode',
        'Anfisa',
        'Ferapont',
      ],
    };
  },
  methods: {
    applySearchFilter(search, options) {
      return options.filter(option => option.toLowerCase().startsWith(search.toLowerCase()));
    },
  },
};
</script>

<style>

</style>
