<template>
  <div class="box p-10">
    <goBackBtn></goBackBtn>
    <div class="vessel">
      <img :src="newUrl('img/dog', 'png')" v-magnify />
      <img :src="newUrl('img/dog2', 'jpg')" v-magnify />
      <img :src="newUrl('img/dog2', 'jpg')" v-magnify />
      <img :src="newUrl('img/dog2', 'jpg')" v-magnify />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    newUrl(fileName, rule) {
      // eslint-disable-next-line no-undef
      return require(`@/assets/${fileName}.${rule}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.vessel {
  width: 500px;
  margin: 200px auto 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  img {
    width: 150px;
    height: 150px;
  }
}
</style>
