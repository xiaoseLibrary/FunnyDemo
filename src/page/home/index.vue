<template>
  <div class="vessel p-10">
    <div @click="jiemi">jie</div>
  </div>
</template>

<script>
import crypto from "../../utils/crypto";
export default {
  data() {
    return {};
  },
  methods: {
    getData() {
      // let json = [
      //   {
      //     wmmppdxhwqv: "8ZC2OcBrEFj",
      //     lcayly: ["uQC6cRCng2Q_", "k3PAhm"],
      //     zqjxwievemwm: ["fodOoCJKgEG8AnvhsuWp", 1351567531.5333614]
      //   }
      // ];
      // let obj = {
      //   code: 0,
      //   data: {
      //     count: 36,
      //     message: "success",
      //     results: [
      //       {
      //         id: "465d3783-1272-47e1-bd6d-a8559b7f856a",
      //         created_at: "2022-08-30T12:53:44.817403+08:00"
      //       }
      //     ]
      //   }
      // };
      let role = ["admin", "level1"];
      // this.Encrypt("helloworld");
      // this.Encrypt(JSON.stringify(json));
      // this.Encrypt(JSON.stringify(obj));
      this.Encrypt(JSON.stringify(role));
    },
    jiemi() {
      // let str =
      //   "Eg+0CDwaT+0H9VB9dBuGQzQen4iOkBrfXVQ0r9HzQo5Pa2b0Jr5Dz3nu9MQhxiRFAaS6tBXHCNztdfXeum5NRfboeIdoa7kjUsIzkRlOh382+QNj9EmOhy/59Fs3ugyh+c3rhWBWL7pGZ4sIEjbhp2MrZl67f8qegC7LNAaxfe0=";
      // let str =
      //   "6f2R2aF9aerpzJoV8ocRNmFpnriE26S430KqIHJLCzkurpgbl/jHMHLELkOqnkk9LOQ9FyhURZChHLf8IrSDnV9UB33szzTP9RMbwzvJNqqbod4hGM8FqLomV4yebSjVO8MHGVLShazo4InkAnMnbMvwtC6QxpoCLF8x1bFAr0PwBBz38QelVqaP/s4DP0MaZEFo2lI9xlJaHdn7YHYI0w==";
      let str = "yTW8Dpscx3M+D6FpYN5q4JQ1V/fHSYeI4lkSrKmpXT8=";
      // let str = "tyqrGdEbfn70SjTxre7bKQ==";
      var bb = crypto.get(str);
      // console.log(JSON.parse(bb));
      console.log(bb);
      console.log(JSON.parse(bb));
    },
    Encrypt(json) {
      var aa = crypto.set(json);
      console.log(aa);
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style scoped lang="scss">
.vessel {
  width: 100%;
  height: 100%;
  // background-image: url(~@/assets/img/dota-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -120px;
  position: relative;
}
</style>
