import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'Coffee',
  },
  mutations: {
    changeName(state, name) {
      state.name = name;
    },
  },
  actions: {

  },
});
