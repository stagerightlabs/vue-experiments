<template>
  <div>
    <h1>Vue Pikaday Wrapper</h1>
    <p>
      An experiment in wrapping third party libraries with vue components. Heavily inspired
      by Adam Wathan.
    </p>
    <p>Original Package: <a href="https://github.com/dbushell/Pikaday/">Pikaday</a></p>

    <div class="p-4 mt-4 text-lg flex my-2 items-center">
      <div class="w-1/3 text-right font-bold">Date 1:</div>
      <div class="w-1/2 ml-4">
        <pikaday v-model="date1" format="MMM DD YYYY" :options="{ firstDay: 1}"></pikaday>
      </div>
    </div>
    <div class="p-4 mt-4 text-lg flex my-2 items-center">
      <div class="w-1/3 text-right font-bold">Date 2:</div>
      <div class="w-1/2 ml-4">
        <pikaday
          v-model="date2"
          format="MM/DD/YYYY"
          input-class="bg-green-lightest p-3"
        ></pikaday>
      </div>
    </div>
    <div class="p-4 mt-4 text-lg flex my-2 bg-grey-lighter border">
      {{ {date1, date2} }}
    </div>
  </div>
</template>

<script>
import Pikaday from '@/components/Pikaday.vue';

export default {
  name: 'Pikaday-Wrapper-Demo',
  components: { Pikaday },
  data() {
    return {
      date1: '2018-01-01',
      date2: '01/02/2018',
    };
  },
};
</script>
