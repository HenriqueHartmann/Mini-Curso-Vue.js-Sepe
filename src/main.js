import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.prototype.$axios = axios

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
