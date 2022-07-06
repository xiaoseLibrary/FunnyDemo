<template>
  <div id="app">
    <allMenu></allMenu>
    <router-view />
  </div>
</template>

<script>
import allMenu from "@/components/common/modules/menu";
export default {
  name: "App",
  components: {
    allMenu
  }
};
</script>

<style>
@import "./assets/iconfont/iconfont.css";
#app {
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.p-10 {
  padding: 10px;
}
</style>
