import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";

export const mainRoutes = [
  { path: "/", component: HomePage },
  {
    path: "/about",
    component: AboutPage,
  },
];
