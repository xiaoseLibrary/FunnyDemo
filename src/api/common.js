// import request from "../utils/request";
import request from "@/utils/request";

//获取猫猫图片
export function getCatPic(params) {
  return request({
    url: "https://api.thecatapi.com/v1/images/search?size=full",
    method: "get",
    params
  });
}
