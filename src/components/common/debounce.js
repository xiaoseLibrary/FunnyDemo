/*
 * @param {Function} fn - 执行事件
 * @param {String} event - 事件类型 类似 "click","scroll"...
 * @param {Number} time - 间隔时间
 */

const debounce = {
  inserted: function(el, { value: { fn, event, time } }) {
    //没绑定函数直接返回
    if (typeof fn !== "function") return;
    //监听点击事件，限定事件内如果再次点击则清空定时器并重新定时
    el.addEventListener(event, () => {
      if (el._timer) {
        clearTimeout(el._timer);
      }
      el._timer = setTimeout(() => {
        fn();
      }, time);
    });
  }
};

export default debounce;
