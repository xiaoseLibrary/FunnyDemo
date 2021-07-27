<template>
  <div>
    <goBackBtn></goBackBtn>
    <input type="text" id="input" />
    <span id="text"></span>
  </div>
</template>

<script>
import goBackBtn from "@/components/common/modules/gobackBtn.vue";
export default {
  data() {
    return {};
  },
  components: {
    goBackBtn
  },
  methods: {
    createdDom() {
      var obj = {};
      //   vue 2.x
      Object.defineProperty(obj, "prop", {
        get: function(val) {
          return val;
        },
        set: function(newVal) {
          document.getElementById("text").innerHTML = newVal;
        }
      });
      document.addEventListener("keyup", function(e) {
        obj.prop = e.target.value;
      });
      // vue 3.0
      //   var obj1 = new Proxy(obj, {
      //     get: function(target, key, receive) {
      //       return target[key];
      //     },
      //     set: function(target, key, newVal, receive) {
      //       // console.log(target);
      //       // console.log(key);
      //       // console.log(newVal);
      //       // console.log(receive);
      //       target[key] = newVal;
      //       document.getElementById("text").innerHTML = target[key];
      //     //   document.getElementById("text").innerHTML = newVal;
      //     }
      //   });
      //   document.addEventListener("keyup", function(e) {
      //     obj1[1] = e.target.value;
      //   });
      // Vue2.x版本中的双向绑定不能检测到下标的变化
      // proxy可以劫持整个对象，并返回一个新对象
    }
  },
  mounted() {
    this.createdDom();
  }
};
</script>

<style lang="scss" scoped></style>
