import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    version: '1.0.0',
  },
  modules: {
  },
  strict: process.env.NODE_ENV !== 'production',
});
