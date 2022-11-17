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
