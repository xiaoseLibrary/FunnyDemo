<template>
  <div class="p-10">
    <goBackBtn></goBackBtn>
    <div class="showBox">
      <div class="hover-1">Css动画</div>
      <div class="hover-2">Css动画</div>
      <div class="hover-3">Css动画</div>
      <div class="hover-4">Css动画</div>
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
</style>
