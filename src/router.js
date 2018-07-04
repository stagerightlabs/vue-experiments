import Vue from 'vue';
import Router from 'vue-router';
import Toast from './views/Toast.vue';
import Modals from './views/Modals.vue';
import NotFound from './views/NotFound.vue';
import VuePickaday from './views/PikadayDemo.vue';
import ContentEditing from './views/ContentEditing.vue';
import TypeaheadSearch from './views/TypeaheadSearch.vue';
import DraggableSorting from './views/DraggableSorting.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Modals,
    },
    {
      path: '/modals',
      name: 'modals',
      component: Modals,
    },
    {
      path: '/content-editing',
      name: 'content-editing',
      component: ContentEditing,
    },
    {
      path: '/toast-notifications',
      name: 'toast-notifications',
      component: Toast,
    },
    {
      path: '/typeahead',
      name: 'typeahead',
      component: TypeaheadSearch,
    },
    {
      path: '/vue-pickaday',
      name: 'vue-picakday-demo',
      component: VuePickaday,
    },
    {
      path: '/draggable-sorting',
      name: 'draggable-sorting',
      component: DraggableSorting,
    },
    {
      path: '*',
      name: '404',
      component: NotFound,
    },
  ],
});
