import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-awesome/icons/times'
import Icon from 'vue-awesome/components/Icon'
import PortalVue from 'portal-vue'

// Register the portal component
Vue.use(PortalVue)

// Register the font-awesome icon component
Vue.component('icon', Icon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
