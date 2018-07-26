<template>
  <div>
    <h1>Shift+Click Range Selection - WIP</h1>
    <p>A renderless component that enables the ability to select a sub-range of options via <span class="keyboard-symbol">Shift</span>+<span class="keyboard-symbol">Click</span></p>
    <div class="flex mt-8">
      <div class="w-1/2">
        <h3>Characters</h3>
        <shift-click-range v-model="options">
          <div
            slot-scope="{ options:characters }"
            class="m-2"
          >
            <div
              v-for="character in characters"
              :key="character.id"
            >
              <label class="selectable">
                <input type="checkbox" v-model="character.selected">
                {{ character.name }}
              </label>
            </div>
          </div>
        </shift-click-range>
        <button>Tell Me How Many</button>
      </div>
      <div class="w-1/2 bg-orange">
      test
      </div>
    </div>

  </div>
</template>

<script>
import ShiftClickRange from '@/components/ShiftClickRange.vue';

export default {
  name: 'ShiftClickRangeDemo',
  components: { ShiftClickRange },
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
    };
  },
};
</script>

<style>

</style>
