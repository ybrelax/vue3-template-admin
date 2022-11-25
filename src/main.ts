import 'virtual:windi.css';
import 'ant-design-vue/dist/antd.variable.less';
import '@/design/index.less';
import { createApp } from 'vue';
import store from './store';
import './style.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

// 挂载pinia
app.use(store);

// 引入路由
app.use(router);

app.mount('#app');
