/* eslint-disable no-unused-vars */
import debounce from "./debounce";
import throttle from "./throttle";

const directives = {
  debounce,
  throttle
};

export default {
  install(Vue) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key]);
    });
  }
};
