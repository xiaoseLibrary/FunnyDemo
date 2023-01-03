<template>
  <div>
    <div
      class="vessel p-10"
      :style="{
        backgroundImage: `url(${img})`,
        width: `${w}px`,
        height: `${h}px`
      }"
    ></div>
    <video id="localVideo" autoplay playsinline muted></video>
  </div>
</template>

<script>
import { getCatPic } from "@/api/common";
export default {
  data() {
    return {
      w: "",
      h: "",
      img: ""
    };
  },
  methods: {
    getCat() {
      getCatPic().then(res => {
        console.log(res);
        this.img = res[0].url;
        this.w = res[0].width;
        this.h = res[0].height;
      });
    }
  },
  mounted() {
    this.getCat();
  }
};
</script>

<style scoped lang="scss">
.vessel {
  // width: 100%;
  // height: 100%;
  // background-image: url(~@/assets/img/dota-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -120px;
  position: relative;
}
</style>
