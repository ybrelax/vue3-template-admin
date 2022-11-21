import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/pages/login/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home/index.vue')
  },
  {
    path: '/vue-use',
    name: 'vue-use',
    component: () => import('@/pages/vue-use/index.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
