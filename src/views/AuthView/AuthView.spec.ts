import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import AuthView from './AuthView.vue';

Vue.use(Vuex);
Vue.use(Vuetify);

const factory: any = () =>
  shallowMount(AuthView, {
  });

describe('AuthView.vue', () => {
  it('render the component', () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
