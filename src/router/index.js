import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/page/home")
    },
    {
      path: "/clearImg",
      name: "clearImg",
      component: () => import("@/page/clearImg")
    },
    {
      path: "/lvjing",
      name: "lvjing",
      component: () => import("@/page/lvjing")
    },
    {
      path: "/reflect",
      name: "reflect",
      component: () => import("@/page/reflect")
    },
    {
      path: "/slide",
      name: "slide",
      component: () => import("@/page/slideVerify")
    },
    {
      path: "/vueTree",
      name: "vueTree",
      component: () => import("@/page/vueTree")
    },
    {
      path: "/cssDemo",
      name: "cssDemo",
      component: () => import("@/page/cssDemo")
    },
    {
      path: "/svgPath",
      name: "svgPath",
      component: () => import("@/page/svgPath")
    },
    {
      path: "/pinless",
      name: "pinless",
      component: () => import("@/page/pinless")
    },
    {
      path: "/picOrder",
      name: "picOrder",
      component: () => import("@/page/picOrder")
    },
    {
      path: "/directive",
      name: "directive",
      component: () => import("@/page/directive")
    },
    {
      path: "/gitAccount",
      name: "gitAccount",
      component: () => import("@/page/gitAccount")
    }
  ]
});
