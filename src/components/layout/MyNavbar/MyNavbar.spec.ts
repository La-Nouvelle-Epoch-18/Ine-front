import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import MyNavbar from './MyNavbar.vue';

Vue.use(Vuex);
Vue.use(Vuetify);

const factory: any = (name: string = 'xs') =>
  shallowMount(MyNavbar, {
  });

describe('MyNavbar.vue', () => {
  it('render the component', () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
