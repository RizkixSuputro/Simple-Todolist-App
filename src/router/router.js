import { createMemoryHistory, createRouter } from "vue-router";
import LandingPages from "../view/LandingPages.vue";

const routes = [
  {
    path: "/",
    name: "LandingPages",
    component: LandingPages,
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
