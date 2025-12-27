import { createMemoryHistory, createRouter } from "vue-router";
import Home from "../view/Home.vue";
import TodoView from "../view/TodoView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todo",
    name: "Todo View",
    component: TodoView,
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
