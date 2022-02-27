import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import home2Vue from "../views/home2.vue";
import signinVue from "../views/signin.vue";
import signupVue from "../views/signup.vue";
import UploadAdVue from "../views/UploadAd.vue";
import offervue from "../components/newitem/offer.vue"
import adCatvue from "../components/newitem/subcat.vue"
import adDetailVue from "../components/newitem/details.vue";
import chatVue from "../views/chat.vue";
import item from "../views/Item.vue";
import liveitemVue from "../components/Item/liveitem.vue";
import InprocessVue from "../components/Item/Inprocess.vue";
import rejectedVue from "../components/Item/rejected.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/newItem",
      name: "newItem",
      component: UploadAdVue,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /users/:username is matched
        { path: '', component: offervue },

        // UserProfile will be rendered inside User's <router-view>
        // when /users/:username/profile is matched
        { path: 'itemCategory/:id', component: adCatvue },

        // UserPosts will be rendered inside User's <router-view>
        // when /users/:username/posts is matched
        { path: 'itemDetails/:id/:subId', component: adDetailVue },
      ]
    },
    {
      path: "/home",
      name: "home1",
      component: home2Vue,
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
    {
      path: "/inbox",
      name: "chat",
      component: chatVue,
    },
    {
      path: "/item",
      name: "item",
      component: item,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /users/:username is matched
        { path: '', component: liveitemVue },

        // UserProfile will be rendered inside User's <router-view>
        // when /users/:username/profile is matched
        { path: 'pending', component: InprocessVue },

        // UserPosts will be rendered inside User's <router-view>
        // when /users/:username/posts is matched
        { path: 'rejected', component: rejectedVue },
      ]
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
