<template>
  <div class="vessel">
    <goBackBtn></goBackBtn>
    <img :src="url('img/dog')" class="bascic" />
    <!-- 向上跳动 -->
    <img :src="url('img/dog')" class="bascic animation-1" />
    <!-- 划上放大 -->
    <img :src="url('img/dog')" class="bascic animation-2" />
    <!-- 框内放大 -->
    <div class="animationBox-1">
      <img :src="url('img/dog')" class="bascic animation-3" />
    </div>
    <!-- 蒙版遮罩 -->
    <div class="animationBox-2">
      <img :src="newUrl('img/dog', 'png')" class="bascic animation-4" />
    </div>
  </div>
</template>

<script>
import goBackBtn from "@/components/common/gobackBtn.vue";
export default {
  data() {
    return {};
  },
  components: {
    goBackBtn
  },
  methods: {
    // 静态资源优雅加载
    url(fileName) {
      // eslint-disable-next-line no-undef
      return require(`@/assets/${fileName}.png`);
    },
    newUrl(fileName, rule) {
      // eslint-disable-next-line no-undef
      return require(`@/assets/${fileName}.${rule}`);
    }
  }
};
</script>

<style scoped>
.bascic {
  width: 6.25rem;
  height: 6.25rem;
  margin-bottom: 100px;
  background: lightblue;
  display: block;
  margin: 0 auto 100px auto;
}
.vessel {
  text-align: center;
  width: 31.25rem;
  margin: 0 auto;
}
/* 向上跳跃 */
.animation-1 {
  cursor: pointer;
  transition: all 0.3s;
}
.animation-1:hover {
  border-radius: 50%;
  transform: translateY(-10px);
}
/* 放大效果 */
.animation-2 {
  transition: all 1s;
}
.animation-2:hover {
  transform: scale(1.5);
  border-radius: 50%;
}
/* 框内放大 */
.animationBox-1 {
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin: 0 auto 100px auto;
}
.animation-3 {
  overflow: hidden;
  transition: all 1.5s;
}
.animation-3:hover {
  transform: scale(1.2);
  transform: rotate(360deg);
}
/* 蒙版遮罩 */
.animationBox-2 {
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin: 0 auto 100px auto;
  background-color: #4f4f4f;
}
.animation-4 {
  transition: all 1s;
}
.animationBox-2:hover .animation-4 {
  opacity: 0.8;
}
</style>
