<template>
  <div class="wave" @click="reppleClick">
    <slot></slot>
    <span
      class="__cov-ripple"
      :class="{ animate: repple_button.animate }"
    ></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repple_button: {
        animate: false,
        toggle: false
      }
    };
  },
  methods: {
    reppleClick(e) {
      this.repple_button.animate = true;
      let img = e.target;
      let ripple = document.querySelector(".__cov-ripple");
      if (ripple) {
        let d = Math.max(img.offsetHeight, img.offsetWidth);
        let x = e.layerX - ripple.offsetWidth / 2;
        let y = e.layerY - ripple.offsetHeight / 2;
        ripple.setAttribute(
          "style",
          "height: " +
            d +
            "px; width: " +
            d +
            "px; top: " +
            y +
            "px; left: " +
            x +
            "px;"
        );
      }
      this.$nextTick(() => {
        setTimeout(() => {
          this.repple_button.animate = false;
        }, 660);
      });
    }
  }
};
</script>

<style>
.wave {
  width: 400px;
  height: 400px;
  position: relative;
  overflow: hidden;
}

.__cov-ripple {
  position: absolute;
  background: hsla(0, 0, 0, 0.66);
  border-radius: 100%;
  transform: scale(0);
}
.__cov-ripple.animate {
  animation: ripple 0.7s linear;
}

@keyframes ripple {
  100% {
    opacity: 0;
    transform: scale(2.5);
  }
}
</style>
