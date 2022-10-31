<template>
  <div class="p-60">
    <goBackBtn></goBackBtn>
    <el-button round @click="clear" class="m-top-20">清空</el-button>

    <div class="m-top-20">crypto加解密</div>
    <div class="m-top-20">
      <el-button round @click="encryption">加密</el-button>
      <div>
        <span>加密内容</span>
        <span>{{ encryptionData }}</span>
      </div>
    </div>
    <div class="m-top-20">
      <el-button round @click="decryption">解密</el-button>
      <div>
        <span>解密内容</span>
        <span>{{ decryptionData }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import crypto from "@/utils/crypto";
export default {
  data() {
    return {
      encryptionData: "",
      decryptionData: ""
    };
  },
  methods: {
    clear() {
      this.encryptionData = "";
      this.decryptionData = "";
    },
    encryption() {
      let role = ["admin", "level1"];
      this.encryptionData = crypto.set(JSON.stringify(role));
    },
    decryption() {
      if (this.encryptionData) {
        this.decryptionData = crypto.get(this.encryptionData);
        console.log(bb);
        console.log(JSON.parse(bb));
      }
    }
  }
};
</script>
<style scoped>
.m-top-20 {
  margin-top: 20px;
}
.p-60 {
  padding: 60px;
}
</style>
