import { createRouter, createWebHistory,createWebHashHistory } from "vue-router";
import pagesRoutes from "virtual:generated-pages"; //pages文件夹下面的路由页面
import { setupLayouts } from "virtual:generated-layouts"; //页面结构



const routes = setupLayouts(pagesRoutes);
// console.log("routes :>> ", routes);

// console.log(import.meta.env);
const base_url = import.meta.env.BASE_URL; //获取vite.config.js配置的base,默认是根目录/
const router = createRouter({
  // history: createWebHistory(base_url),
  history: createWebHashHistory(base_url),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
});

// console.log(router);



// 路由前置守卫(跳转前执行) 
router.beforeEach((to, from, next) => {
  // if (to.matched.length === 0) {
  //   //如果未匹配到路由
  //   next({ path: "/error" });
  // } else {
  //   //如果匹配到正确跳转
  //   next();
  // }
  next();
});
// 路由后置守卫（可设置TKD）
router.afterEach((to, from) => {
  /* 路由发生变化修改页面title */
  //   if (to.meta.title) {
  //     document.title = to.meta.title;
  //   }
});

export default router;
