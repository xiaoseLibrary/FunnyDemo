<template>
  <div class="p-10">
    <goBackBtn></goBackBtn>
    <div class="imgSize">
      <div class="vessel">
        <canvas width="450" height="744" id="img"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // eslint-disable-next-line no-undef
      eva: require("@/assets/img/eva1.jpg")
    };
  },
  methods: {
    ready() {
      let canvas = document.getElementById("img");
      let cxt = canvas.getContext("2d");
      let img = new Image();
      img.src = this.eva;
      img.onload = function() {
        cxt.drawImage(img, 0, 0, 450, 744);
      };
      let isDown = false;
      canvas.onmousemove = function(e) {
        if (!isDown) return;
        let x = e.offsetX;
        let y = e.offsetY;
        cxt.beginPath();
        cxt.fillStyle = "#CCC";
        cxt.arc(x, y, 20, 0, Math.PI * 2);
        cxt.fill();
        cxt.globalCompositeOperation = "destination-out";
      };
      canvas.onmousedown = function() {
        isDown = true;
      };
      canvas.onmouseup = function() {
        isDown = false;
      };
    }
  },
  mounted() {
    this.ready();
  }
};
</script>

<style scoped>
.imgSize {
  position: absolute;
  width: 300px;
  height: 300px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 10px auto;
}
.vessel {
  width: 470px;
  height: 764px;
  background: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 3px dashed #000;
  outline-offset: -5px;
}
canvas {
  border: 1px solid lightcoral;
  background: url("~@/assets/img/eva2.jpg") no-repeat;
  background-size: 450px 744px;
}
</style>
