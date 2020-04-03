import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/index.less';

import App from "./App.vue";

/** add router */
import router from "./router";
import "@/router/interceptors";

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")