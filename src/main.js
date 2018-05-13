import Vue from 'vue';
import 'vue-awesome/icons/times';
import 'vue-awesome/icons/pencil-alt';
import 'vue-awesome/icons/brands/gitlab';
import 'vue-awesome/icons/bars';
import Icon from 'vue-awesome/components/Icon.vue';
import PortalVue from 'portal-vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Register the portal component
Vue.use(PortalVue);

// Register the font-awesome icon component
Vue.component('icon', Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
