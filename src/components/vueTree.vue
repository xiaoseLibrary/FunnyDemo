<template>
  <div>
    <goBackBtn></goBackBtn>
    <!-- <TreeChart :json="treeData" @click-node="getNode" class="rootNode" /> -->
    <vueTree :json="treeData" @click-node="getNode" v-if="treeShow"></vueTree>
    <span>
      上级：
      {{ fatherNodeName }}
    </span>
  </div>
</template>

<script>
import vueTree from "@/components/vueTree/index.vue";
import goBackBtn from "@/components/common/gobackBtn.vue";
// import TreeChart from "vue-tree-chart";
export default {
  data() {
    return {
      fatherNodeName: "",
      treeShow: true,
      treeData: {
        name: "root",
        // eslint-disable-next-line no-undef
        image_url: require("@/assets/img/eva1.jpg"),
        class: ["rootNode", "diyNode"],
        parentId: 0,
        id: 1,
        children: [
          {
            parentId: 1,
            id: 2,
            name: "children1",
            // eslint-disable-next-line no-undef
            image_url: require("@/assets/img/eva1.jpg")
          },
          {
            parentId: 1,
            id: 3,
            name: "children2",
            // eslint-disable-next-line no-undef
            image_url: require("@/assets/img/eva1.jpg"),
            // mate: [
            //   {
            //     name: "mate",
            //     image_url: "https://static.refined-x.com/avat2.jpg"
            //   }
            // ],
            children: [
              {
                id: 4,
                parentId: 3,
                name: "grandchild",
                // eslint-disable-next-line no-undef
                image_url: require("@/assets/img/eva1.jpg")
              },
              {
                id: 5,
                name: "grandchild2",
                parentId: 3,
                // eslint-disable-next-line no-undef
                image_url: require("@/assets/img/eva1.jpg"),
                children: [
                  {
                    id: 6,
                    parentId: 5,
                    // eslint-disable-next-line no-undef
                    image_url: require("@/assets/img/eva1.jpg"),
                    name: "test1"
                  },
                  {
                    id: 7,
                    parentId: 5,
                    // eslint-disable-next-line no-undef
                    image_url: require("@/assets/img/eva1.jpg"),
                    name: "test2"
                  }
                ]
              },
              {
                id: 8,
                parentId: 3,
                // eslint-disable-next-line no-undef
                image_url: require("@/assets/img/eva1.jpg"),
                name: "grandchild3"
              }
            ]
          },
          {
            id: 9,
            parentId: 1,
            // eslint-disable-next-line no-undef
            image_url: require("@/assets/img/eva1.jpg"),
            name: "children3"
          }
        ]
      }
    };
  },
  components: {
    // TreeChart,
    vueTree,
    goBackBtn
  },
  methods: {
    getNode($event) {
      console.log("$event: ", $event);
      this.fatherNodeName = $event.parent_name ? $event.parent_name : "无上级";
      // this.addEvent($event);
    },
    //添加节点
    addEvent($event) {
      this.treeShow = false;
      // eslint-disable-next-line no-prototype-builtins
      if ($event.hasOwnProperty("children")) {
        $event.children.push({ name: "test100" });
      } else {
        $event.children = [];
        this.$set($event.children, 0, { name: "test99", extend: true });
      }
      this.$nextTick(() => {
        this.treeShow = true;
      });
      console.log($event);
    }
  }
};
</script>

<style scoped>
.rootNode {
  background-color: blue;
}
</style>
