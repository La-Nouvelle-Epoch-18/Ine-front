import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import HomeView from './HomeView.vue';

Vue.use(Vuex);
Vue.use(Vuetify);

const factory: any = () =>
  shallowMount(HomeView, {
  });

describe('HomeView.vue', () => {
  it('render the component', () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
