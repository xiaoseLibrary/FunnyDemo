<template>
  <div class="p-10">
    <goBackBtn></goBackBtn>
    <div id="music"></div>
  </div>
</template>

<!-- https://aplayer.js.org/#/zh-Hans/ -->
<!-- Aplayer - 文档 -->
<script>
import APlayer from "APlayer";
import "APlayer/dist/APlayer.min.css";
export default {
  data() {
    return {
      audio: [
        {
          name: "demo",
          artist: "test",
          url: "",
          // "https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3",
          cover: "",
          // "https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg",
          lrc: "",
          theme: "rgb(127,218,180)"
        }
      ],
      info: {
        fixed: false,
        listFolded: true,
        autoplay: true,
        preload: "auto",
        loop: "all",
        order: "list"
      }
    };
  },
  methods: {
    initAudio() {
      const ap = new APlayer({
        container: document.getElementById("music"),
        audio: this.audio,
        ...this.info
      });
    }
  },
  mounted() {
    this.initAudio();
  }
};
</script>

<style scoped>
#music {
  width: 480px;
}
</style>
