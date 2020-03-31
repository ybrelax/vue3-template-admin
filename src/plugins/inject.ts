

import Vue  from 'vue'
import axios from "@/http"
export default {
  install: (vue: typeof Vue) : void => {
    vue.prototype.$axios = axios;
  }
}