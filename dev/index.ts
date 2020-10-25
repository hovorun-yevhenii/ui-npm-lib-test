import Vue, { VNode } from 'vue';
import Dev from './main.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h): VNode => h(Dev),
}).$mount('#app');
