<template>
  <div class="p-10">
    <goBackBtn></goBackBtn>
    <section class="g-img1">IMG1</section>
    <section class="g-img2">IMG2</section>
    <section class="g-img3">IMG3</section>
    <div class="container">
      <div class="wave">
        <span class="text">快乐在城市上空飘扬</span>
      </div>
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

<style lang="scss" scoped>
.container {
  margin-top: 300px;
}
.wave {
  position: relative;
  width: 200px;
  height: 200px;
  color: red;
  background-color: rgba(118, 218, 255, 1);
  border-radius: 50%;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    top: 0;
    left: 50%;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 45%;
    transform: translate(-50%, -70%) rotate(0);
    animation: rotate 6s linear infinite;
    z-index: 10;
  }
  &::after {
    border-radius: 47%;
    background-color: rgba(255, 255, 255, 0.9);
    transform: translate(-50%, -70%) rotate(0);
    animation: rotate 10s linear infinite;
    z-index: 20;
  }
  .text {
    position: absolute;
    z-index: 21;
    color: lightpink;
    top: 50%;
    font-size: 12px;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}
@keyframes rotate {
  50% {
    transform: translate(-50%, -73%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -70%) rotate(360deg);
  }
}
// css新属性
section {
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  line-height: 100vh;
  text-align: center;
  font-size: 20vh;
}

.g-img1 {
  background-image: url("http://pic7.photophoto.cn/20080407/0034034859692813_b.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}

.g-img2 {
  background-image: url("http://up.enterdesk.com/edpic_source/21/00/00/210000f8e772d7fc0758e67ae4b48807.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}

.g-img3 {
  background-image: url("https://images.unsplash.com/photo-1440688807730-73e4e2169fb8?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=");
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}
</style>
