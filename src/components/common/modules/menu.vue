<template>
  <div class="vessel">
    <i
      class="el-icon-apple iconBtn"
      v-show="!drawerFlag"
      @click="openDrawer"
    ></i>
    <el-drawer
      title="Menu"
      :visible.sync="drawer"
      :show-close="false"
      :modal="false"
      :size="300"
      @closed="drawerFlag = false"
      direction="ltr"
    >
      <div v-for="(item, index) in list" :key="index">
        <div @click="openView(item.path)" class="btnVessel">
          <span class="svgIconBtn">
            <svg class="icon" :class="[item.icon]" aria-hidden="true">
              <use :xlink:href="'#' + item.icon"></use>
            </svg>
          </span>
          <span class="nameBtn">{{ item.btnName }}</span>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      drawerFlag: false,
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
        },
        {
          btnName: "css波浪动效",
          icon: "icon-014-girl",
          path: "/waveCss"
        },
        {
          btnName: "音乐播放器插件",
          icon: "icon-027-boy",
          path: "/aplayer"
        },
        {
          btnName: "边框Css",
          icon: "icon-021-girl",
          path: "/borderCss"
        },
        {
          btnName: "签名板",
          icon: "icon-017-boy",
          path: "/sign"
        },
        {
          btnName: "水印生成",
          icon: "icon-022-girl",
          path: "/waterMark"
        },
        {
          btnName: "小猫咪",
          icon: "icon-024-boy",
          path: "/cat"
        },
        {
          btnName: "crypto加解密",
          icon: "icon-018-boy",
          path: "/crypto"
        },
        {
          btnName: "backgroundClip初体验",
          icon: "icon-020-girl",
          path: "/barrage"
        },
        {
          btnName: "canvasToPicture",
          icon: "icon-029-girl",
          path: "/studyThree"
        },
        {
          btnName: "chatGPT-Ai",
          icon: "icon-025-boy",
          path: "/chatgpt"
        },
        {
          btnName: "棋盘试下",
          icon: "icon-023-boy",
          path: "/wgo"
        },
        {
          btnName: "滚动表单",
          icon: "icon-037-girl",
          path: "/scrollTable"
        }
      ]
    };
  },
  methods: {
    openDrawer() {
      this.drawer = true;
      this.drawerFlag = true;
    },
    openView(path) {
      this.drawer = false;
      this.$router.push(path);
    }
  }
};
</script>

<style scoped lang="scss">
.vessel {
  .iconBtn {
    font-size: 20px;
    color: rgb(147, 224, 255);
    width: 40px;
    height: 100px;
    display: inline-flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    background: rgb(255, 66, 93);
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 10;
  }
  .btnVessel {
    height: 30px;
    line-height: 30px;
    margin-bottom: 5px;
    background-color: rgb(185, 227, 217);
    cursor: pointer;
    .svgIconBtn {
      font-size: 20px;
      margin-left: 15px;
    }
    .nameBtn {
      font-size: 14px;
      margin-left: 15px;
      color: rgb(243, 244, 246);
    }
  }
}
</style>
