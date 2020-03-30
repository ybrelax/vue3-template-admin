const router = {
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "首页",
        icon: ""
      },
      component: () => import("@/views/dashboard/index.vue")
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "登录",
      },
      component: () => import("@/views/login/index.vue")
    }
  ]
};

export default router;