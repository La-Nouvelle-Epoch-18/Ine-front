import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import MyFooter from './MyFooter.vue';

Vue.use(Vuetify);

const factory: any = () =>
  shallowMount(MyFooter, {
    mocks: {
      $t: (key: string) => key,
    },
  });

describe('MyFooter.vue', () => {
  it('render the component', () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
