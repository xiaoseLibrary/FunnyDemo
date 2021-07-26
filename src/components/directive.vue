<template>
  <div>
    <el-button
      type="primary"
      icon="el-icon-arrow-left"
      circle
      @click="openView('/')"
    ></el-button>
    <div class="contentBox">
      <div class="title">防抖</div>
      <el-input
        v-model="input"
        placeholder="请输入内容"
        v-debounce="{ fn: debounce, event: 'input', time: 1000 }"
        style="width:200px;"
      ></el-input>
      <div class="title">节流</div>
      <el-button
        type="success"
        icon="el-icon-star-off"
        circle
        v-throttle="{ fn: throttle, time: 3000 }"
      ></el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  methods: {
    openView(path) {
      this.$router.replace(path);
    },
    debounce() {
      console.log(this.input);
    },
    throttle() {
      console.log("3秒内只执行一次");
    }
  }
};
</script>

<style lang="scss" scoped>
.contentBox {
  width: 500px;
  margin: 0 auto;
  .title {
    margin: 20px 0;
  }
}
</style>
