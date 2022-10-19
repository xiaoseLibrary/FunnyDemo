<template>


</template>

<script>
export default {
    data(){
        return{
            text: ""
        }
    }
}
</script>

<style>

</style>
<!-- webpack配置：
entry 入口
接受的值的类型为 string,array,object
string 单页面单入口文件打包，会构建一个模块依赖图，入口只有一个。
string[] 单页面多入口文件打包，会构建一个模块依赖图，入口只有一个。
object 多页面（多入口/单入口文件）打包，会构建多个（或者1个）模块依赖图，入口有多个。

resolve 解析
配置源文件，第三方依赖包如何被解析，得到文件的绝对路径
日常开发中常用的配置项，resolve.alias 别名配置和 resolve.extensions扩展配置。
* 如果项目中的第三方依赖路径使用了别名，就需要借助resolve。alias配置项解析路径。
* 默认会识别后缀为.wasm、.mjs、.js、.json 如果后缀都不匹配，如.tsx 这个时候我们要在resolve.extensions 添加后缀项。
module 配置对应loader -->
