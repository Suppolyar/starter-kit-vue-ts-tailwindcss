import HomePage from "./HomePage.vue";
import AboutPage from "./AboutPage.vue";

export const mainRoutes = [
  { path: "/", component: HomePage },
  {
    path: "/about",
    component: AboutPage,
  },
];
