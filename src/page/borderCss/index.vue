<template>
  <div class="p-10">
    <goBackBtn></goBackBtn>
    <div class="vessel">
      <div
        v-for="item in 7"
        :key="item"
        class="box"
        :class="[`item${item}`]"
      ></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.vessel {
  margin-top: 20px;
}
.box {
  display: inline-block;
  width: 200px;
  height: 50px;
}
.item1 {
  border: 8px dotted #99cc00;
  padding-top: 10%;
}

.item2 {
  border: 10px double #ff9999;
  border-radius: 8px;
  padding-top: 10%;
}

.item3 {
  border: 8px dashed #666699;
  padding-top: 10%;
}
.item4 {
  border: 8px ridge #cc9999;
  padding-top: 10%;
}

.item5 {
  border: 8px inset #2cd5ff;
  padding-top: 10%;
}
.item6 {
  border: 8px outset #ff6600;
  padding-top: 10%;
}
.item7 {
  border: 4px solid #ffff66;
  padding-top: 10%;
  -webkit-animation: twinkling 1s infinite ease-in-out; /*1秒钟的开始结束都慢的无限次动画*/
}
@-webkit-keyframes twinkling {
  /*透明度由0到1*/
  0% {
    border-color: #ffff66;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.2),
      inset 0 0 10px rgba(0, 255, 0, 0.1), 0 1px 0 #393;
  }
  100% {
    border-color: #6f6;
    box-shadow: 0 0 25px rgba(0, 255, 0, 0.6),
      inset 0 0 15px rgba(125, 231, 125, 0.4), 0 1px 0 #6f6;
  }
}
</style>
