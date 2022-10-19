// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "./assets/iconfont/iconfont.js";
import { Button, Drawer, Input, Upload } from "element-ui";
import Directives from "./components/common/directive/index";
import goBackBtn from "@/components/common/modules/gobackBtn.vue";
import { FcWaveFilter } from "fancy-components";

Vue.component("goBackBtn", goBackBtn);
Vue.use(Button);
Vue.use(Drawer);
Vue.use(Input);
Vue.use(Upload);
Vue.use(Directives);
Vue.config.productionTip = false;
new FcWaveFilter();
Vue.config.ignoredElements = [/^fc-/];

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
