import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/index.less';

import App from "./App.vue";
import router from "./router";

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")