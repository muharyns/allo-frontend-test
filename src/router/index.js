import { createRouter, createWebHistory } from "vue-router";
import RocketList from "../pages/RocketList.vue";
import RocketDetail from "../pages/RocketListDetail.vue";

const routes = [
  { path: "/", name: "RocketList", component: RocketList },
  { path: "/rockets/:id", name: "RocketDetail", component: RocketDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
