<template>
  <div>
    <h1>Draggable Sorting</h1>
    <p>
      Allow the contents of a list to be re-arranged with a mouse.
    </p>
    <ul class="mx-8">
      <li class="my-2">Renderless Vue components wrapping the <a href="https://github.com/Shopify/draggable">Shoppify Draggable library</a></li>
      <li class="my-2">Inspired by Adam Wathan</li>
      <li class="my-2">
        The original list is updated whenever a drag event completes, thanks to <code>v-model</code>
        data binding.
      </li>
    </ul>

    <sortable-list v-model="characters">
      <div
        class="mx-auto w-5/6 md:3/4 lg:w-1/2 mt-8 border-t border-grey-lighter"
        slot-scope="{ items:characters }"
      >
        <sortable-item
          v-for="character in characters"
          :key="character.id"
        >
          <div
            class="flex bg-white justify-between items-center border-b border-grey-lighter p-2"
          >
            <img
              :src="character.image"
              :alt="character.name"
              class="hidden md:block w-16 h-16 flex-none rounded-full"
            >
            <div class="px-4 py-2 text-left flex-grow">
              <h3>{{ character.name }}</h3>
            </div>
            <sortable-handle>
              <icon
                name="grip-horizontal"
                class="text-grey-lighter flex-none mx-2 cursor-move"
              ></icon>
            </sortable-handle>
          </div>
        </sortable-item>
      </div>
    </sortable-list>
  </div>
</template>

<script>
import SortableList from '@/components/SortableList.vue';
import SortableItem from '@/components/SortableItem.vue';
import SortableHandle from '@/components/SortableHandle.vue';

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
  components: {
    SortableList,
    SortableItem,
    SortableHandle,
  },
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

      ],
    };
  },
};
</script>

<style>
.draggable-source--is-dragging {
  background-color: #f1f5f8;
}
.draggable-source--is-dragging > * {
  opacity: 0;
}
</style>
