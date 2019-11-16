import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Free from "../views/Free.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },

  {
    path: "/",
    name: "free",
    component: Free
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
