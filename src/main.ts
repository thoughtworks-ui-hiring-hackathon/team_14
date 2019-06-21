import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import bootstrap;
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import EventBus from './eventBus';

library.add(faCoffee);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
