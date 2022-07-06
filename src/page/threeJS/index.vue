<template>
  <div class="p-10">
    <goBackBtn></goBackBtn>
    <div>
      <canvas ref="three" class="threeBox"></canvas>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import * as three from "three";
export default {
  data() {
    return {};
  },
  methods: {
    draw() {
      const scene = new three.Scene();
      const camera = new three.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const canvas = this.$refs.three;
      const renderer = new three.WebGLRenderer({ canvas, antialias: true });
      var geometry = new three.BoxGeometry(1, 5, 1);
      var material = new three.MeshBasicMaterial({ color: 0x00ff00 });
      var cube = new three.Mesh(geometry, material);
      scene.add(cube);
      camera.position.z = 5;
      var render = function() {
        requestAnimationFrame(render);
        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;
        renderer.render(scene, camera);
      };
      render();
      //   scene.background = new three.Color("#eee");
    }
  },
  mounted() {
    this.draw();
  }
};
</script>

<style lang="scss" scoped>
.threeBox {
  width: 100%;
  height: 90%;
  position: fixed;
  left: 0;
  top: 50px;
}
</style>
