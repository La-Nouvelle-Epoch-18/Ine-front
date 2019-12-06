import Vue from 'vue';
import Vuex from 'vuex';
import { UserStore } from './stores/users/UserStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users: UserStore,
  },
  strict: process.env.NODE_ENV !== 'production',
});
