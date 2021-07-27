<template>
  <div>
    <el-button
      type="primary"
      icon="el-icon-arrow-left"
      circle
      @click="openView('/')"
    ></el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    openView(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style></style>
