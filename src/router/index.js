import { createRouter, createWebHashHistory } from "vue-router";

import Routes from "../components/Home_routes(xjb)/routes.vue";
import Home_routes from "../components/Home_routes(xjb)/routes.vue";
import Home_routes_news from "../view/News.vue";

import home_show_hotel from "../view/Rank_2.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/honglv",
      redirect: "/honglv/home",
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("@/view/Alert.vue"),
    },

    {
      path: "/honglv",
      component: () => import("@/view/Home.vue"),
      children: [
        {
          path: "blog",
          component: () => import("@/view/Blog.vue"),
        },
        {
          path: "home",
          component: () => import("@/components/Home/Home_content.vue"),
        },
        {
          path: "show",
          component: () => import("@/view/Rank.vue"),
        },
        {
          path: "data",
          component: () => import("@/view/DataCenter.vue"),
        },
      ],
    },
    {
      path: "/routes",
      component: Routes,
    },
    {
      path: "/home_routes",
      component: Home_routes,
    },
    {
      path: "/home_routes_news",
      component: Home_routes_news,
    },
    {
      path: "/home_show_hotel",
      component: home_show_hotel,
    },
  ],
});

//判断是否登录动态添加登录路由
let isLogin = false;
if (isLogin) {
} else {
  router.addRoute("/login", {
    path: "/login",
    component: () => import("@/view/Login.vue"),
  });
}

//前置导航守卫(部分地方用)
router.beforeEach((to, from) => {
  const token = localStorage.getItem("token");
  // if (!token && to.path == "/xxx") {
  //   return "/login";
  // }
});

export default router;
