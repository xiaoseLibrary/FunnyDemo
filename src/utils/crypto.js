import CryptoJS from "crypto-js";
export default {
  set(str) {
    let key = CryptoJS.enc.Utf8.parse("1234567890ABCDEF1234567890ABCDEF"); // 密钥：一个常量，前后端协定后一个字符串即可
    let iv = CryptoJS.enc.Utf8.parse("0123456789ABCDEF"); // 偏移量：一个常量，前后端协定后一个字符串，前后端一致即可
    let srcs = CryptoJS.enc.Utf8.parse(str);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC, // mode 与后台一致。有多个模式可选
      padding: CryptoJS.pad.Pkcs7 //
    });
    // 需要返回base64格式的加密结果，使用此句
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
  },
  get(str) {
    let key = CryptoJS.enc.Utf8.parse("1234567890ABCDEF1234567890ABCDEF"); // 密钥：一个常量，前后端协定后一个字符串即可
    let iv = CryptoJS.enc.Utf8.parse("0123456789ABCDEF"); // 偏移量：一个常量，前后端协定后一个字符串，前后端一致即可
    let base64 = CryptoJS.enc.Base64.parse(str);
    let src = CryptoJS.enc.Base64.stringify(base64);
    var decrypt = CryptoJS.AES.decrypt(src, key, {
      iv: iv,
      // mode: CryptoJS.mode.ECB,
      mode: CryptoJS.mode.CBC, // mode 与后台一致。有多个模式可选
      padding: CryptoJS.pad.Pkcs7
    });
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
  }
};
