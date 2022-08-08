<template>
  <div class="p-10">
    <goBackBtn></goBackBtn>
    <div class="showBox">
      <div class="hover-1">Css动画</div>
      <div class="hover-2">Css动画</div>
      <div class="hover-3">Css动画</div>
      <div class="hover-4">Css动画</div>
      <div class="colorBtn">趁时间没发觉，让我带着你离开</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.showBox {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  div {
    margin: 10px 0;
  }
  .hover-1 {
    background: linear-gradient(#1095c1 0 0) var(--p, 0) / var(--p, 0) no-repeat;
    transition: 0.4s, background-position 0s;
  }
  .hover-1:hover {
    --p: 100%;
    color: #fff;
  }
  .hover-2 {
    background: linear-gradient(#1095c1 0 0) no-repeat
      calc(200% - var(--i, 0) * 100%) 100% / 200%
      calc(100% * var(--i, 0) + 0.08em);
    transition: 0.3s calc(var(--i, 0) * 0.3s),
      background-position 0.3s calc(0.3s - calc(var(--i, 0) * 0.3s));
  }
  .hover-2:hover {
    --i: 1;
  }
  .hover-3 {
    --c: no-repeat linear-gradient(#1095c1 0 0);
    background: var(--c) calc(-100% + var(--i, 0) * 100%) 100% / 50%
        calc(100% * var(--i, 0) + 0.08em),
      var(--c) calc(200% - var(--i, 0) * 100%) 0 / 50%
        calc(100% * var(--i, 0) + 0.08em);
    transition: 0.3s calc(var(--i, 0) * 0.3s),
      background-position 0.3s calc(0.3s - var(--i, 0) * 0.3s);
  }
  .hover-3:hover {
    --i: 1;
  }
  .hover-4 {
    --c: #1095c1;
    line-height: 1.2em;
    background: conic-gradient(
          from -135deg at 100% 50%,
          var(--c) 90deg,
          #0000 0
        )
        0 var(--p, 0%) / var(--s, 0%) 200% no-repeat,
      conic-gradient(from -135deg at 1.2em 50%, #0000 90deg, var(--c) 0) 100%
        var(--p, 0%) / var(--s, 0%) 200% no-repeat;
    transition: 0.4s, background-position 0s;
  }
  .hover-4:hover {
    --p: 100%;
    --s: calc(50% + 0.6em);
  }
}
.colorBtn {
  position: relative;
  height: 80px;
  padding: 10px;
  display: inline-block;
  color: rgba($color: #fff, $alpha: 1);
  line-height: 80px;
  font-size: 25px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  border-radius: 30px;
  background: linear-gradient(
    90deg,
    rgb(39, 122, 218),
    rgb(74, 230, 121),
    rgb(201, 214, 13),
    rgb(226, 20, 233),
    rgb(16, 172, 219)
  );
  background-size: 400%;
  text-shadow: 0 0 5px white, 0 0 5px white;
}
.colorBtn:hover {
  animation: move 5s linear alternate infinite;
}
.colorBtn:hover::before {
  filter: blur(15px);
  opacity: 1;
  animation: move 8s linear alternate infinite;
}
.colorBtn::before {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  width: 240px;
  height: 100px;
  background: linear-gradient(
    90deg,
    rgb(39, 122, 218),
    rgb(74, 230, 121),
    rgb(243, 169, 10),
    rgb(226, 20, 233),
    rgb(16, 172, 219)
  );
  background-size: 400%;
  opacity: 0;
  z-index: -1;
  border-radius: 45px;
  transition: 0.6s;
}
@keyframes move {
  0% {
    background-position: 0%;
  }
  100% {
    backgroound-position: 100%;
  }
}
</style>
