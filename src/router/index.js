import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: () => import("@/components/HelloWorld")
    },
    {
      path: "/clearImg",
      name: "clearImg",
      component: () => import("@/components/clearImg")
    },
    {
      path: "/lvjing",
      name: "lvjing",
      component: () => import("@/components/lvjing")
    },
    {
      path: "/reflect",
      name: "reflect",
      component: () => import("@/components/reflect")
    },
    {
      path: "/slide",
      name: "slide",
      component: () => import("@/components/slideVerify")
    },
    {
      path: "/vueTree",
      name: "vueTree",
      component: () => import("@/components/vueTree")
    },
    {
      path: "/cssDemo",
      name: "cssDemo",
      component: () => import("@/components/cssDemo")
    },
    {
      path: "/svgPath",
      name: "svgPath",
      component: () => import("@/components/svgPath")
    },
    {
      path: "/pinless",
      name: "pinless",
      component: () => import("@/components/pinless")
    },
    {
      path: "/vueMd",
      name: "vueMd",
      component: () => import("@/components/vueMd")
    },
    {
      path: "/directive",
      name: "directive",
      component: () => import("@/components/directive")
    }
    // {
    //   path: "/read",
    //   name: "read",
    //   component: () => import("@/components/MD-read-edit/read")
    // },
    // {
    //   path: "/edit",
    //   name: "edit",
    //   component: () => import("@/components/MD-read-edit/edit")
    // }
  ]
});
