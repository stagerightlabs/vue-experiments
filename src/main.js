import Vue from 'vue';
import Icon from 'vue-awesome/components/Icon.vue';
import Matomo from 'vue-matomo';
import PortalVue from 'portal-vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Register the portal component
Vue.use(PortalVue);

// Register the Matomo component
Vue.use(Matomo, {
  host: 'https://stats.stagerightlabs.com',
  siteId: 14,
  router,
  requireConsent: true,
});

// Register the font-awesome icon component
Vue.component('icon', Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
