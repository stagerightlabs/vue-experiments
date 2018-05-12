import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ContentEditing from './views/ContentEditing.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/content-editing',
      name: 'content-editing',
      component: ContentEditing,
    },
  ],
});
