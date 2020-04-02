
/** Layout */
import Layout from "@/layout/index.vue";

const routes =  [
  {
    path: "/",
    name: "home",
    component: Layout,
    meta: {
      title: "首页",
      icon: ""
    },
    children: [
      {
        path: '/',
        component: () => import("@/views/dashboard/index.vue")
      }
    ],
    
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
    },
    component: () => import("@/views/login/index.vue")
  }
];

export default routes;