import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import MainWrapper from './MainWrapper.vue';

Vue.use(Vuetify);

describe('MainWrapper.vue', () => {
  it('render the component', () => {
    const wrapper = shallowMount(MainWrapper, {
      stubs: ['router-view'],
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
