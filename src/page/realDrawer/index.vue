<template>
  <div>
    <div class="g-scroll" id="g-scroll"></div>
    <div class="g-wrapper">
      <div class="g-mask"></div>
      <div class="g-inner">
        <div
          class="g-item"
          v-for="(item, index) in list"
          :key="index"
          @click="openPage(item.path)"
        >
          {{ item.btnName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          btnName: "刮刮乐 Demo",
          icon: "icon-008-boy",
          path: "/clearImg"
        },
        {
          btnName: "滤镜 Demo",
          icon: "icon-004-boy",
          path: "/lvjing"
        },
        {
          btnName: "倒影 Demo",
          icon: "icon-010-boy",
          path: "/reflect"
        },
        {
          btnName: "滚动条 Demo",
          icon: "icon-002-boy",
          path: "/slide"
        },
        {
          btnName: "组织架构 Demo",
          icon: "icon-005-boy",
          path: "/vueTree"
        },
        {
          btnName: "css Demo",
          icon: "icon-001-boy",
          path: "/cssDemo"
        },
        {
          btnName: "svg路径 Demo",
          icon: "icon-007-girl",
          path: "/svgPath"
        },
        {
          btnName: "Vue2.0&3.0 双向绑定 Demo",
          icon: "icon-003-girl",
          path: "/pinless"
        },
        {
          btnName: "图片放大查看",
          icon: "icon-009-girl",
          path: "/picOrder"
        },
        {
          btnName: "防抖节流指令",
          icon: "icon-006-boy",
          path: "/directive"
        },
        {
          btnName: "gitLab&gitHub",
          icon: "icon-012-boy",
          path: "/gitAccount"
        },
        {
          btnName: "贪吃蛇",
          icon: "icon-016-girl",
          path: "/snake"
        },
        {
          btnName: "ThreeJs Demo",
          icon: "icon-013-boy",
          path: "/threeJs"
        },
        {
          btnName: "好玩的css特效",
          icon: "icon-011-girl",
          path: "/playCss"
        },
        {
          btnName: "抽屉特效",
          icon: "icon-015-boy",
          path: "/realDrawer"
        }
      ]
    };
  },
  methods: {
    openPage(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
@property --phase {
  syntax: "<length>";
  inherits: false;
  initial-value: 15px;
}
.g-scroll {
  width: 100%;
  /* height: 1000vh; */
  position: relative;
}
.g-wrapper {
  position: fixed;
  top: -20%;
  width: 100vw;
  height: 100vh;
  perspective: 200px;
  transform-style: preserve-3d;
}

.g-mask {
  position: fixed;
  width: 100vw;
  height: 120vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  transform: translateZ(0);
}

.g-inner {
  position: relative;
  cursor: pointer;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transform-style: preserve-3d;
  transform: translateY(calc(-50% + 100px)) translateZ(var(--phase))
    rotateX(90deg);
  transform-origin: bottom center;
  animation: move 15s infinite;
  /* animation-timeline: box-move; */
}

/* @scroll-timeline box-move {
  source: selector("#g-scroll");
  orientation: "vertical";
} */
/* 目前没有浏览器支持 */

.g-item {
  width: 300px;
  height: 200px;
  padding: 8px;
  box-sizing: border-box;
  color: #fff;
  background: #000;
  transform: rotateX(-90deg);
}

@keyframes move {
  0% {
    --phase: 0;
  }
  100% {
    --phase: calc(100vh + 100px);
  }
}
</style>
