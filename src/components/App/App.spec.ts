import { shallowMount } from '@vue/test-utils';
import App from './App.vue';

const factory: any = () =>
  shallowMount(App, {
    stubs: ['router-view'],
    mocks: {
      $t: (key: string) => key,
    },
  });

describe('App.vue', () => {
  it('render the component', () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
