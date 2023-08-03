import { createRouter, createWebHashHistory } from "vue-router";
import { mainRoutes } from "./routes/index.ts";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: mainRoutes,
});
