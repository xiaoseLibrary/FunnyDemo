<template>
  <div>
    <goBackBtn></goBackBtn>
    <div class="textVessel">
      <div v-for="(item, index) in list" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import goBackBtn from "@/components/common/modules/gobackBtn";
export default {
  data() {
    return {
      list: [
        "该页面主要解决代码管理平台冲突问题",
        "当前环境为GitLab&GitHub冲突，以GitLab为主",
        "GitLab 生成.ssh 密匙：",
        "ssh-keygen -t rsa -C 'gitLab的邮箱'",
        "GitHub 生成.ssh 密匙：",
        "ssh-keygen -t rsa -C 'github的邮箱'",
        "到Enter file in which to save the key 时",
        "需要给文件的id_rsa 替换为自己明白的配置例如 id_rsa_github",
        "文件夹中会生成四个文件，位于c盘用户下的.ssh文件夹中",
        "接下来则需要或许对应pub后缀中的key绑定到对应git平台上",
        "在当前文件夹中生成config文件（无文件后缀）",
        "Host 例:github.com",
        "Host可以看作是一个你要识别的模式，对识别的模式，配置对应的主机名和ssh文件",
        "Port 例:22",
        "自定义的端口。默认为22，可不配置",
        "User 例:Yue",
        "自定义的用户名，默认为git，可不配置",
        "HostName 例:github.com",
        "真正连接的服务器地址",
        "PreferredAuthentications 例:publickey",
        "指定优先使用哪种方式验证，支持密码和秘钥验证方式",
        // eslint-disable-next-line no-useless-escape
        "IdentityFile 例:C:\Users\Yue\.ssh\id_rsa_github",
        "指定本次连接使用的密钥文件",
        "接下来可以测试下",
        "# 测试github",
        "ssh -T git@github.com",
        "# 测试gitlab(@符后面的为公司gitlab地址)",
        "ssh -T git@gitlab.xxx.com",
        "最后全局配置global账号",
        "git config --global user.name '' #公司账号名称",
        "git config --global user.email '' #公司账号邮箱",
        "进入局部",
        "git config --local user.name '' #公司账号名称",
        "git config --local user.email '' #公司账号邮箱",
        "这个时候就可以使用git指令提交对应代码到对应仓库了",
        "期间会遇到error 10054的问题",
        "ipconfig/flushdns 更新dns缓存来解决问题"
      ]
    };
  },
  components: {
    goBackBtn
  }
};
</script>

<style lang="scss" scoped>
.textVessel {
  width: 500px;
  margin: 0 auto;
}
</style>
