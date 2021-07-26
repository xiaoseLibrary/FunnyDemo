// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
// import animated from "animate.css";
import "./assets/iconfont/iconfont.js";
import { Button, Drawer, Input } from "element-ui";
import magnify from "./components/common/v-magnify";
import Directives from "./components/common/directive";
Vue.use(Button);
Vue.use(Drawer);
Vue.use(Input);
Vue.use(magnify);
Vue.use(Directives);
// Vue.use(animated);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
