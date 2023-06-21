import { createRouter, createWebHashHistory } from "vue-router";
import { mainRoutes } from "./pages/routes.ts";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: mainRoutes,
});
