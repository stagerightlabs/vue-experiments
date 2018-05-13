import Vue from 'vue';
import Router from 'vue-router';
import Modals from './views/Modals.vue';
import Toast from './views/Toast.vue';
import ContentEditing from './views/ContentEditing.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
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
  ],
});
