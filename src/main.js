import Vue from 'vue'
import App from './App.vue'
import router from './router/router';

Vue.prototype.Terra = window.terra;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


