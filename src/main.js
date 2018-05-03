import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-awesome/icons/times'
import Icon from 'vue-awesome/components/Icon'

// globally (in your main .js file)
Vue.component('icon', Icon)

Vue.config.productionTip = false;

// globally (in your main .js file)
Vue.component('icon', Icon)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
