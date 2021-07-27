<template>
  <div>
    <goBackBtn></goBackBtn>
    <div>
      <div class="b">
        <span class="t">五一快乐</span>
        <div class="m"></div>
      </div>
    </div>
    <div style="width:100%;text-align:center;">
      <img :src="eva" style="width:300px;height:500px;" />
    </div>
    <div class="test">Hello World</div>
    <div class="blackBox">
      <div style="width:100%;display:inline-block;margin:50px auto">
        <div class="btn">Test</div>
      </div>
    </div>
  </div>
</template>

<script>
import goBackBtn from "@/components/common/modules/gobackBtn.vue";
export default {
  data() {
    return {
      // eslint-disable-next-line no-undef
      eva: require("@/assets/img/eva1.jpg")
    };
  },
  components: {
    goBackBtn
  }
};
</script>

<style scoped>
img {
  -webkit-box-reflect: right 10px;
  -webkit-box-reflect: left 10px
    linear-gradient(transparent, rgba(0, 0, 0, 0.5));
}
.test {
  padding-top: 20px;
  font-weight: bold;
  font-size: 60px;
  text-align: center;
  color: lightblue;
  text-shadow: 5px 5px 5px lightsalmon;
  -webkit-box-reflect: below 10px
    linear-gradient(transparent 30%, rgba(0, 0, 0, 0.5));
  filter: contrast(2);
}
.blackBox {
  background: #000;
  width: 100%;
  height: 400px;
  margin-top: 100px;
}
.btn {
  position: relative;
  z-index: 0;
  width: 160px;
  height: 80px;
  line-height: 80px;
  color: lightblue;
  font-size: 24px;
  border-radius: 10px;
  text-align: center;
  margin: auto;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
  -webkit-box-reflect: below 10px
    linear-gradient(transparent, rgba(0, 0, 0, 0.4));
}
.btn::before {
  content: "";
  position: absolute;
  z-index: -2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
  height: 300%;
  background-color: #000;
  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-position: 0 0;
  background-image: conic-gradient(lightblue, lightblue);
  animation: rotate 2s linear infinite;
}

.btn::after {
  content: "";
  position: absolute;
  z-index: -1;
  left: 2px;
  top: 2px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  background: #000;
  border-radius: 10px;
}
@keyframes rotate {
  100% {
    transform: translate(-50%, -50%) rotate(1turn);
  }
}
.b {
  font-size: 20px;
  color: red;
  font-weight: bold;
  width: 40px;
  position: relative;
  line-height: 1;
}
.m {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  mix-blend-mode: difference;
  animation: an 3s infinite linear;
  color: lightblue;
}
@keyframes an {
  0% {
    top: 0;
    left: 0;
  }
  25% {
    top: 0;
    left: 50%;
  }
  50% {
    top: 50%;
    left: 50%;
  }
  75% {
    top: 50%;
    left: 0;
  }
  100% {
    top: 0;
    left: 0;
  }
}
</style>
