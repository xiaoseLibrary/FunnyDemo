<template>
  <div>
    <fc-warp-btn text-align="center" @click="openView('/')">返 回</fc-warp-btn>
  </div>
</template>

<script>
import { FcWarpBtn } from "fancy-components";
new FcWarpBtn();
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

<style>
fc-warp-btn {
  --width: 150px;
  --height: 40px;
  --color: #1cd;
  --shadow-color: rgba(0, 0, 0, 0.7);
}
</style>
