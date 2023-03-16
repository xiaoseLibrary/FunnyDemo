<template>
  <div></div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      document.body.addEventListener(
        "click",
        () => {
          Promise.resolve().then(() => console.log(1));
          console.log(2);
        },
        false
      );
      document.body.addEventListener(
        "click",
        () => {
          Promise.resolve().then(() => console.log(3));
          console.log(4);
        },
        false
      );
    }
  }
};
</script>
<style scoped></style>
