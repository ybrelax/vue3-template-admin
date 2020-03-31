import Vue from 'vue';
import App from "./App.vue";
import router from "./router";

const name:string = '234';
class person {
   name:string = 'yaobo'
}
console.log(new person().name)
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")