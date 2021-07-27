/* eslint-disable no-unused-vars */
import debounce from "./debounce";
import throttle from "./throttle";
import magnify from "./magnify";

const directives = {
  debounce,
  throttle,
  magnify
};

export default {
  install(Vue) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key]);
    });
  }
};
