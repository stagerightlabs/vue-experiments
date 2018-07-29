<template>
  <div>
    <h1>Shift+Click Range Selection</h1>
    <p>
      A set of renderless components that enable the ability to select a sub-range of options
      via <span class="keyboard-symbol">Shift</span>+<span class="keyboard-symbol">Click</span>
    </p>
    <ul class="mx-8 pb-8">
      <li class="my-2">
        After an item has been selected, <span class="keyboard-symbol">Shift</span>+
        <span class="keyboard-symbol">Click</span> on another item and select all
        the items inbetween as well.
      </li>
      <li class="my-2">
        Use <span class="keyboard-symbol">Ctrl</span>+<span class="keyboard-symbol">Shift</span>+
        <span class="keyboard-symbol">Click</span> to toggle the entire group.
      </li>
    </ul>
    <div class="flex flex-wrap mt-8">
      <div class="w-full md:w-1/2">
        <h3>Dramatis Personae</h3>
        <shift-click-group v-model="options" model="highlighted" selectable="click-me">
          <div
            slot-scope="{ options: characters }"
            class="m-2 character-list select-none"
          >
            <div
              v-for="character in characters"
              :key="character.id"
              class="p-1 m-1 cursor-pointer"
              :class="{'bg-green-lighter rounded': character.highlighted}"
              @click="character.highlighted = !character.highlighted"
            >
              <shift-click-me>
                <span >{{ character.name }}</span>
              </shift-click-me>
            </div>
          </div>
        </shift-click-group>
        <button
          class="bg-green-dark hover:bg-green-darker text-white font-bold
                py-2 px-4 m-4 rounded cursor-pointer"
          @click="reportColumnOne"
        >
          How Many?
        </button>
      </div>
      <div class="w-full md:w-1/2">
        <h3>Characters</h3>
        <shift-click-group v-model="options" model="selected">
          <ul
            slot-scope="{ options: characters }"
            class="m-2 list-reset"
          >
            <li
              v-for="character in characters"
              :key="character.id"
              class="m-2 mb-3"
            >
              <label>
                <shift-click-me>
                  <input type="checkbox" v-model="character.selected">
                </shift-click-me>
                {{ character.name }}
              </label>
            </li>
          </ul>
        </shift-click-group>
        <button
          class="bg-green-dark hover:bg-green-darker text-white font-bold
                py-2 px-4 m-4 rounded cursor-pointer"
          @click="reportColumnTwo"
        >
          How Many?
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import bus from '@/event-bus';
import ShiftClickMe from '@/components/ShiftClickMe.vue';
import ShiftClickGroup from '@/components/ShiftClickGroup.vue';

export default {
  name: 'ShiftClickDemo',
  components: { ShiftClickGroup, ShiftClickMe },
  data() {
    return {
      options: [
        {
          id: 1, name: 'Olga Sergeyevna Prozorova', group: 'Prozorovs', selected: false, highlighted: false,
        },
        {
          id: 2, name: 'Maria Sergeyevna Kulygina', group: 'Prozorovs', selected: false, highlighted: false,
        },
        {
          id: 3, name: 'Irina Sergeyevna Prozorova', group: 'Prozorovs', selected: false, highlighted: false,
        },
        {
          id: 4, name: 'Andrei Sergeyevich Prozorov', group: 'Prozorovs', selected: false, highlighted: false,
        },
        {
          id: 5, name: 'Natalia Ivanovna', group: 'Prozorovs', selected: false, highlighted: false,
        },
        {
          id: 6, name: 'Fyodor Ilyich Kulygin', group: 'Prozorovs', selected: false, highlighted: false,
        },
        {
          id: 7, name: 'Aleksandr Ignatyevich Vershinin', group: 'Soldiers', selected: false, highlighted: false,
        },
        {
          id: 8, name: 'Baron Nikolaj Lvovich Tuzenbach', group: 'Soldiers', selected: false, highlighted: false,
        },
        {
          id: 9, name: 'Staff Captain Vassily Vasilyevich Solyony', group: 'Soldiers', selected: false, highlighted: false,
        },
        {
          id: 10, name: 'Ivan Romanovich Chebutykin', group: 'Soldiers', selected: false, highlighted: false,
        },
        {
          id: 11, name: 'Aleksej Petrovich Fedotik', group: 'Soldiers', selected: false, highlighted: false,
        },
        {
          id: 12, name: 'Vladimir Karlovich Rode', group: 'Soldiers', selected: false, highlighted: false,
        },
        {
          id: 13, name: 'Anfisa', group: 'Cameos', selected: false, highlighted: false,
        },
        {
          id: 14, name: 'Ferapont', group: 'Cameos', selected: false, highlighted: false,
        },
      ],
    };
  },
  methods: {
    reportColumnOne() {
      const count = this.options.filter(row => row.highlighted).length;
      bus.$emit('flash', `${count} dramatis personae chosen.`, 'success');
    },
    reportColumnTwo() {
      const count = this.options.filter(row => row.selected).length;
      bus.$emit('flash', `${count} characters selected.`, 'success');
    },
  },
};
</script>

<style>

</style>
