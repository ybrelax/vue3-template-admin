import Vue from 'vue';
import App from "./App.vue";
import router from "./router";
import inject from '@/plugins/inject'

// 注入全局Vue属性
Vue.use(inject);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")