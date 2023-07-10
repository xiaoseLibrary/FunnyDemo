// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "./assets/iconfont/iconfont.js";
import {
  Button,
  Drawer,
  Input,
  Upload,
  DatePicker,
  Descriptions,
  DescriptionsItem,
  Row,
  Col,
  Table,
  TableColumn,
  Tooltip,
  Collapse,
  CollapseItem,
  Tree,
  Checkbox
} from "element-ui";
import Directives from "./components/common/directive/index";
import goBackBtn from "@/components/common/modules/gobackBtn.vue";
import { FcWaveFilter } from "fancy-components";
import "element-ui/lib/theme-chalk/index.css";
import scroll from "vue-seamless-scroll";

Vue.component("goBackBtn", goBackBtn);
Vue.use(Button);
Vue.use(Drawer);
Vue.use(Input);
Vue.use(Upload);
Vue.use(DatePicker);
Vue.use(Descriptions);
Vue.use(DescriptionsItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tooltip);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Tree);
Vue.use(Checkbox);
Vue.use(scroll);

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
