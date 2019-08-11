import Vue from 'vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import './registerServiceWorker';
import './main.scss';

import App from './components/App/App.vue';
import SvgIcon from './components/SvgIcon.vue';

Vue.config.productionTip = false;

export const run = async () => {
  // init global components
  Vue.component('SvgIcon', SvgIcon);

  // init Vue
  new Vue({
    vuetify,
    router,
    store,
    render: (h: any) => h(App),
  }).$mount('#app');
};

run();
