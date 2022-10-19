<template>
  <div class="p-10">
    <goBackBtn></goBackBtn>
    <el-upload
      action=""
      :on-change="imgChange"
      accept=".png,.jpg"
      class="avatar-uploader"
    >
      <img v-if="photo" :src="photo" class="normalPhoto" />
      <i v-else class="el-icon-plus avatar-uploader-icon">加号icon</i>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photo: ""
    };
  },
  methods: {
    imgChange(file) {
      // -----获取图片的本机路径------

      let dialogImageUrl = window.URL
        ? window.URL.createObjectURL(file.raw)
        : window.webkitURL.createObjectURL(file.raw);

      //-----调用封装好的函数处理图片------
      this.shuiyin({
        url: dialogImageUrl, //这里传的file是上传的图片文件
        content: "我是水印", //水印内容
        cb: base64Url => {
          //回调函数callBack()
          //   this.base64Url = base64Url;
          //   console.log(base64Url); //转换完成的base64格式图片在这里发送请求
          this.photo = base64Url;
        }
      });
    },
    shuiyin({
      url = "",
      textAlign = "center",
      textBaseline = "middle",
      font = "38px Microsoft Yahei",
      fillStyle = "rgba(255, 255, 255, .3)",
      content = "",
      cb = null
    } = {}) {
      const img = new Image();
      img.src = url;
      img.crossOrigin = "anonymous";
      img.onload = function() {
        const canvas = document.createElement("canvas");
        let _ix = img.width;
        let _iy = img.height;
        canvas.width = _ix;
        canvas.height = _iy;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        // ctx.textAlign = textAlign;
        // ctx.textBaseline = textBaseline;
        // ctx.font = font;
        // ctx.fillStyle = fillStyle;
        // ctx.translate(-200, 100);
        // // ctx.rotate((Math.PI / 185) * -15); //旋转 //水印密度
        // ctx.rotate((Math.PI / 180) * 30);
        // for (let i = 0; i < _iy / 240; i++) {
        //   for (let j = 0; j < _ix / 50; j++) {
        //     ctx.fillText(content, i * 170, j * 100, _ix); //调节间距
        //   }
        // }
        // ctx.fillText(content, canvas.width / 2, canvas.height / 2);
        // ctx.fillText(
        //   content,
        //   parseFloat(canvas.width) / 2,
        //   parseFloat(canvas.height) / 2
        // );
        ctx.textAlign = textAlign;
        ctx.textBaseline = textBaseline;
        ctx.font = font;
        ctx.fillStyle = fillStyle;
        ctx.fillText(content, img.width - 100, img.height - 30);

        const base64Url = canvas.toDataURL();
        cb && cb(base64Url);
      };
    }
  }
};
</script>

<style scoped>
.normalPhoto {
  width: 300px;
  /* height: 200px; */
}
</style>
