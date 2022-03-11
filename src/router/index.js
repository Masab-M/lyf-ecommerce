import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import home2Vue from "../views/home2.vue";
import signinVue from "../views/signin.vue";
import signupVue from "../views/signup.vue";
import UploadAdVue from "../views/UploadAd.vue";
import adDetailVue from "../components/newitem/details.vue";
import chatVue from "../views/chat.vue";
import item from "../views/Item.vue";
import company from "../views/company.vue";
import liveitemVue from "../components/Item/liveitem.vue";
import InprocessVue from "../components/Item/Inprocess.vue";
import rejectedVue from "../components/Item/rejected.vue";
import archiveComponentVue from "../components/chat/archiveComponent.vue";
import messageVue from "../components/chat/message.vue";
import empteymessageVue from "../components/chat/empteymessage.vue";
import profileVue from "../views/profile.vue";
import singleitemVue from "../views/singleitem.vue";
import EditProfile from "../components/setting/editprofile.vue";
import password from "../components/setting/changePassword.vue";
import privacy from "../components/setting/privacy.vue";
import settingVue from "../views/setting.vue";
import favouritesVue from "../views/favourites.vue";
import search from "../views/search.vue";
import faqVue from "../views/faq.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/search",
      name: "search",
      props: route => ({ query: route.query.q }),
      component:    search },
    {
      path: "/wishlist",
      name: "fav",
      component: favouritesVue,
    },
    {
      path: "/company/:id",
      name: "company",
      component: company,
    },
    {
      path: "/user/:id",
      name: "profile",
      component: profileVue,
    },
    {
      path: "/faqs",
      name: "FaQs",
      component: faqVue,
    },
    {
      path: "/edit/:id",
      name: "setting",
      component: settingVue,
      children:[
        { path: 'profile', component: EditProfile },
        { path: '', component: EditProfile },
        { path: 'password', component: password },
        { path: 'privacy', component: privacy },
      ]
    },
    {
      path: "/item/:id",
      name: "singleItem",
      component: singleitemVue,
    },
    {
      path: "/newItem",
      name: "newItem",
      component: UploadAdVue,
      children: [
       
        
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
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /users/:username is matched
        { path: '',   components: {
          default: chatVue,
          chat: archiveComponentVue,
          message: empteymessageVue
        },
      },
        { path: 'all',   components: {
          default: chatVue,
          chat: archiveComponentVue,
          message: empteymessageVue,
        }},

        // UserProfile will be rendered inside User's <router-view>
        // when /users/:username/profile is matched
        { path: 'tag', components: {
          default: chatVue,
          chat: archiveComponentVue,
          message: empteymessageVue
        }},

        // UserPosts will be rendered inside User's <router-view>
        // when /users/:username/posts is matched
        { path: 'unread',components: {
          default: chatVue,
          chat: archiveComponentVue,
          message: empteymessageVue
        } },
        { path: ':id',components: {
          default: chatVue,
          chat: archiveComponentVue,
          message: messageVue
        } }
      ]
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
    
  ],
});

export default router;
