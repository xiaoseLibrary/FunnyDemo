<template>
  <div class="bgf6">
    <goBackBtn class="zIndexTop"></goBackBtn>
    <div class="catBox">
      <div class="cat">
        <!-- 眼睛 -->
        <div class="eye1"></div>
        <div class="eye2"></div>
        <!-- 眉毛 -->
        <div class="eyebrow-l"></div>
        <div class="eyebrow-r"></div>
        <!-- 耳朵 -->
        <div class="ear"></div>
        <!-- 鼻子 -->
        <div class="nose"></div>
        <!-- 嘴巴 -->
        <div class="mouth"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    rotateRandom(dom, e) {
      dom.forEach(eye => {
        // 获取眼睛圆心坐标
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        // 弧度
        let rad = Math.atan2(e.pageX - x, e.pageY - y);
        // 旋转的角度
        let rot = rad * (180 / Math.PI) * -1 + 270;
        // 通过旋转使得眼睛移动
        eye.style.transform = "rotate(" + rot + "deg)";
      });
    }
  },
  mounted() {
    window.addEventListener("mousemove", e => {
      let eye1 = document.querySelectorAll(".eye1");
      let eye2 = document.querySelectorAll(".eye2");
      let list = [eye1, eye2];
      list.forEach(el => {
        this.rotateRandom(el, e);
      });
    });
  }
};
</script>

<style scoped>
.catBox {
  margin: 0;
  height: 100%;
  display: grid;
  place-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 1;
}
.bgf6 {
  background: #f6fff0;
  height: 100%;
}
.cat {
  position: relative;
  width: 400px;
  height: 320px;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  border: 3px solid #222224;
  background: radial-gradient(
      circle at 30px 10px,
      #222224 150px,
      transparent 151px
    ),
    radial-gradient(
        circle at right 88px top 20px,
        #222224 145px,
        transparent 146px
      )
      #fef2dc;
  background-repeat: no-repeat;
}
.eye1,
.eye2 {
  position: absolute;
  content: "";
  width: 50px;
  height: 50px;
  background: radial-gradient(circle at 20px 14px, #fff 6px, transparent 7px),
    radial-gradient(circle at 12px 26px, #fff 3px, transparent 4px) #222224
      no-repeat;
  box-shadow: 0 0 0 10px #967c51;
  border-radius: 50%;
}
.eye1 {
  left: 60px;
  top: 100px;
}
.eye2 {
  right: 110px;
  top: 110px;
}
.eyebrow-l,
.eyebrow-r {
  position: absolute;
  width: 60px;
  height: 10px;
  border-radius: 100%;
  border: 2px solid #fff;
  border-width: 2px 0 0 0;
}
.eyebrow-l {
  left: 80px;
  top: 60px;
  transform: rotate(30deg);
}
.eyebrow-r {
  right: 130px;
  top: 60px;
  transform: rotate(-35deg);
}
.eyebrow-l::before,
.eyebrow-l::after,
.eyebrow-r::before,
.eyebrow-r::after {
  content: "";
  position: absolute;
  width: 50px;
  height: 10px;
  right: 0;
  border-radius: 100%;
  border: 2px solid #fff;
  border-width: 2px 0 0 0;
  transform-origin: right center;
}
.eyebrow-l::before {
  top: -10px;
  transform: rotate(20deg);
}
.eyebrow-l::after {
  top: 10px;
  transform: rotate(-15deg);
}
.eyebrow-r::before,
.eyebrow-r::after {
  left: 0;
  right: auto;
  transform-origin: left center;
}
.eyebrow-r::before {
  top: -10px;
  transform: rotate(-20deg);
}
.eyebrow-r::after {
  top: 10px;
  transform: rotate(15deg);
}
.ear::before {
  position: absolute;
  content: "";
  width: 120px;
  height: 200px;
  left: -20px;
  top: -50px;
  border-radius: 79% 21% 0% 100% / 100% 56% 44% 0%;
  background-color: #9e5439;
  transform: rotate(-36deg);
  box-shadow: inset 30px -10px 0 #b68679, inset 70px -15px 0 #b06648;
  border: 10px solid #222224;
  border-width: 5px 30px 0 10px;
  z-index: -1;
}
.ear::after {
  position: absolute;
  content: "";
  width: 150px;
  height: 300px;
  right: -30px;
  top: -60px;
  border-radius: 24% 76% 100% 0% / 55% 100% 0% 45%;
  background-color: #9e5439;
  transform: rotate(45deg);
  box-shadow: inset -40px -10px 0 #b68679, inset -110px -80px 0 #b06648;
  border: 10px solid #222224;
  border-width: 5px 10px 0 35px;
  z-index: -1;
}
.nose {
  position: absolute;
  left: 140px;
  top: 140px;
  transform: rotate(5deg);
  filter: drop-shadow(0 2px #b68679);
  width: 46px;
  height: 22px;
  border-radius: 50% 50% 50% 50% / 80% 80% 20% 20%;
  background: radial-gradient(
      8px 4px at 60% 50%,
      rgba(255, 255, 255, 0.5) 100%,
      transparent 0
    )
    #fcbaa1 no-repeat;
  z-index: 1;
}
.nose::after {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 5px;
  background: linear-gradient(135deg, transparent 50%, #fcbaa1 0);
  transform: scale(0.8, 1) rotate(45deg);
  left: 10px;
  bottom: -6px;
  z-index: -1;
}
.mouth {
  position: absolute;
  left: 159px;
  top: 170px;
  width: 2px;
  height: 30px;
  border: 3px solid #222224;
  border-width: 0 0 0 2px;
  border-radius: 100%;
}
.mouth::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 60px;
  height: 20px;
  border-radius: 0 0 0 20px;
  border: 2px solid #222224;
  border-width: 0 0 2px 2px;
  transform: translate(-100%) rotate(-20deg);
  transform-origin: right bottom;
}
.mouth::after {
  content: "";
  position: absolute;
  right: 3px;
  bottom: 0;
  width: 80px;
  height: 30px;
  border-radius: 0 0 30px 0;
  border: 2px solid #222224;
  border-width: 0 2px 2px 0;
  transform: translate(100%) rotate(25deg);
  transform-origin: left bottom;
}
.zIndexTop {
  position: relative;
  z-index: 999;
}
</style>
