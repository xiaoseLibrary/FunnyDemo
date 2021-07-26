<template>
  <div
    class="range"
    :class="rangeStatus ? 'success' : ''"
    :style="{
      height: `${height}px`,
      width: `${width}px`,
      borderRadius: `${border_radius}px`,
      backgroundColor: rangeStatus ? successColor : defaultColor
    }"
  >
    <div
      class="high-light"
      :style="{
        boxShadow: `0 0 ${(height / 3) * 2}px ${(height / 3) * 2}px #fff`
      }"
    ></div>
    <i
      @mousedown="rangeMove"
      class="iconfont"
      :class="icon"
      :style="{
        width: `${height}px`,
        transition: `${time}s all`,
        transform: `translateX(${disX}px)`,
        borderRadius: `0 ${border_radius}px ${border_radius}px 0`,
        color: rangeStatus ? successColor : '#585858'
      }"
    ></i>
    <div
      class="range-box"
      :style="{
        width: `${disX}px`,
        transition: `${time}s all`,
        borderRadius: `${border_radius}px 0 0 ${border_radius}px`,
        backgroundColor: successColor
      }"
    ></div>
    <div class="range-text">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 50
    },
    //成功图标
    successIcon: {
      type: String,
      default: "iconduigou"
    },
    //成功文字
    successText: {
      type: String,
      default: "验证成功"
    },
    // 成功背景色
    successColor: {
      type: String,
      default: "#3bc923"
    },
    // 默认背景色
    defaultColor: {
      type: String,
      default: "#e0e0e0"
    },
    // 失败图标
    filedIcon: {
      type: String,
      default: "iconguanbi"
    },
    //开始的图标
    startIcon: {
      type: String,
      default: "iconjiantouarrowheads3-copy"
    },
    //开始的文字
    startText: {
      type: String,
      default: "请拖住滑块，拖动到最右边"
    },
    // 圆角
    border_radius: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      disX: 0,
      rangeStatus: false,
      mouse_up: false,
      time: 0
    };
  },
  computed: {
    text() {
      return this.rangeStatus ? this.successText : this.startText;
    },
    icon() {
      if (!this.mouse_up) {
        return this.startIcon;
      }
      return this.rangeStatus ? this.successIcon : this.filedIcon;
    }
  },
  methods: {
    reset() {
      this.disX = 0;
      this.time = 0.5;
      setTimeout(() => {
        this.time = 0;
      }, 500);
      this.rangeStatus = false;
      this.mouse_up = false;
      this.$emit("input", this.rangeStatus);
      this.$emit("filed");
    },
    //滑块移动
    rangeMove(e) {
      let ele = e.target;
      let startX = e.clientX;
      let eleWidth = ele.offsetWidth;
      let parentWidth = ele.parentElement.offsetWidth;
      let MaxX = parentWidth - eleWidth;
      let self = this;
      if (this.rangeStatus) {
        return false;
      }
      document.onmousemove = e => {
        let endX = e.clientX;
        this.disX = endX - startX;
        if (this.disX <= 0) {
          this.disX = 0;
        }
        if (this.disX >= MaxX - eleWidth) {
          this.disX = MaxX;
        }
        this.time = 0;
        e.preventDefault();
      };
      document.onmouseup = () => {
        if (this.disX !== MaxX) {
          this.time = 0.5;
          this.disX = 0;
          this.$emit("filed");
          this.mouse_up = true;
          setTimeout(() => {
            this.mouse_up = false;
          }, 500);
        } else {
          this.rangeStatus = true;
          this.mouse_up = true;
          self.$emit("success");
        }
        this.$emit("input", this.rangeStatus);
        document.onmousemove = null;
        document.onmouseup = null;
      };
    }
  }
};
</script>
<style scoped>
.range {
  position: relative;
  transition: 1s all;
  user-select: none;
  color: #585858;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 1px solid #d8d8d8;
}
.range.success {
  color: #fff;
}
.range i {
  position: absolute;
  left: 0;
  height: 100%;
  background-color: #fff;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  /* box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2); */
  box-shadow: 0 0 3px rgb(0 0 0 / 30%);
}
.range .range-box {
  position: absolute;
  left: 0;
  height: 100%;
}
.range .range-text {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
}
.high-light {
  position: absolute;
  top: 50%;
  left: 0;
  border-radius: 50%;
  box-shadow: 0 0 30px 20px #fff;
  width: 0;
  height: 0;
  background-color: #fff;
  animation: Run 2s infinite;
}
@keyframes Run {
  0% {
    left: 0;
  }
  100% {
    left: 110%;
  }
}
</style>
