<template>
  <div>
    <el-button
      type="primary"
      icon="el-icon-arrow-left"
      circle
      @click="openView('/')"
    ></el-button>
    <!-- 第三方验证码插件 -->
    <div class="borderBox">
      <div>
        <slide-verify
          :l="42"
          :r="5"
          :w="310"
          :h="150"
          :imgs="img"
          :accuracy="5"
          @success="onSuccess"
          @fail="onFail"
          @refresh="onRefresh"
          :slider-text="text"
        ></slide-verify>
      </div>
      <div class="explainBox">
        <div class="dib">
          <h4>属性：</h4>
          <p>l:为滑块长度</p>
          <p>r:为滑块内圆环半径</p>
          <p>w:为画布宽度</p>
          <p>h:为画布高度</p>
          <p>sliderText:默认展示文字</p>
          <p>imgs:拼图背景为数组</p>
          <p>accuracy:滑动验证的误差</p>
          <p>show:刷新按钮是否展示</p>
        </div>
        <div class="dib">
          <h4>回调事件：</h4>
          <p>success:为验证成功回调，返回参数为响应时间，单位毫秒</p>
          <p>fail:为验证失败回调</p>
          <p>refresh:点击刷新按钮后的回调函数</p>
          <p>again:检测到非人为操作滑动时，触发的回调函数</p>
          <p>fulfilled:刷新成功后的回调函数</p>
        </div>
      </div>
    </div>
    <!-- 拼图验证 -->
    <!-- <div>{{ msg }}</div> -->
    <!-- 滑动验证 -->
    <div class="borderBox">
      <range
        v-model="ruleForm.status"
        @success="onMpanelSuccess"
        @filed="onMpanelError"
        successColor="red"
        ref="range"
        :height="42"
        :width="310"
      ></range>
      <div>{{ range_status }}</div>
      <div>{{ ruleForm.status }}</div>
    </div>
    <!-- 验证码 -->
    <div class="borderBox">
      <div style="width:310px">
        <SIdentify @update-code="getCode" />
        <div>{{ identifyCode }}</div>
      </div>
    </div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27.36"
        height="15.239"
        viewBox="0 0 27.36 15.239"
      >
        <path
          id="路径_3679"
          class="path"
          data-name="路径 3679"
          d="M14.782,12.577,2.661.456a1.559,1.559,0,1,0-2.2,2.2L11.477,13.679.456,24.7a1.559,1.559,0,0,0,2.2,2.2L14.784,14.781a1.559,1.559,0,0,0,0-2.2h0Z"
          transform="translate(0 15.239) rotate(-90)"
          fill="none"
          stroke-width="0.5"
          stroke="red"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import SlideVerify from "vue-monoplasty-slide-verify";
Vue.use(SlideVerify);

import Range from "./modules/range";
import SIdentify from "./modules/identify";
export default {
  name: "App",
  components: {
    Range,
    SIdentify
  },
  data() {
    return {
      img: [require("@/assets/img/eva1.jpg"), require("@/assets/img/eva2.jpg")],
      msg: "",
      text: "向右滑",

      ruleForm: {
        status: false
      },
      range_status: "",

      identifyCode: ""
    };
  },
  methods: {
    openView(path) {
      this.$router.replace(path);
    },
    onSuccess(time) {
      this.text = Number(time / 1000) + "s";
      this.msg = "验证成功";
    },
    onFail() {
      this.msg = "验证失败";
    },
    onRefresh() {
      this.msg = "";
    },

    onMpanelError() {
      this.range_status = "验证失败";
    },
    onMpanelSuccess() {
      this.range_status = "验证成功";
      setTimeout(() => {
        this.$refs.range.reset();
      }, 2000);
    },
    getCode(code) {
      console.log("code: ", code);
      this.identifyCode = code;
    }
  }
};
</script>

<style scoped>
p {
  margin: 0;
  padding-bottom: 2px;
}
h4 {
  margin: 0;
}
.dib {
  display: inline-block;
}
.borderBox {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  display: flex;
}
.explainBox {
  min-width: 200px;
  max-height: 200px;
  min-height: 150px;
  margin-left: 20px;
  background: lightblue;
  padding: 5px;
  display: inline-block;
}
.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 5s linear forwards;
  animation-delay: 1s;
  -webkit-animation: dash 5s linear forwards;
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
