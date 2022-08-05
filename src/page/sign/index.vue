<template>
  <div class="p-10">
    <goBackBtn></goBackBtn>
    <div class="container">
      <div ref="canvasbody" id="canvas-body" class="canvas-body">
        <canvas
          ref="sign"
          id="sign"
          style="width: 100%; height: 100%;"
        ></canvas>
      </div>
      <div class="btns">
        <button id="reset" @click="clear()">重置</button>
        <!-- <button id="showImg">生成图片</button> -->
      </div>
    </div>
    <div id="img"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    drawCanvas() {
      let canvasBody = this.$refs.canvasbody;
      let canvas = this.$refs.sign;
      canvas.width = canvasBody.clientWidth;
      canvas.height = canvasBody.clientHeight;
      let ctx = canvas.getContext("2d");
      ctx.lineWidth = 10;
      ctx.strokeStyle = "#333";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      let isDrawing = false;
      let initX;
      let initY;
      canvas.addEventListener("mousedown", e => {
        isDrawing = true;
        initX = e.offsetX;
        initY = e.offsetY;
      });
      canvas.addEventListener("mousemove", e => {
        if (!isDrawing) return;
        ctx.beginPath();
        ctx.moveTo(initX, initY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        initX = e.offsetX;
        initY = e.offsetY;
      });
      canvas.addEventListener("mouseup", () => (isDrawing = false));
      canvas.addEventListener("mouseout", () => (isDrawing = false));
    },
    clear() {
      let canvas = this.$refs.sign;
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  },
  mounted() {
    this.drawCanvas();
  }
};
</script>

<style scoped>
.container {
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  padding: 20px;
}

.canvas-body {
  width: calc(80vw);
  height: calc(80vh);
  margin: 20px auto;
}

#sign {
  background-color: #f3f5f7;
  border-radius: 4px;
  border: 1px dashed #0f6bff;
}

#img {
  margin: 20px;
  border-radius: 4px;
  background-color: #f3f5f7;
  display: none;
}

#img.show {
  display: inline-block;
}

.btns {
  width: calc(80vw - 40px);
  text-align: right;
  margin: 0 auto;
}
</style>
