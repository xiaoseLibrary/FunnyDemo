<template>
  <div class="p-10">
    <goBackBtn></goBackBtn>
    <div class="infoBox">
      <el-input
        placeholder="请输入学员姓名"
        v-model="form.name"
        maxlength="3"
        show-word-limit
        class="m-b-16"
      >
      </el-input>
      <el-input
        placeholder="请输入老师姓名"
        v-model="form.teacher"
        maxlength="4"
        show-word-limit
        class="m-b-16"
      >
      </el-input>
      <el-date-picker
        v-model="form.date"
        type="date"
        placeholder="选择日期"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
        class="m-b-16"
      >
      </el-date-picker>
      <el-upload
        :multiple="false"
        accept=".png"
        :on-change="toJson"
        action="..."
        :auto-upload="false"
        :show-file-list="false"
        class="m-b-16"
      >
        <el-button type="primary" size="default" slot="trigger">
          上传模板
        </el-button>
      </el-upload>
      <el-button type="primary" size="default" @click="downLoad" class="m-b-16">
        下载
      </el-button>
      <div style="margin-left:100px;">
        <div
          :style="
            `background-image: url(${imageSrc}); background-size:
        cover; background-repeat: no-repeat;`
          "
          v-if="imageSrc"
          class="img"
        >
          <span>{{ form.name }}</span>
          <span>{{ form.teacher }}</span>
          <span>{{ form.teacher }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- <template>
  <div class="p-10">
    <goBackBtn></goBackBtn>
    <div class="infoBox">
      <el-input
        placeholder="请输入学员姓名"
        v-model="form.name"
        maxlength="3"
        show-word-limit
        class="m-b-16"
      >
      </el-input>
      <el-input
        placeholder="请输入老师姓名"
        v-model="form.teacher"
        maxlength="4"
        show-word-limit
        class="m-b-16"
      >
      </el-input>
      <el-date-picker
        v-model="form.date"
        type="date"
        placeholder="选择日期"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
      >
      </el-date-picker>
      <el-button type="primary" size="default" @click="confirm" class="m-b-16">
        确认
      </el-button>
      <el-upload
        :multiple="false"
        accept=".png"
        :on-change="toJson"
        action="..."
        :auto-upload="false"
        :show-file-list="false"
        class="m-b-16"
      >
        <el-button type="primary" size="default" slot="trigger">
          上传模板
        </el-button>
      </el-upload>
      <el-button type="primary" size="default" @click="downLoad" class="m-b-16">
        下载
      </el-button>
      <div style="margin-left:100px;">
        <canvas ref="canvas" width="2700" height="1526"></canvas>
      </div>
    </div>
  </div>
</template> -->

<script>
export default {
  components: {},
  data() {
    return {
      form: {
        name: "",
        teacher: "",
        date: ""
      },
      file: null,
      imageSrc: "",
      canvas: null
    };
  },
  mounted() {},
  methods: {
    toJson(file) {
      this.file = file.raw;
      const reader = new FileReader();
      reader.onload = e => {
        this.imageSrc = e.target.result;
        console.log(this.imageSrc);
      };
      reader.readAsDataURL(this.file);
    },
    downLoad() {
      // const link = document.createElement("a");
      // link.download = "image.png";
      // link.href = this.canvas.toDataURL();
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
    }
  }
};
</script>
<!-- <script>
export default {
  components: {},
  data() {
    return {
      form: {
        name: "",
        teacher: "",
        date: ""
      },
      file: null,
      imageSrc: "",
      canvas: null
    };
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext("2d");
  },
  methods: {
    confirm() {
      console.log(this.form);
      if (this.imageSrc) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawImage();
      }
    },
    toJson(file) {
      this.file = file.raw;
      const reader = new FileReader();
      reader.onload = e => {
        this.imageSrc = e.target.result;
        console.log(this.imageSrc);
        this.drawImage();
      };
      reader.readAsDataURL(this.file);
    },
    drawImage() {
      const img = new Image();
      img.onload = () => {
        this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
        if (this.form.name) {
          this.refreshData();
        }
      };
      img.src = this.imageSrc;
    },
    refreshData() {
      if (this.imageSrc) {
        this.$nextTick(() => {
          this.ctx.fillStyle = "black";
          this.ctx.font = "65px sans-serif";
          this.ctx.fillText(this.form.name, 320, 469);
          this.ctx.fillText(this.form.teacher, 2235, 900);
          this.ctx.fillText(this.form.date, 2000, 1000);
        });
      }
    },
    downLoad() {
      const link = document.createElement("a");
      link.download = "image.png";
      link.href = this.canvas.toDataURL();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
</script> -->

<style scoped>
.infoBox {
  width: 300px;
  margin-top: 16px;
}
.m-b-16 {
  margin-bottom: 16px;
}
.img {
  position: relative;
  width: 2700px;
  height: 1526px;
  display: inline-block;
}
</style>
