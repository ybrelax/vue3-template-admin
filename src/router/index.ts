import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { AppRouteModule } from './types';

const modules: Record<string, any> = import.meta.glob('./modules/**/*.ts');
const routeModuleList: AppRouteModule[] = [];

// 加入到路由集合
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

// 动态路由
export const asyncRoutes = [...routeModuleList];

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
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
