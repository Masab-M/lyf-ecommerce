import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import signinVue from "../views/signin.vue";
import signupVue from "../views/signup.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/signin",
      name: "signin",
      component: signinVue,
    },
    {
      path: "/signup",
      name: "signup",
      component: signupVue,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
