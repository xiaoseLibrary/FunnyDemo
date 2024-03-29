import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
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
    },
    {
      path: "/snake",
      name: "snake",
      component: () => import("@/page/snake")
    },
    {
      path: "/threeJs",
      name: "threeJs",
      component: () => import("@/page/threeJs")
    },
    {
      path: "/playCss",
      name: "playCss",
      component: () => import("@/page/playCss")
    },
    {
      path: "/realDrawer",
      name: "realDrawer",
      component: () => import("@/page/realDrawer")
    },
    {
      path: "/waveCss",
      name: "waveCss",
      component: () => import("@/page/waveCss")
    },
    {
      path: "/aplayer",
      name: "aplayer",
      component: () => import("@/page/aplayer")
    },
    {
      path: "/borderCss",
      name: "borderCss",
      component: () => import("@/page/borderCss")
    },
    {
      path: "/sign",
      name: "sign",
      component: () => import("@/page/sign")
    },
    {
      path: "/waterMark",
      name: "waterMark",
      component: () => import("@/page/waterMark")
    },
    {
      path: "/cat",
      name: "cat",
      component: () => import("@/page/cat")
    },
    {
      path: "/crypto",
      name: "crypto",
      component: () => import("@/page/crypto")
    },
    {
      path: "/barrage",
      name: "barrage",
      component: () => import("@/page/barrage")
    },
    {
      path: "/studyThree",
      name: "studyThree",
      component: () => import("@/page/studyThree")
    },
    {
      path: "/chatgpt",
      name: "chatgptAi",
      component: () => import("@/page/chatGPTAi")
    },
    {
      path: "/wgo",
      name: "wgo",
      component: () => import("@/page/wgo")
    },
    {
      path: "/scrollTable",
      name: "scrollTable",
      component: () => import("@/page/scrollTable")
    },
    {
      path: "*",
      component: () => import("@/page/404Page")
    }
  ]
});
