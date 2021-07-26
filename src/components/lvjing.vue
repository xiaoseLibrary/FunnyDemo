<template>
  <div>
    <el-button
      type="primary"
      icon="el-icon-arrow-left"
      circle
      @click="openView('/')"
    ></el-button>
    <div style="margin:20px 0 50px 20px">
      <span
        v-for="item in imgList"
        :key="item.name"
        class="smallBox"
        @click="confirmImg(item.src)"
        >{{ item.name }}</span
      >
      <span
        v-for="item in list"
        :key="item.value"
        class="smallBox"
        @click="change(item.value)"
        >{{ item.label }}</span
      >
    </div>
    <div style="width:1000px;margin:0 auto;">
      <canvas width="450" height="744" id="origin"></canvas>
      <canvas width="450" height="744" id="new"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          name: "EVA",
          src: require("@/assets/img/eva1.jpg")
        },
        {
          name: "EVA2",
          src: require("@/assets/img/eva2.jpg")
        },
        {
          name: "DYZ",
          src: require("@/assets/img/dyz.jpg")
        }
      ],
      list: [
        {
          label: "灰度滤镜",
          value: "0"
        },
        {
          label: "黑白滤镜",
          value: "1"
        },
        {
          label: "反向滤镜",
          value: "2"
        },
        {
          label: "去色滤镜",
          value: "3"
        },
        {
          label: "单色滤镜",
          value: "4"
        },
        {
          label: "高斯模糊滤镜",
          value: "5"
        },
        {
          label: "怀旧滤镜",
          value: "6"
        },
        {
          label: "熔铸滤镜",
          value: "7"
        },
        {
          label: "冰冻滤镜",
          value: "8"
        },
        {
          label: "连环画滤镜",
          value: "9"
        },
        {
          label: "褐色滤镜",
          value: "10"
        }
      ]
    };
  },
  methods: {
    confirmImg(src) {
      console.log(src);
      this.drawOrigin(src);
      this.drawNew(src);
    },
    drawOrigin(src) {
      let cs = document.getElementById("origin");
      let ctx = cs.getContext("2d");
      let img = new Image();
      img.src = src;
      img.onload = function() {
        ctx.drawImage(img, 0, 0, 450, 744);
      };
    },
    drawNew(src) {
      let cs = document.getElementById("new");
      let ctx = cs.getContext("2d");
      let img = new Image();
      img.src = src;
      img.onload = function() {
        ctx.drawImage(img, 0, 0, 450, 744);
      };
    },
    change(index) {
      console.log(index);
      var originBox = document.getElementById("origin");
      var octx = originBox.getContext("2d");
      var newBox = document.getElementById("new");
      var nctx = newBox.getContext("2d");
      var imageData = octx.getImageData(0, 0, 450, 744);
      var data = imageData.data; // 获取原始图像每一个像素
      this.chooseFilter(data, newBox, imageData, index);
      nctx.putImageData(imageData, 0, 0);
    },
    chooseFilter(data, canvas, imgData, index) {
      if (index === "0") {
        // 灰度
        for (var i = 0; i < data.length; i += 4) {
          var grey = (data[i] + data[i + 1] + data[i + 2]) / 3;
          data[i] = data[i + 1] = data[i + 2] = grey;
        }
      } else if (index === "1") {
        // 黑白滤镜
        for (var i = 0; i < data.length; i += 4) {
          var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          data[i] = data[i + 1] = data[i + 2] = avg >= 100 ? 255 : 0;
        }
      } else if (index === "2") {
        // 反向滤镜
        for (var i = 0; i < data.length; i += 4) {
          data[i] = 255 - data[i];
          data[i + 1] = 255 - data[i + 1];
          data[i + 2] = 255 - data[i + 2];
        }
      } else if (index === "3") {
        // 去色
        for (var i = 0; i < data.length; i++) {
          var avg = Math.floor(
            (Math.min(data[i], data[i + 1], data[i + 2]) +
              Math.max(data[i], data[i + 1], data[i + 2])) /
              2
          );
          data[i] = data[i + 1] = data[i + 2] = avg;
        }
      } else if (index === "4") {
        // 单色滤镜
        for (var i = 0; i < canvas.height * canvas.width; i++) {
          data[i * 4 + 2] = 0;
          data[i * 4 + 1] = 0;
        }
      } else if (index === "5") {
        // 高斯模糊
        try {
          var pixes = imgData.data,
            height = imgData.height,
            width = imgData.width,
            radius = 5,
            sigma = radius / 3;

          var gaussEdge = radius * 2 + 1;

          var gaussMatrix = [],
            gaussSum = 0,
            a = 1 / (2 * sigma * sigma * Math.PI),
            b = -a * Math.PI;

          for (var i = -radius; i <= radius; i++) {
            for (var j = -radius; j <= radius; j++) {
              var gxy = a * Math.exp((i * i + j * j) * b);
              gaussMatrix.push(gxy);
              gaussSum += gxy;
            }
          }
          var gaussNum = (radius + 1) * (radius + 1);
          for (var i = 0; i < gaussNum; i++) {
            gaussMatrix[i] /= gaussSum;
          }

          for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
              var r = (g = b = 0);
              for (var i = -radius; i <= radius; i++) {
                var m = handleEdge(i, x, width);
                for (var j = -radius; j <= radius; j++) {
                  var mm = handleEdge(j, y, height);
                  var currentPixId = (mm * width + m) * 4;
                  var jj = j + radius;
                  var ii = i + radius;
                  r += pixes[currentPixId] * gaussMatrix[jj * gaussEdge + ii];
                  g +=
                    pixes[currentPixId + 1] * gaussMatrix[jj * gaussEdge + ii];
                  b +=
                    pixes[currentPixId + 2] * gaussMatrix[jj * gaussEdge + ii];
                }
              }
              var pixId = (y * width + x) * 4;

              pixes[pixId] = ~~r;
              pixes[pixId + 1] = ~~g;
              pixes[pixId + 2] = ~~b;
            }
          }
          imgData.data = pixes;
        } catch (err) {
          console.log(err);
        }
      } else if (index === "6") {
        // 怀旧滤镜
        for (var i = 0; i < imgData.height * imgData.width; i++) {
          var r = imgData.data[i * 4],
            g = imgData.data[i * 4 + 1],
            b = imgData.data[i * 4 + 2];

          var newR = 0.393 * r + 0.769 * g + 0.189 * b;
          var newG = 0.349 * r + 0.686 * g + 0.168 * b;
          var newB = 0.272 * r + 0.534 * g + 0.131 * b;
          var rgbArr = [newR, newG, newB].map(e => {
            return e < 0 ? 0 : e > 255 ? 255 : e;
          });
          [
            imgData.data[i * 4],
            imgData.data[i * 4 + 1],
            imgData.data[i * 4 + 2]
          ] = rgbArr;
        }
      } else if (index === "7") {
        // 熔铸滤镜
        for (var i = 0; i < imgData.height * imgData.width; i++) {
          var r = imgData.data[i * 4],
            g = imgData.data[i * 4 + 1],
            b = imgData.data[i * 4 + 2];

          var newR = (r * 128) / (g + b + 1);
          var newG = (g * 128) / (r + b + 1);
          var newB = (b * 128) / (g + r + 1);
          var rgbArr = [newR, newG, newB].map(e => {
            return e < 0 ? 0 : e > 255 ? 255 : e;
          });
          [
            imgData.data[i * 4],
            imgData.data[i * 4 + 1],
            imgData.data[i * 4 + 2]
          ] = rgbArr;
        }
      } else if (index === "8") {
        // 冰冻滤镜
        for (var i = 0; i < imgData.height * imgData.width; i++) {
          var r = imgData.data[i * 4],
            g = imgData.data[i * 4 + 1],
            b = imgData.data[i * 4 + 2];

          var newR = ((r - g - b) * 3) / 2;
          var newG = ((g - r - b) * 3) / 2;
          var newB = ((b - g - r) * 3) / 2;
          var rgbArr = [newR, newG, newB].map(e => {
            return e < 0 ? 0 : e > 255 ? 255 : e;
          });
          [
            imgData.data[i * 4],
            imgData.data[i * 4 + 1],
            imgData.data[i * 4 + 2]
          ] = rgbArr;
        }
      } else if (index === "9") {
        // 连环画滤镜
        for (var i = 0; i < imgData.height * imgData.width; i++) {
          var r = imgData.data[i * 4],
            g = imgData.data[i * 4 + 1],
            b = imgData.data[i * 4 + 2];

          var newR = (Math.abs(g - b + g + r) * r) / 256;
          var newG = (Math.abs(b - g + b + r) * r) / 256;
          var newB = (Math.abs(b - g + b + r) * g) / 256;
          var rgbArr = [newR, newG, newB];
          [
            imgData.data[i * 4],
            imgData.data[i * 4 + 1],
            imgData.data[i * 4 + 2]
          ] = rgbArr;
        }
      } else if (index === "10") {
        // 褐色滤镜
        for (var i = 0; i < imgData.height * imgData.width; i++) {
          var r = imgData.data[i * 4],
            g = imgData.data[i * 4 + 1],
            b = imgData.data[i * 4 + 2];

          var newR = r * 0.393 + g * 0.769 + b * 0.189;
          var newG = r * 0.349 + g * 0.686 + b * 0.168;
          var newB = r * 0.272 + g * 0.534 + b * 0.131;
          var rgbArr = [newR, newG, newB];
          [
            imgData.data[i * 4],
            imgData.data[i * 4 + 1],
            imgData.data[i * 4 + 2]
          ] = rgbArr;
        }
      }
    },
    openView(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style scoped>
canvas {
  border: 1px solid lightgreen;
}
.smallBox {
  width: 115px;
  height: 30px;
  display: inline-block;
  line-height: 30px;
  text-align: center;
  background: lightblue;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 18px;
}
</style>
