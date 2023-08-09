import { createRouter, createWebHistory } from "vue-router";
// import MusicList from '../views/musicList'

const routes = [
  // 注意这里使用路由path:'/'，Home, 如果你在app.vue  已经加载了首页，要删除app.vue中的组件，不然会重复加载
  {
    path: "/",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/musicList",
    component: () => import("../views/home.vue"),
  },
];
const routerHistory = createWebHistory();
const routers = createRouter({
  history: routerHistory,
  routes: routes,
});
export default routers;
