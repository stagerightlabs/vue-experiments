<template>
  <div>
    <h1>Draggable Sorting</h1>
    <p>
      Allow the contents of a list to be re-arranged with a mouse.
    </p>
    <div class="mx-auto w-5/6 md:3/4 lg:w-1/2 mt-8 border-t border-grey-lighter">
      <div
        class="flex justify-between items-center border-b border-grey-lighter p-2"
        v-for="character in characters"
        :key="character.id"
      >
        <img
          :src="character.image"
          :alt="character.name"
          class="hidden md:block w-16 h-16 flex-none"
        >
        <div class="px-4 py-2 text-left flex-grow">
          <h3>{{ character.name }}</h3>
          <p class="mt-1 my-0 mx-0 w-full justify-between text-grey-darker text-sm hidden md:flex">
            <span>Group: {{ character.group }}</span>
            <span>Sort Order: </span>
          </p>
        </div>
        <icon name="grip-horizontal" class="text-grey-lighter flex-none mx-2" ></icon>
      </div>
    </div>
  </div>
</template>

<script>
// import 'vue-awesome/icons/solid/grip-vertical';
import Icon from 'vue-awesome/components/Icon.vue';

Icon.register({
  'grip-horizontal': {
    width: 512,
    height: 512,
    paths: [{
      d: 'M96 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM288 32h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z',
    }],
  },
});

export default {
  name: 'DraggableSorting',
  data() {
    return {
      characters: [
        {
          id: 1, name: 'Olga Sergeyevna Prozorova', group: 'Prozorovs', image: 'https://randomuser.me/api/portraits/women/23.jpg',
        },
        {
          id: 2, name: 'Maria Sergeyevna Kulygina', group: 'Prozorovs', image: 'https://randomuser.me/api/portraits/women/62.jpg',
        },
        {
          id: 3, name: 'Irina Sergeyevna Prozorova', group: 'Prozorovs', image: 'https://randomuser.me/api/portraits/women/63.jpg',
        },
        {
          id: 4, name: 'Andrei Sergeyevich Prozorov', group: 'Prozorovs', image: 'https://randomuser.me/api/portraits/men/62.jpg',
        },
        {
          id: 5, name: 'Natalia Ivanovna', group: 'Prozorovs', image: 'https://randomuser.me/api/portraits/women/60.jpg',
        },
        {
          id: 6, name: 'Fyodor Ilyich Kulygin', group: 'Prozorovs', image: 'https://randomuser.me/api/portraits/men/59.jpg',
        },
        {
          id: 7, name: 'Aleksandr Ignatyevich Vershinin', group: 'Soldiers', image: 'https://randomuser.me/api/portraits/men/58.jpg',
        },
        {
          id: 8, name: 'Baron Nikolaj Lvovich Tuzenbach', group: 'Soldiers', image: 'https://randomuser.me/api/portraits/men/57.jpg',
        },
        {
          id: 9, name: 'Captain Vassily Vasilyevich Solyony', group: 'Soldiers', image: 'https://randomuser.me/api/portraits/men/56.jpg',
        },
        {
          id: 10, name: 'Ivan Romanovich Chebutykin', group: 'Soldiers', image: 'https://randomuser.me/api/portraits/men/55.jpg',
        },
        {
          id: 11, name: 'Aleksej Petrovich Fedotik', group: 'Soldiers', image: 'https://randomuser.me/api/portraits/men/54.jpg',
        },
        {
          id: 12, name: 'Vladimir Karlovich Rode', group: 'Soldiers', image: 'https://randomuser.me/api/portraits/men/53.jpg',
        },
        {
          id: 13, name: 'Anfisa', group: 'Cameos', image: 'https://randomuser.me/api/portraits/women/52.jpg',
        },
        {
          id: 14, name: 'Ferapont', group: 'Cameos', image: 'https://randomuser.me/api/portraits/men/51.jpg',
        },
      ],
    };
  },
};
</script>

<style>

</style>
